import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value as "en" | "ko") || "en";

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
