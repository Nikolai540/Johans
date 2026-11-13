import Image from "next/image";

import { photos } from "@/lib/images";
import { homeCopy } from "@/lib/homes";
import { locationById, type LocationId } from "@/lib/site";

const hero = photos.landsbergLechwehr;

export function Hero({ location }: { location: LocationId }) {
  const copy = homeCopy[location];
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[560px] flex-col justify-end bg-surface-dark text-on-dark h-[calc(100svh-var(--spacing-nav))]"
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className="-z-10 object-cover object-[50%_35%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface-dark/60" />
      <p aria-hidden className="absolute right-md bottom-xs hidden text-body-sm text-on-dark-soft md:block lg:right-xl">
        {hero.caption}
      </p>

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
