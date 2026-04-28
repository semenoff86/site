"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  metrics,
  mission,
  skillGroups,
} from "@/config/experience";
import { getTechDescription } from "@/config/tech-descriptions";
import { MagneticButton } from "@/components/magnetic-button";
import { projects } from "@/config/projects";
import { LocaleToggle } from "@/components/locale-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

const InteractiveTerminal = dynamic(
  () => import("@/components/interactive-terminal").then((mod) => mod.InteractiveTerminal),
  {
    ssr: false,
    loading: () => <div className="h-56 animate-pulse rounded-2xl bg-[var(--muted)]" />,
  },
);

const WorkTimeline = dynamic(
  () => import("@/src/components/WorkTimeline").then((mod) => mod.WorkTimeline),
  {
    loading: () => <div className="h-72 animate-pulse rounded-3xl border border-[color:var(--border)] bg-[var(--muted)]" />,
  },
);

const SalaryExpectations = dynamic(
  () => import("@/components/salary-expectations").then((mod) => mod.SalaryExpectations),
  {
    loading: () => <div className="h-80 animate-pulse rounded-3xl border border-[color:var(--border)] bg-[var(--muted)]" />,
  },
);

function Section({
  id,
  title,
  hideTitle = false,
  children,
}: {
  id?: string;
  title: string;
  hideTitle?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] backdrop-blur-xl sm:p-7"
    >
      {!hideTitle ? <h2 className="section-title mb-5 font-semibold">{title}</h2> : null}
      {children}
    </motion.section>
  );
}

function TechTag({ tech, locale, className }: { tech: string; locale: "ru" | "en"; className: string }) {
  const description = getTechDescription(tech, locale);

  return (
    <span className="group/tech relative inline-flex">
      <span className={className}>{tech}</span>
      {description ? (
        <span className="pointer-events-none absolute bottom-[calc(100%+0.45rem)] left-1/2 z-30 hidden w-64 -translate-x-1/2 rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-3 py-2 text-left text-xs leading-relaxed text-[var(--card-foreground)] shadow-[var(--card-shadow-hover)] group-hover/tech:block">
          {description}
        </span>
      ) : null}
    </span>
  );
}

export function PortfolioPage({ locale }: { locale: "ru" | "en" }) {
  const t = useTranslations();
  const { resolvedTheme } = useTheme();
  const [terminalEnabled, setTerminalEnabled] = useState(false);
  const [showHeroBody, setShowHeroBody] = useState(false);
  const heroImage = resolvedTheme === "light" ? "/gemini-2.jpg" : "/lucid-origin.jpg";

  const scrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    window.localStorage.setItem("preferred-locale", locale);
  }, [locale]);

  return (
    <main className="premium-light-bg bg-gradient-organic relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="absolute -bottom-44 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(6,182,212,0.25),transparent_60%)]" />
        <div className="absolute right-0 top-1/3 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_62%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_62%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 py-4 sm:py-5 lg:py-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 backdrop-blur-xl sm:p-7"
        >
          <div className="mb-6">
            <div className="mb-4">
              <div className="gradient-border relative h-[180px] overflow-hidden rounded-xl border border-[color:var(--border)] bg-[var(--muted)] sm:h-[240px]">
                <Image
                  src={heroImage}
                  alt="Portfolio hero background"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.16),rgba(6,182,212,0.12))]" />
                <div className="absolute right-3 top-3 z-20 flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 p-1.5 backdrop-blur-md">
                  <LocaleToggle locale={locale} />
                  <button
                    type="button"
                    aria-label="Open Telegram contact"
                    onClick={() => window.open("https://t.me/your_handle", "_blank", "noopener,noreferrer")}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] text-slate-700 backdrop-blur transition hover:scale-105 hover:text-[var(--primary)] dark:text-cyan-200 dark:hover:text-cyan-100"
                  >
                    <Send size={16} />
                  </button>
                  <ThemeToggle />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.35),rgba(2,6,23,0.05))]" />
              </div>
            </div>

            <div className="group mt-3 max-w-3xl">
              <button
                type="button"
                onClick={() => setShowHeroBody((prev) => !prev)}
                className="text-left text-sm italic text-[var(--year)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] sm:text-base"
                aria-expanded={showHeroBody}
              >
                {t("heroQuote")}
              </button>
              <p
                className={`text-fluid overflow-hidden font-normal text-[var(--muted-foreground)] transition-all duration-300 ${
                  showHeroBody ? "mt-3 max-h-48 opacity-100" : "max-h-0 opacity-0 group-hover:mt-3 group-hover:max-h-48 group-hover:opacity-100"
                }`}
              >
                {t("heroBody")}
              </p>
            </div>
          </div>
          <div className="gradient-border mt-6 rounded-2xl">
            {terminalEnabled ? (
              <InteractiveTerminal
                locale={locale}
                onClose={() => setTerminalEnabled(false)}
                onNavigateProjects={scrollToProjects}
              />
            ) : (
              <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[var(--terminal-bg)] p-4 text-center">
                <button
                  type="button"
                  onClick={() => setTerminalEnabled(true)}
                  className="rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
                >
                  {t("terminalOpen")}
                </button>
              </div>
            )}
          </div>
        </motion.header>

        <Section title={t("about")} hideTitle>
          <blockquote className="whitespace-pre-line rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-[var(--card-foreground)] shadow-[var(--card-shadow)] sm:p-5">
            {mission[locale]}
          </blockquote>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label.en}
                className="gradient-border rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--card-shadow)]"
              >
                <p className="text-xl font-bold text-[var(--year)]">{metric.value[locale]}</p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">{metric.label[locale]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t("skills")}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title.en}
                className="gradient-border rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:shadow-[var(--card-shadow-hover)]"
              >
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--year)]">
                  <Sparkles size={14} />
                  {group.title[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechTag
                      key={item}
                      tech={item}
                      locale={locale}
                      className="skill-tag rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <WorkTimeline />

        <Section id="projects" title={t("projects")}>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.name.en}
                className="project-card gradient-border group rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]"
              >
                {/* Screenshot block is intentionally hidden for now.
                    Keep this markup to quickly re-enable project previews later. */}
                {/* <div className="mb-3 h-[240px] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-purple-100 to-cyan-100 p-4 dark:from-purple-400/20 dark:to-cyan-400/20">
                  <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[color:var(--border)] text-center text-sm text-[var(--muted-foreground)]">
                    {t("screenshotPlaceholder")}
                  </div>
                </div> */}
                <h3 className="text-lg font-semibold">{project.name[locale]}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-zinc-300">{project.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechTag
                      key={tech}
                      tech={tech}
                      locale={locale}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)]"
                    />
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

        <SalaryExpectations />

        <Section id="contact" title={t("ctaTitle")}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[var(--muted-foreground)]">{t("ctaSubtitle")}</p>
              <a
                href="mailto:semenoff2007@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-[var(--link)] hover:text-[var(--link-hover)]"
              >
                <Mail size={16} /> semenoff2007@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-hover)]"
                onClick={() => window.open("https://t.me/your_handle", "_blank", "noopener,noreferrer")}
              >
                <Send size={16} /> {t("telegram")}
              </MagneticButton>
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm font-medium text-[var(--card-foreground)] hover:bg-slate-200 dark:hover:bg-white/20"
                onClick={() => window.open("https://github.com/", "_blank", "noopener,noreferrer")}
              >
                <GitBranch size={16} /> GitHub
              </MagneticButton>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
