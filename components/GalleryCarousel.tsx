"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ChevronIcon, CloseIcon, PauseIcon, PlayIcon } from "@/components/Icons";
import { gallery } from "@/lib/gallery";

const count = gallery.length;
const SPEED = 40; // px pro Sekunde

// Bilderstreifen über die volle Breite, alle Bilder gleich hoch. Er läuft von selbst langsam durch und
// lässt sich wischen oder mit den Pfeilen schieben. Ein Klick öffnet das Bild groß.
// Die Bilder liegen zweimal hintereinander: Ist der Streifen um eine Hälfte weitergelaufen, springt er unsichtbar zurück.
// shortcut: Bei sehr wenigen Bildern ist eine Hälfte schmaler als der Bildschirm, dann hakt die Schleife. Ab etwa 5 Bildern passt es.
// Pausiert bei Maus, Fokus oder Finger auf dem Streifen, in der Großansicht, per Button und bei reduzierter Bewegung (WCAG 2.2.2).
export function GalleryCarousel({ className }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState(true);
  const [open, setOpen] = useState<number | null>(null);
  const held = useRef(false);
  // Pfeil-Klicks scrollen weich, solange steht der Streifen still
  const nudgedUntil = useRef(0);
  const run = playing && open === null;

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!run) return;
    const track = trackRef.current!;
    // Eigene Position als Kommazahl, scrollLeft rundet manche Browser auf ganze Pixel
    let pos = track.scrollLeft;
    let last = performance.now();
    let frame = requestAnimationFrame(function step(now) {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft; // Nutzer hat selbst geschoben
      if (!held.current && now > nudgedUntil.current) {
        const half = track.scrollWidth / 2;
        pos += SPEED * dt;
        if (pos >= half) pos -= half;
        track.scrollLeft = pos;
      }
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [run]);

  const nudge = (dir: number) => {
    const track = trackRef.current!;
    const half = track.scrollWidth / 2;
    // Vor dem Schieben in die passende Hälfte springen, damit es in beide Richtungen endlos weitergeht
    if (dir < 0 && track.scrollLeft < track.clientWidth) track.scrollLeft += half;
    if (dir > 0 && track.scrollLeft > half) track.scrollLeft -= half;
    nudgedUntil.current = performance.now() + 900;
    track.scrollBy({ left: dir * track.clientWidth * 0.6, behavior: "smooth" });
  };

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current!.showModal();
  };
  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + count) % count));
  const current = open === null ? null : gallery[open];

  const arrow =
    "absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-surface-dark/60 text-white opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100";
  const hold = (v: boolean) => () => (held.current = v);

  return (
    <div role="region" aria-roledescription="Karussell" aria-label="Fotos von unseren Baustellen" className={className}>
      <div
        className="group relative"
        onMouseEnter={hold(true)}
        onMouseLeave={hold(false)}
        onFocus={hold(true)}
        onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && (held.current = false)}
        onTouchStart={hold(true)}
        onTouchEnd={() => setTimeout(() => (held.current = false), 1500)}
      >
        <div ref={trackRef} className="flex gap-xxs overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[0, 1].map((copy) =>
            gallery.map((item, i) => (
              <button
                key={`${copy}-${item.caption}`}
                type="button"
                onClick={() => show(i)}
                aria-hidden={copy === 1 || undefined}
                tabIndex={copy === 1 ? -1 : undefined}
                aria-label={`${item.caption}, groß anzeigen`}
                className="relative h-60 shrink-0 overflow-hidden bg-surface-dark-elevated sm:h-72 lg:h-[22rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes={`${Math.round((352 * item.src.width) / item.src.height)}px`}
                  className="h-full w-auto transition-transform duration-[400ms] hover:scale-[1.03]"
                />
              </button>
            )),
          )}
        </div>
        <button type="button" onClick={() => nudge(-1)} aria-label="Bilder nach links schieben" className={`${arrow} left-md`}>
          <ChevronIcon className="size-6 rotate-90" />
        </button>
        <button type="button" onClick={() => nudge(1)} aria-label="Bilder nach rechts schieben" className={`${arrow} right-md`}>
          <ChevronIcon className="size-6 -rotate-90" />
        </button>
      </div>

      <div className="page-x mx-auto mt-md flex max-w-page justify-end">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Automatischen Lauf anhalten" : "Automatischen Lauf starten"}
          className="flex size-12 items-center justify-center rounded-sm bg-canvas text-ink transition-colors duration-[180ms] hover:bg-surface-strong"
        >
          {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
        </button>
      </div>

      {/* Großansicht: <dialog> hält den Fokus darin, Esc schließt, der Rest der Seite ist solange gesperrt */}
      <dialog
        ref={dialogRef}
        aria-label="Großansicht"
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-canvas p-0 text-ink backdrop:bg-surface-dark/80"
      >
        <div
          className="flex h-full flex-col items-center justify-center gap-md px-[4.5rem] py-xxl"
          onClick={(e) => e.target === e.currentTarget && dialogRef.current!.close()}
        >
          {current && (
            <>
              <Image
                key={open}
                src={current.src}
                alt={current.alt}
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="h-auto max-h-[calc(100dvh-10rem)] w-auto max-w-full object-contain"
              />
              <p className="text-body-sm text-body">
                {current.placeholder && <span className="font-bold">Platzhalter: </span>}
                {current.caption}
                <span className="ml-sm tabular">
                  {open! + 1} / {count}
                </span>
              </p>
            </>
          )}
        </div>
        <button type="button" onClick={() => dialogRef.current!.close()} aria-label="Großansicht schließen" className="absolute top-md right-md flex size-12 items-center justify-center rounded-sm hover:bg-surface-strong">
          <CloseIcon className="size-6" />
        </button>
        <button type="button" onClick={() => step(-1)} aria-label="Vorheriges Bild" className="absolute top-1/2 left-xs flex size-12 -translate-y-1/2 items-center justify-center rounded-sm hover:bg-surface-strong">
          <ChevronIcon className="size-7 rotate-90" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Nächstes Bild" className="absolute top-1/2 right-xs flex size-12 -translate-y-1/2 items-center justify-center rounded-sm hover:bg-surface-strong">
          <ChevronIcon className="size-7 -rotate-90" />
        </button>
      </dialog>
    </div>
  );
}
