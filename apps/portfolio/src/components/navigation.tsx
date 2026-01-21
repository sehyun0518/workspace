"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/constants/section";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    SECTIONS.forEach((section) => {
      const box = document.getElementById(section);
      if (box) observer.observe(box);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-1/2 left-8 z-10 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
            className={`h-8 w-2 rounded-full transition-all duration-500 ${
              activeSection === section
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
}
