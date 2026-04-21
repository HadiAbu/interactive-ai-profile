import { useEffect, useRef, useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING =
  "Hi! I'm here to help you explore Hadi's engineering work. Ask me about his projects, technical decisions, or background — or pick a question below to get started.";

const SUGGESTED = [
  "What's Hadi's strongest technical area?",
  "Tell me about the Popcorn Palace project.",
  "What distributed systems experience does Hadi have?",
  "How does Hadi approach AI integration?",
];

const MAX_TURNS = 25;

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2 w-2 rounded-full bg-slate animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const turnCount = messages.filter((m) => m.role === "user").length;
  const atLimit = turnCount >= MAX_TURNS;
  const hasMessages = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    if (!text.trim() || loading || atLimit) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  }

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat about Hadi"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-panel transition hover:bg-ink/90"
      >
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.847L3 20l1.124-3.372C3.406 15.37 3 13.73 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Ask AI About Hadi
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="AI chat about Hadi"
          className="fixed bottom-20 right-6 z-50 flex w-[420px] max-w-[calc(100vw-2rem)] flex-col rounded-[28px] border border-ink/10 bg-white shadow-panel"
          style={{ height: "560px" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 rounded-t-[28px] bg-ink px-5 py-4">
            {hasMessages && (
              <button
                onClick={reset}
                aria-label="Start a new conversation"
                title="New chat"
                className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                New chat
              </button>
            )}
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Ask AI About Hadi</p>
              <p className="text-xs text-white/50">
                {MAX_TURNS - turnCount} of {MAX_TURNS} turns remaining
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex items-center gap-1 rounded-xl px-2 py-1.5 text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Close
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4">
            {/* Greeting always visible */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-sand px-4 py-3 text-sm leading-6 text-ink">
                {GREETING}
              </div>
            </div>

            {/* Suggested questions — shown only when no conversation yet */}
            {!hasMessages && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-xs text-slate">Suggested questions</p>
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full rounded-2xl border border-ink/10 px-4 py-3 text-left text-sm text-ink transition hover:border-ember/30 hover:bg-sand"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation messages */}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    m.role === "user"
                      ? "rounded-tr-sm bg-ink text-white"
                      : "rounded-tl-sm bg-sand text-ink"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm bg-sand px-4 py-3">
                  <ThinkingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-ink/10 p-4">
            {atLimit ? (
              <div className="rounded-2xl bg-sand px-4 py-3 text-center text-xs text-slate">
                Conversation limit reached (25 turns).{" "}
                <button onClick={reset} className="font-medium text-ink underline underline-offset-2">
                  Start a new chat
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  className="flex-1 rounded-2xl border border-ink/15 bg-sand px-4 py-2.5 text-sm text-ink outline-none placeholder:text-slate focus:border-ink/30"
                  placeholder="Ask about projects, skills…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="rounded-2xl bg-ember px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ember/90 disabled:opacity-40"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
