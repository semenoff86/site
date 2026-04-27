import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import { isLocale } from "@/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale} />;
}
