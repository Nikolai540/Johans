import Image from "next/image";

import { ArrowIcon } from "@/components/Icons";
import { photos, type PhotoKey } from "@/lib/images";
import { homeCopy } from "@/lib/homes";
import { aboutPage, type LocationId } from "@/lib/site";

const passing: { key: PhotoKey; ratio: string; frame: string }[] = [
  { key: "landsbergLuftbild", ratio: "aspect-[4/5]", frame: "w-[64%] lg:w-[62%]" },
  { key: "uttingAmmersee", ratio: "aspect-[16/10]", frame: "ml-auto w-[78%] lg:w-full" },
  { key: "buchloeLuftbild", ratio: "aspect-square", frame: "w-[52%] lg:ml-[18%] lg:w-[46%]" },
];

export function About({ location }: { location: LocationId }) {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-uns-title" className="bg-canvas py-section lg:py-0">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-6 lg:col-start-1">
          <div className="lg:sticky lg:top-[calc(var(--spacing-nav)+var(--spacing-section))] lg:py-section">
            <h2 id="ueber-uns-title" data-reveal className="text-display-md lg:text-display-lg">
              Ein Ansprechpartner statt vieler Firmen
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[34ch] text-display-sm text-ink">
              Vom ersten Container bis zum fertig verlegten Boden.
            </p>
            <div data-reveal style={{ ["--i" as string]: 2 }} className="mt-xl max-w-[58ch] space-y-md text-body-md">
              <p>
                Wer ein Haus erbt, eine ältere Immobilie kauft oder umbaut, braucht selten nur einen Handgriff. Bei
                uns läuft alles zusammen: Wir entrümpeln, entkernen, bauen Asbest und andere Schadstoffe aus und
                renovieren danach. In einem Zeitplan und zum Festpreis, den Sie nach der kostenlosen Besichtigung
                bekommen.
              </p>
              <p>{homeCopy[location].aboutRegion}</p>
            </div>
            <a data-reveal style={{ ["--i" as string]: 3 }} href={aboutPage.href} className="link link-underlined mt-lg inline-flex min-h-11 items-center gap-xs text-title-sm text-ink">
              Mehr über J&L Bauprojekte
              <ArrowIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-xxl lg:col-span-5 lg:col-start-8 lg:gap-[30svh] lg:py-[18svh]">
          {passing.map(({ key, ratio, frame }) => {
            const p = photos[key];
            return (
              <figure key={key} className={frame}>
                <div className={`relative overflow-hidden bg-surface-card ${ratio}`}>
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 40vw, 80vw" placeholder="blur" className="object-cover" />
                </div>
                <figcaption className="mt-xs text-body-sm text-body">{p.caption}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
