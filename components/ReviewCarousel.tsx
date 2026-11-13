"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowIcon, PauseIcon, PlayIcon } from "@/components/Icons";
import type { Review } from "@/lib/reviews";

const de = (n: number) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });
const STAR = "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z";

// Schrift wie bei Google. next/font legt sie beim Build auf den eigenen Server, der Browser lädt nichts von Google.
// Kein Preload: Die Bewertungen stehen weit unten, und ohne API-Key gibt es den Abschnitt gar nicht
const roboto = Roboto({ subsets: ["latin"], preload: false });

export function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${de(rating)} von 5 Sternen`} className="flex gap-xxs text-primary">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" aria-hidden className={`size-5 ${n <= Math.round(rating) ? "fill-current" : "fill-muted-soft"}`}>
          <path d={STAR} />
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
    "flex size-12 items-center justify-center rounded-sm bg-canvas text-ink transition-colors duration-[180ms] hover:bg-surface-strong";

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
      {/* Buttons außerhalb der Folien: Sie gibt es nur einmal, und der Fokus bleibt nach dem Klick auf dem Pfeil */}
      {count > 1 && (
        <div className="mb-md flex items-center gap-xs">
          <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Automatischen Wechsel anhalten" : "Automatischen Wechsel starten"} className={control}>
            {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
          </button>
          <p className="ml-xs text-title-sm text-on-dark tabular">
            <span className="sr-only">
              Bewertung {index + 1} von {count}
            </span>
            <span aria-hidden>
              {index + 1} / {count}
            </span>
          </p>
          <div className="ml-auto flex gap-xs">
            <button type="button" onClick={() => go(-1)} aria-label="Vorherige Bewertung" className={control}>
              <ArrowIcon className="size-5 rotate-180" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Nächste Bewertung" className={control}>
              <ArrowIcon className="size-5" />
            </button>
          </div>
        </div>
      )}

      {/* Während des automatischen Wechsels keine Ansagen, sonst unterbricht der Screenreader alle 5 s */}
      <div className="grid" aria-live={rotating ? "off" : "polite"}>
        {items.map((r, i) => (
          // Die Karte selbst sieht aus wie eine Bewertung bei Google, darum feste Google-Farben statt der Design-Tokens
          <figure
            key={r.author + r.when}
            role="group"
            aria-roledescription="Folie"
            aria-label={`${i + 1} von ${count}`}
            className={`${roboto.className} col-start-1 row-start-1 rounded-lg bg-[#fff] p-4 text-[14px] font-normal leading-5 text-[#202124] shadow-[0_1px_2px_rgb(60_64_67/0.3),0_1px_3px_1px_rgb(60_64_67/0.15)] ${
              i === index ? (turn % 2 ? "review-in-right" : "review-in-left") : "invisible"
            }`}
          >
            <figcaption className="flex items-center gap-3">
              {r.photo ? (
                // Läuft über die Bildoptimierung von Next: Unser Server lädt das Bild, der Browser spricht nicht mit Google
                <Image src={r.photo} alt="" width={40} height={40} className="size-10 shrink-0 rounded-full" />
              ) : (
                <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a73e8] text-[18px] text-[#fff]">
                  {r.author.charAt(0).toUpperCase()}
                </span>
              )}
              {r.authorUri ? (
                <a href={r.authorUri} target="_blank" rel="noopener" className="min-w-0 flex-1 truncate text-[16px] font-medium hover:underline">
                  {r.author}
                </a>
              ) : (
                <span className="min-w-0 flex-1 truncate text-[16px] font-medium">{r.author}</span>
              )}
              <GoogleLogo />
            </figcaption>
            <div className="mt-2 flex items-center gap-2">
              <span role="img" aria-label={`${de(r.rating)} von 5 Sternen`} className="flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <svg key={n} viewBox="0 0 24 24" aria-hidden className={`size-[14px] ${n <= Math.round(r.rating) ? "fill-[#fbbc04]" : "fill-[#dadce0]"}`}>
                    <path d={STAR} />
                  </svg>
                ))}
              </span>
              {r.when && <span className="text-[13px] text-[#70757a]">{r.when}</span>}
            </div>
            <blockquote className="mt-2 whitespace-pre-line">{r.text}</blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Google" className="size-5 shrink-0">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
