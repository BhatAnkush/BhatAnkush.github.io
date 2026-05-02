"use client";

import { useState, useRef, useEffect } from "react";
import { readStreamableValue } from "@ai-sdk/rsc";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { askGemini, type Message } from "./actions";
import { SendHorizontal } from "lucide-react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const INITIAL_MESSAGES: Message[] = [
  {
    role: "model",
    content: "Hi! I'm Ankush's AI assistant. Ask me about his cloud projects, skills, or experience.",
  },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on every new message or streaming chunk
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const handleChat = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = { role: "user", content: trimmed };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setStreamingText("");
    setLoading(true);

    try {
      // Pass conversation history (excluding the new user message for the action,
      // which accepts history separately)
      const { output } = await askGemini(trimmed, messages);
      let fullResponse = "";

      for await (const chunk of readStreamableValue(output)) {
        fullResponse += chunk;
        setStreamingText(fullResponse);  // Live typing effect
      }

      // Commit the completed message to history
      setMessages((prev) => [...prev, { role: "model", content: fullResponse }]);
      setStreamingText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);  // Always runs, even on error
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
      {/* Typing intro — only renders once, not on every keystroke */}
      <BlurFade delay={0.1} inView>
        <TypingAnimation className="text-4xl font-bold mb-10 text-blue-500">
          Ankush.portfolio
        </TypingAnimation>
      </BlurFade>

      {/* Chat window */}
      <div className="relative flex h-[550px] w-full max-w-xl flex-col rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden">

        {/* Message list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, i) => (
            // Use a stable key — not index, but index is acceptable here since
            // messages only append, never reorder
            <BlurFade key={`msg-${i}`} delay={0} inView>
              <div className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "user"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-zinc-800 text-zinc-100"
                    }`}
                >
                  {m.content}
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Streaming bubble — shows while response is coming in */}
          {streamingText && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed bg-zinc-800 text-zinc-100">
                {streamingText}
                <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-zinc-400 animate-pulse rounded-sm align-middle" />
              </div>
            </div>
          )}

          {/* Thinking indicator — only shows before first streaming chunk arrives */}
          {loading && !streamingText && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 rounded-2xl px-4 py-3">
                <span className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <p className="text-xs text-red-400 text-center">{error}</p>
          )}

          {/* Scroll anchor */}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="border-t border-white/10 p-4 flex items-center gap-2 bg-black/20 backdrop-blur-md">
          <input
            className="flex-1 bg-transparent outline-none text-sm px-2 placeholder:text-zinc-600"
            placeholder="Type a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleChat()}
            disabled={loading}
            maxLength={2000}
          />
          <button
            onClick={handleChat}
            disabled={loading || !input.trim()}
            className="px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          >
            <SendHorizontal />
          </button>
        </div>

        <BorderBeam size={300} duration={15} colorFrom="#3b82f6" colorTo="#9333ea" />
      </div>

      {/* Character count — subtle UX hint */}
      {input.length > 1800 && (
        <p className="text-xs text-zinc-600 mt-2">{2000 - input.length} characters remaining</p>
      )}
      <SmoothCursor />
    </main>
  );
}