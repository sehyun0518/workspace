"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex space-x-2">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <button
          className="font-medium text-sm uppercase hover:opacity-70"
          onClick={() => setLanguage(language === "en" ? "ko" : "en")}>
          {language === "en" ? "KO" : "EN"}
        </button>
        <Link href="/blog" className="text-sm hover:underline">
          {t.header.blog}
        </Link>
        <Link href="/portfolio" className="text-sm hover:underline">
          {t.header.portfolio}
        </Link>
      </div>
    </header>
  );
}
