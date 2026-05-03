import { Fira_Code, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  adjustFontFallback: true,
});

export const firaCode = Fira_Code({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400"],
  variable: "--font-geist-mono",
  adjustFontFallback: true,
});
