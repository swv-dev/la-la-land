"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  approved: boolean;
}

export default function GuestbookPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lalaland-guestbook");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      // Seed with some initial messages from residents
      const seed: Message[] = [
        {
          id: "1",
          name: "Sasha",
          message: "If you're reading this, you better be acting right.",
          timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
          approved: true,
        },
        {
          id: "2",
          name: "Robin",
          message: "Welcome to La La Land. We hope you enjoy your visit and respect the island's beauty.",
          timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
          approved: true,
        },
        {
          id: "3",
          name: "Envy",
          message: "Whatever. Cool island I guess.",
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          approved: true,
        },
        {
          id: "4",
          name: "James",
          message: "I drove Valencia around the whole island today. Stay out the way.",
          timestamp: new Date(Date.now() - 43200000).toISOString(),
          approved: true,
        },
        {
          id: "5",
          name: "YAS",
          message: "DON'T TOUCH MY STUFF.",
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          approved: true,
        },
      ];
      setMessages(seed);
      localStorage.setItem("lalaland-guestbook", JSON.stringify(seed));
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      message,
      timestamp: new Date().toISOString(),
      approved: true,
    };
    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem("lalaland-guestbook", JSON.stringify(updated));
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function deleteMessage(id: string) {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("lalaland-guestbook", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            Guestbook
          </h1>
          <p className="text-lg text-foreground/60">
            Leave a message. Keep it respectful. Valencia is watching.
          </p>
        </div>

        {/* Message form */}
        <form onSubmit={handleSubmit} className="mb-12 bg-card rounded-2xl p-6">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Who are you?"
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Your Message
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say something nice. Or at least say something not disrespectful."
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-purple-glow px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-glow/80"
          >
            Leave Message
          </button>
          {submitted && (
            <span className="ml-4 text-sm text-green-400">
              Message posted. Valencia has been notified.
            </span>
          )}
        </form>

        {/* Messages */}
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className="group relative bg-card rounded-xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-sunset-pink">
                    {msg.name}
                  </span>
                  <span className="ml-3 text-xs text-foreground/30">
                    {new Date(msg.timestamp).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="text-xs text-foreground/20 opacity-0 transition-opacity hover:text-volcano-red group-hover:opacity-100"
                  title="Valencia can delete any message she wants"
                >
                  remove
                </button>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{msg.message}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-foreground/25">
          All messages are subject to review and removal by Valencia at any time for any reason.
        </div>
      </div>
    </div>
  );
}
