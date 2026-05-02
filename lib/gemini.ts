"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createStreamableValue } from "@ai-sdk/rsc";
import myInfo from "@/lib/data.json";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `
You are Ankush's AI portfolio assistant. Answer only based on the context below.
Be concise, friendly, and specific. If something isn't in the context, say you don't have that info
and suggest the visitor connect on LinkedIn.

Context:
${JSON.stringify(myInfo)}
`.trim();

export type Message = {
  role: "user" | "model";
  content: string;
};

export async function askGemini(
  prompt: string,
  history: Message[] = []
) {
  // --- Input validation ---
  const trimmed = prompt.trim();
  if (!trimmed) throw new Error("Prompt cannot be empty.");
  if (trimmed.length > 2000) throw new Error("Prompt is too long. Max 2000 characters.");

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  // --- Build Gemini-compatible history ---
  // Gemini requires history to start with a 'user' turn.
  // The UI seeds an initial model greeting — strip any leading model messages.
  const rawHistory = history.map((msg) => ({
    role: msg.role,
    parts: [{ text: msg.content }],
  }));
  const firstUserIdx = rawHistory.findIndex((m) => m.role === "user");
  const geminiHistory =
    firstUserIdx === -1   // no user turns yet → empty history
      ? []
      : firstUserIdx > 0  // leading model messages → strip them
      ? rawHistory.slice(firstUserIdx)
      : rawHistory;       // already starts with user → use as-is

  const chat = model.startChat({ history: geminiHistory });

  // --- Streaming response ---
  const stream = createStreamableValue("");

  (async () => {
    try {
      const result = await chat.sendMessageStream(trimmed);
      for await (const chunk of result.stream) {
        stream.update(chunk.text());
      }
      stream.done();
    } catch (err) {
      console.error("[askGemini] Error:", err);
      stream.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  })();

  return { output: stream.value };
}