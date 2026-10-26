import { ArrowIcon } from "@/components/Icons";
import { GalleryCarousel } from "@/components/GalleryCarousel";

// Fotos von den Baustellen auf der Startseite
export function Gallery() {
  return (
    <section id="baustellen" aria-labelledby="baustellen-title" className="on-dark bg-surface-dark py-section text-on-dark">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="baustellen-title" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
            Einblicke in unsere Baustellen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg text-body-md text-on-dark sm:text-title-md sm:font-light">
            Entkernen, räumen, renovieren: So sieht es bei uns aus – vom ersten Container bis zur besenreinen
            Übergabe.
          </p>
          <a data-reveal style={{ ["--i" as string]: 2 }} href="#kontakt-formular" className="btn btn-primary mt-xl">
            Kostenlose Besichtigung anfragen
            <ArrowIcon className="size-4" />
          </a>
        </div>
        <GalleryCarousel className="lg:col-span-8" />
      </div>
    </section>
  );
}
