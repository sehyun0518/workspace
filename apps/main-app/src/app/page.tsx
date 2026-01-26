"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen px-6 pt-12">
      {/* Gradient blob */}
      <div
        className="absolute top-0 right-0 h-75 w-75 animate-pulse rounded-full bg-linear-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="max-w-3xl whitespace-pre-line font-light text-6xl leading-tight tracking-tight">
          {t.hero.title}
        </h1>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {/* Blog Card */}
          <Link
            href="/blog"
            className="group relative flex h-80 flex-col justify-between rounded-3xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h2 className="font-light text-3xl">{t.hero.blog.title}</h2>
              <p className="mt-4 text-gray-600">{t.hero.blog.description}</p>
            </div>
            <div className="flex items-center justify-between border-gray-200 border-t pt-6">
              <span className="font-medium text-sm">{t.hero.blog.action}</span>
              <span className="rounded-full bg-black p-2 text-white transition-transform group-hover:rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Portfolio Card */}
          <Link
            href="/portfolio"
            className="group relative flex h-80 flex-col justify-between rounded-3xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h2 className="font-light text-3xl">{t.hero.portfolio.title}</h2>
              <p className="mt-4 text-gray-600">{t.hero.portfolio.description}</p>
            </div>
            <div className="flex items-center justify-between border-gray-200 border-t pt-6">
              <span className="font-medium text-sm">{t.hero.portfolio.action}</span>
              <span className="rounded-full bg-black p-2 text-white transition-transform group-hover:rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-24 flex justify-between pb-12">
          <div className="max-w-md">
            <p className="whitespace-pre-line text-gray-600 text-sm leading-relaxed">{t.hero.footer}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
