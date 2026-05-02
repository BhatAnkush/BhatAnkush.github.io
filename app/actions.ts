"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createStreamableValue } from "@ai-sdk/rsc";
import myInfo from "@/lib/data.json";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `
You are Ankush Ananth Bhat's AI portfolio assistant embedded on his personal portfolio website.

Your job is to answer questions from visitors — recruiters, collaborators, or curious developers — about Ankush.

Rules:
- Answer ONLY based on the context provided below. Do not make up or assume anything not in the context.
- Be concise, friendly, and specific. Avoid vague answers.
- Use first person ("I", "my") when speaking as Ankush directly. Use third person when describing him to others.
- If a question is not covered by the context, say: "I don't have that detail, but you can reach Ankush directly on LinkedIn at linkedin.com/in/ankushab — he responds to everyone!"
- Never answer questions unrelated to Ankush (e.g., general coding help, world news, math).
- Keep responses under 150 words unless the question genuinely requires more detail.

Context about Ankush:
${JSON.stringify(myInfo, null, 0)}
`.trim();

export type Message = {
  role: "user" | "model";
  content: string;
};

export async function askGemini(prompt: string, history: Message[] = []) {
  // --- Input validation ---
  const trimmed = prompt.trim();
  if (!trimmed) throw new Error("Please type a message first.");
  if (trimmed.length > 2000) throw new Error("Message too long. Please keep it under 2000 characters.");

  // --- Model setup ---
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
    generationConfig: {
      temperature: 0.7,       // Balanced: not too robotic, not too hallucination-prone
      maxOutputTokens: 512,   // Keeps answers concise for a chatbot context
      topP: 0.9,
    },
  });

  // --- Convert our Message[] to Gemini's Content[] format ---
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

  // --- Stream the response back ---
  const stream = createStreamableValue("");

  (async () => {
    try {
      const result = await chat.sendMessageStream(trimmed);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) stream.update(text);
      }

      stream.done();
    } catch (err) {
      console.error("[askGemini] Gemini API error:", err);

      const message =
        err instanceof Error && err.message.includes("API_KEY")
          ? "API key is invalid or missing. Check your .env file."
          : "Something went wrong. Please try again in a moment.";

      stream.error(new Error(message));
    }
  })();

  return { output: stream.value };
}