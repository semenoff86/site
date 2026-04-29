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
  details?: {
    overview: LocalizedText;
    features: {
      ru: string[];
      en: string[];
    };
    implementation: {
      ru: string[];
      en: string[];
    };
    source: LocalizedText;
  };
};

export const projects: Project[] = [
  {
    name: {
      ru: "ГТО AI-ассистент в Telegram",
      en: "GTO AI Assistant in Telegram",
    },
    description: {
      ru: "Телеграм-бот на базе GigaChat для подготовки к нормативам ГТО: показывает нормы по возрасту и полу, отвечает на вопросы по тренировкам, питанию и восстановлению.",
      en: "GigaChat-powered Telegram bot for GTO training: shows norms by age and gender and answers questions about workouts, nutrition, and recovery.",
    },
    stack: ["Python", "Aiogram", "GigaChat API", "Docker"],
    image: "/project-1.svg",
    link: "#",
    details: {
      overview: {
        ru: "Telegram-бот с AI-ассистентом на базе GigaChat для подготовки к сдаче нормативов ГТО. Бот помогает быстро находить нужные нормативы и получать персональные рекомендации по тренировкам, питанию и восстановлению.",
        en: "Telegram bot with a GigaChat-based AI assistant for GTO standards preparation. It helps users quickly find required norms and get practical guidance on training, nutrition, and recovery.",
      },
      features: {
        ru: [
          "Просмотр нормативов ГТО по возрасту и полу",
          "Q&A режим с AI-ассистентом по подготовке, питанию и восстановлению",
          "Хранение данных и истории диалогов",
          "Контейнеризация и запуск через Docker",
        ],
        en: [
          "View GTO norms by age and gender",
          "AI Q&A mode for preparation, nutrition, and recovery",
          "Data and dialog history persistence",
          "Containerized deployment with Docker",
        ],
      },
      implementation: {
        ru: [
          "Python + Aiogram: асинхронная архитектура Telegram-бота",
          "GigaChat API через aiohttp для AI-ответов в реальном времени",
          "Pydantic-конфиг + .env для безопасного управления настройками",
          "Docker-образ с отдельным volume для сохранения data и истории",
        ],
        en: [
          "Python + Aiogram: async Telegram bot architecture",
          "GigaChat API via aiohttp for real-time AI responses",
          "Pydantic config + .env for secure settings management",
          "Docker image with dedicated volume for data and history persistence",
        ],
      },
      source: {
        ru: "Источник нормативов: официальный портал gto.ru/normativy",
        en: "Norms source: official portal gto.ru/normativy",
      },
    },
  },
  {
    name: {
      ru: "AI Ассистент мониторинга конкурентов",
      en: "AI Competitor Monitoring Assistant",
    },
    description: {
      ru: "MVP-приложение для анализа конкурентной среды: разбирает тексты, изображения и контент сайтов, формирует структурированную аналитику и хранит историю последних запросов.",
      en: "MVP app for competitor intelligence: analyzes texts, images, and website content, returns structured insights, and stores recent query history.",
    },
    stack: ["FastAPI", "OpenAI", "BeautifulSoup", "Pydantic"],
    image: "/project-2.svg",
    link: "#",
    details: {
      overview: {
        ru: "Веб-сервис для конкурентного анализа с мультимодальностью (текст + изображения) и парсингом сайтов по URL. Система помогает быстро получить сильные и слабые стороны конкурента, уникальные предложения и прикладные рекомендации.",
        en: "Web service for competitor research with multimodal analysis (text + images) and URL website parsing. It quickly surfaces strengths, weaknesses, unique offers, and practical improvement recommendations.",
      },
      features: {
        ru: [
          "Анализ текстов конкурентов с выдачей структурированной аналитики",
          "Анализ изображений (баннеры, скриншоты, упаковка) с оценкой визуального стиля",
          "Автопарсинг сайта по URL с извлечением ключевого контента",
          "История последних 10 запросов для быстрого возврата к предыдущим анализам",
        ],
        en: [
          "Competitor text analysis with structured insight output",
          "Image analysis (banners, screenshots, packaging) with visual style scoring",
          "Automatic website parsing by URL with key content extraction",
          "Last 10 requests history for quick access to previous analyses",
        ],
      },
      implementation: {
        ru: [
          "FastAPI backend с отдельными endpoint'ами для текста, изображений и парсинга",
          "OpenAI GPT-4o-mini (или GPT-4.1) для генерации аналитики и рекомендаций",
          "BeautifulSoup4 + httpx для извлечения данных с веб-страниц",
          "Frontend на Vanilla JS/HTML/CSS и Pydantic-валидация входных данных",
        ],
        en: [
          "FastAPI backend with dedicated endpoints for text, image, and parsing flows",
          "OpenAI GPT-4o-mini (or GPT-4.1) for analytical output and recommendations",
          "BeautifulSoup4 + httpx for website content extraction",
          "Vanilla JS/HTML/CSS frontend with Pydantic input validation",
        ],
      },
      source: {
        ru: "Доступна API-документация: /docs (Swagger UI) и /redoc.",
        en: "API documentation available at /docs (Swagger UI) and /redoc.",
      },
    },
  },
  {
    name: { ru: "RAG Web Assistant", en: "RAG Web Assistant" },
    description: {
      ru: "Веб-ассистент на FastAPI + Streamlit с RAG, локальной ChromaDB и кешированием ответов: загружает документы, ищет релевантные фрагменты и генерирует ответы с учетом контекста.",
      en: "FastAPI + Streamlit web assistant with RAG, local ChromaDB, and answer caching: uploads documents, retrieves relevant chunks, and generates context-aware responses.",
    },
    stack: ["FastAPI", "Streamlit", "ChromaDB", "ProxyAPI"],
    image: "/project-3.svg",
    link: "#",
    details: {
      overview: {
        ru: "Полноценный RAG-веб сервис с backend на FastAPI и frontend на Streamlit. Система загружает документы, строит эмбеддинги, выполняет семантический поиск в ChromaDB и генерирует ответ через OpenAI-совместимый API с учетом найденного контекста.",
        en: "Production-style RAG web service with FastAPI backend and Streamlit frontend. The system uploads documents, builds embeddings, performs semantic retrieval in ChromaDB, and generates context-aware answers via an OpenAI-compatible API.",
      },
      features: {
        ru: [
          "Загрузка документов через API и вопрос-ответ в стиле чата",
          "Семантический поиск по базе знаний в ChromaDB",
          "Кеширование ответов для ускорения повторных запросов",
          "История диалогов в SQLite и управление параметрами RAG",
        ],
        en: [
          "Document upload API and chat-style Q&A flow",
          "Semantic retrieval over knowledge base in ChromaDB",
          "Answer caching for faster repeated queries",
          "SQLite chat history and configurable RAG parameters",
        ],
      },
      implementation: {
        ru: [
          "FastAPI для backend-эндпоинтов: /upload, /ask, /config, /history",
          "Streamlit-интерфейс с сайдбаром настроек и интерактивным чатом",
          "ChromaDB как локальное векторное хранилище (persisted storage)",
          "ProxyAPI для LLM и эмбеддингов в OpenAI-совместимом формате",
        ],
        en: [
          "FastAPI backend endpoints: /upload, /ask, /config, /history",
          "Streamlit UI with settings sidebar and interactive chat",
          "ChromaDB as persisted local vector store",
          "ProxyAPI for LLM and embeddings via OpenAI-compatible format",
        ],
      },
      source: {
        ru: "Архитектура: FastAPI backend + Streamlit frontend + ChromaDB + SQLite.",
        en: "Architecture: FastAPI backend + Streamlit frontend + ChromaDB + SQLite.",
      },
    },
  },
  {
    name: { ru: "Passport Parser App (RF)", en: "Passport Parser App (RF)" },
    description: {
      ru: "Веб-приложение для загрузки паспорта РФ (PDF/JPG/PNG/JPEG) и извлечения структурированных полей через GigaChat API с предпросмотром, экспортом JSON/CSV и историей разборов.",
      en: "Web app for uploading Russian passports (PDF/JPG/PNG/JPEG) and extracting structured fields via GigaChat API with preview, JSON/CSV export, and parsing history.",
    },
    stack: ["FastAPI", "JavaScript", "PDF.js", "GigaChat API"],
    image: "/project-4.svg",
    link: "#",
    details: {
      overview: {
        ru: "Веб-приложение для безопасной загрузки паспорта РФ и извлечения структурированных данных через GigaChat Files API без локального OCR. Поддерживает предпросмотр, прозрачные статусы обработки и экспорт результата.",
        en: "Web application for secure Russian passport upload and structured data extraction via GigaChat Files API without local OCR. Includes preview, transparent processing states, and export features.",
      },
      features: {
        ru: [
          "Drag-and-drop загрузка файлов: PDF, JPG, JPEG, PNG (до 20MB)",
          "Предпросмотр: миниатюра изображения и первая страница PDF через PDF.js",
          "Извлечение полей паспорта с правилом 'ничего не придумывать' (null для пустых данных)",
          "Экспорт результатов в JSON/CSV и история разборов в localStorage",
        ],
        en: [
          "Drag-and-drop upload: PDF, JPG, JPEG, PNG (up to 20MB)",
          "Preview: image thumbnail and first PDF page via PDF.js",
          "Passport field extraction with strict no-hallucination null policy",
          "JSON/CSV export and parsing history in localStorage",
        ],
      },
      implementation: {
        ru: [
          "FastAPI backend с эндпоинтами /upload, /parse и /health",
          "Интеграция с GigaChat OAuth, Files API и chat/completions API",
          "Frontend на vanilla JavaScript + HTML/CSS с user-friendly обработкой ошибок",
          "Конфигурация через .env и запуск как локально, так и через Docker Compose",
        ],
        en: [
          "FastAPI backend with /upload, /parse, and /health endpoints",
          "Integration with GigaChat OAuth, Files API, and chat/completions API",
          "Vanilla JavaScript + HTML/CSS frontend with user-friendly error handling",
          "Environment-based config and both local/Docker Compose run modes",
        ],
      },
      source: {
        ru: "Источник API: документация GigaChat (developers.sber.ru/docs/ru/gigachat).",
        en: "API source: GigaChat documentation (developers.sber.ru/docs/ru/gigachat).",
      },
    },
  },
  {
    name: { ru: "MVP GPT Task Tracker Bot", en: "MVP GPT Task Tracker Bot" },
    description: {
      ru: "No-code MVP Telegram-ассистента для управления задачами на базе n8n и GPT: создание, список, обновление, завершение и удаление задач с дедлайнами и авто-напоминаниями.",
      en: "No-code MVP Telegram task assistant built with n8n and GPT: create, list, update, complete, and remove tasks with deadlines and auto-reminders.",
    },
    stack: ["n8n", "Telegram Bot API", "OpenAI GPT", "Data Tables"],
    image: "/project-5.svg",
    link: "#",
    details: {
      overview: {
        ru: "Проект реализует персонального Telegram-бота-таск трекера без классического backend-кода: логика построена в n8n workflow, где команды пользователя разбираются, маршрутизируются по интентам и сохраняются в Data Tables.",
        en: "This project delivers a personal Telegram task-tracker bot without a classic coded backend: the logic is implemented in n8n workflows where user commands are parsed, routed by intent, and persisted in Data Tables.",
      },
      features: {
        ru: [
          "Команды /newtask, /list, /updatetask для полного цикла управления задачами",
          "AI-извлечение содержания задачи и дедлайна из свободного текста",
          "Обновление дедлайна, завершение и удаление задач через intent-routing",
          "Автоматические напоминания о приближении дедлайна по расписанию",
        ],
        en: [
          "Commands /newtask, /list, /updatetask for full task lifecycle management",
          "AI extraction of task content and deadline from free-form text",
          "Deadline update, completion, and deletion via intent routing",
          "Scheduled automatic reminders for approaching deadlines",
        ],
      },
      implementation: {
        ru: [
          "n8n workflow с двумя триггерами: Telegram On Message и Schedule Trigger",
          "Switch + If + Set/Aggregate узлы для маршрутизации и форматирования ответов",
          "Data Tables как хранилище задач (chat_id, task_content, deadline_at, finished, notified)",
          "LLM-узлы для дружелюбных ответов и преобразования дедлайнов в ISO-формат",
        ],
        en: [
          "n8n workflow with two triggers: Telegram On Message and Schedule Trigger",
          "Switch + If + Set/Aggregate nodes for routing and response formatting",
          "Data Tables storage for tasks (chat_id, task_content, deadline_at, finished, notified)",
          "LLM nodes for friendly responses and ISO deadline normalization",
        ],
      },
      source: {
        ru: "Кейс из модуля No-code/API интеграций: MVP-ассистент на базе GPT в Telegram.",
        en: "Case from the No-code/API integrations module: GPT-based Telegram MVP assistant.",
      },
    },
  },
  {
    name: { ru: "AI HR Resume Matching Agent", en: "AI HR Resume Matching Agent" },
    description: {
      ru: "No-code HR-ассистент для автоматической обработки резюме: принимает входящие отклики, извлекает данные из PDF, выполняет matching с вакансиями и отправляет персонализированный ответ кандидату.",
      en: "No-code HR assistant for automated resume processing: ingests incoming applications, extracts PDF data, performs vacancy matching, and sends personalized candidate replies.",
    },
    stack: ["n8n", "Gmail API", "Google Sheets", "OpenAI GPT-4"],
    image: "/project-6.svg",
    link: "#",
    details: {
      overview: {
        ru: "ИИ-агент автоматизирует первичный этап HR-воронки: получает резюме, преобразует его в структурированный профиль кандидата, сравнивает с вакансиями из базы и принимает решение о формате ответа. Сценарий экономит время рекрутера и снижает ручную рутину.",
        en: "The AI agent automates the first stage of the HR funnel: receives resumes, transforms them into structured candidate profiles, matches them against vacancies, and decides how to respond. The flow saves recruiter time and reduces manual routine.",
      },
      features: {
        ru: [
          "Автоматический прием входящих откликов и загрузка PDF-резюме",
          "Экстракция структурированных полей кандидата (контакты, опыт, навыки, зарплата)",
          "AI-matching кандидата с вакансиями и скоринг соответствия",
          "Отправка персонализированного письма (инвайт/отказ) и защита от дублей",
        ],
        en: [
          "Automated intake of incoming applications with PDF resume handling",
          "Structured candidate field extraction (contacts, experience, skills, salary)",
          "AI-based candidate-to-vacancy matching with scoring",
          "Personalized reply flow (invite/reject) with duplicate protection",
        ],
      },
      implementation: {
        ru: [
          "n8n workflow: Gmail Trigger -> Extract from PDF -> Information Extractor -> AI Agent",
          "Google Sheets как база вакансий и хранилище результатов кандидатов",
          "Системный промпт с формализованным JSON-ответом и порогом match-score",
          "If-ветвления + Gmail Send/Label + Wait для реалистичной и безопасной автоматизации",
        ],
        en: [
          "n8n workflow: Gmail Trigger -> Extract from PDF -> Information Extractor -> AI Agent",
          "Google Sheets as vacancy source and candidate results storage",
          "System prompt with strict JSON output and match-score threshold",
          "If branches + Gmail Send/Label + Wait for realistic and safer automation",
        ],
      },
      source: {
        ru: "Кейс PEn05: создание ИИ-агента для HR-обработки резюме и автоматических ответов.",
        en: "PEn05 case: building an AI agent for HR resume processing and automated replies.",
      },
    },
  },
];
