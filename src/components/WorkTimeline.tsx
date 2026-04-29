"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

type WorkExperienceItem = {
  id: number;
  year: { ru: string; en: string };
  title: { ru: string; en: string };
  company: { ru: string; en: string };
  achievements: { ru: string; en: string }[];
  techStack: string[];
};

const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    year: { ru: "2023 — настоящее время", en: "2023 — present" },
    title: { ru: "Начальник отдела информационных технологий", en: "Head of Information Technology Department" },
    company: {
      ru: "Фонд поддержки инвестиционных проектов креативных индустрий и микрофинансирования",
      en: "Creative Industries and Microfinance Investment Support Fund",
    },
    achievements: [
      {
        ru: "Разработал и внедрил кредитную скоринговую модель на основе ML для оценки заёмщиков (50+ параметров). Результат: сокращение времени решений с 3 дней до 2 часов, снижение просрочек на 27%",
        en: "Designed and launched an ML-based credit scoring model for borrower assessment (50+ parameters). Result: reduced decision time from 3 days to 2 hours and lowered delinquencies by 27%.",
      },
      {
        ru: "Построил дашборды в Power BI с прогнозной аналитикой портфеля займов и отправкой отчётов в Telegram. Результат: ускорение стратегических решений с недель до 2 часов",
        en: "Built Power BI dashboards with predictive analytics for the loan portfolio and Telegram report delivery. Result: strategic decisions accelerated from weeks to 2 hours.",
      },
      {
        ru: "Настроил систему ИБ (КриптоПро, Континент АП, ViPNet). Результат: успешное прохождение проверок ФСТЭК",
        en: "Implemented information security stack (CryptoPro, Continent AP, ViPNet). Result: successful regulatory security audits.",
      },
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "GPT-4", "Power BI", "Telegram API", "КриптоПро"],
  },
  {
    id: 2,
    year: { ru: "2021 — настоящее время", en: "2021 — present" },
    title: { ru: "Проверяющий куратор", en: "Review Mentor" },
    company: { ru: "Skillbox", en: "Skillbox" },
    achievements: [
      {
        ru: "Проверка работ по курсам: Machine Learning, Data Science, Data Analyst, Python, Power BI, математика и статистика",
        en: "Reviewed student assignments for Machine Learning, Data Science, Data Analyst, Python, Power BI, mathematics, and statistics tracks.",
      },
      {
        ru: "Участвовал в разработке образовательных программ",
        en: "Contributed to educational program development and curriculum improvements.",
      },
      {
        ru: "Курирование учебных чатов, консультирование студентов по DS и ML",
        en: "Moderated learning chats and advised students on DS and ML topics.",
      },
    ],
    techStack: ["Python", "ML", "Data Science", "Power BI", "NumPy", "Pandas"],
  },
  {
    id: 3,
    year: { ru: "2017 — 2023", en: "2017 — 2023" },
    title: { ru: "Начальник центра автоматизации и контроля", en: "Head of Automation and Control Center" },
    company: { ru: "АУ «Технопарк высоких технологий»", en: "High-Tech Technopark" },
    achievements: [
      {
        ru: "Разработал нейросетевую модель идентификации людей на видео (YOLOv8 + FaceNet). Результат: снижение ложных срабатываний с 40% до 8%, автоматизация мониторинга 30 камер",
        en: "Built a neural video-identification model (YOLOv8 + FaceNet). Result: false positives reduced from 40% to 8% and monitoring automated for 30 cameras.",
      },
      {
        ru: "Создал систему прогнозирования COVID-19 (Prophet + LSTM). Проект остановлен из-за отсутствия финансирования, но получен опыт работы с временными рядами",
        en: "Developed a COVID-19 forecasting system (Prophet + LSTM). Although funding was halted, the project delivered solid time-series engineering expertise.",
      },
      {
        ru: "Внедрил СЭД «Дело» с RPA-роботом на Python. Результат: снижение времени обработки писем с 2 часов до 15 минут",
        en: "Implemented the Delo document workflow system with a Python RPA bot. Result: document processing time reduced from 2 hours to 15 minutes.",
      },
      {
        ru: "Организовал переезд в новое здание с полной настройкой инфраструктуры (Cisco, MikroTik, виртуализация, отказоустойчивость)",
        en: "Led migration to a new office with full infrastructure setup (Cisco, MikroTik, virtualization, high availability).",
      },
      {
        ru: "Внедрял АИС: написание ТЗ, согласование проектов, пуско-наладочные работы, испытания",
        en: "Delivered multiple information systems: requirements drafting, project approvals, commissioning, and acceptance testing.",
      },
    ],
    techStack: ["Python", "YOLOv8", "FaceNet", "Prophet", "LSTM", "RPA", "Cisco", "MikroTik", "Power BI"],
  },
  {
    id: 4,
    year: { ru: "2009 — 2017", en: "2009 — 2017" },
    title: { ru: "Старший специалист / Старший инженер", en: "Senior Specialist / Senior Engineer" },
    company: { ru: "Ханты-Мансийский банк", en: "Khanty-Mansiysk Bank" },
    achievements: [
      {
        ru: "Поддержка банкоматов NCR и POS-терминалов Verifone, Ingenico",
        en: "Maintained NCR ATMs and Verifone/Ingenico POS terminals.",
      },
      {
        ru: "Поддержка филиальной сети банка (30+ отделений)",
        en: "Supported bank branch infrastructure across 30+ offices.",
      },
      {
        ru: "Администрирование Cisco (VLAN, OSPF, BGP, ACL, IPSEC, QoS)",
        en: "Administered Cisco networking stack (VLAN, OSPF, BGP, ACL, IPSEC, QoS).",
      },
      {
        ru: "Установка и настройка серверов, разработка и согласование ТЗ",
        en: "Installed and configured servers; prepared and approved technical specifications.",
      },
      {
        ru: "Мониторинг сети и выявление атак",
        en: "Monitored network traffic and identified security incidents.",
      },
    ],
    techStack: ["Cisco", "MikroTik", "Windows Server", "TCP/IP", "VLAN", "VPN"],
  },
  {
    id: 5,
    year: { ru: "2007 — 2009", en: "2007 — 2009" },
    title: { ru: "Ведущий программист", en: "Lead Programmer" },
    company: { ru: "Югорский НИИ информационных технологий", en: "Yugra Research Institute of Information Technologies" },
    achievements: [
      {
        ru: "Поддержка локальной сети института",
        en: "Supported and maintained the institute's local network.",
      },
      {
        ru: "Администрирование серверов Windows",
        en: "Administered Windows server infrastructure.",
      },
      {
        ru: "Настройка Cisco (маршрутизаторы, коммутаторы)",
        en: "Configured Cisco networking equipment (routers and switches).",
      },
      {
        ru: "Телефония, сопровождение вычислительной техники",
        en: "Maintained telephony systems and office computing hardware.",
      },
    ],
    techStack: ["Windows Server", "Cisco", "Телефония"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function WorkTimeline() {
  const locale = useLocale();
  const t = useTranslations();
  const [expanded, setExpanded] = useState(false);
  const currentLocale = locale === "ru" ? "ru" : "en";
  const visibleItems = expanded ? workExperience : workExperience.slice(0, 3);

  return (
    <section className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] backdrop-blur-xl sm:p-7">
      <h2 className="section-title mb-5 font-semibold">{t("work.title")}</h2>

      <motion.div
        className="relative space-y-4 border-l border-[color:var(--border)] pl-4 sm:pl-6"
        variants={containerVariants}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {visibleItems.map((item) => (
          <motion.article
            key={item.id}
            variants={itemVariants}
            transition={{ duration: 0.42 }}
            className="group gradient-border relative rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:shadow-[var(--card-shadow-hover)]"
          >
            <span className="absolute -left-[1.02rem] top-6 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] dark:bg-slate-300 sm:-left-[1.42rem]" />

            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm font-semibold text-[var(--year)]">{item.year[currentLocale]}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.company[currentLocale]}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--card-foreground)]">{item.title[currentLocale]}</h3>
                <p className="mt-3 text-sm font-medium text-[var(--year)]">{t("work.achievements")}</p>

                <ul className="mt-2 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement[currentLocale]}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted-foreground)]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--muted)] text-[var(--primary)]">
                        <Check size={11} />
                      </span>
                      <span>{achievement[currentLocale]}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm font-medium text-[var(--year)]">{t("work.techStack")}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--muted)] px-3 py-1 text-xs text-[var(--card-foreground)] shadow-[var(--card-shadow)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-5 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--card-foreground)] transition hover:border-[color:var(--primary)] hover:text-[var(--primary)]"
          aria-expanded={expanded}
        >
          {expanded ? t("work.showLess") : t("work.showAll")}
        </button>
      </div>
    </section>
  );
}
