import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "ru") {
    return {
      title: "Промпт-инженер и AI-разработчик | Создание AI-ассистентов на заказ",
      description:
        "Разрабатываю кастомных AI-ассистентов, чат-ботов и RAG-системы для бизнеса. Опыт 25+ проектов. Свяжитесь для обсуждения.",
      alternates: {
        canonical: "https://itprompt.ru/ru/",
        languages: {
          ru: "https://itprompt.ru/ru/",
          en: "https://itprompt.ru/en/",
          "x-default": "https://itprompt.ru/ru/",
        },
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: "Prompt Engineer & AI Developer | Custom AI Assistants",
    description:
      "I build custom AI assistants, chatbots and RAG systems for business. 25+ projects delivered. Get in touch.",
    alternates: {
      canonical: "https://itprompt.ru/en/",
      languages: {
        ru: "https://itprompt.ru/ru/",
        en: "https://itprompt.ru/en/",
        "x-default": "https://itprompt.ru/ru/",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}
