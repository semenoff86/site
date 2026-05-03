"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
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

/** HTTPS t.me link works reliably in browsers; avoid window.open (popup blockers). */
const TELEGRAM_CONTACT_URL = "https://t.me/semenoff86";
const CONTACT_EMAIL = "theo-walcott@yandex.ru";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

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
      initial={false}
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
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  const hero =
    resolvedTheme === "light"
      ? { webp: "/gemini-2.webp", fallback: "/gemini-2.jpg" }
      : { webp: "/lucid-origin.webp", fallback: "/lucid-origin.jpg" };

  const scrollToId = (id: string, offset = 16) => {
    const target = document.querySelector(`#${id}`);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    scrollToId("projects", 12);
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

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:py-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-4 backdrop-blur-xl sm:p-6"
        >
          <div className="mb-4 flex min-w-0 items-center gap-2 sm:gap-3">
            <nav className="flex min-w-0 flex-1 flex-nowrap items-center gap-1.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)] sm:gap-2 sm:px-4"
              >
                <Send size={16} /> {t("telegram")}
              </a>
              <a
                href={CONTACT_MAILTO}
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-sm font-medium text-[var(--card-foreground)] transition hover:bg-slate-200 dark:hover:bg-white/20 sm:gap-2 sm:px-4"
              >
                <Mail size={16} /> {t("writeEmail")}
              </a>
              <MagneticButton
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-sm font-medium text-[var(--card-foreground)] hover:bg-slate-200 dark:hover:bg-white/20 sm:gap-2 sm:px-4"
                onClick={scrollToProjects}
              >
                <Sparkles size={16} /> {t("viewProjects")}
              </MagneticButton>
              <MagneticButton
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-sm font-medium text-[var(--card-foreground)] hover:bg-slate-200 dark:hover:bg-white/20 sm:px-4"
                onClick={() => scrollToId("about")}
              >
                {t("about")}
              </MagneticButton>
            </nav>
            <div className="ml-auto flex shrink-0 items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[var(--card)]/85 p-1.5 backdrop-blur-md">
              <LocaleToggle locale={locale} />
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("telegram")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] text-slate-700 backdrop-blur transition hover:scale-105 hover:text-[var(--primary)] dark:text-cyan-200 dark:hover:text-cyan-100"
              >
                <Send size={16} />
              </a>
              <a
                href={CONTACT_MAILTO}
                aria-label={t("contactEmailAria", { email: CONTACT_EMAIL })}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] text-slate-700 backdrop-blur transition hover:scale-105 hover:text-[var(--primary)] dark:text-cyan-200 dark:hover:text-cyan-100"
              >
                <Mail size={16} />
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="mb-6 space-y-4">
            <div className="gradient-border relative h-[210px] overflow-hidden rounded-xl border border-[color:var(--border)] bg-[var(--muted)] sm:h-[260px]">
              <picture className="absolute inset-0 block">
                <source srcSet={hero.webp} type="image/webp" />
                <img
                  src={hero.fallback}
                  alt="Portfolio hero background"
                  width={1536}
                  height={900}
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(6,182,212,0.14))]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.35),rgba(2,6,23,0.05))]" />
            </div>
            <h1 className="hero-title max-w-4xl font-semibold text-[var(--card-foreground)]">{t("heroTitle1")}</h1>
            <div className="group max-w-3xl">
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
          <div className="gradient-border mt-2 rounded-2xl">
            {terminalEnabled ? (
              <InteractiveTerminal
                locale={locale}
                onClose={() => setTerminalEnabled(false)}
                onNavigateProjects={scrollToProjects}
              />
            ) : (
              <div className="flex h-56 flex-col justify-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[var(--terminal-bg)] p-4 font-mono text-sm text-[var(--terminal-fg)]">
                <div className="text-left text-[var(--muted-foreground)]">{t("terminalDeferredHint")}</div>
                <button
                  type="button"
                  onClick={() => setTerminalEnabled(true)}
                  className="w-full rounded-lg border border-[color:var(--border)] bg-transparent px-3 py-2 text-left transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <span className="text-[var(--primary)]">visitor@portfolio:~$</span> {t("terminalOpen")}
                </button>
              </div>
            )}
          </div>
        </motion.header>

        <Section id="about" title={t("about")} hideTitle>
          <blockquote className="whitespace-pre-line rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-[var(--card-foreground)] shadow-[var(--card-shadow)] sm:p-5">
            {mission[locale]}
          </blockquote>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label.en}
                className="gradient-border rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--card-shadow)]"
              >
                <p className="text-xl font-semibold text-[var(--year)]">{metric.value[locale]}</p>
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
          {expandedProjectIndex !== null ? (
            <article className="gradient-border rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-5 shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setExpandedProjectIndex(null)}
                className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--link)] transition hover:text-[var(--link-hover)]"
              >
                <ChevronLeft size={14} /> {locale === "ru" ? "Назад к проектам" : "Back to projects"}
              </button>

              <h3 className="text-2xl font-semibold">{projects[expandedProjectIndex].name[locale]}</h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[var(--muted-foreground)]">
                {projects[expandedProjectIndex].description[locale]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {projects[expandedProjectIndex].stack.map((tech) => (
                  <TechTag
                    key={tech}
                    tech={tech}
                    locale={locale}
                    className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)]"
                  />
                ))}
              </div>

              {projects[expandedProjectIndex].details ? (
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--card-foreground)]">
                      {locale === "ru" ? "О проекте" : "About the project"}
                    </p>
                    <p className="max-w-4xl text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {projects[expandedProjectIndex].details?.overview[locale]}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--card-foreground)]">
                      {locale === "ru" ? "Возможности" : "Key features"}
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--muted-foreground)]">
                      {projects[expandedProjectIndex].details?.features[locale].map((feature) => (
                        <li key={feature}>- {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--card-foreground)]">
                      {locale === "ru" ? "Технологии и реализация" : "Technology and implementation"}
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--muted-foreground)]">
                      {projects[expandedProjectIndex].details?.implementation[locale].map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-[var(--muted-foreground)]">{projects[expandedProjectIndex].details?.source[locale]}</p>
                </div>
              ) : null}
            </article>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
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
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{project.description[locale]}</p>
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
                  {project.details ? (
                    <button
                      type="button"
                      onClick={() => setExpandedProjectIndex(index)}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--link)] transition hover:text-[var(--link-hover)]"
                    >
                      {t("viewDetails")} <ArrowUpRight size={14} />
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--link)] transition hover:text-[var(--link-hover)]"
                    >
                      {t("viewDetails")} <ArrowUpRight size={14} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </Section>

        <SalaryExpectations />

        {false ? (
          <Section id="contact" title={t("ctaTitle")}>
          <div className="space-y-4">
            <p className="max-w-2xl text-[var(--muted-foreground)]">{t("ctaSubtitle")}</p>
            <div className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
              <span className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1">{t("ctaTrustResponse")}</span>
              <span className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1">{t("ctaTrustStart")}</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:flex">
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)] sm:w-auto"
              >
                <Send size={16} /> {t("telegram")}
              </a>
              <MagneticButton
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-2 text-sm font-medium text-[var(--card-foreground)] hover:bg-slate-200 dark:hover:bg-white/20 sm:w-auto"
                onClick={scrollToProjects}
              >
                <Sparkles size={16} /> {t("ctaSecondary")}
              </MagneticButton>
            </div>
            <div className="border-t border-[color:var(--border)] pt-4">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center gap-2 text-[var(--link)] hover:text-[var(--link-hover)]"
              >
                <Mail size={16} /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          </Section>
        ) : null}
      </div>
    </main>
  );
}
