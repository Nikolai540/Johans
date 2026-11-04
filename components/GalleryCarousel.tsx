"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/Icons";
import { gallery } from "@/lib/gallery";

const count = gallery.length;

// Karussell: Wischen (scroll-snap), Pfeil-Buttons, Punkte und Pfeiltasten.
// Der Rahmen hat 4:3, das Standardformat von Handykameras. Hochkant-Fotos werden nicht beschnitten.
export function GalleryCarousel({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // Ziel der laufenden Bewegung, damit schnelles Mehrfach-Drücken weiterzählt
  const target = useRef(0);
  const moving = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current!;
    const next = Math.max(0, Math.min(count - 1, i));
    target.current = next;
    // Bis das Ziel erreicht ist, zählt die Scrollposition nicht als neues Ziel (Rückfall nach 1,5 s, falls unterbrochen)
    if (moving.current) clearTimeout(moving.current);
    moving.current = setTimeout(() => (moving.current = null), 1500);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: next * track.clientWidth, behavior: still ? "auto" : "smooth" });
  }, []);

  // Aktuelles Bild aus der Scrollposition, auch nach dem Wischen
  useEffect(() => {
    const track = trackRef.current!;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        setIndex(i);
        if (moving.current && Math.abs(track.scrollLeft - target.current * track.clientWidth) < 2) {
          clearTimeout(moving.current);
          moving.current = null;
        }
        if (!moving.current) target.current = i;
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Pfeiltasten: wenn der Fokus im Karussell liegt – oder nirgends und das Karussell gut zu sehen ist
  useEffect(() => {
    const root = rootRef.current!;
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.intersectionRatio >= 0.5), { threshold: [0, 0.5, 1] });
    io.observe(root);
    const onKey = (e: KeyboardEvent) => {
      if ((e.key !== "ArrowLeft" && e.key !== "ArrowRight") || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const active = document.activeElement;
      const idle = !active || active === document.body;
      if (!root.contains(active) && !(idle && visible)) return;
      e.preventDefault();
      goTo(target.current + (e.key === "ArrowRight" ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [goTo]);

  const control =
    "flex size-12 items-center justify-center rounded-sm bg-canvas text-ink transition-colors duration-[180ms] hover:bg-surface-strong disabled:cursor-not-allowed disabled:bg-surface-dark-elevated disabled:text-on-dark-soft";

  return (
    <div ref={rootRef} role="region" aria-roledescription="Karussell" aria-label="Fotos von unseren Baustellen" className={className}>
      <div
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Bilder, mit den Pfeiltasten blättern"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((item, i) => (
          <figure
            key={item.caption}
            role="group"
            aria-roledescription="Folie"
            aria-label={`${i + 1} von ${count}`}
            className="relative aspect-[4/3] w-full shrink-0 snap-start overflow-hidden bg-surface-dark-elevated"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className={item.src.height > item.src.width ? "object-contain" : "object-cover"}
            />
            <figcaption className="absolute bottom-xs left-xs max-w-[calc(100%-var(--spacing-md))] rounded-sm bg-surface-dark px-sm py-xxs text-body-sm text-on-dark">
              {item.placeholder && <span className="font-bold">Platzhalter: </span>}
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-md flex items-center gap-md">
        <p aria-live="polite" className="text-title-sm text-on-dark tabular">
          <span className="sr-only">
            Bild {index + 1} von {count}
          </span>
          <span aria-hidden>
            {index + 1} / {count}
          </span>
        </p>
        <ul className="hidden flex-1 items-center gap-xxs sm:flex" aria-label="Bild auswählen">
          {gallery.map((item, i) => (
            <li key={item.caption}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Bild ${i + 1}: ${item.caption}`}
                aria-current={i === index ? "true" : undefined}
                className="group flex h-6 w-7 items-center justify-center"
              >
                <span
                  className={`h-1 w-full rounded-pill transition-colors duration-[180ms] ${
                    i === index ? "bg-primary" : "bg-muted-soft group-hover:bg-on-dark"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex gap-xs">
          <button type="button" onClick={() => goTo(target.current - 1)} disabled={index === 0} aria-label="Vorheriges Bild" className={control}>
            <ArrowIcon className="size-5 rotate-180" />
          </button>
          <button type="button" onClick={() => goTo(target.current + 1)} disabled={index === count - 1} aria-label="Nächstes Bild" className={control}>
            <ArrowIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
