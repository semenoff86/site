"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  GitBranch,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  experience,
  metrics,
  mission,
  skillGroups,
} from "@/config/experience";
import { projects } from "@/config/projects";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { LocaleToggle } from "@/components/locale-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="premium-noise rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] backdrop-blur-sm sm:p-7"
    >
      <h2 className="mb-5 text-2xl font-semibold sm:text-3xl">{title}</h2>
      {children}
    </motion.section>
  );
}

export function PortfolioPage({ locale }: { locale: "ru" | "en" }) {
  const t = useTranslations();
  const rotatingTitles = [t("heroTitle1"), t("heroTitle2"), t("heroTitle3")];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("preferred-locale", locale);
  }, [locale]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [rotatingTitles.length]);

  return (
    <main className="premium-light-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="absolute -bottom-44 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(6,182,212,0.25),transparent_60%)]" />
        <div className="absolute right-0 top-1/3 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_62%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_62%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 py-8 sm:py-10 lg:py-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="premium-noise rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 backdrop-blur-sm sm:p-7"
        >
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {t("portfolioLabel")}
              </p>
              <div className="flex items-center gap-2">
                <LocaleToggle locale={locale} />
                <ThemeToggle />
              </div>
            </div>

            <h1 className="relative h-[2.2em] overflow-hidden text-[clamp(0.85rem,2.25vw,2rem)] font-bold leading-[1.05] tracking-[-0.01em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTitles[titleIndex]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 block whitespace-nowrap bg-gradient-to-r from-[#7C3AED] to-[#0891B2] bg-clip-text text-transparent dark:from-[#A855F7] dark:via-[#3B82F6] dark:to-[#06B6D4]"
                >
                  {rotatingTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-[var(--muted-foreground)] sm:text-base">
              {t("heroSubtitle")}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[var(--primary-hover)]"
            >
              {t("viewProjects")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--primary)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--primary)] transition hover:scale-[1.02] hover:bg-[var(--muted)]"
            >
              {t("contact")}
            </a>
          </div>

          <div className="mt-6">
            <InteractiveTerminal locale={locale} />
          </div>
        </motion.header>

        <Section title={t("about")}>
          <blockquote className="rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-[var(--card-foreground)] shadow-[var(--card-shadow)] sm:p-5">
            &quot;{mission[locale]}&quot;
          </blockquote>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label.en}
                className="rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--card-shadow)]"
              >
                <p className="text-xl font-bold text-[var(--year)]">{metric.value[locale]}</p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">{metric.label[locale]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t("timeline")}>
          <div className="space-y-4 border-l border-[color:var(--border)] pl-4">
            {experience.map((item) => (
              <article
                key={`${item.year}-${item.company}`}
                className="group relative rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:scale-[1.01] hover:shadow-[var(--card-shadow-hover)]"
              >
                <span className="absolute -left-[1.4rem] top-6 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] dark:bg-slate-300" />
                <p className="text-sm font-semibold text-[var(--year)]">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {item.title[locale]} - {item.company}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-zinc-300">{item.role[locale]}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-2.5 py-1 text-xs text-[var(--card-foreground)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title={t("skills")}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title.en}
                className="rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:shadow-[var(--card-shadow-hover)]"
              >
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--year)]">
                  <Sparkles size={14} />
                  {group.title[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t("projects")}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name.en}
                className="group rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]"
              >
                <div className="mb-3 h-[240px] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-purple-100 to-cyan-100 p-4 dark:from-purple-400/20 dark:to-cyan-400/20">
                  <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[color:var(--border)] text-center text-sm text-[var(--muted-foreground)]">
                    {t("screenshotPlaceholder")}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{project.name[locale]}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-zinc-300">{project.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--link)] transition hover:text-[var(--link-hover)]"
                >
                  {t("viewDetails")} <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section title={t("investment")}>
          <div className="rounded-2xl border border-[var(--primary)] bg-[var(--card)] p-5 shadow-[var(--card-shadow)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">{t("flexibleFormat")}</p>
                <p className="mt-1 text-3xl font-bold text-[var(--card-foreground)]">{t("salaryRange")}</p>
                <p className="mt-1 text-sm text-[var(--primary)]">{t("salaryModes")}</p>
              </div>
              <ChartNoAxesCombined size={40} className="text-[var(--primary)]" />
            </div>
          </div>
        </Section>

        <Section id="contact" title={t("ctaTitle")}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[var(--muted-foreground)]">{t("ctaSubtitle")}</p>
              <a
                href="mailto:your@email.com"
                className="mt-2 inline-flex items-center gap-2 text-[var(--link)] hover:text-[var(--link-hover)]"
              >
                <Mail size={16} /> your@email.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://t.me/your_handle"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-hover)]"
              >
                <Send size={16} /> {t("telegram")}
              </a>
              <a
                href="https://github.com/"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm font-medium text-[var(--card-foreground)] hover:bg-slate-200 dark:hover:bg-white/20"
              >
                <GitBranch size={16} /> GitHub
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
