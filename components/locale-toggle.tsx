"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["ru", "en"] as const;

export function LocaleToggle({ locale }: { locale: string }) {
  const pathname = usePathname();

  const switchTo = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const normalized = pathname.replace(/^\/(ru|en)(?=\/|$)/, "");
    return `/${targetLocale}${normalized || ""}`;
  };

  return (
    <div className="inline-flex items-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-1 text-xs backdrop-blur">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={switchTo(item)}
            onClick={() => {
              window.localStorage.setItem("preferred-locale", item);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              active
                ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--card-foreground)]"
            }`}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
