"use client";

import { useState } from "react";

import type { ContainerSize } from "@/lib/subpages";

const margin = 20; // Platz links und rechts für Ösen und Haken (cm)
const hookSpace = 30; // Haken des Abrollcontainers über der Oberkante (cm)

// Alle Größen maßstabsgetreu nebeneinander; die gewählte ist hervorgehoben und unten erklärt.
export function ContainerSizes({ sizes, className }: { sizes: ContainerSize[]; className?: string }) {
  const [active, setActive] = useState(0);
  const current = sizes[active];
  const cols = sizes.map((s) => `${s.length + 2 * margin}fr`).join(" ");

  return (
    <div role="group" aria-label="Containergrößen im Vergleich" className={className}>
      {/* Spaltenbreiten im Verhältnis der Längen: so haben alle Zeichnungen denselben Maßstab */}
      <div className="grid items-end gap-x-xs sm:gap-x-sm" style={{ gridTemplateColumns: cols }}>
        {sizes.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.volume}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(i)}
              className="group flex cursor-pointer flex-col text-left"
            >
              <Container size={s} on={on} />
              <span className="mt-xs block border-t-2 border-ink pt-xs text-center">
                <span
                  className={`block text-body-sm whitespace-nowrap tabular transition-colors duration-[240ms] ${
                    on ? "font-bold text-ink" : "text-muted group-hover:text-ink"
                  }`}
                >
                  {s.volume}
                </span>
                <span className="sr-only">{s.kind}</span>
                <span aria-hidden className={`mx-auto mt-xxs block h-1 w-full max-w-12 bg-primary ${on ? "" : "invisible"}`} />
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-lg border-l-4 border-primary bg-surface-card p-md text-body-md">
        <span className="block text-display-sm text-ink tabular">{current.volume}</span>
        <span className="block font-bold text-ink">{current.kind}</span>
        <span className="mt-xxs block">Faustregel: {current.use}</span>
      </p>
    </div>
  );
}

function Container({ size, on }: { size: ContainerSize; on: boolean }) {
  const fill = on ? "var(--color-primary)" : "var(--color-surface-strong)";
  const stroke = on ? "var(--color-ink)" : "var(--color-hairline-strong)";
  const shape = { fill, stroke, strokeWidth: 4, strokeLinejoin: "round" as const, className: "transition-[fill,stroke] duration-[240ms]" };
  const { length: l, height: h } = size;

  if (size.kind === "Abrollcontainer") {
    const top = hookSpace;
    const bottom = top + h - 14;
    const ribs = Array.from({ length: Math.floor(l / 80) - 1 }, (_, i) => margin + 80 * (i + 1));
    return (
      <svg viewBox={`0 0 ${l + 2 * margin} ${h + hookSpace}`} aria-hidden className="block h-auto w-full overflow-visible">
        <rect x={margin} y={top} width={l} height={bottom - top} {...shape} />
        {ribs.map((x) => (
          <line key={x} x1={x} y1={top + 10} x2={x} y2={bottom - 10} stroke={stroke} strokeWidth={3} className="transition-[stroke] duration-[240ms]" />
        ))}
        {/* Haken an der Stirnseite, Rollen hinten */}
        <path d={`M${margin} ${top + h * 0.6} H${margin - 10} V12 H${margin + 6}`} fill="none" stroke={stroke} strokeWidth={6} strokeLinejoin="round" className="transition-[stroke] duration-[240ms]" />
        <circle cx={margin + l - 30} cy={bottom + 4} r={10} {...shape} />
      </svg>
    );
  }

  const inset = (l - (size.base ?? l)) / 2;
  const lug = { y: h * 0.35, x: inset * 0.35 };
  return (
    <svg viewBox={`0 0 ${l + 2 * margin} ${h}`} aria-hidden className="block h-auto w-full overflow-visible">
      <path d={`M${margin} 0 H${margin + l} L${margin + l - inset} ${h} H${margin + inset} Z`} {...shape} />
      <line x1={margin + inset * 0.15} y1={h * 0.15} x2={margin + l - inset * 0.15} y2={h * 0.15} stroke={stroke} strokeWidth={3} className="transition-[stroke] duration-[240ms]" />
      {/* Ösen für die Ketten des Absetzkippers */}
      <circle cx={margin + lug.x - 8} cy={lug.y} r={7} {...shape} />
      <circle cx={margin + l - lug.x + 8} cy={lug.y} r={7} {...shape} />
    </svg>
  );
}
