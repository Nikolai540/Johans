"use client";

import { useEffect, useState } from "react";

import { serviceOrder, services, type ServiceId } from "@/lib/content";

// Inhaltsverzeichnis der Leistungen: markiert die Leistung, die gerade gelesen wird.
export function ServiceIndex({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [active, setActive] = useState<ServiceId | null>(null);

  useEffect(() => {
    const heads = serviceOrder
      .map((id) => document.getElementById(`leistung-${id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id.replace("leistung-", "") as ServiceId);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  return (
    <ul className={className} style={style} aria-label="Alle Leistungen" data-reveal>
      {serviceOrder.map((id) => {
        const on = active === id;
        return (
          <li key={id}>
            <a
              href={`#leistung-${id}`}
              aria-current={on ? "location" : undefined}
              className={`link inline-flex min-h-8 items-center text-body-md transition-colors duration-[180ms] ${
                on ? "font-bold text-ink" : "text-muted"
              }`}
            >
              {services[id].name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
