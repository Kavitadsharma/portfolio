"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "current-role", label: "Role" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Academic" },
  { id: "certification", label: "Certificate" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
      {sections.map(({ id, label }) => {
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group relative flex items-center justify-end w-32 h-6"
            aria-label={`Scroll to ${label}`}
          >
            {/* LABEL (visible on hover or when active) */}
            <span
              className={`absolute right-8 text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-all duration-300
                ${isActive
                  ? `opacity-100 translate-x-0 ${isDark ? "text-cyan-400" : "text-rose-600"}`
                  : `opacity-0 translate-x-4 group-hover:opacity-70 group-hover:translate-x-0 ${isDark ? "text-gray-400" : "text-gray-500"}`
                }`}
            >
              {label}
            </span>

            {/* DOT */}
            <span
              className={`rounded-full transition-all duration-300 border backdrop-blur-sm
                ${isActive
                  ? isDark
                    ? "w-4 h-4 bg-cyan-400/80 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                    : "w-4 h-4 bg-rose-500/80 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)]"
                  : isDark
                    ? "w-2.5 h-2.5 bg-gray-600/30 border-gray-500/50 group-hover:bg-cyan-400/30 group-hover:border-cyan-400/50"
                    : "w-2.5 h-2.5 bg-gray-300/50 border-gray-400/50 group-hover:bg-rose-500/30 group-hover:border-rose-500/50"
                }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
