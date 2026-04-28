import type { LocalizedText } from "./projects";

export type ExperienceItem = {
  year: string;
  title: LocalizedText;
  company: string;
  role: LocalizedText;
  technologies: string[];
};

export type Metric = {
  value: LocalizedText;
  label: LocalizedText;
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const mission: LocalizedText = {
  ru: "19 лет в IT: от веб-разработки, управления отделами и сетевой инфраструктуры до Data Science, ML и AI. Внедряю нейросети, ML-модели и системы автоматизации, которые реально сокращают ручной труд и ускоряют процессы.\n\nЕсли вы хотите:\n✅ автоматизировать рутинные задачи — сокращаю время обработки данных до 90%\n✅ внедрить AI для анализа заявок или клиентов — снижаю время решений с дней до часов\n✅ получить измеримый бизнес-результат — мои скоринговые модели сократили просрочки на 27%",
  en: "19 years in IT: from web development, department leadership, and network infrastructure to Data Science, ML, and AI. I implement neural networks, ML models, and automation systems that reduce manual work and accelerate operations.\n\nIf you want to:\n✅ automate routine tasks — I reduce data processing time by up to 90%\n✅ implement AI for application or customer analysis — I reduce decision time from days to hours\n✅ get measurable business results — my scoring models reduced delinquencies by 27%",
};

export const metrics: Metric[] = [
  {
    value: { ru: "19 лет", en: "19 years" },
    label: { ru: "опыта в IT", en: "of IT experience" },
  },
  {
    value: { ru: "5+ AI/ML", en: "5+ AI/ML" },
    label: { ru: "проектов", en: "projects" },
  },
  {
    value: { ru: "до 90%", en: "up to 90%" },
    label: { ru: "автоматизации", en: "automation" },
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2025",
    title: { ru: "Lead Prompt Engineer", en: "Lead Prompt Engineer" },
    company: "AI Agency XYZ",
    role: {
      ru: "Разработка промптов для LLM, эксперименты с тонкой настройкой.",
      en: "Prompt design for LLM workflows and fine-tuning experiments.",
    },
    technologies: ["Prompt Engineering", "OpenAI API", "RAG"],
  },
  {
    year: "2024",
    title: { ru: "Python Dev / Bot Developer", en: "Python Dev / Bot Developer" },
    company: "Freelance",
    role: {
      ru: "Telegram-боты, CRM-автоматизация и backend-интеграции.",
      en: "Telegram bots, CRM automation, and backend integrations.",
    },
    technologies: ["Python", "Aiogram", "FastAPI", "n8n"],
  },
  {
    year: "2023",
    title: { ru: "Junior Web Developer", en: "Junior Web Developer" },
    company: "Startup",
    role: {
      ru: "Разработка frontend-интерфейсов и интеграция REST API.",
      en: "Frontend implementation and REST API integration.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: { ru: "AI & LLM", en: "AI & LLM" },
    items: [
      "Prompt Engineering",
      "Few-shot / Chain-of-Thought",
      "JSON Prompt Design",
      "OpenAI API",
      "RAG",
      "Fine-tuning",
      "Prompt Evaluation",
      "Guardrails Design",
    ],
  },
  {
    title: { ru: "Automation", en: "Automation" },
    items: ["Make/n8n", "Albato", "Zapier", "Python scripts", "CRM Workflows", "Webhook Orchestration", "API Integrations"],
  },
  {
    title: { ru: "Python Backend", en: "Python Backend" },
    items: ["FastAPI", "Django", "Aiogram", "Asyncio", "REST API Design", "Pydantic"],
  },
  {
    title: { ru: "AI Agent Engineering", en: "AI Agent Engineering" },
    items: ["LangChain", "LangFlow", "Tool Calling", "MVP to Production", "Multi-agent Flows", "Agent Memory"],
  },
  {
    title: { ru: "Мультимодальность", en: "Multimodal AI" },
    items: ["Image Analysis", "Speech-to-Text", "Text-to-Speech", "Vision LLMs", "Audio Transcription", "OCR Pipelines"],
  },
  {
    title: { ru: "Frontend", en: "Frontend" },
    items: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "Responsive UI", "Accessibility (a11y)"],
  },
  {
    title: { ru: "Базы данных", en: "Databases" },
    items: ["PostgreSQL", "Redis", "Supabase", "Vector DB", "Knowledge Base Pipelines", "SQL Optimization", "Data Modeling"],
  },
  {
    title: { ru: "Инструменты", en: "Tools" },
    items: ["Git", "Docker", "Cursor", "Figma", "Postman", "GitHub Actions"],
  },
];
