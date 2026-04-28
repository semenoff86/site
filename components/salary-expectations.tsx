"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Clock3,
  Globe2,
  Handshake,
  Rocket,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type { ComponentType } from "react";

type SalaryModelId = "fullTime" | "freelance" | "projectBased" | "partTime";

export function SalaryExpectations() {
  const t = useTranslations("Salary");
  const locale = useLocale() as "ru" | "en";
  const isRu = locale === "ru";

  const models: Array<{
    id: SalaryModelId;
    icon: ComponentType<{ size?: number; className?: string }>;
    rateLabel?: string;
    rate: string;
    currency: string;
    periodKey: "perMonth" | "perHour" | "fromProject";
    periodAmount?: string;
    details: Array<"desc" | "benefits" | "hours" | "ideal" | "turnaround" | "examples" | "support" | "bestFor">;
  }> = [
    {
      id: "fullTime",
      icon: Briefcase,
      rateLabel: isRu ? "от 250 000 ₽/мес" : undefined,
      rate: isRu ? "303 000 — 416 000" : "4,000 — 5,500",
      currency: isRu ? "₽" : "USD",
      periodKey: "perMonth",
      details: ["desc", "benefits", "hours"],
    },
    {
      id: "freelance",
      icon: Clock3,
      rateLabel: isRu ? "от 2 000 ₽/час" : undefined,
      rate: isRu ? "2 000 — 3 000" : "25 — 35",
      currency: isRu ? "₽" : "USD",
      periodKey: "perHour",
      details: ["desc", "ideal", "turnaround"],
    },
    {
      id: "projectBased",
      icon: Rocket,
      rateLabel: isRu ? "от 150 000 ₽/проект" : undefined,
      rate: isRu ? "152 000" : "2,000",
      currency: isRu ? "₽" : "USD",
      periodKey: "fromProject",
      periodAmount: isRu ? "150 000 ₽" : "2,000 USD",
      details: ["desc", "examples", "support"],
    },
    {
      id: "partTime",
      icon: Handshake,
      rateLabel: isRu ? "от 100 000 ₽/мес" : undefined,
      rate: isRu ? "114 000 — 189 000" : "1,500 — 2,500",
      currency: isRu ? "₽" : "USD",
      periodKey: "perMonth",
      details: ["desc", "hours", "bestFor"],
    },
  ];

  const formatPeriod = (periodKey: "perMonth" | "perHour" | "fromProject", amount?: string) => {
    if (periodKey === "fromProject") {
      return t("fromProject", { amount: amount ?? "2,000 USD" });
    }
    return t(periodKey);
  };

  return (
    <section className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] backdrop-blur-xl sm:p-7">
      <div className="text-center">
        <h2 className="section-title font-semibold">{t("title")}</h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)] sm:text-base">{t("subtitle")}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {models.map((model, idx) => {
          const Icon = model.icon;
          return (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.08 }}
              className="gradient-border rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-[var(--card-foreground)] sm:text-lg">{t(model.id)}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {model.rateLabel
                      ? model.rateLabel
                      : model.periodKey === "fromProject"
                      ? formatPeriod(model.periodKey, model.periodAmount)
                      : `${t("rateRange", { min: model.rate.split(" — ")[0], max: model.rate.split(" — ")[1], currency: model.currency })} ${formatPeriod(model.periodKey)}`}
                  </p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[var(--muted)] text-[var(--year)]">
                  <Icon size={18} />
                </span>
              </div>

              <ul className="space-y-1.5 text-sm text-[var(--card-foreground)]">
                {model.details.map((key) => (
                  <li key={key} className="leading-relaxed text-[var(--muted-foreground)]">
                    • {t(`models.${model.id}.${key}`)}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-500">
          <Globe2 size={13} className="mr-1 inline-block align-text-bottom" />
          {t("remote")}
        </span>
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-500">
          <Building2 size={13} className="mr-1 inline-block align-text-bottom" />
          {t("office")}
        </span>
        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-500">
          {t("hybrid")}
        </span>
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-500">
          {t("relocate")}
        </span>
      </div>

      <div className="mt-6 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[var(--link)] transition hover:text-[var(--link-hover)]">
          {t("customCta")}
        </a>
      </div>
    </section>
  );
}
