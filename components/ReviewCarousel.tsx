"use client";

import { useEffect, useState } from "react";

import { ArrowIcon, PauseIcon, PlayIcon } from "@/components/Icons";
import type { Review } from "@/lib/reviews";

const de = (n: number) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });

export function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${de(rating)} von 5 Sternen`} className="flex gap-xxs text-secondary">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" aria-hidden className={`size-5 ${n <= Math.round(rating) ? "fill-current" : "fill-hairline-strong"}`}>
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

const INTERVAL = 5000;

// Eine Bewertung zur Zeit, die nächste fliegt abwechselnd von links und rechts herein.
// Alle Karten liegen übereinander im selben Rasterfeld: Die Höhe richtet sich nach der längsten, nichts springt.
// Pausiert bei Maus oder Fokus im Karussell, per Button und bei reduzierter Bewegung (WCAG 2.2.2).
export function ReviewCarousel({ items, className }: { items: Review[]; className?: string }) {
  const count = items.length;
  // turn zählt jeden Wechsel, die Richtung wechselt so auch beim Sprung von der letzten zur ersten Karte
  const [{ index, turn }, setPos] = useState({ index: 0, turn: 0 });
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const rotating = playing && !held && count > 1;

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const t = setTimeout(() => setPos((p) => ({ index: (p.index + 1) % count, turn: p.turn + 1 })), INTERVAL);
    return () => clearTimeout(t);
  }, [rotating, index, count]);

  const go = (step: number) => setPos((p) => ({ index: (p.index + step + count) % count, turn: p.turn + 1 }));
  const control =
    "flex size-12 items-center justify-center rounded-sm border border-hairline-strong bg-canvas text-ink transition-colors duration-[180ms] hover:bg-surface-strong";

  return (
    <div
      role="region"
      aria-roledescription="Karussell"
      aria-label="Google-Bewertungen"
      className={className}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHeld(false)}
    >
      <div className="ml-auto flex gap-xs">
            <button type="button" onClick={() => go(-1)} aria-label="Vorherige Bewertung" className={control}>
              <ArrowIcon className="size-5 rotate-180" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Nächste Bewertung" className={control}>
              <ArrowIcon className="size-5" />
            </button>
          </div>
      {/* Während des automatischen Wechsels keine Ansagen, sonst unterbricht der Screenreader alle 7 s */}
      <div className="grid" aria-live={rotating ? "off" : "polite"}>
        {items.map((r, i) => (
          <figure
            key={r.author + r.when}
            role="group"
            aria-roledescription="Folie"
            aria-label={`${i + 1} von ${count}`}
            className={`card col-start-1 row-start-1 flex flex-col p-lg sm:p-xl ${
              i === index ? (turn % 2 ? "review-in-right" : "review-in-left") : "invisible"
            }`}
          >
            <Stars rating={r.rating} />
            <blockquote className="mt-md whitespace-pre-line text-body-md sm:text-title-md sm:font-light">{r.text}</blockquote>
            <figcaption className="mt-auto flex items-center gap-sm pt-lg text-body-sm text-body">
              <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-strong text-title-sm text-ink">
                {r.author.charAt(0).toUpperCase()}
              </span>
              <span>
                {r.authorUri ? (
                  <a href={r.authorUri} target="_blank" rel="noopener" className="link font-bold text-ink">
                    {r.author}
                  </a>
                ) : (
                  <span className="font-bold text-ink">{r.author}</span>
                )}
                {r.when && <span className="block">{r.when} auf Google</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-md flex items-center gap-xs">
          <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Automatischen Wechsel anhalten" : "Automatischen Wechsel starten"} className={control}>
            {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
          </button>
          <p className="ml-xs text-title-sm text-ink tabular">
            <span className="sr-only">
              Bewertung {index + 1} von {count}
            </span>
            <span aria-hidden>
              {index + 1} / {count}
            </span>
          </p>
          
        </div>
      )}
    </div>
  );
}
