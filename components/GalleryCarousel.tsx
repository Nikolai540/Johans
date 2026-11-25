"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ChevronIcon, CloseIcon } from "@/components/Icons";
import type { GalleryItem } from "@/lib/gallery";

const SPEED = 40; // px pro Sekunde

// Bilderstreifen über die volle Breite, alle Bilder gleich hoch. Er läuft von selbst langsam durch und
// lässt sich wischen oder seitlich scrollen. Ein Klick öffnet das Bild groß.
// Die Bilder liegen zweimal hintereinander: Ist der Streifen um eine Hälfte weitergelaufen, springt er unsichtbar zurück.
// shortcut: Bei sehr wenigen Bildern ist eine Hälfte schmaler als der Bildschirm, dann hakt die Schleife. Ab etwa 5 Bildern passt es.
// Läuft unter der Maus weiter. Pausiert bei Tastaturfokus oder Finger auf dem Streifen, in der Großansicht und bei reduzierter Bewegung.
// Ohne Pause-Knopf erfüllt das WCAG 2.2.2 nur teilweise.
export function GalleryCarousel({ items: gallery, className }: { items: GalleryItem[]; className?: string }) {
  const count = gallery.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [reduced, setReduced] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const held = useRef(false);
  const run = !reduced && open === null;

  useEffect(() => setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches), []);

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
      if (!held.current) {
        const half = track.scrollWidth / 2;
        pos += SPEED * dt;
        if (pos >= half) pos -= half;
        track.scrollLeft = pos;
      }
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [run]);

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current!.showModal();
  };
  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + count) % count));
  const current = open === null ? null : gallery[open];

  const hold = (v: boolean) => () => (held.current = v);

  return (
    <div role="region" aria-roledescription="Karussell" aria-label="Fotos von unseren Baustellen" className={className}>
      <div
        // Nur Tastaturfokus hält an: Nach einem Mausklick bleibt der Fokus auf dem Bild, der Streifen soll trotzdem weiterlaufen
        onFocus={(e) => e.target.matches(":focus-visible") && (held.current = true)}
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
                className="relative h-80 shrink-0 overflow-hidden bg-surface-dark-elevated sm:h-96 lg:h-[32rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes={`${Math.round((512 * item.src.width) / item.src.height)}px`}
                  className="h-full w-auto transition-transform duration-[400ms] hover:scale-[1.03]"
                />
              </button>
            )),
          )}
        </div>
      </div>

      {/* Großansicht: <dialog> hält den Fokus darin, Esc schließt, der Rest der Seite ist solange gesperrt */}
      <dialog
        ref={dialogRef}
        aria-label="Großansicht"
        onClose={() => {
          setOpen(null);
          // Der Fokus springt beim Schließen aufs Bild zurück, das soll den Streifen nicht anhalten
          held.current = false;
        }}
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
