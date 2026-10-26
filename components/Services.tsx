import Image from "next/image";

import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { ServiceIndex } from "@/components/ServiceIndex";
import { serviceCategories, services } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

const shapes = {
  portrait: { ratio: "aspect-[4/5]", desk: "lg:w-full" },
  landscape: { ratio: "aspect-[3/2]", desk: "lg:w-full" },
  square: { ratio: "aspect-square", desk: "lg:w-3/4" },
} as const;

// Abwechselnde Bildbreiten auf dem Smartphone
const mobileFrames = ["w-full", "ml-auto w-[70%]", "w-[55%]"];

export function Services() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="bg-surface-soft py-section">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="leistungen-title" data-reveal className="text-display-md lg:text-display-lg">
            Unsere Leistungen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[40ch] text-body-md">
            Drei Leistungsbereiche, ein Ansprechpartner: Wir schaffen Platz, bauen fachgerecht zurück und bringen
            Ihre Räume wieder in Schuss – einzeln beauftragt oder als ein Projekt.
          </p>
          {/* Nur das Verzeichnis bleibt stehen – es markiert den Bereich, der gerade gelesen wird */}
          <div className="hidden lg:sticky lg:top-[calc(var(--spacing-nav)+var(--spacing-xxl))] lg:mt-xl lg:block">
            <ServiceIndex style={{ ["--i" as string]: 2 }} />
            <a data-reveal style={{ ["--i" as string]: 3 }} href={site.phone.href} className="btn btn-primary mt-xl">
              <PhoneIcon className="size-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-section lg:col-span-8 lg:col-start-5">
          {serviceCategories.map((cat, i) => {
            const photo = photos[cat.photo];
            const shape = shapes[cat.shape];
            const frame = mobileFrames[i % mobileFrames.length];
            return (
              <article key={cat.id} aria-labelledby={`leistung-${cat.id}`} className="card grid gap-lg p-lg sm:p-xl lg:grid-cols-8">
                <div className="flex flex-col lg:col-span-5">
                  <h3
                    id={`leistung-${cat.id}`}
                    data-reveal
                    className="scroll-mt-[calc(var(--spacing-nav)+var(--spacing-lg))] text-display-sm"
                  >
                    {cat.name}
                  </h3>
                  <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-sm max-w-[52ch] text-body-md">
                    {cat.text}
                  </p>
                  <ul data-reveal style={{ ["--i" as string]: 2 }} className="mt-lg grid gap-sm">
                    {cat.items.map((id) => (
                      <li key={id} className="flex gap-sm">
                        <span aria-hidden className="mt-[0.55em] size-2 shrink-0 bg-primary" />
                        <span className="text-body-md">
                          <span className="font-bold text-ink">{services[id].name}</span> – {services[id].short}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={cat.page.href} className="btn btn-primary mt-xl self-start">
                    {cat.page.cta}
                    <ArrowIcon className="size-4" />
                  </a>
                </div>
                <figure className={`${frame} lg:col-span-3 lg:ml-0 ${shape.desk}`}>
                  <div data-reveal className={`relative overflow-hidden bg-surface-card ${shape.ratio}`}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, 80vw" placeholder="blur" className="object-cover" />
                  </div>
                  <figcaption className="mt-xs text-body-sm text-body">{photo.caption}</figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
