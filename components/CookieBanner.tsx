"use client";

import { setConsent, useConsent } from "@/lib/consent";

// Ablehnen und Akzeptieren sind gleich groß und gleich auffällig, nichts ist vorausgewählt (§ 25 TDDDG, Art. 7 DSGVO)
export function CookieBanner() {
  const consent = useConsent();
  if (consent !== null) return null;

  return (
    <section
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-[55] border-t border-hairline-strong bg-canvas pb-[env(safe-area-inset-bottom)]"
    >
      <div className="page-x mx-auto flex max-w-page flex-col gap-md py-md lg:flex-row lg:items-center lg:justify-between lg:gap-xl">
        <div className="max-w-[72ch]">
          <h2 id="cookie-title" className="text-title-sm text-ink">
            Externe Inhalte
          </h2>
          <p className="mt-xxs text-body-sm text-body">
            Wir setzen keine Tracking-Cookies. Für die Karte von Google Maps braucht es Ihre Zustimmung, denn dabei
            werden Daten wie Ihre IP-Adresse an Google übertragen, auch in die USA. Sie können Ihre Wahl jederzeit über
            „Cookie-Einstellungen“ im Fußbereich ändern. Mehr dazu in der{" "}
            <a href="/datenschutz/" className="link link-underlined text-ink">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-xs">
          <button type="button" className="btn btn-primary" onClick={() => setConsent("denied")}>
            Ablehnen
          </button>
          <button type="button" className="btn btn-primary" onClick={() => setConsent("granted")}>
            Akzeptieren
          </button>
        </div>
      </div>
    </section>
  );
}

export function ConsentSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => setConsent(null)}>
      Cookie-Einstellungen
    </button>
  );
}
