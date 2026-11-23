// Scroll-Effekt nach Vorbild lusion.co/projects: Karten kippen leicht mit der Scrollgeschwindigkeit,
// Bilder wandern langsamer als ihr Rahmen (Parallax). Alles läuft weich nach, das echte Scrollen bleibt unberührt.
// [data-scroll-card]: Karte, [data-scroll-parallax]: Bild darin (wird 14 % größer, damit keine Kante sichtbar wird).
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const run = () => {
    const cards = [...document.querySelectorAll("[data-scroll-card]")];
    if (!cards.length) return;
    const items = cards.map((card) => ({ card, img: card.querySelector("[data-scroll-parallax]") }));
    const SKEW = 0.06; // Grad Kippung je px/Frame Scrollgeschwindigkeit
    const MAX_SKEW = 1.2;
    const PARALLAX = 0.08; // Anteil der Kartenhöhe, um den das Bild gegen die Karte wandert
    let lastY = scrollY, vel = 0, raf = 0;

    const frame = () => {
      vel += ((scrollY - lastY) - vel) * 0.12; // Geschwindigkeit glätten
      lastY = scrollY;
      const skew = Math.max(-MAX_SKEW, Math.min(MAX_SKEW, vel * SKEW));
      for (const { card, img } of items) {
        const r = card.getBoundingClientRect();
        if (r.bottom < -100 || r.top > innerHeight + 100) continue;
        card.style.transform = `skewY(${skew.toFixed(3)}deg)`;
        if (img) {
          const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; // -1 … 1 um die Bildschirmmitte
          img.style.transform = `translate3d(0, ${(-p * r.height * PARALLAX).toFixed(1)}px, 0) scale(1.14)`;
        }
      }
      raf = Math.abs(vel) > 0.02 ? requestAnimationFrame(frame) : 0;
      if (!raf) for (const { card } of items) card.style.transform = "";
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };
    addEventListener("scroll", wake, { passive: true });
    addEventListener("resize", wake, { passive: true });
    wake();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
