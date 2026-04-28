"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore, useTransition } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isClient || !resolvedTheme) {
    return (
      <div className="h-10 w-10 rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() =>
        startTransition(() => {
          setTheme(isDark ? "light" : "dark");
        })
      }
      disabled={isPending}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] text-slate-700 backdrop-blur transition hover:scale-105 hover:text-[var(--primary)] dark:text-cyan-200 dark:hover:text-cyan-100"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
