import { ArrowIcon } from "@/components/Icons";
import { ServiceLink } from "@/components/ServiceLink";
import { trades } from "@/lib/content";

// Das Bauschild: wer was ausführt – J&L Bauprojekte selbst oder ein Partnerbetrieb aus der Region.
export function Network() {
  return (
    <section id="netzwerk" aria-labelledby="netzwerk-title" className="bg-surface-dark pt-section">
      <div className="page-x mx-auto max-w-page">
        <div className="mx-auto max-w-[680px]">
          <div data-reveal className="bg-canvas px-lg py-xxl text-center text-ink sm:px-xxl">
            <h2 id="netzwerk-title" className="text-display-md">
              Ein Netzwerk aus Fachbetrieben
            </h2>
            <p className="mx-auto mt-md max-w-[46ch] text-body-md text-body">
              Was wir nicht selbst ausführen, vermitteln wir an Fachbetriebe aus der Region. Sie haben einen
              Ansprechpartner – wir stimmen Termine, Reihenfolge und Übergaben ab.
            </p>

            <div className="mt-xxl flex flex-col gap-xxl text-left">
              {trades.map((group) => (
                <div key={group.group}>
                  <h3 className="text-center text-title-lg">{group.group}</h3>
                  <ul className="mt-lg flex flex-col gap-md">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-start justify-between gap-md">
                        <div>
                          <p className="text-title-sm text-ink">{item.name}</p>
                          <p className="text-body-sm text-body">{item.note}</p>
                        </div>
                        <p
                          className={`shrink-0 text-right text-body-sm ${
                            item.by === "J&L Bauprojekte" ? "font-bold text-ink" : "text-body"
                          }`}
                        >
                          {item.by}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-xxl text-body-md text-ink">
              <p>Koordination: J&L Bauprojekte, Landsberg am Lech</p>
              <p>Landkreis Landsberg · Ammersee · Buchloe</p>
            </div>
            <ServiceLink
              id="gewerke"
              className="link mt-lg inline-flex min-h-11 items-center gap-xs text-title-sm text-ink"
            >
              Projekt mit mehreren Gewerken anfragen
              <ArrowIcon className="size-4" />
            </ServiceLink>
          </div>
          {/* Pfosten des Bauschilds */}
          <div aria-hidden className="mx-auto flex h-section w-3/4 justify-between">
            <span className="block h-full w-xs bg-muted" />
            <span className="block h-full w-xs bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}
