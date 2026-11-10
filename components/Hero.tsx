import Image from "next/image";

import { photos } from "@/lib/images";
import { homeCopy } from "@/lib/homes";
import { locationById, type LocationId } from "@/lib/site";

// Überblendung der vorhandenen Fotos; nur das erste lädt sofort, die anderen danach
const slides = [photos.landsbergLechwehr, photos.entkernung, photos.sperrmuell, photos.abbruch];

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
            className="object-cover object-[50%_35%]"
          />
        </div>
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface-dark/60" />
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
