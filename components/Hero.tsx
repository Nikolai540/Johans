import Image from "next/image";

import { PhoneIcon } from "@/components/Icons";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

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
        <h1 id="hero-title" className="text-display-md text-on-dark sm:text-display-lg lg:text-display-xl">
          <span data-rise className="block" style={{ ["--i" as string]: 0 }}>
            Bauprojekte in
          </span>{" "}
          <span data-rise className="block" style={{ ["--i" as string]: 1 }}>
            Landsberg am Lech
          </span>
        </h1>
        <p data-rise style={{ ["--i" as string]: 2 }} className="mt-md max-w-[44ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
          Entkernung, Abbruch, Sanierung, Trockenbau und Gartenbau aus einer Hand – für Kaufering, Buchloe und
          die Ammersee-Region.
        </p>
        <div
          data-hero-actions
          data-rise
          style={{ ["--i" as string]: 3 }}
          className="mt-xl flex flex-col gap-sm sm:flex-row"
        >
          <a href={site.phone.href} className="btn btn-primary">
            <PhoneIcon className="size-4" />
            Jetzt anrufen
            <span className="font-light tabular max-[22.5rem]:hidden">{site.phone.display}</span>
          </a>
          <a href="#kontakt-formular" className="btn btn-secondary">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
      <p className="absolute right-md bottom-xs hidden text-body-sm text-on-dark-soft md:block lg:right-xl">
        {p.caption}
      </p>
    </section>
  );
}
