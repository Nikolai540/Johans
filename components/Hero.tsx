import Image from "next/image";

import { photo } from "@/lib/images";
import { homeCopy } from "@/lib/homes";
import { locationById, type LocationId } from "@/lib/site";
import demontage from "@/public/images/startseite/hero/demontage-stahltank.jpg";
import wanddurchbruch from "@/public/images/startseite/hero/wanddurchbruch.jpg";

// Überblendung; nur das erste Foto lädt sofort, die anderen danach.
// Eigene Fotos aus public/images/startseite/hero/ in alphabetischer Reihenfolge, danach das Symbolbild.
// position: Bildausschnitt, damit Person und Motiv quer (Desktop) und hochkant (Handy) im Bild bleiben.
const slides = [
  {
    src: demontage,
    alt: "Mitarbeiter mit Gehörschutz und Schutzbrille zerlegt im Keller einen Stahltank mit dem Winkelschleifer, Funken sprühen",
    caption: "Demontage eines Stahltanks im Keller",
    position: "object-[62%_38%]",
  },
  {
    src: wanddurchbruch,
    alt: "Wanddurchbruch im Wohnhaus: Die Öffnung ist mit Stahlprofilen abgefangen, davor liegen die Ziegel der abgebrochenen Wand",
    caption: "Wanddurchbruch im Wohnhaus",
    position: "object-[50%_45%]",
  },
  { ...photo("startseite", "entkernung"), position: "object-[50%_35%]" },
];

export function Hero({ location }: { location: LocationId }) {
  const copy = homeCopy[location];
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[560px] flex-col justify-end bg-surface-dark text-on-dark h-[calc(100svh-var(--spacing-nav))]"
    >
      {slides.map((p, i) => (
        <div key={p.caption} className="hero-slide absolute inset-0 -z-10" style={{ ["--i" as string]: i }}>
          <Image
            src={p.src}
            alt={i === 0 ? p.alt : ""}
            fill
            preload={i === 0}
            sizes="100vw"
            placeholder="blur"
            className={`object-cover ${p.position}`}
          />
        </div>
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-surface-dark/85 via-surface-dark/50 to-surface-dark/25" />
      {/* Bildtexte über der Abdunklung, mit den Fotos synchron */}
      <ul aria-hidden className="absolute right-md bottom-xs hidden text-body-sm text-on-dark-soft md:block lg:right-xl">
        {slides.map((p, i) => (
          <li key={p.caption} className="hero-slide absolute right-0 bottom-0 whitespace-nowrap" style={{ ["--i" as string]: i }}>
            {p.caption}
          </li>
        ))}
      </ul>

      <div className="page-x mx-auto w-full max-w-page pb-xxl lg:pb-section">
        <h1 id="hero-title" className="max-w-[22ch] text-display-md text-on-dark sm:text-display-lg">
          <span data-rise className="block" style={{ ["--i" as string]: 0 }}>
            Abbruch, Entkernung & Haushaltsauflösung
          </span>{" "}
          <span data-rise className="block" style={{ ["--i" as string]: 1 }}>
            in {locationById(location).town} und Umgebung
          </span>
        </h1>
        <p data-rise style={{ ["--i" as string]: 2 }} className="mt-md max-w-[52ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
          {copy.heroIntro}
        </p>
        <p data-rise style={{ ["--i" as string]: 3 }} className="mt-md max-w-[70ch] text-body-sm text-on-dark sm:text-body-md">
          <span className="font-bold">Im Einsatz in </span>
          {copy.places.join(" · ")}
        </p>
        <div
          data-hero-actions
          data-rise
          style={{ ["--i" as string]: 4 }}
          className="mt-xl flex flex-col gap-sm sm:flex-row"
        >
          <a href="#kontakt-formular" className="btn btn-primary">
            Kostenlose Besichtigung
          </a>
          <a href="#leistungen" className="btn btn-secondary">
            Unsere Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}
