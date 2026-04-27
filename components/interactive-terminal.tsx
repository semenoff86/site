"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export function InteractiveTerminal({ locale }: { locale: "ru" | "en" }) {
  const t = useTranslations();
  const [input, setInput] = useState("");
  const [line, setLine] = useState(t("terminalInitial"));

  const commandResults: Record<string, string> = {
    help:
      locale === "ru"
        ? "команды: help | skills | contact"
        : "commands: help | skills | contact",
    skills: "Next.js, TypeScript, Python, FastAPI, OpenAI API, n8n, PostgreSQL",
    contact: "telegram: @your_handle | email: your@email.com",
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    setLine(commandResults[command] ?? `${t("terminalUnknown")}: ${command}`);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--terminal-bg)] p-4 font-mono text-sm text-[var(--card-foreground)] shadow-[var(--card-shadow)] backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <p className="mb-2 text-[var(--terminal-output)]">$ {line}</p>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span className="text-[var(--primary)]">{">"}</span>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="help"
          className="w-full bg-transparent text-[var(--terminal-input)] outline-none placeholder:text-slate-500 dark:placeholder:text-zinc-500"
        />
      </form>
    </div>
  );
}
