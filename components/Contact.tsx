import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon } from "@/components/Icons";
import type { ServiceId } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export function Contact({ initial, formTitle }: { initial?: ServiceId[]; formTitle?: string }) {
  const p = photos.lechBlickNorden;
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-canvas">
      <div className="relative">
        <div className="relative h-[60svh] min-h-[380px] overflow-hidden bg-surface-card lg:h-svh lg:min-h-[640px]">
          <Image src={p.src} alt={p.alt} fill sizes="100vw" placeholder="blur" className="object-cover object-[50%_60%]" />
        </div>

        <div className="page-x relative mx-auto -mt-section max-w-page lg:absolute lg:inset-0 lg:mt-0">
          <div
            data-reveal
            className="card p-xl lg:absolute lg:top-[60px] lg:right-xl lg:w-[400px]"
          >
            <h2 id="kontakt-title" className="text-display-md">
              Kontakt aufnehmen
            </h2>
            <address className="mt-lg not-italic text-body-md text-ink">
              <span className="block font-bold">{site.name}</span>
              {site.address.street && <span className="block">{site.address.street}</span>}
              <span className="block">
                {site.address.postalCode} {site.address.locality}
              </span>
            </address>
            <dl className="mt-lg grid gap-xs text-body-md text-ink">
              {site.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-md">
                  <dt>{h.label}</dt>
                  <dd className="tabular text-right">{h.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-lg text-body-md">
              <a href={site.phone.href} className="link link-underlined block text-title-lg text-ink tabular">
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="link link-underlined mt-xxs inline-block text-ink">
                {site.email}
              </a>
              <a href={site.whatsapp} className="link link-underlined mt-xxs block text-ink" rel="noopener">
                Fotos per WhatsApp senden
              </a>
            </p>
            <a href={site.phone.href} className="btn btn-primary mt-xl min-h-[52px] w-full">
              <PhoneIcon className="size-4" />
              Jetzt anrufen
            </a>
          </div>
          <p className="mt-xs text-body-sm text-body lg:absolute lg:bottom-xs lg:left-xl lg:text-on-dark">
            {p.caption}
          </p>
        </div>
      </div>

      <ContactForm initial={initial} title={formTitle} />
    </section>
  );
}
