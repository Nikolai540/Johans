"use client";

import { useEffect, useState } from "react";

import { PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

// Daumenzone auf dem Smartphone: erscheint, sobald die Hero-Buttons aus dem Bild sind,
// und weicht, solange das Kontaktformular ausgefüllt wird.
export function MobileActions() {
  const [heroPassed, setHeroPassed] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero-actions]");
    const form = document.querySelector("#kontakt-formular form");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setHeroPassed(!e.isIntersecting && e.boundingClientRect.top < 0);
        if (e.target === form) setFormInView(e.isIntersecting);
      }
    });
    if (hero) io.observe(hero);
    else setHeroPassed(true);
    if (form) io.observe(form);
    return () => io.disconnect();
  }, []);

  const visible = heroPassed && !formInView;

  return (
    <div
      className={`on-dark fixed inset-x-0 bottom-0 z-40 bg-surface-dark px-sm pt-sm pb-[max(12px,env(safe-area-inset-bottom))] transition-transform duration-[240ms] ease-[var(--ease-out)] lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-xs">
        <a href={site.phone.href} className="btn btn-primary px-md" tabIndex={visible ? 0 : -1}>
          <PhoneIcon className="size-4" />
          Jetzt anrufen
        </a>
        <a href="#kontakt-formular" className="btn btn-secondary px-md" tabIndex={visible ? 0 : -1}>
          Kontakt aufnehmen
        </a>
      </div>
    </div>
  );
}
