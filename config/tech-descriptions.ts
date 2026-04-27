export type AppLocale = "ru" | "en";

type LocalizedDescription = {
  ru: string;
  en: string;
};

const TECH_DESCRIPTIONS: Record<string, LocalizedDescription> = {
  "Prompt Engineering": {
    ru: "Проектирование запросов к LLM для стабильных и качественных ответов в бизнес-сценариях.",
    en: "Designing prompts for LLMs to get stable, high-quality outputs in business workflows.",
  },
  "Few-shot / Chain-of-Thought": {
    ru: "Техники, где модели дают лучшие ответы через примеры и пошаговое рассуждение.",
    en: "Techniques that improve LLM output using examples and step-by-step reasoning.",
  },
  "JSON Prompt Design": {
    ru: "Структурирование промптов и ответов в JSON для интеграций и автоматизаций.",
    en: "Structuring prompts and outputs in JSON for reliable integrations and automation.",
  },
  "OpenAI API": {
    ru: "API для подключения моделей OpenAI к приложениям, ботам и внутренним инструментам.",
    en: "API for integrating OpenAI models into apps, bots, and internal tools.",
  },
  RAG: {
    ru: "Подход, где модель отвечает на основе найденных данных из базы знаний, а не только памяти модели.",
    en: "Approach where the model answers from retrieved knowledge-base context, not just model memory.",
  },
  "Vector DB": {
    ru: "Векторная база для семантического поиска и хранения эмбеддингов документов.",
    en: "Vector database used for semantic search and document embeddings storage.",
  },
  LangChain: {
    ru: "Фреймворк для сборки AI-цепочек, агентов и инструментов вокруг LLM.",
    en: "Framework for building AI chains, agents, and tool-enabled LLM applications.",
  },
  LangFlow: {
    ru: "Визуальная среда для быстрой сборки и тестирования LLM-сценариев.",
    en: "Visual builder for rapid prototyping and testing of LLM workflows.",
  },
  "OpenAI": {
    ru: "Экосистема моделей и инструментов OpenAI для генерации и анализа контента.",
    en: "OpenAI ecosystem of models and tools for generation and analysis tasks.",
  },
  GPT: {
    ru: "Семейство языковых моделей для генерации текста, классификации и ассистентов.",
    en: "Family of language models for text generation, classification, and assistants.",
  },
  Make: {
    ru: "No-code платформа для автоматизации бизнес-процессов между сервисами.",
    en: "No-code platform for automating business workflows across services.",
  },
  "Make/n8n": {
    ru: "Набор no-code инструментов для построения автоматизаций и AI-сценариев.",
    en: "No-code toolset for workflow automation and AI orchestration.",
  },
  n8n: {
    ru: "Open-source automation инструмент для интеграций, webhooks и AI-цепочек.",
    en: "Open-source automation tool for integrations, webhooks, and AI pipelines.",
  },
  FastAPI: {
    ru: "Быстрый Python-фреймворк для API и backend-сервисов.",
    en: "High-performance Python framework for APIs and backend services.",
  },
  Telegram: {
    ru: "Платформа для запуска ботов и пользовательских AI-интерфейсов.",
    en: "Platform for deploying bots and user-facing AI interfaces.",
  },
  Python: {
    ru: "Основной язык для backend, автоматизации и AI-интеграций.",
    en: "Core language for backend development, automation, and AI integration.",
  },
  TypeScript: {
    ru: "Типизированный JavaScript для надежных frontend/backend приложений.",
    en: "Typed JavaScript for safer and more maintainable frontend/backend apps.",
  },
  "Next.js": {
    ru: "React-фреймворк для быстрых веб-приложений с SSR/SSG.",
    en: "React framework for fast web apps with SSR/SSG capabilities.",
  },
  PostgreSQL: {
    ru: "Надежная реляционная база данных для продакшен-сервисов.",
    en: "Reliable relational database for production-grade services.",
  },
  "Fine-tuning": {
    ru: "Дообучение модели на доменных данных для повышения точности под конкретную задачу.",
    en: "Adapting a model with domain data to improve accuracy for specific tasks.",
  },
  "Prompt Evaluation": {
    ru: "Проверка качества промптов по метрикам точности, стабильности и стоимости.",
    en: "Assessing prompt quality by accuracy, consistency, and cost metrics.",
  },
  "Guardrails Design": {
    ru: "Проектирование ограничений и правил безопасности для ответов AI-систем.",
    en: "Designing safety constraints and policy rules for AI outputs.",
  },
  Albato: {
    ru: "Платформа интеграций для быстрой связки бизнес-сервисов без кода.",
    en: "Integration platform to quickly connect business services without coding.",
  },
  Zapier: {
    ru: "Сервис автоматизаций для соединения приложений и workflow-сценариев.",
    en: "Automation service for connecting apps and workflow scenarios.",
  },
  "Python scripts": {
    ru: "Скрипты на Python для автоматизации рутинных задач и обработки данных.",
    en: "Python scripts for task automation and lightweight data processing.",
  },
  "CRM Workflows": {
    ru: "Автоматизация этапов продаж и клиентских процессов внутри CRM.",
    en: "Automation of sales stages and customer lifecycle operations in CRM.",
  },
  "Webhook Orchestration": {
    ru: "Связывание событий между системами через webhook и обработчики.",
    en: "Coordinating system events via webhooks and event handlers.",
  },
  "API Integrations": {
    ru: "Интеграция внешних API в продуктовые и внутренние процессы.",
    en: "Integrating third-party APIs into product and internal workflows.",
  },
  Django: {
    ru: "Python-фреймворк для быстрого создания backend-приложений и админ-панелей.",
    en: "Python framework for building backend apps and admin interfaces quickly.",
  },
  Aiogram: {
    ru: "Асинхронный фреймворк для разработки Telegram-ботов на Python.",
    en: "Async framework for building Telegram bots in Python.",
  },
  Asyncio: {
    ru: "Инструмент Python для асинхронного выполнения задач и I/O операций.",
    en: "Python toolkit for asynchronous task execution and I/O.",
  },
  "REST API Design": {
    ru: "Проектирование предсказуемых API-эндпоинтов и контрактов для клиентов.",
    en: "Designing predictable API endpoints and contracts for consumers.",
  },
  Pydantic: {
    ru: "Библиотека валидации и сериализации данных для Python-сервисов.",
    en: "Data validation and serialization library for Python services.",
  },
  "Tool Calling": {
    ru: "Вызов внешних инструментов и функций из LLM для практических задач.",
    en: "Using external tools/functions from LLMs to complete practical tasks.",
  },
  "MVP to Production": {
    ru: "Переход AI-решения от прототипа к стабильной продакшен-эксплуатации.",
    en: "Taking AI solutions from prototype stage to stable production use.",
  },
  "Multi-agent Flows": {
    ru: "Сценарии, где несколько AI-агентов выполняют связанные роли.",
    en: "Workflows where multiple AI agents collaborate across linked roles.",
  },
  "Agent Memory": {
    ru: "Механизмы памяти агента для сохранения контекста между запросами.",
    en: "Memory mechanisms that preserve context across agent interactions.",
  },
  "Image Analysis": {
    ru: "Извлечение смысла и признаков из изображений с помощью AI-моделей.",
    en: "Extracting semantic information and features from images with AI.",
  },
  "Speech-to-Text": {
    ru: "Преобразование речи в текст для ассистентов и аналитики.",
    en: "Converting speech audio into text for assistants and analytics.",
  },
  "Text-to-Speech": {
    ru: "Синтез озвучки из текста для голосовых интерфейсов.",
    en: "Generating speech audio from text for voice interfaces.",
  },
  "Vision LLMs": {
    ru: "Языковые модели, которые понимают текст и изображения одновременно.",
    en: "Language models that process text and images together.",
  },
  "Audio Transcription": {
    ru: "Транскрибация аудио в структурированный текстовый формат.",
    en: "Transcribing audio into structured text output.",
  },
  "OCR Pipelines": {
    ru: "Пайплайны распознавания текста из документов и сканов.",
    en: "OCR pipelines for extracting text from documents and scans.",
  },
  Tailwind: {
    ru: "Утилитарный CSS-фреймворк для быстрой сборки интерфейсов.",
    en: "Utility-first CSS framework for rapidly building interfaces.",
  },
  "Framer Motion": {
    ru: "Библиотека анимаций для React-интерфейсов с плавными переходами.",
    en: "React animation library for smooth transitions and microinteractions.",
  },
  "Responsive UI": {
    ru: "Проектирование интерфейсов, корректно работающих на любых экранах.",
    en: "Designing interfaces that adapt well to all screen sizes.",
  },
  "Accessibility (a11y)": {
    ru: "Практики доступности интерфейса для пользователей с разными потребностями.",
    en: "Accessibility practices for users with diverse needs and abilities.",
  },
  Redis: {
    ru: "In-memory хранилище для кеша, очередей и быстрого доступа к данным.",
    en: "In-memory datastore for caching, queues, and low-latency access.",
  },
  Supabase: {
    ru: "Backend-as-a-Service с PostgreSQL, auth и storage для MVP.",
    en: "Backend-as-a-Service with PostgreSQL, auth, and storage for MVPs.",
  },
  "Knowledge Base Pipelines": {
    ru: "Процессы подготовки, индексации и обновления базы знаний для RAG.",
    en: "Pipelines for preparing, indexing, and updating RAG knowledge bases.",
  },
  "SQL Optimization": {
    ru: "Оптимизация SQL-запросов и индексов для повышения производительности.",
    en: "Optimizing SQL queries and indexes for better performance.",
  },
  "Data Modeling": {
    ru: "Проектирование структуры данных и связей между сущностями.",
    en: "Designing data structures and relationships between entities.",
  },
  Git: {
    ru: "Система контроля версий для командной разработки и code review.",
    en: "Version control system for collaborative development and code review.",
  },
  Docker: {
    ru: "Контейнеризация приложений для предсказуемого деплоя и запуска.",
    en: "Containerization for predictable app deployment and runtime.",
  },
  Cursor: {
    ru: "AI-редактор для ускорения разработки, рефакторинга и отладки.",
    en: "AI-powered editor for faster coding, refactoring, and debugging.",
  },
  Figma: {
    ru: "Инструмент дизайна интерфейсов и прототипирования.",
    en: "Interface design and prototyping tool.",
  },
  Postman: {
    ru: "Инструмент тестирования API, коллекций и контрактов.",
    en: "Tool for API testing, collections, and contract validation.",
  },
  "GitHub Actions": {
    ru: "CI/CD автоматизация сборки, тестов и деплоя прямо в GitHub.",
    en: "CI/CD automation for builds, tests, and deployments in GitHub.",
  },
  "Google Sheets": {
    ru: "Табличный инструмент для хранения данных и интеграции в автоматизации.",
    en: "Spreadsheet tool for lightweight data storage and automation integrations.",
  },
  "Prompt Templates": {
    ru: "Шаблоны промптов для повторяемого качества ответов в разных задачах.",
    en: "Reusable prompt patterns for consistent output quality across tasks.",
  },
  SEO: {
    ru: "Оптимизация сайта для видимости в поисковых системах.",
    en: "Optimizing websites for better visibility in search engines.",
  },
  "Tailwind CSS": {
    ru: "Полное название Tailwind, CSS-подход через utility-классы.",
    en: "Full Tailwind naming, utility-class based CSS workflow.",
  },
};

export function getTechDescription(tech: string, locale: AppLocale) {
  return TECH_DESCRIPTIONS[tech]?.[locale];
}
