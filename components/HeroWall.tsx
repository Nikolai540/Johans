"use client";

import { useLayoutEffect, useRef, useState } from "react";

// PLATZHALTER: Das echte Wandfoto fehlt noch. Sobald public/images/hero/wand-1920.webp (1920 × 1080)
// und wand-900.webp (900 × 1200) liegen, auf true setzen. Bis dahin malt der Canvas eine Putz-Textur.
const HAS_PHOTO = false;
const SEEN_KEY = "jl-hero-wand";

// Zeitplan in Sekunden
const T_CRACK = 0.6;
const T_FALL = 1.0;
const T_END = 2.2;

type Pt = [number, number];
type Piece = {
  path: Path2D;
  cx: number;
  cy: number;
  td: number;
  vx: number;
  vy: number;
  spin: number;
  sprite: HTMLCanvasElement;
  sx: number;
  sy: number;
  dusted: boolean;
};
type Crack = { pts: Pt[]; d0: number };
type Dust = { x: number; y: number; vx: number; vy: number; r: number; born: number; life: number };
type Scene = {
  w: number;
  h: number;
  dpr: number;
  mobile: boolean;
  texture: HTMLCanvasElement;
  pieces: Piece[];
  cracks: Crack[];
  crackPath: Path2D;
  c: Pt;
  dmax: number;
};

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// cubic-bezier aus den Design-Tokens (--ease-out, --ease-in-out)
function tokenEase(name: string) {
  const [x1, y1, x2, y2] = getComputedStyle(document.documentElement).getPropertyValue(name).match(/-?[\d.]+/g)!.map(Number);
  const bez = (t: number, a: number, b: number) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  return (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = 3 * x1 * (1 - t) ** 2 + 6 * (x2 - x1) * t * (1 - t) + 3 * (1 - x2) * t * t;
      t = Math.min(1, Math.max(0, t - (bez(t, x1, x2) - x) / (dx || 1e-6)));
    }
    return bez(t, y1, y2);
  };
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// Risskante zwischen zwei Punkten: leicht gezackt statt gerade
function jag(a: Pt, b: Pt, rnd: () => number): Pt[] {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const pts: Pt[] = [a];
  for (let s = 1; s < 4; s++) {
    const f = s / 4 + (rnd() - 0.5) * 0.12;
    const o = (rnd() - 0.5) * 0.14;
    pts.push([a[0] + dx * f - dy * o, a[1] + dy * f + dx * o]);
  }
  pts.push(b);
  return pts;
}

function toPath(pts: Pt[]) {
  const p = new Path2D();
  pts.forEach(([x, y], i) => (i ? p.lineTo(x, y) : p.moveTo(x, y)));
  p.closePath();
  return p;
}

