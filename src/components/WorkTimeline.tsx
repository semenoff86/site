"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

type WorkExperienceItem = {
  id: number;
  year: string;
  title: string;
  company: string;
  achievements: string[];
  techStack: string[];
};

const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    year: "2023 — настоящее время",
    title: "Начальник отдела информационных технологий",
    company: "Фонд поддержки инвестиционных проектов креативных индустрий и микрофинансирования",
    achievements: [
      "Разработал и внедрил кредитную скоринговую модель на основе ML для оценки заёмщиков (50+ параметров). Результат: сокращение времени решений с 3 дней до 2 часов, снижение просрочек на 27%",
      "Построил дашборды в Power BI с прогнозной аналитикой портфеля займов и отправкой отчётов в Telegram. Результат: ускорение стратегических решений с недель до 2 часов",
      "Настроил систему ИБ (КриптоПро, Континент АП, ViPNet). Результат: успешное прохождение проверок ФСТЭК",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "GPT-4", "Power BI", "Telegram API", "КриптоПро"],
  },
  {
    id: 2,
    year: "2021 — настоящее время",
    title: "Проверяющий куратор",
    company: "Skillbox",
    achievements: [
      "Проверка работ по курсам: Machine Learning, Data Science, Data Analyst, Python, Power BI, математика и статистика",
      "Участвовал в разработке образовательных программ",
      "Курирование учебных чатов, консультирование студентов по DS и ML",
    ],
    techStack: ["Python", "ML", "Data Science", "Power BI", "NumPy", "Pandas"],
  },
  {
    id: 3,
    year: "2017 — 2023",
    title: "Начальник центра автоматизации и контроля",
    company: "АУ «Технопарк высоких технологий»",
    achievements: [
      "Разработал нейросетевую модель идентификации людей на видео (YOLOv8 + FaceNet). Результат: снижение ложных срабатываний с 40% до 8%, автоматизация мониторинга 30 камер",
      "Создал систему прогнозирования COVID-19 (Prophet + LSTM). Проект остановлен из-за отсутствия финансирования, но получен опыт работы с временными рядами",
      "Внедрил СЭД «Дело» с RPA-роботом на Python. Результат: снижение времени обработки писем с 2 часов до 15 минут",
      "Организовал переезд в новое здание с полной настройкой инфраструктуры (Cisco, MikroTik, виртуализация, отказоустойчивость)",
      "Внедрял АИС: написание ТЗ, согласование проектов, пуско-наладочные работы, испытания",
    ],
    techStack: ["Python", "YOLOv8", "FaceNet", "Prophet", "LSTM", "RPA", "Cisco", "MikroTik", "Power BI"],
  },
  {
    id: 4,
    year: "2009 — 2017",
    title: "Старший специалист / Старший инженер",
    company: "Ханты-Мансийский банк",
    achievements: [
      "Поддержка банкоматов NCR и POS-терминалов Verifone, Ingenico",
      "Поддержка филиальной сети банка (30+ отделений)",
      "Администрирование Cisco (VLAN, OSPF, BGP, ACL, IPSEC, QoS)",
      "Установка и настройка серверов, разработка и согласование ТЗ",
      "Мониторинг сети и выявление атак",
    ],
    techStack: ["Cisco", "MikroTik", "Windows Server", "TCP/IP", "VLAN", "VPN"],
  },
  {
    id: 5,
    year: "2007 — 2009",
    title: "Ведущий программист",
    company: "Югорский НИИ информационных технологий",
    achievements: [
      "Поддержка локальной сети института",
      "Администрирование серверов Windows",
      "Настройка Cisco (маршрутизаторы, коммутаторы)",
      "Телефония, сопровождение вычислительной техники",
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
  const t = useTranslations();

  return (
    <section className="premium-noise gradient-border rounded-3xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] backdrop-blur-xl sm:p-7">
      <h2 className="section-title mb-5 font-semibold">{t("work.title")}</h2>

      <motion.div
        className="relative space-y-4 border-l border-[color:var(--border)] pl-4 sm:pl-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {workExperience.map((item) => (
          <motion.article
            key={item.id}
            variants={itemVariants}
            transition={{ duration: 0.42 }}
            className="group gradient-border relative rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-4 shadow-[var(--card-shadow)] transition hover:shadow-[var(--card-shadow-hover)]"
          >
            <span className="absolute -left-[1.02rem] top-6 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] dark:bg-slate-300 sm:-left-[1.42rem]" />

            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm font-semibold text-[var(--year)]">{item.year}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.company}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--card-foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm font-medium text-[var(--year)]">{t("work.achievements")}</p>

                <ul className="mt-2 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--muted)] text-[var(--primary)]">
                        <Check size={11} />
                      </span>
                      <span>{achievement}</span>
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
    </section>
  );
}
