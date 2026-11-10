"use client";

import { setConsent, useConsent } from "@/lib/consent";
import { site } from "@/lib/site";

const place = `${site.name}, ${site.branch.street}, ${site.branch.postalCode} ${site.branch.locality}`;
// shortcut: Einbettung ohne API-Schlüssel (output=embed), bei Problemen auf die Maps Embed API mit Schlüssel umstellen
const embed = `https://www.google.com/maps?q=${encodeURIComponent(place)}&z=10&hl=de&output=embed`;
const open = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

// Google Maps lädt erst nach Zustimmung (Banner oder Button hier), vorher wird keine Verbindung zu Google aufgebaut
export function LocationMap({ className }: { className?: string }) {
  const consent = useConsent();

  if (consent === "granted") {
    return <iframe src={embed} title="Karte mit unserem Standort in Landsberg am Lech (Google Maps)" loading="lazy" className={`border-0 ${className ?? ""}`} />;
  }

  return (
    <div role="region" aria-label="Karte" className={`flex flex-col items-center justify-center gap-md p-lg text-center ${className ?? ""}`}>
      <p className="max-w-[44ch] text-body-sm text-body">
        Die Karte kommt von Google Maps. Beim Laden werden Daten wie Ihre IP-Adresse an Google übertragen, auch in die USA.
      </p>
      <button type="button" className="btn btn-primary" onClick={() => setConsent("granted")}>
        Karte laden
      </button>
      <a href={open} target="_blank" rel="noopener" className="link link-underlined text-title-sm text-ink">
        In Google Maps öffnen
      </a>
    </div>
  );
}
