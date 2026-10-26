"use client";

import { useEffect, useState } from "react";

import { serviceCategories } from "@/lib/content";

type CategoryId = (typeof serviceCategories)[number]["id"];

// Inhaltsverzeichnis der Leistungen: markiert den Bereich, der gerade gelesen wird.
export function ServiceIndex({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [active, setActive] = useState<CategoryId | null>(null);

  useEffect(() => {
    const heads = serviceCategories
      .map((c) => document.getElementById(`leistung-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id.replace("leistung-", "") as CategoryId);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  return (
    <ul className={className} style={style} aria-label="Unsere Leistungsbereiche" data-reveal>
      {serviceCategories.map((c) => {
        const on = active === c.id;
        return (
          <li key={c.id}>
            <a
              href={`#leistung-${c.id}`}
              aria-current={on ? "location" : undefined}
              className={`link inline-flex min-h-11 items-center text-body-md transition-colors duration-[180ms] ${
                on ? "font-bold text-ink" : "text-muted"
              }`}
            >
              {c.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
