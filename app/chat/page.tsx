"use client";

import { useState, useRef, useEffect } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { askGroq, type Message } from "@/app/actions";
import { SendHorizontal, Bot, User, Sparkles } from "lucide-react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const INITIAL_MESSAGES: Message[] = [
  {
    role: "model",
    content:
      "Hey! I'm Ankush's AI portfolio assistant. Ask me anything — his skills, experience, GCP certifications, or what he's working on now! 🚀",
  },
];

const QUICK_QUESTIONS = [
  "What is Ankush's tech stack?",
  "Is he GCP certified?",
  "Tell me about his experience",
  "What projects has he worked on?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const handleChat = async (overrideInput?: string) => {
    const text = (overrideInput ?? input).trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setStreamingText("");
    setLoading(true);

    try {
      const stream = await askGroq(text, messages);
      const reader = stream.getReader();
      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullResponse += value;
        setStreamingText(fullResponse);
      }

      setMessages((prev) => [...prev, { role: "model", content: fullResponse }]);
      setStreamingText("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col h-full">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-4 tracking-wide uppercase">
              <Sparkles size={12} />
              Powered by LLaMA 3.3 70B via Groq
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Ask Ankush&apos;s AI
            </h1>
            <p className="text-muted-foreground text-sm">
              Your personal guide to Ankush&apos;s portfolio — ask about skills, experience, certifications, and more.
            </p>
          </div>
        </BlurFade>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleChat(q)}
                  disabled={loading}
                  className="rounded-xl border border-border bg-card/60 hover:bg-accent hover:border-blue-500/40 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-all disabled:opacity-40"
                >
                  {q}
                </button>
              ))}
            </div>
          </BlurFade>
        )}

        {/* Chat Window */}
        <BlurFade delay={0.3} inView>
          <div className="relative flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-2xl overflow-hidden flex-1">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 min-h-[480px] max-h-[520px]">
              {messages.map((m, i) => (
                <BlurFade key={`msg-${i}`} delay={0} inView>
                  <div
                    className={`flex gap-3 ${
                      m.role === "user" ? "flex-row-reverse" : "flex-row"
                    } items-end`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                        m.role === "user"
                          ? "bg-blue-600"
                          : "bg-gradient-to-br from-violet-500 to-purple-600"
                      }`}
                    >
                      {m.role === "user" ? (
                        <User size={14} className="text-white" />
                      ) : (
                        <Bot size={14} className="text-white" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        m.role === "user"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-accent text-foreground rounded-bl-sm border border-border"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                </BlurFade>
              ))}

              {/* Streaming message */}
              {streamingText && (
                <div className="flex gap-3 items-end">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-violet-500 to-purple-600">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="max-w-[78%] rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed bg-accent text-foreground border border-border shadow-sm">
                    {streamingText}
                    <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-muted-foreground/60 animate-pulse rounded-sm align-middle" />
                  </div>
                </div>
              )}

              {/* Thinking dots */}
              {loading && !streamingText && (
                <div className="flex gap-3 items-end">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-violet-500 to-purple-600">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-accent border border-border shadow-sm">
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <p className="text-xs text-red-400 text-center py-2">{error}</p>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="border-t border-border p-4 flex items-center gap-3 bg-background/40 backdrop-blur-md">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  className="w-full bg-card/60 border border-border rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-blue-500/50 transition-colors"
                  placeholder="Ask about skills, experience, projects…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleChat()}
                  disabled={loading}
                  maxLength={2000}
                  autoFocus
                />
              </div>
              <button
                onClick={() => handleChat()}
                disabled={loading || !input.trim()}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 flex-shrink-0"
                aria-label="Send message"
              >
                <SendHorizontal size={16} />
              </button>
            </div>

            {input.length > 1800 && (
              <p className="text-xs text-muted-foreground/60 text-right px-4 pb-2">
                {2000 - input.length} characters remaining
              </p>
            )}

            <BorderBeam size={350} duration={15} colorFrom="#3b82f6" colorTo="#9333ea" />
          </div>
        </BlurFade>

        {/* Footer note */}
        <BlurFade delay={0.4} inView>
          <p className="text-center text-xs text-muted-foreground mt-6">
            AI answers are based on Ankush&apos;s portfolio data only. For direct contact:{" "}
            <a
              href="https://www.linkedin.com/in/ankushab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/ankushab
            </a>
          </p>
        </BlurFade>
      </div>
      <SmoothCursor/>
    </div>
  );
}
