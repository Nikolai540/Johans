import Image from "next/image";

import { ChevronIcon, PhoneIcon } from "@/components/Icons";
import { faqs } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export function Faq() {
  const tall = photos.landsbergBayertor;
  const square = photos.landsbergLechwehr;
  const place = [site.address.street, `${site.address.postalCode} ${site.address.locality}`].filter(Boolean).join(", ");
  const branch = `${site.branch.street}, ${site.branch.postalCode} ${site.branch.locality}`;

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-surface-soft pb-section lg:pb-0">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        {/* Bilder: auf dem Smartphone zuerst */}
        <div className="relative pb-xxl lg:order-2 lg:col-span-6 lg:col-start-7 lg:pb-section">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-card lg:aspect-[3/4]">
            <Image src={tall.src} alt={tall.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" placeholder="blur" className="object-cover object-[60%_50%]" />
          </div>
          <div className="absolute right-md bottom-0 aspect-square w-[38%] overflow-hidden bg-surface-card lg:right-auto lg:-left-xl lg:bottom-xl lg:w-1/3">
            <Image src={square.src} alt={square.alt} fill sizes="(min-width: 1024px) 15vw, 38vw" placeholder="blur" className="object-cover object-[30%_60%]" />
          </div>
        </div>

        <div className="lg:order-1 lg:col-span-5 lg:py-section">
          <h2 id="faq-title" data-reveal className="text-display-md lg:text-display-lg">
            Häufige Fragen
          </h2>
          <dl data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg grid gap-xs text-body-md text-ink">
            <div className="flex gap-xs">
              <dt className="font-bold">Standorte:</dt>
              <dd>
                {place} und {branch}
              </dd>
            </div>
            <div className="flex gap-xs">
              <dt className="font-bold">Erreichbar:</dt>
              <dd className="tabular">
                {site.hours[0].label}, {site.hours[0].value}
              </dd>
            </div>
            <div className="flex gap-xs">
              <dt className="font-bold">Telefon:</dt>
              <dd>
                <a href={site.phone.href} className="link link-underlined tabular">
                  {site.phone.display}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-xxl flex flex-col gap-sm">
            {faqs.map((f, i) => (
              <details key={f.q} data-reveal style={{ ["--i" as string]: i + 2 }} className="card group px-lg py-xs">
                <summary className="flex min-h-11 cursor-pointer items-start justify-between gap-md py-xs text-title-md text-ink">
                  <h3 className="text-title-md">{f.q}</h3>
                  <ChevronIcon className="mt-xxs size-5 shrink-0 transition-transform duration-[180ms] group-open:rotate-180" />
                </summary>
                <p className="max-w-[60ch] pt-xs pb-md text-body-md text-body">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-xxl flex flex-col gap-sm sm:flex-row sm:items-center sm:gap-lg">
            <a href={site.phone.href} className="btn btn-primary w-full sm:w-auto">
              <PhoneIcon className="size-4" />
              Jetzt anrufen
            </a>
            <a href="#kontakt-formular" className="link link-underlined inline-flex min-h-11 items-center justify-center text-title-sm text-ink">
              Frage schriftlich stellen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
