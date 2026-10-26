import Image from "next/image";

import { PhoneIcon } from "@/components/Icons";
import { photos } from "@/lib/images";
import { catchment, site } from "@/lib/site";

export function Hero() {
  const p = photos.landsbergLechwehr;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[560px] flex-col justify-end bg-surface-dark text-on-dark h-[calc(100svh-var(--spacing-nav))]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          preload
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[50%_35%]"
        />
      </div>
      {/* neutrale Abdunklung nur unter dem Text */}
      <div aria-hidden className="scrim-bottom absolute inset-x-0 bottom-0 -z-10 h-3/4" />

      <div className="page-x mx-auto w-full max-w-page pb-xxl lg:pb-section">
        <h1 id="hero-title" className="max-w-[22ch] text-display-md text-on-dark sm:text-display-lg">
          <span data-rise className="block" style={{ ["--i" as string]: 0 }}>
            Entkernung, Entrümpelung & Renovierung
          </span>{" "}
          <span data-rise className="block" style={{ ["--i" as string]: 1 }}>
            in Landsberg am Lech und Umgebung
          </span>
        </h1>
        <p data-rise style={{ ["--i" as string]: 2 }} className="mt-md max-w-[52ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
          Wir räumen, bauen zurück und machen Räume wieder bewohnbar – sauber, termingerecht und mit einem festen
          Ansprechpartner. Auch dann, wenn Asbest oder andere Schadstoffe im Spiel sind.
        </p>
        <p data-rise style={{ ["--i" as string]: 3 }} className="mt-md max-w-[70ch] text-body-sm text-on-dark sm:text-body-md">
          <span className="font-bold">Im Einsatz in </span>
          {catchment.join(" · ")}
        </p>
        <div
          data-hero-actions
          data-rise
          style={{ ["--i" as string]: 4 }}
          className="mt-xl flex flex-col gap-sm sm:flex-row"
        >
          <a href={site.phone.href} className="btn btn-primary">
            <PhoneIcon className="size-4" />
            Jetzt anrufen
            <span className="font-light tabular max-[22.5rem]:hidden">{site.phone.display}</span>
          </a>
          <a href="#kontakt-formular" className="btn btn-secondary">
            Kostenlose Besichtigung anfragen
          </a>
        </div>
      </div>
      <p className="absolute right-md bottom-xs hidden text-body-sm text-on-dark-soft md:block lg:right-xl">
        {p.caption}
      </p>
    </section>
  );
}