// Ehrlicher Platzhalter: grauer Putz mit Flecken, alten Haarrissen und abgeplatzten Stellen mit Ziegeln
function paintPlaster(ctx: CanvasRenderingContext2D, w: number, h: number, rnd: () => number) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#a29d93");
  g.addColorStop(1, "#8a857b");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 28; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = (0.05 + rnd() * 0.2) * Math.max(w, h);
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, rnd() < 0.6 ? "rgba(58,52,44,0.12)" : "rgba(232,225,210,0.1)");
    rg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = rg;
    ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  const bw = Math.min(72, Math.max(40, w / 20));
  const bh = bw * 0.32;
  const m = Math.max(2, bw * 0.06);
  const bricks = ["#7a4c40", "#85594b", "#6e4438", "#8d6352", "#9a8771", "#7f5246"];
  for (let p = 0, tries = 0; p < 3 && tries < 40; tries++) {
    const px = (0.08 + rnd() * 0.84) * w;
    const py = (0.08 + rnd() * 0.84) * h;
    const rad = (0.045 + rnd() * 0.05) * Math.max(w, h);
    // nicht unter den Schriftzug
    if (Math.abs(py - h * 0.3) < rad + 30 && Math.abs(px - w / 2) < Math.min(w / 2, 260) + rad) continue;
    p++;
    const blob: Pt[] = [];
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2;
      const r = rad * (0.6 + rnd() * 0.45);
      blob.push([px + Math.cos(a) * r * 1.4, py + Math.sin(a) * r]);
    }
    const path = toPath(blob);
    ctx.save();
    ctx.clip(path);
    ctx.fillStyle = "#857d70";
    ctx.fillRect(px - rad * 2, py - rad * 2, rad * 4, rad * 4);
    for (let y = Math.floor((py - rad * 1.6) / (bh + m)) * (bh + m), row = 0; y < py + rad * 1.6; y += bh + m, row++) {
      for (let x = px - rad * 2 - (row % 2 ? bw / 2 : 0); x < px + rad * 2; x += bw + m) {
        ctx.fillStyle = bricks[Math.floor(rnd() * bricks.length)];
        ctx.fillRect(x, y, bw, bh);
        ctx.fillStyle = `rgba(30,22,18,${rnd() * 0.3})`;
        ctx.fillRect(x, y, bw, bh);
        ctx.fillStyle = "rgba(0,0,0,0.18)"; // Fuge liegt tiefer: Schatten unter jeder Steinkante
        ctx.fillRect(x, y + bh, bw, m * 0.6);
      }
    }
    // Putzstaub auf den Steinen, und die Putzkante wirft Schatten in die Fehlstelle
    ctx.fillStyle = "rgba(160,152,140,0.32)";
    ctx.fillRect(px - rad * 2, py - rad * 2, rad * 4, rad * 4);
    ctx.lineWidth = 12;
    ctx.strokeStyle = "rgba(25,20,16,0.35)";
    ctx.stroke(path);
    ctx.restore();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgba(225,219,206,0.6)";
    ctx.stroke(path);
  }
  ctx.strokeStyle = "rgba(55,50,44,0.4)";
  ctx.lineWidth = 0.8;
  for (let i = 0; i < 6; i++) {
    let x = rnd() * w;
    let y = rnd() * h;
    let a = rnd() * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let s = 0; s < 12; s++) {
      a += (rnd() - 0.5) * 1.2;
      x += Math.cos(a) * (12 + rnd() * 20);
      y += Math.sin(a) * (12 + rnd() * 20);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

// Kleiner, ruhiger Schriftzug, aufgemalt auf die Wand, damit er mit ihr zerbricht
function paintLettering(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const ff = getComputedStyle(document.body).fontFamily;
  const a = "J&L Bauprojekte";
  const b = "Abbruch · Entkernung · Entrümpelung";
  const s = w < 768 ? 1 : 1.15;
  const bold = `700 ${15 * s}px ${ff}`;
  const light = `300 ${14 * s}px ${ff}`;
  ctx.fillStyle = "rgba(29,28,26,0.78)";
  ctx.textBaseline = "middle";
  ctx.font = bold;
  const wa = ctx.measureText(a + " · ").width;
  ctx.font = light;
  const wb = ctx.measureText(b).width;
  const y = h * 0.3;
  if (wa + wb < w - 48) {
    const x = (w - wa - wb) / 2;
    ctx.textAlign = "left";
    ctx.font = bold;
    ctx.fillText(a + " · ", x, y);
    ctx.font = light;
    ctx.fillText(b, x + wa, y);
  } else {
    ctx.textAlign = "center";
    ctx.font = bold;
    ctx.fillText(a, w / 2, y - 11 * s);
    ctx.font = light;
    ctx.fillText(b, w / 2, y + 11 * s);
  }
}

function addNoise(ctx: CanvasRenderingContext2D, rnd: () => number) {
  const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = (rnd() - 0.5) * 22;
    d[i] += v;
    d[i + 1] += v;
    d[i + 2] += v;
  }
  ctx.putImageData(img, 0, 0);
}

