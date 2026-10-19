import { ArrowIcon, GateIcon, HomeIcon, SailIcon } from "@/components/Icons";
import { RegionMap } from "@/components/RegionMap";
import { regions, type RegionId } from "@/lib/regions";
import { site } from "@/lib/site";

const facts = [
  { label: "Standorte", value: `${site.branch.locality} und ${site.address.locality}` },
  { label: "Erfahrung", value: `${site.proof.years} Jahre, über ${site.proof.projects} Projekte` },
  { label: "Google-Bewertung", value: `${site.proof.rating} von 5 (${site.proof.reviews} Bewertungen)` },
  { label: "Ansprechpartner", value: site.owner },
];

const icons: Record<RegionId, typeof GateIcon> = { landsberg: GateIcon, ammersee: SailIcon, buchloe: HomeIcon };

export function Region() {
  return (
    <section id="einsatzgebiet" aria-labelledby="einsatzgebiet-title" className="bg-canvas py-section">
      <div className="page-x mx-auto max-w-page">
        <div className="grid gap-xxl lg:grid-cols-12 lg:gap-lg">
          <div className="lg:col-span-7">
            <h2 id="einsatzgebiet-title" data-reveal className="text-display-md lg:text-display-lg">
              Zwischen Lech und Ammersee
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[60ch] text-title-md text-ink">
              Mit Standorten in Landsberg am Lech und Vilgertshofen betreuen wir drei Regionen im Grenzgebiet von
              Oberbayern und Schwaben – mit kurzen Wegen, die Ihnen Zeit und Geld sparen. Wählen Sie Ihre Region und
              sehen Sie, was wir dort für Sie tun.
            </p>
            <dl className="mt-xl grid max-w-[560px] grid-cols-2 gap-x-md gap-y-lg">
              {facts.map((f, i) => (
                <div key={f.label} data-reveal style={{ ["--i" as string]: i + 2 }}>
                  <dt className="text-body-sm text-body">{f.label}</dt>
                  <dd className="text-title-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            data-reveal
            style={{ ["--i" as string]: 1 }}
            className="flex aspect-[3/2] items-center justify-center self-start bg-surface-dark p-md lg:col-span-5 lg:aspect-[4/3] lg:p-lg"
          >
            <RegionMap className="h-full w-full" />
          </div>
        </div>

        <ul className="mt-xxl grid gap-lg lg:grid-cols-3">
          {regions.map((r, i) => {
            const Icon = icons[r.id];
            return (
              <li key={r.id} data-reveal style={{ ["--i" as string]: i }} className="flex">
                <a href={r.href} className="card group flex w-full flex-col p-lg sm:p-xl">
                  <span className="flex items-start justify-between gap-md">
                    <span className="flex size-14 items-center justify-center rounded-sm bg-primary text-on-primary">
                      <Icon className="size-7" />
                    </span>
                    {r.badge && (
                      <span className="rounded-pill bg-surface-dark px-sm py-xxs text-body-sm font-bold text-on-dark">
                        {r.badge}
                      </span>
                    )}
                  </span>
                  <h3 className="mt-lg text-display-sm">{r.name}</h3>
                  <p className="mt-xs text-body-sm text-body">{r.places.join(" · ")}</p>
                  <p className="mt-md text-body-md">{r.teaser}</p>
                  <span className="mt-auto pt-lg text-title-sm text-ink">
                    {r.cta}
                    <ArrowIcon className="ml-xs inline size-4 align-[-2px] transition-transform duration-[180ms] group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <p data-reveal className="mt-xl text-body-md">
          Ihr Ort ist nicht dabei? Wir sind auch darüber hinaus im Einsatz –{" "}
          <a href={site.phone.href} className="link link-underlined font-bold text-ink">
            rufen Sie uns an
          </a>
          .
        </p>
      </div>
    </section>
  );
}
