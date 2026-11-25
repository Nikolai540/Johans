import { ContactForm } from "@/components/ContactForm";
import type { ServiceId } from "@/lib/content";

export function Contact({ initial, formTitle }: { initial?: ServiceId[]; formTitle?: string }) {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-canvas">
      <ContactForm initial={initial} title={formTitle} />
    </section>
  );
}
