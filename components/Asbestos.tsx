import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { pages, site } from "@/lib/site";

const points = [
  { title: "Sachkunde nach TRGS 519", text: "Anlage 4 – für Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit Asbest." },
  { title: "Gefährdungs\u00adbeurteilung und Arbeitsplan", text: "Vor Beginn legen wir Verfahren und Schutzmaßnahmen fest." },
  { title: "Anzeige bei der Behörde", text: "Die vorgeschriebene Anzeige der Arbeiten übernehmen wir für Sie." },
  { title: "Entsorgung mit Nachweis", text: "Staubdicht verpackt, bei zugelassenen Anlagen abgegeben, belegt." },
];

// Schadstoffsanierung als eigener Schwerpunkt auf der Startseite
export function Asbestos() {
  return (
    <section id="schadstoffe" aria-labelledby="schadstoffe-title" className="on-dark bg-surface-dark py-section text-on-dark">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-6">
          <h2 id="schadstoffe-title" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
            Asbest im Altbau? Wir wissen, was zu tun ist.
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[56ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
            In Häusern, die vor 1993 gebaut oder modernisiert wurden, kann Asbest stecken – in alten Bodenbelägen und
            Klebern, in Putz und Spachtelmasse, in Dachplatten oder Isolierungen. Meist sieht man es nicht. Gefährlich
            wird es erst, wenn beim Umbau Fasern frei werden. Deshalb klären wir den Verdacht vor dem ersten
            Hammerschlag, legen die Schutzmaßnahmen fest und bauen belastete Materialien nach TRGS 519 fachgerecht
            zurück.
          </p>
          <div data-reveal style={{ ["--i" as string]: 2 }} className="mt-xl flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:[&>.btn]:whitespace-nowrap">
            <a href={`${pages.entkernung.href}#schadstoffsanierung`} className="btn btn-primary">
              Mehr zur Schadstoffsanierung
              <ArrowIcon className="size-4" />
            </a>
            <a href={site.phone.href} className="btn btn-secondary">
              <PhoneIcon className="size-4" />
              Asbestverdacht? Jetzt anrufen
            </a>
          </div>
        </div>
        <dl className="grid content-start gap-lg sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
          {points.map((p, i) => (
            <div key={p.title} data-reveal style={{ ["--i" as string]: i }} className="border-t border-surface-dark-elevated pt-md">
              <dt className="flex items-start gap-sm text-title-md text-on-dark hyphens-auto">
                <span aria-hidden className="mt-[0.5em] size-2 shrink-0 bg-primary" />
                {p.title}
              </dt>
              <dd className="mt-xxs pl-md text-body-md text-on-dark-soft">{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
