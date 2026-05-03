import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { firaCode, inter } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itprompt.ru"),
  title: "AI Engineer Portfolio",
  description: "Portfolio for Prompt Engineer and AI Agent Developer",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="noise-overlay min-h-full bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <WebVitalsReporter />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
