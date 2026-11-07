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
      <ContactForm initial={initial} title={formTitle} />
    </section>
  );
}
