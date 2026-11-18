"use client";

import { useEffect, useRef, useState } from "react";

type Brick = { x: number; y: number; w: number; h: number; color: string; vx: number; vy: number; a: number; va: number };
type Dust = { x: number; y: number; vx: number; vy: number; s: number; life: number };

const GAP = 2;
const MORTAR = "#3a3430";
const rnd = (min: number, max: number) => min + Math.random() * (max - min);

// Läufer-Verband: jede zweite Reihe um einen halben Stein versetzt, Stein immer 2:1
function layout(w: number, h: number): Brick[] {
  const cols = Math.max(1, Math.round(w / (w < 768 ? 65 : 110)));
  const bw = w / cols;
  const bh = bw / 2;
  const bricks: Brick[] = [];
  for (let r = 0; r * bh < h; r++) {
    const odd = r % 2 === 1;
    for (let c = odd ? -1 : 0; c < cols; c++) {
      const color = `hsl(${rnd(8, 18)} ${rnd(40, 55)}% ${rnd(30, 42)}%)`;
      bricks.push({ x: c * bw + (odd ? bw / 2 : 0), y: r * bh, w: bw, h: bh, color, vx: 0, vy: 0, a: 0, va: 0 });
    }
  }
  return bricks;
}

export function HeroWall() {
  const button = useRef<HTMLButtonElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [broken, setBroken] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const btn = button.current!;
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }

    let bricks: Brick[] = [];
    let dust: Dust[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let isBroken = false;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      if (!isBroken) {
        ctx.fillStyle = MORTAR;
        ctx.fillRect(0, 0, w, h);
      }
      for (const b of bricks) {
        ctx.save();
        ctx.translate(b.x + b.w / 2, b.y + b.h / 2);
        ctx.rotate(b.a);
        ctx.fillStyle = b.color;
        ctx.fillRect(-b.w / 2 + GAP / 2, -b.h / 2 + GAP / 2, b.w - GAP, b.h - GAP);
        ctx.restore();
      }
      ctx.fillStyle = "#b9b2a6";
      for (const d of dust) {
        ctx.globalAlpha = Math.max(d.life, 0);
        ctx.fillRect(d.x, d.y, d.s, d.s);
      }
      ctx.globalAlpha = 1;
    };

    // Grid nur neu berechnen, solange die Mauer steht
    const fit = () => {
      if (isBroken) return;
      const r = cv.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bricks = layout(w, h);
      draw();
    };

    const smash = (px: number, py: number) => {
      if (isBroken) return;
      isBroken = true;
      setBroken(true);
      const reach = Math.hypot(w, h);
      for (const b of bricks) {
        const dx = b.x + b.w / 2 - px;
        const dy = b.y + b.h / 2 - py;
        const d = Math.hypot(dx, dy) || 1;
        const speed = (300 + 700 * (1 - Math.min(d / reach, 1))) * rnd(0.5, 1);
        b.vx = (dx / d) * speed;
        b.vy = (dy / d) * speed - 250;
        b.va = rnd(-5, 5);
      }
      // Mörtelstaub: auf Mobile deutlich weniger, damit Mittelklasse-Geräte bei 60 FPS bleiben
      dust = Array.from({ length: w < 768 ? 30 : 120 }, () => {
        const b = bricks[Math.floor(Math.random() * bricks.length)];
        return { x: b.x + b.w / 2, y: b.y + b.h / 2, vx: rnd(-150, 150), vy: rnd(-200, 50), s: rnd(2, 5), life: 1 };
      });
      let last = performance.now();
      let elapsed = 0;
      const tick = (t: number) => {
        const dt = Math.min((t - last) / 1000, 0.032);
        last = t;
        elapsed += dt;
        for (const b of bricks) {
          b.vy += 1800 * dt;
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          b.a += b.va * dt;
        }
        for (const d of dust) {
          d.vy += 300 * dt;
          d.x += d.vx * dt;
          d.y += d.vy * dt;
          d.life -= dt * 1.2;
        }
        draw();
        if (elapsed > 3 || bricks.every((b) => b.y > h + b.h)) setGone(true);
        else raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // pointerdown deckt Tap und Swipe ab: jede Wischgeste beginnt mit einem Touch auf die Mauer
    const onDown = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      smash(e.clientX - r.left, e.clientY - r.top);
    };
    const onClick = () => smash(w / 2, h / 2); // Tastatur (Enter/Leertaste); nach pointerdown wirkungslos

    fit();
    window.addEventListener("resize", fit);
    btn.addEventListener("pointerdown", onDown);
    btn.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
      btn.removeEventListener("pointerdown", onDown);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  if (gone) return null;
  return (
    <button
      ref={button}
      type="button"
      data-wall
      aria-label="Mauer einreißen und Seite öffnen"
      className={`absolute inset-0 z-20 cursor-pointer touch-none overflow-hidden ${broken ? "pointer-events-none" : "bg-surface-dark"}`}
    >
      <canvas ref={canvas} aria-hidden className="absolute inset-0 size-full" />
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 flex flex-col items-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-on-dark transition-opacity duration-300 ${broken ? "opacity-0" : ""}`}
      >
        <span className="flex flex-1 items-center text-[clamp(1.75rem,5vw,4rem)] leading-tight font-bold text-balance hyphens-auto [text-shadow:0_2px_16px_rgb(0_0_0/0.6)]">
          Entkernung & Entrümpelung
        </span>
        <span className="text-body-sm">Tippen oder nach oben wischen</span>
      </span>
    </button>
  );
}
