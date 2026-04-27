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
  ru: "Я пришел в IT через веб-разработку, а затем сфокусировался на AI и автоматизации. После обучения на продвинутой программе Prompt Engineering от Zerocoder я проектирую LLM-решения под бизнес: от prompt-стратегий и RAG до запуска MVP-ассистентов в production. Для меня важно не просто писать код, а внедрять системы, которые сокращают расходы и ускоряют процессы с измеримым результатом.",
  en: "I got into IT through web development, then focused on AI and automation. After completing Zerocoder's advanced Prompt Engineering program, I design business-focused LLM solutions: from prompt strategies and RAG to production-ready assistant MVPs. I care about shipping systems that cut costs and speed up workflows with measurable impact.",
};

export const metrics: Metric[] = [
  {
    value: { ru: "3+ года", en: "3+ years" },
    label: { ru: "опыта в разработке", en: "of engineering experience" },
  },
  {
    value: { ru: "25+", en: "25+" },
    label: { ru: "реализованных проектов", en: "delivered projects" },
  },
  {
    value: { ru: "1000+", en: "1000+" },
    label: { ru: "часов процессов автоматизировано", en: "hours automated" },
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
