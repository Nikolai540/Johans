import Image from "next/image";

import { ArrowIcon } from "@/components/Icons";
import { gallery } from "@/lib/gallery";

// Rasterplätze je Bild: 1 groß, 6 breit, der Rest einfach – ergibt auf dem Smartphone 2, ab lg 4 Spalten ohne Lücken
const spans = [
  "col-span-2 row-span-2",
  "",
  "",
  "",
  "",
  "col-span-2",
  "",
  "",
];

// Bildersammlung von den Baustellen auf der Startseite
export function Gallery() {
  return (
    <section id="baustellen" aria-labelledby="baustellen-title" className="on-dark bg-surface-dark py-section text-on-dark">
      <div className="page-x mx-auto max-w-page">
        <div className="grid gap-lg lg:grid-cols-12 lg:items-end">
          <h2 id="baustellen-title" data-reveal className="text-display-md text-on-dark lg:col-span-6 lg:text-display-lg">
            Einblicke in unsere Baustellen
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p data-reveal style={{ ["--i" as string]: 1 }} className="text-body-md text-on-dark sm:text-title-md sm:font-light">
              Entkernen, räumen, renovieren: So sieht es bei uns aus – vom ersten Container bis zur besenreinen
              Übergabe.
            </p>
            <a data-reveal style={{ ["--i" as string]: 2 }} href="#kontakt-formular" className="btn btn-primary mt-lg">
              Kostenlose Besichtigung anfragen
              <ArrowIcon className="size-4" />
            </a>
          </div>
        </div>

        <ul className="mt-xxl grid auto-rows-[9rem] grid-cols-2 gap-sm sm:auto-rows-[12rem] sm:gap-md lg:auto-rows-[14rem] lg:grid-cols-4">
          {gallery.map((item, i) => (
            <li key={item.caption} data-reveal style={{ ["--i" as string]: i % 4 }} className={spans[i] ?? ""}>
              <figure className="relative h-full overflow-hidden bg-surface-dark-elevated">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover"
                />
                <figcaption className="absolute bottom-xs left-xs max-w-[calc(100%-var(--spacing-md))] rounded-sm bg-surface-dark px-sm py-xxs text-body-sm text-on-dark">
                  {item.placeholder && <span className="font-bold">Platzhalter: </span>}
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
