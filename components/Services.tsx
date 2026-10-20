import Image from "next/image";

import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { ServiceIndex } from "@/components/ServiceIndex";
import { ServiceLink } from "@/components/ServiceLink";
import { serviceRows, services } from "@/lib/content";
import { photos } from "@/lib/images";
import { pages, site } from "@/lib/site";

const shapes = {
  portrait: { ratio: "aspect-[4/5]", desk: "lg:w-full" },
  landscape: { ratio: "aspect-[3/2]", desk: "lg:w-full" },
  square: { ratio: "aspect-square", desk: "lg:w-3/4" },
} as const;

// Abwechselnde Bildbreiten auf dem Smartphone
const mobileFrames = ["w-full", "ml-auto w-[70%]", "w-[55%]"];

export function Services() {
  let photoIndex = 0;
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="bg-surface-soft py-section">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="leistungen-title" data-reveal className="text-display-md lg:text-display-lg">
            Leistungen aus einer Hand
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[40ch] text-body-md">
            Zehn Leistungen rund um Haus, Wohnung und Grundstück in Landsberg am Lech und Umgebung – einzeln
            beauftragt oder als ein Projekt.
          </p>
          {/* Nur das Verzeichnis bleibt stehen – es markiert die Leistung, die gerade gelesen wird */}
          <div className="hidden lg:sticky lg:top-[calc(var(--spacing-nav)+var(--spacing-xxl))] lg:mt-xl lg:block">
            <ServiceIndex style={{ ["--i" as string]: 2 }} />
            <a data-reveal style={{ ["--i" as string]: 3 }} href={site.phone.href} className="btn btn-primary mt-xl">
              <PhoneIcon className="size-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-section lg:col-span-8 lg:col-start-5">
          {serviceRows.map((row) => {
            const photo = row.photo ? photos[row.photo] : null;
            const shape = shapes[row.shape];
            const frame = photo ? mobileFrames[photoIndex++ % mobileFrames.length] : "";
            return (
              <div key={row.ids.join("-")} className="card grid gap-lg p-lg sm:p-xl lg:grid-cols-8">
                <div className="flex flex-col gap-xl lg:col-span-5">
                  {row.ids.map((id, i) => {
                    const s = services[id];
                    return (
                      <article key={id} aria-labelledby={`leistung-${id}`}>
                        <h3
                          id={`leistung-${id}`}
                          data-reveal
                          style={{ ["--i" as string]: i * 2 }}
                          className="scroll-mt-[calc(var(--spacing-nav)+var(--spacing-lg))] text-display-sm"
                        >
                          {s.name}
                        </h3>
                        <p data-reveal style={{ ["--i" as string]: i * 2 + 1 }} className="mt-sm max-w-[52ch] text-body-md">
                          {s.text}
                        </p>
                        {id === "gewerke" ? (
                          <a href="#netzwerk" className="link mt-md inline-flex min-h-11 items-center gap-xs text-title-sm text-ink">
                            Zum Netzwerk der Fachbetriebe
                            <ArrowIcon className="size-4" />
                          </a>
                        ) : (
                          <ServiceLink
                            id={id}
                            className="link mt-md inline-flex min-h-11 items-center gap-xs text-title-sm text-ink"
                          >
                            {s.name} anfragen
                            <ArrowIcon className="size-4" />
                          </ServiceLink>
                        )}
                      </article>
                    );
                  })}
                  {(() => {
                    const sub = row.ids.includes("entruempelung")
                      ? pages.entruempelung
                      : row.ids.includes("entkernung") || row.ids.includes("abbruch")
                        ? pages.entkernung
                        : null;
                    return sub ? (
                      <a href={sub.href} className="btn btn-primary self-start">
                        Alles zu {sub.full}
                        <ArrowIcon className="size-4" />
                      </a>
                    ) : null;
                  })()}
                </div>
                {photo && (
                  <figure className={`${frame} lg:col-span-3 lg:ml-0 ${shape.desk}`}>
                    <div data-reveal="mask" className={`relative overflow-hidden bg-surface-card ${shape.ratio}`}>
                      <Image src={photo.src} alt={photo.alt} fill loading="eager" sizes="(min-width: 1024px) 25vw, 80vw" placeholder="blur" className="object-cover" />
                    </div>
                    <figcaption className="mt-xs text-body-sm text-body">{photo.caption}</figcaption>
                  </figure>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
