import Image from "next/image";

import { PhoneIcon } from "@/components/Icons";
import type { Placeholder } from "@/lib/placeholders";
import { site } from "@/lib/site";

// Dunkler Seitenkopf für Unterseiten ohne Leistungs-Vorlage (Schadstoffe, Über uns)
export function PageHero({
  crumb,
  h1,
  intro,
  badge,
  cta,
  photo,
  portrait,
}: {
  crumb: string;
  h1: string;
  intro: string;
  badge?: string;
  cta: string;
  photo: Placeholder;
  portrait?: boolean;
}) {
  return (
    <section aria-labelledby="seite-titel" className="on-dark bg-surface-dark text-on-dark">
      <div className="page-x mx-auto grid max-w-page gap-xxl py-xxl lg:grid-cols-12 lg:gap-lg lg:py-section">
        <div className="flex flex-col justify-center lg:col-span-7">
          <nav aria-label="Brotkrumen" className="text-body-sm text-on-dark-soft">
            <ol className="flex flex-wrap gap-xs">
              <li>
                <a href="/" className="link">
                  Startseite
                </a>
                <span aria-hidden> ›</span>
              </li>
              <li aria-current="page">{crumb}</li>
            </ol>
          </nav>
          {badge && (
            <p data-rise className="mt-md self-start bg-primary px-sm py-xxs text-body-sm font-bold text-on-primary">
              {badge}
            </p>
          )}
          <h1 id="seite-titel" data-rise className="mt-md text-display-md text-balance text-on-dark lg:text-display-lg">
            {h1}
          </h1>
          <p data-rise style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[58ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
            {intro}
          </p>
          <div data-hero-actions data-rise style={{ ["--i" as string]: 2 }} className="mt-xl flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:[&>.btn]:whitespace-nowrap">
            <a href={site.phone.href} className="btn btn-primary">
              <PhoneIcon className="size-4" />
              Jetzt anrufen
              <span className="font-light tabular max-[22.5rem]:hidden">{site.phone.display}</span>
            </a>
            <a href="#kontakt-formular" className="btn btn-secondary">
              {cta}
            </a>
          </div>
        </div>
        <figure className={portrait ? "lg:col-span-4 lg:col-start-9" : "lg:col-span-5"}>
          <div className={`relative overflow-hidden bg-surface-dark-elevated ${portrait ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
            <Image src={photo.src} alt={photo.alt} fill preload sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-xs text-body-sm text-on-dark-soft">{photo.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
