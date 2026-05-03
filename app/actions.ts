"use server";

import Groq from "groq-sdk";
import myInfo from "@/lib/data.slim.json";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

const SYSTEM_PROMPT = `
You are Ankush Ananth Bhat's AI portfolio assistant embedded on his personal portfolio website.
Answer questions from visitors — recruiters, collaborators, or curious developers — about Ankush.

Rules:
- Answer ONLY based on the context below. Never make up anything not in it.
- Be concise, friendly, and specific. Keep answers under 120 words.
- Use first person ("I", "my") when speaking as Ankush. Use third person when describing him to others.
- If something isn't in the context, say: "I don't have that detail — connect with Ankush on LinkedIn: linkedin.com/in/ankushab"
- Never answer questions unrelated to Ankush (no general coding help, news, math, etc).

Context:
${JSON.stringify(myInfo)}
`.trim();

export type Message = {
  role: "user" | "model";
  content: string;
};

const MAX_HISTORY = 6; // last 6 messages only — prevents token bloat

export async function askGroq(
  prompt: string,
  history: Message[] = []
): Promise<ReadableStream<string>> {
  // Validate input
  const trimmed = prompt.trim();
  if (!trimmed) throw new Error("Please type a message first.");
  if (trimmed.length > 2000) throw new Error("Message too long. Max 2000 characters.");

  // Strip leading model messages — Groq (like Gemini) needs history to start with user
  const firstUserIdx = history.findIndex((m) => m.role === "user");
  const safeHistory = firstUserIdx === -1 ? [] : history.slice(firstUserIdx);

  // Keep only last MAX_HISTORY messages
  const trimmedHistory = safeHistory.slice(-MAX_HISTORY);

  // Convert our Message[] → Groq's format (role: "assistant" not "model")
  const groqMessages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...trimmedHistory.map((m) => ({
      role: m.role === "model" ? ("assistant" as const) : ("user" as const),
      content: m.content,
    })),
    { role: "user", content: trimmed },
  ];

  // Return a native ReadableStream — no extra packages needed
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

        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) controller.enqueue(text);
        }

        controller.close();
      } catch (err) {
        console.error("[askGroq] error:", err);
        controller.error(
          err instanceof Error ? err : new Error("Something went wrong. Please try again.")
        );
      }
    },
  });
}