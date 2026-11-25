import Image from "next/image";

import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { ServiceIndex } from "@/components/ServiceIndex";
import { serviceCategories, services } from "@/lib/content";
import { photo as pagePhoto } from "@/lib/images";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="bg-surface-soft py-section">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="leistungen-title" data-reveal className="text-display-md lg:text-display-lg">
            Unsere Leistungen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[40ch] text-body-md">
            Abbruch, Entkernung, Entrümpelung, Asbestsanierung und Renovierung mit einem Ansprechpartner. Container
            und Entsorgung sind inklusive. Sie können einzeln beauftragen oder alles als ein Projekt.
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
          {serviceCategories.map((cat) => {
            const photo = pagePhoto("startseite", cat.photo);
            return (
              <article key={cat.id} aria-labelledby={`leistung-${cat.id}`} className="card grid lg:grid-cols-8">
                <div className="flex flex-col p-lg sm:p-xl lg:col-span-5">
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
                    {cat.items.map((entry) => {
                      const item = typeof entry === "string" ? services[entry] : entry;
                      return (
                        <li key={item.name} className="flex gap-sm">
                          <span aria-hidden className="mt-[0.55em] size-2 shrink-0 bg-primary" />
                          <span className="text-body-md">
                            <span className="font-bold text-ink">{item.name}:</span> {item.short}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a href={cat.page.href} className="btn btn-primary mt-xl self-start">
                    {cat.page.cta}
                    <ArrowIcon className="size-4" />
                  </a>
                </div>
                {/* Bild randlos: mobil volle Kartenbreite unter dem Text, Desktop volle Kartenhöhe rechts.
                    Eine Maske blendet das Bild selbst aus, so läuft es weich in den Kalkputz der Karte über. */}
                <figure className="card-cut relative aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:min-h-[28rem]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    placeholder="blur"
                    className="object-cover [mask-image:linear-gradient(to_bottom,transparent,black_40%)] lg:[mask-image:linear-gradient(to_right,transparent,black_45%)]"
                  />
                  <figcaption className="absolute right-[calc(var(--cut)+var(--spacing-xs))] bottom-xs bg-canvas/85 px-xs py-[2px] text-body-sm text-body">{photo.caption}</figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