function buildScene(canvas: HTMLCanvasElement, photo: HTMLImageElement | null): Scene {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const mobile = w < 768;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const rnd = rng(7);

  const texture = document.createElement("canvas");
  texture.width = canvas.width;
  texture.height = canvas.height;
  const tctx = texture.getContext("2d")!;
  tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (photo) {
    const k = Math.max(w / photo.naturalWidth, h / photo.naturalHeight);
    tctx.drawImage(photo, (w - photo.naturalWidth * k) / 2, (h - photo.naturalHeight * k) / 2, photo.naturalWidth * k, photo.naturalHeight * k);
  } else paintPlaster(tctx, w, h, rnd);
  paintLettering(tctx, w, h);
  if (!photo) addNoise(tctx, rnd);

  // Netz aus Strahlen und versetzten Ringen um den Einschlag: 8 × 3 = 24 Stücke mobil, 12 × 5 = 60 sonst
  const R = mobile ? 8 : 12;
  const K = mobile ? 3 : 5;
  const c: Pt = [w / 2, h * 0.56];
  const step = (Math.PI * 2) / R;
  const ang = Array.from({ length: R }, (_, i) => -Math.PI / 2 + i * step + (rnd() - 0.5) * step * 0.5);
  const edge = (a: number): Pt => {
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    const t = Math.min(dx > 0 ? (w - c[0]) / dx : dx < 0 ? -c[0] / dx : Infinity, dy > 0 ? (h - c[1]) / dy : dy < 0 ? -c[1] / dy : Infinity);
    return [c[0] + dx * t, c[1] + dy * t];
  };
  const nodes = ang.map((a, i) => {
    const b = edge(a);
    return Array.from({ length: K + 1 }, (_, k): Pt => {
      if (k === 0) return c;
      if (k === K) return b;
      const f = ((k + (i % 2) * 0.35 - 0.15 + (rnd() - 0.5) * 0.3) / K) ** 1.35;
      return [c[0] + (b[0] - c[0]) * f, c[1] + (b[1] - c[1]) * f];
    });
  });
  const radial = nodes.map((n) => n.map((p, k) => (k ? jag(n[k - 1], p, rnd) : [])));
  const ring = nodes.map((n, i) => n.map((p, k) => (k > 0 && k < K ? jag(p, nodes[(i + 1) % R][k], rnd) : [])));
  const corners: Pt[] = [[w, 0], [w, h], [0, h], [0, 0]];
  const angleTo = (p: Pt, from: number) => (((Math.atan2(p[1] - c[1], p[0] - c[0]) - from) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

  const cracks: Crack[] = [];
  const crackPath = new Path2D();
  const addCrack = (pts: Pt[]) => {
    if (Math.hypot(pts[0][0] - c[0], pts[0][1] - c[1]) > Math.hypot(pts.at(-1)![0] - c[0], pts.at(-1)![1] - c[1])) pts = [...pts].reverse();
    cracks.push({ pts, d0: Math.hypot(pts[0][0] - c[0], pts[0][1] - c[1]) });
    pts.forEach(([x, y], i) => (i ? crackPath.lineTo(x, y) : crackPath.moveTo(x, y)));
  };
  radial.forEach((r) => r.slice(1).forEach(addCrack));
  ring.forEach((r) => r.slice(1, K).forEach(addCrack));

  const dmax = Math.max(...corners.map((p) => Math.hypot(p[0] - c[0], p[1] - c[1])));
  const pad = 28;
  const pieces: Piece[] = [];
  let area = 0;
  for (let i = 0; i < R; i++) {
    const j = (i + 1) % R;
    for (let k = 1; k <= K; k++) {
      let outer: Pt[];
      if (k < K) outer = ring[i][k];
      else {
        const span = angleTo(nodes[j][K], ang[i]);
        const inside = corners.filter((p) => angleTo(p, ang[i]) < span).sort((p, q) => angleTo(p, ang[i]) - angleTo(q, ang[i]));
        outer = [nodes[i][K], ...inside, nodes[j][K]];
      }
      const pts = [...radial[i][k], ...outer, ...[...radial[j][k]].reverse(), ...(k > 1 ? [...ring[i][k - 1]].reverse() : [])];
      for (let n = 0; n < pts.length; n++) {
        const [x1, y1] = pts[n];
        const [x2, y2] = pts[(n + 1) % pts.length];
        area += (x1 * y2 - x2 * y1) / 2;
      }
      const xs = pts.map((p) => p[0]);
      const ys = pts.map((p) => p[1]);
      const cx = xs.reduce((s, v) => s + v, 0) / xs.length;
      const cy = ys.reduce((s, v) => s + v, 0) / ys.length;
      const bx = Math.min(...xs) - pad;
      const by = Math.min(...ys) - pad;
      const path = toPath(pts);

      // Stück vorab rendern: Schlagschatten, Ausschnitt der Wand, feiner Innenschatten, helle Bruchkante
      const sprite = document.createElement("canvas");
      sprite.width = Math.ceil((Math.max(...xs) + pad - bx) * dpr);
      sprite.height = Math.ceil((Math.max(...ys) + pad - by) * dpr);
      const s = sprite.getContext("2d")!;
      s.setTransform(dpr, 0, 0, dpr, -bx * dpr, -by * dpr);
      s.shadowColor = "rgba(0,0,0,0.4)";
      s.shadowBlur = 16;
      s.shadowOffsetY = 10;
      s.fillStyle = "#4a463f";
      s.fill(path);
      s.shadowColor = "transparent";
      s.save();
      s.clip(path);
      s.drawImage(texture, 0, 0, w, h);
      s.lineWidth = 6;
      s.strokeStyle = "rgba(20,18,15,0.28)";
      s.stroke(path);
      s.lineWidth = 2;
      s.strokeStyle = "rgba(245,238,224,0.45)";
      s.stroke(path);
      s.restore();

      const dx = cx - c[0];
      const dy = cy - c[1];
      const dist = Math.hypot(dx, dy) || 1;
      const speed = 50 + rnd() * 90;
      pieces.push({
        path,
        cx,
        cy,
        td: T_FALL + 0.55 * clamp01(dist / dmax) ** 0.9 + rnd() * 0.05,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed * 0.5 - rnd() * 30,
        spin: (rnd() * 2 - 1) * 1.5,
        sprite,
        sx: bx - cx,
        sy: by - cy,
        dusted: false,
      });
    }
  }
  // Selbstprüfung: Stücke decken die Wand lückenlos ab und bleiben im Rahmen 24–60
  console.assert(Math.abs(Math.abs(area) - w * h) < w * h * 0.001, "HeroWall: Stücke decken die Wand nicht ab");
  console.assert(pieces.length >= 24 && pieces.length <= 60, "HeroWall: Stückzahl außerhalb 24–60");
  return { w, h, dpr, mobile, texture, pieces, cracks, crackPath, c, dmax };
}

function dustSprite() {
  const d = document.createElement("canvas");
  d.width = d.height = 64;
  const x = d.getContext("2d")!;
  const rg = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  rg.addColorStop(0, "rgba(198,188,172,1)");
  rg.addColorStop(0.5, "rgba(198,188,172,0.45)");
  rg.addColorStop(1, "rgba(198,188,172,0)");
  x.fillStyle = rg;
  x.fillRect(0, 0, 64, 64);
  return d;
}

export function HeroWall() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const finishRef = useRef(() => setDone(true));

  useLayoutEffect(() => {
    if (done) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) !== null;
    } catch {}
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) return setDone(true);

    const canvas = canvasRef.current!;
    const wall = wallRef.current!;
    rootRef.current!.style.animation = "none"; // React steuert jetzt, die CSS-Notbremse wird nicht mehr gebraucht
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let cancelled = false;
    const finish = () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      setDone(true);
    };
    finishRef.current = finish;

    // Skip-Button oberhalb von Adressleiste und Cookie-Banner halten
    const placeSkip = () => {
      const banner = document.querySelector('[aria-labelledby="cookie-title"]')?.getBoundingClientRect().height ?? 0;
      const rect = wall.getBoundingClientRect();
      const hidden = Math.max(0, rect.bottom - (window.innerHeight - banner));
      skipRef.current!.style.bottom = `max(calc(16px + env(safe-area-inset-bottom)), ${hidden + 16}px)`;
    };
    placeSkip();

    let scene: Scene | null = null;
    let photo: HTMLImageElement | null = null;
    let dirty = true;
    let falling = false;
    const ro = new ResizeObserver(() => {
      placeSkip();
      if (!falling) dirty = true; // läuft der Einsturz schon, bleibt alles, wie es ist
    });
    ro.observe(wall);

    const heroImg = rootRef.current!.closest("section")?.querySelector("img");
    const loads: Promise<unknown>[] = [document.fonts.ready, heroImg ? heroImg.decode() : Promise.resolve()];
    if (HAS_PHOTO) {
      photo = new Image();
      photo.src = window.innerWidth < 768 ? "/images/hero/wand-900.webp" : "/images/hero/wand-1920.webp";
      loads.push(photo.decode());
    }
    const timeout = new Promise((_, reject) => setTimeout(reject, 3000));

    Promise.race([Promise.all(loads), timeout]).then(
      () => {
        if (cancelled) return;
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {}
        placeSkip(); // der Cookie-Banner erscheint erst nach dem Hydrieren
        const easeOut = tokenEase("--ease-out");
        const easeInOut = tokenEase("--ease-in-out");
        const shake = !window.matchMedia("(max-width: 767px)").matches && window.matchMedia("(pointer: fine)").matches;
        const puff = dustSprite();
        const dust: Dust[] = [];
        let dustBudget = 0;
        let t0 = -1;
        let tctx: CanvasRenderingContext2D | null = null;

        const spawn = (x: number, y: number, n: number, t: number, spread: number) => {
          const max = scene!.mobile ? 25 : 80;
          for (let i = 0; i < n && dust.length < max; i++) {
            dust.push({
              x: x + (Math.random() - 0.5) * spread,
              y: y + (Math.random() - 0.5) * spread,
              vx: (Math.random() - 0.5) * 40,
              vy: Math.random() * 30 - 8,
              r: 20 + Math.random() * 40,
              born: t,
              life: 0.8 + Math.random() * 0.6,
            });
          }
        };

        // Risse wachsen vom Einschlag nach außen; u = 1 zeichnet alle vollständig
        const strokeCracks = (c: CanvasRenderingContext2D, u: number) => {
          const S = scene!;
          c.lineCap = "round";
          c.lineJoin = "round";
          c.lineWidth = (S.mobile ? 1.2 : 1.5) * (0.4 + 0.6 * u);
          let path = S.crackPath;
          if (u < 1) {
            path = new Path2D();
            const rho = easeOut(u) * S.dmax;
            for (const { pts, d0 } of S.cracks) {
              let left = rho - d0;
              if (left <= 0) continue;
              path.moveTo(pts[0][0], pts[0][1]);
              for (let n = 1; n < pts.length && left > 0; n++) {
                const [ax, ay] = pts[n - 1];
                const [bx, by] = pts[n];
                const len = Math.hypot(bx - ax, by - ay);
                const f = Math.min(1, left / len);
                path.lineTo(ax + (bx - ax) * f, ay + (by - ay) * f);
                left -= len;
              }
            }
          }
          // helle Unterkante, dann der dunkle Riss darüber
          c.save();
          c.translate(0, 1);
          c.strokeStyle = `rgba(235,228,214,${0.25 * u})`;
          c.stroke(path);
          c.restore();
          c.strokeStyle = `rgba(22,20,17,${0.45 + 0.5 * u})`;
          c.stroke(path);
        };

        const frame = (now: number) => {
          if (t0 < 0) t0 = now;
          const t = (now - t0) / 1000;
          if (t >= T_END) return finish();
          if (dirty && t < T_FALL) {
            scene = buildScene(canvas, photo);
            dirty = false;
          }
          const S = scene!;
          const { w, h, dpr } = S;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, w, h);

          if (t >= T_FALL && !falling) {
            falling = true;
            wall.style.background = "transparent";
            wall.style.pointerEvents = "none";
            rootRef.current!.style.pointerEvents = "none";
            // ab jetzt ändert sich die Größe nicht mehr: Risse und Löcher einmal in die Textur, statt jedes Bild neu
            tctx = S.texture.getContext("2d")!;
            tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            strokeCracks(tctx, 1);
            tctx.globalCompositeOperation = "destination-out";
            tctx.lineWidth = 1.5;
          }
          const perPiece = ((S.mobile ? 25 : 80) - (S.mobile ? 4 : 8)) / S.pieces.length;
          for (const p of S.pieces) {
            if (!falling || p.dusted || p.td > t) continue;
            p.dusted = true;
            tctx!.fill(p.path);
            tctx!.stroke(p.path);
            dustBudget += perPiece;
            const n = Math.floor(dustBudget);
            dustBudget -= n;
            spawn(p.cx, p.cy, n, t, 40);
          }

          // Einschlag: auf Desktop höchstens 3 px für 150 ms
          let ox = 0;
          if (shake && t > T_CRACK && t < T_CRACK + 0.15) {
            const p = (t - T_CRACK) / 0.15;
            ox = Math.sin(p * Math.PI * 4) * 3 * (1 - p);
            ctx.translate(ox, ox * 0.4);
          }

          const standing = S.pieces.some((p) => p.td > t);
          if (standing) {
            ctx.drawImage(S.texture, 0, 0, w, h);
            if (t >= T_CRACK && !falling) strokeCracks(ctx, clamp01((t - T_CRACK) / (T_FALL - T_CRACK)));
          }

          if (t >= T_CRACK && dust.length === 0) spawn(S.c[0], S.c[1], S.mobile ? 4 : 8, t, 30);

          if (falling) {
            const g = 2.6 * h;
            const fade = 1 - easeInOut(clamp01((t - 1.6) / (T_END - 1.6)));
            for (const p of S.pieces) {
              const a = t - p.td;
              if (a < 0) continue;
              const x = p.cx + p.vx * a;
              const y = p.cy + p.vy * a + 0.5 * g * a * a;
              if (y + p.sy > h + 40) continue;
              const rot = p.spin * a;
              const sc = 1 + 0.07 * a;
              const cos = Math.cos(rot) * sc * dpr;
              const sin = Math.sin(rot) * sc * dpr;
              ctx.setTransform(cos, sin, -sin, cos, x * dpr, y * dpr);
              ctx.globalAlpha = fade;
              ctx.drawImage(p.sprite, p.sx, p.sy, p.sprite.width / dpr, p.sprite.height / dpr);
            }
            ctx.globalAlpha = 1;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          }

          const dustFade = 1 - easeInOut(clamp01((t - 1.7) / (T_END - 1.7)));
          for (const d of dust) {
            const age = t - d.born;
            const a = age / d.life;
            if (a >= 1) continue;
            const r = d.r * (1 + 1.4 * a);
            ctx.globalAlpha = 0.16 * Math.min(1, a / 0.15) * (1 - a) ** 1.5 * dustFade;
            ctx.drawImage(puff, d.x + d.vx * age - r, d.y + d.vy * age - r, r * 2, r * 2);
          }
          ctx.globalAlpha = 1;

          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      },
      () => !cancelled && finish(), // Bild lädt nicht oder zu langsam: Wand weg, Hero bleibt
    );

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [done]);

  if (done) return null;
  return (
    <div ref={rootRef} className="hero-wall absolute inset-0 z-10" suppressHydrationWarning>
      <div
        ref={wallRef}
        aria-hidden
        onClick={() => finishRef.current()}
        className="absolute inset-0 touch-none bg-[#8f8a80]"
      >
        <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      </div>
      <button
        ref={skipRef}
        type="button"
        aria-label="Animation überspringen"
        onClick={() => finishRef.current()}
        className="on-dark pointer-events-auto absolute left-md bottom-[calc(16px+env(safe-area-inset-bottom))] min-h-11 rounded-sm bg-surface-dark/70 px-md text-body-sm text-on-dark"
      >
        Überspringen
      </button>
      {/* Schon gesehen in dieser Sitzung: Wand vor dem ersten Bild ausblenden, ohne auf React zu warten */}
      <script
        type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `try{sessionStorage.getItem("${SEEN_KEY}")!==null&&(document.currentScript.parentElement.style.display="none")}catch(e){}`,
        }}
      />
    </div>
  );
}
