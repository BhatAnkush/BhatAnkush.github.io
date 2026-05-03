"use server";

import Groq from "groq-sdk";
import { getProfileData } from "@/lib/scraper";
import { tokenize, detokenize } from "@/lib/tokenizer";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

export type Message = {
  role: "user" | "model";
  content: string;
};

const MAX_HISTORY = 6;

export async function askGroq(
  prompt: string,
  history: Message[] = []
): Promise<ReadableStream<string>> {
  const trimmed = prompt.trim();
  if (!trimmed) throw new Error("Please type a message first.");
  if (trimmed.length > 2000) throw new Error("Message too long. Max 2000 characters.");

  // 1. Get profile data (from cache — instant)
  const myInfo = await getProfileData();

  // 2. Tokenize the context to reduce tokens + protect PII
  const contextString = typeof myInfo === "string"
    ? myInfo
    : JSON.stringify(myInfo);
  const { tokenized: tokenizedContext, map } = tokenize(contextString);

  // 3. Also tokenize the user prompt (handles names typed by visitor)
  const { tokenized: tokenizedPrompt, map: promptMap } = tokenize(trimmed);
  const fullMap = { ...map, ...promptMap }; // merge both maps for detokenization

  const SYSTEM_PROMPT = `
You are a portfolio assistant. Answer ONLY based on the context below.
Be concise and friendly (under 120 words). Use [P1] to refer to the person.
If not in context, say: "Connect with [P1] on LinkedIn: [LINKEDIN_101]"
Never answer unrelated questions.

Context: ${tokenizedContext}
`.trim();

  // 4. History: strip leading model turns, cap at MAX_HISTORY
  const firstUserIdx = history.findIndex((m) => m.role === "user");
  const safeHistory = firstUserIdx === -1 ? [] : history.slice(firstUserIdx);
  const trimmedHistory = safeHistory.slice(-MAX_HISTORY);

  const groqMessages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...trimmedHistory.map((m) => ({
      role: m.role === "model" ? ("assistant" as const) : ("user" as const),
      content: m.content,
    })),
    { role: "user", content: tokenizedPrompt },
  ];

  // 5. Stream + detokenize each chunk on the way out
  return new ReadableStream<string>({
    async start(controller) {
      try {
        const stream = await groq.chat.completions.create({
          model: "llama-3.3-70b-versatile",
          messages: groqMessages,
          stream: true,
          temperature: 0.7,
          max_tokens: 300,
        });

        let buffer = ""; // buffer incomplete tokens like "[P" before flushing

        for await (const chunk of stream) {
          const raw = chunk.choices[0]?.delta?.content ?? "";
          if (!raw) continue;

          buffer += raw;

          // Only detokenize + flush when buffer doesn't end mid-token
          if (!buffer.match(/\[[A-Z0-9_]*$/)) {
            const clean = detokenize(buffer, fullMap);
            controller.enqueue(clean);
            buffer = "";
          }
        }

        // Flush remaining buffer
        if (buffer) controller.enqueue(detokenize(buffer, fullMap));
        controller.close();
      } catch (err) {
        console.error("[askGroq] error:", err);
        controller.error(
          err instanceof Error ? err : new Error("Something went wrong.")
        );
      }
    },
  });
}