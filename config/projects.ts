export type LocalizedText = {
  ru: string;
  en: string;
};

export type Project = {
  name: LocalizedText;
  description: LocalizedText;
  stack: string[];
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: {
      ru: "Ассистент карточек маркетплейса",
      en: "Marketplace Listing Assistant",
    },
    description: {
      ru: "ИИ-сервис для генерации атрибутов и описаний товаров с проверкой качества и выгрузкой в каталог.",
      en: "AI service that generates product attributes and descriptions with quality checks and catalog export.",
    },
    stack: ["Prompt Engineering", "OpenAI API", "n8n", "Google Sheets"],
    image: "/project-1.svg",
    link: "#",
  },
  {
    name: {
      ru: "Telegram контент-завод",
      en: "Telegram Content Factory Bot",
    },
    description: {
      ru: "Бот для создания контент-планов и автогенерации постов под разные форматы и каналы.",
      en: "Bot for building content plans and auto-generating posts for different formats and channels.",
    },
    stack: ["Telegram", "GPT", "Make", "Prompt Templates"],
    image: "/project-2.svg",
    link: "#",
  },
  {
    name: { ru: "FAQ и Docs AI Ассистент", en: "FAQ & Docs AI Assistant" },
    description: {
      ru: "RAG-ассистент для поиска по корпоративной документации и быстрых ответов сотрудникам.",
      en: "RAG assistant for corporate documentation search and fast internal support answers.",
    },
    stack: ["RAG", "Vector DB", "LangChain", "FastAPI"],
    image: "/project-3.svg",
    link: "#",
  },
  {
    name: { ru: "Telegram Bot for HR", en: "Telegram Bot for HR" },
    description: {
      ru: "Бот для парсинга резюме, скоринга кандидатов и автоматических ответов рекрутеру.",
      en: "Bot for resume parsing, candidate scoring, and recruiter auto-replies.",
    },
    stack: ["Python", "Aiogram", "PostgreSQL", "GPT"],
    image: "/project-4.svg",
    link: "#",
  },
];
