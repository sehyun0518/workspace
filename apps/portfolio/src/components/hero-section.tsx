"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "I design digital experiences.",
  "I build fast websites.",
  "I craft beautiful brands.",
  "I create intuitive interfaces.",
];

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToConnect = () => {
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pt-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-8 animate-fade-in text-muted-foreground text-sm uppercase tracking-wider">
          Frontend Developer
        </p>

        <h1 className="mb-8 h-60 animate-fade-in-delay-1 font-bold text-5xl leading-tight md:text-7xl lg:text-8xl">
          <span className="text-balance">{displayText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl animate-fade-in-delay-2 text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
          기획과 디자인을 코드로 연결하는 허브, <br />
          비즈니스 임팩트를 창출하는 프론트엔드 개발자 김세현입니다.
        </p>

        <div className="mb-12 flex animate-fade-in-delay-3 flex-col items-center gap-3">
          <p className="font-medium text-base md:text-lg">Sehyun Kim</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Jungnang-gu, Seoul</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>Available for work</span>
            </div>
          </div>
        </div>

        <div className="flex animate-fade-in-delay-4 flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-medium text-accent-foreground transition-opacity hover:opacity-90">
            View My Work
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={scrollToConnect}
            className="rounded-lg border border-border px-8 py-4 font-medium transition-colors hover:bg-muted">
            Connect
          </button>
        </div>
      </div>
    </section>
  );
}
