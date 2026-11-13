import { ArrowIcon } from "@/components/Icons";
import { GalleryCarousel } from "@/components/GalleryCarousel";

// Fotos von den Baustellen auf der Startseite: Text oben, darunter der Bilderstreifen über die volle Breite
export function Gallery() {
  return (
    <section id="baustellen" aria-labelledby="baustellen-title" className="on-dark bg-surface-dark py-section text-on-dark">
      <div className="page-x mx-auto flex max-w-page flex-col gap-lg lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[40rem]">
          <h2 id="baustellen-title" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
            Einblicke in unsere Baustellen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg text-body-md text-on-dark sm:text-title-md sm:font-light">
            Entkernen, räumen, renovieren: So sieht es auf unseren Baustellen aus, vom ersten Container bis zur
            besenreinen Übergabe.
          </p>
        </div>
        <a data-reveal style={{ ["--i" as string]: 2 }} href="#kontakt-formular" className="btn btn-primary shrink-0 self-start lg:self-auto">
          Kostenlose Besichtigung anfragen
          <ArrowIcon className="size-4" />
        </a>
      </div>
      <GalleryCarousel className="mt-xxl" />
    </section>
  );
}
