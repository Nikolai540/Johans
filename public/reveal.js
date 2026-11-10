// Blendet [data-reveal]-Elemente beim Scrollen ein.
// Die Web Animations API ändert keine Attribute, React sieht beim Hydrieren also unverändertes HTML.
// Ohne JavaScript bleibt alles sichtbar. Eigene Datei statt Inline-Skript: React erzeugt <script async src> nie neu.
(() => {
  if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const run = () => {
    const reveals = new WeakMap();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { reveals.get(e.target).play(); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    for (const el of document.querySelectorAll("[data-reveal]")) {
      // Schon sichtbar, wenn das Skript startet: stehen lassen statt kurz auszublenden
      if (el.getBoundingClientRect().top < innerHeight) continue;
      const i = parseFloat(el.style.getPropertyValue("--i")) || 0;
      const a = el.animate(
        [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }],
        { duration: 500, delay: i * 60, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
      );
      a.pause();
      reveals.set(el, a);
      io.observe(el);
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
