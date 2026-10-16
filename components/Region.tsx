import Image from "next/image";

import { RegionMap } from "@/components/RegionMap";
import { places } from "@/lib/content";
import { photos } from "@/lib/images";

const facts = [
  { label: "Sitz", value: "Landsberg am Lech" },
  { label: "Regionen", value: "Oberbayern und Schwaben" },
  { label: "Leistungen", value: "Zehn aus einer Hand" },
  { label: "Ansprechpartner", value: "Einer für alles" },
];

export function Region() {
  const p = photos.landsbergLechUfer;
  return (
    <section id="einsatzgebiet" aria-labelledby="einsatzgebiet-title" className="bg-canvas py-section">
      <div className="page-x mx-auto max-w-page">
        <div className="max-w-[60ch]">
          <h2 id="einsatzgebiet-title" data-reveal className="text-display-md lg:text-display-lg">
            Zwischen Lech und Ammersee
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg text-title-md text-ink">
            Unser Sitz ist Landsberg am Lech. Von hier sind wir im ganzen Landkreis unterwegs, am Westufer des
            Ammersees und westlich des Lechs bis Buchloe – im Grenzgebiet von Oberbayern und Schwaben.
          </p>
        </div>

        <div className="mt-xxl grid gap-md lg:grid-cols-12">
          <figure className="lg:col-span-8">
            <div className="relative">
              <div data-reveal="mask" className="relative aspect-[4/3] overflow-hidden bg-surface-card lg:aspect-[16/10]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" placeholder="blur" className="object-cover" />
              </div>
              <p className="mt-md text-body-md text-ink lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:w-[320px] lg:bg-canvas lg:p-lg">
                Kurze Wege sparen Zeit und Geld. Weil wir in der Region zu Hause sind, sind wir für Besichtigung,
                Absprachen und Ausführung schnell vor Ort – in der Altstadt genauso wie auf dem Land.
              </p>
            </div>
            <figcaption className="mt-xs text-body-sm text-body">{p.caption}</figcaption>
          </figure>

          <div className="lg:col-span-4">
            <div data-reveal style={{ ["--i" as string]: 1 }} className="flex aspect-[3/2] items-center justify-center bg-surface-dark p-md lg:aspect-[4/3] lg:p-lg">
              <RegionMap className="h-full w-full" />
            </div>
            <dl className="mt-lg grid grid-cols-2 gap-x-md gap-y-lg">
              {facts.map((f, i) => (
                <div key={f.label} data-reveal style={{ ["--i" as string]: i + 2 }}>
                  <dt className="text-body-sm text-body">{f.label}</dt>
                  <dd className="text-title-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-section grid gap-lg lg:grid-cols-12">
          <h3 data-reveal className="text-display-sm lg:col-span-4">
            Hier sind wir für Sie im Einsatz
          </h3>
          <ul data-reveal style={{ ["--i" as string]: 1 }} className="flex flex-wrap gap-x-lg gap-y-xs text-title-md text-ink lg:col-span-8">
            {places.map((place) => (
              <li key={place}>{place}</li>
            ))}
            <li className="font-light text-body">und Umgebung</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
