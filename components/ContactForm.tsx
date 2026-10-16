"use client";

import { useEffect, useId, useState } from "react";

import { PhoneIcon } from "@/components/Icons";
import { SERVICE_EVENT } from "@/components/ServiceLink";
import { serviceOrder, services, type ServiceId } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;

const inputClass =
  "block min-h-12 w-full rounded-none border border-muted bg-canvas px-md py-[14px] text-body-md text-ink placeholder:text-muted aria-invalid:border-error";

function joinNames(names: string[]) {
  if (names.length <= 1) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} und ${names.at(-1)}`;
}

export function ContactForm() {
  const uid = useId();
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<ServiceId[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  // Vorauswahl aus den Links "… anfragen"
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<ServiceId>).detail;
      setSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };
    window.addEventListener(SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SERVICE_EVENT, onSelect);
  }, []);

  const ordered = serviceOrder.filter((id) => selected.includes(id));
  const toggle = (id: ServiceId) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          services: data.getAll("services"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: FieldErrors };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        setName("");
        setSelected([]);
      } else {
        setErrors(json.errors ?? {});
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const err = (key: keyof FieldErrors) =>
    errors[key] ? (
      <p id={`${uid}-${key}-error`} className="mt-xs text-body-sm text-error">
        {errors[key]}
      </p>
    ) : null;

  return (
    <div id="kontakt-formular" className="page-x mx-auto max-w-page scroll-mt-nav py-section">
      <div className="max-w-[60ch]">
        <h3 data-reveal className="text-display-md lg:text-display-lg">
          Anfrage senden
        </h3>
        <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-body-md">
          Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns mit Rückfragen und einem Terminvorschlag für die
          Besichtigung. Lieber direkt sprechen?{" "}
          <a href={site.phone.href} className="link link-underlined font-bold text-ink">
            {site.phone.display}
          </a>
        </p>
      </div>

      <form
        action="/api/kontakt"
        method="post"
        onSubmit={onSubmit}
        noValidate={false}
        className="relative mt-xxl grid gap-lg lg:grid-cols-12 lg:gap-x-lg"
      >
        <div className="lg:col-span-7">
          <label htmlFor={`${uid}-name`} className="mb-xs block text-title-sm text-ink">
            Name <span aria-hidden>*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={inputClass}
          />
          {err("name")}
        </div>

        <div className="grid gap-lg sm:grid-cols-2 lg:col-span-7">
          <div>
            <label htmlFor={`${uid}-email`} className="mb-xs block text-title-sm text-ink">
              E-Mail <span aria-hidden>*</span>
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email) || undefined}
              aria-describedby={errors.email ? `${uid}-email-error` : undefined}
              className={inputClass}
            />
            {err("email")}
          </div>
          <div>
            <label htmlFor={`${uid}-phone`} className="mb-xs block text-title-sm text-ink">
              Telefon <span className="font-light text-body">(für Rückfragen)</span>
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.phone) || undefined}
              aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
              className={inputClass}
            />
            {err("phone")}
          </div>
        </div>

        <fieldset className="lg:col-span-7">
          <legend className="mb-sm text-title-sm text-ink">Welche Leistungen brauchen Sie?</legend>
          <div className="flex flex-wrap gap-xs">
            {serviceOrder.map((id) => (
              <label
                key={id}
                className="inline-flex min-h-11 cursor-pointer items-center border border-muted bg-canvas px-md text-body-md text-ink transition-colors duration-[180ms] select-none has-checked:border-ink has-checked:bg-ink has-checked:text-on-dark has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
              >
                <input
                  type="checkbox"
                  name="services"
                  value={id}
                  checked={selected.includes(id)}
                  onChange={() => toggle(id)}
                  className="sr-only"
                />
                {services[id].name}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Live: das Bauschild Ihres Projekts */}
        <div className="lg:col-span-4 lg:col-start-9 lg:row-span-6 lg:row-start-1">
          <aside
            aria-label="Vorschau: Ihr Bauschild"
            className="bg-surface-dark p-lg text-on-dark lg:sticky lg:top-[calc(var(--spacing-nav)+var(--spacing-xxl))] lg:p-xl"
          >
            <p className="text-title-lg text-on-dark">Ihr Bauschild</p>
            <dl className="mt-lg grid gap-md text-body-md">
              <div>
                <dt className="text-body-sm text-on-dark-soft">Bauvorhaben</dt>
                <dd className="text-display-sm text-on-dark">
                  {ordered.length ? joinNames(ordered.map((id) => services[id].name)) : "Noch offen"}
                </dd>
              </div>
              <div>
                <dt className="text-body-sm text-on-dark-soft">Bauherr</dt>
                <dd className="text-title-md text-on-dark">{name.trim() || "Ihr Name"}</dd>
              </div>
              <div>
                <dt className="text-body-sm text-on-dark-soft">Ausführung und Koordination</dt>
                <dd className="text-title-md text-on-dark">
                  {site.name}, {site.address.locality}
                </dd>
              </div>
              {selected.includes("gewerke") && (
                <div>
                  <dt className="text-body-sm text-on-dark-soft">Weitere Gewerke</dt>
                  <dd className="text-title-md text-on-dark">Fachbetriebe aus unserem Netzwerk</dd>
                </div>
              )}
            </dl>
            <p className="mt-lg bg-surface-dark-elevated p-md text-body-md text-on-dark">
              {ordered.length === 0
                ? "Wählen Sie aus, was gemacht werden soll – das Schild füllt sich mit."
                : `Ein Ansprechpartner für ${ordered.length === 1 ? "diese Leistung" : `${ordered.length} Leistungen`}.`}
            </p>
          </aside>
        </div>

        <div className="lg:col-span-7">
          <label htmlFor={`${uid}-message`} className="mb-xs block text-title-sm text-ink">
            Ihr Vorhaben <span aria-hidden>*</span>
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            required
            rows={6}
            minLength={10}
            maxLength={4000}
            placeholder="z. B. Altbau in Kaufering, Erdgeschoss entkernen, danach neue Wände in Trockenbau"
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={errors.message ? `${uid}-message-error` : undefined}
            className={`${inputClass} resize-y`}
          />
          {err("message")}
        </div>

        <div className="lg:col-span-7">
          <label className="flex cursor-pointer items-start gap-sm text-body-md">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={Boolean(errors.consent) || undefined}
              aria-describedby={errors.consent ? `${uid}-consent-error` : undefined}
              className="mt-xxs size-5 shrink-0 accent-primary"
            />
            <span>
              Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden. Details in der{" "}
              <a href="/datenschutz" className="link link-underlined text-ink">
                Datenschutzerklärung
              </a>
              . <span aria-hidden>*</span>
            </span>
          </label>
          {err("consent")}
        </div>

        {/* Honeypot gegen Spam-Bots */}
        <div aria-hidden className="absolute -left-[9999px] size-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="flex flex-col gap-md lg:col-span-7">
          <button type="submit" className="btn btn-primary w-full sm:w-auto sm:self-start" disabled={status === "sending"}>
            {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
          </button>
          <p className="text-body-sm text-body">* Pflichtfelder</p>
          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="bg-surface-soft p-md text-body-md text-ink">
                <strong className="font-bold">Danke, Ihre Anfrage ist angekommen.</strong> Wir melden uns so bald wie
                möglich bei Ihnen.
              </p>
            )}
            {status === "error" && (
              <p className="bg-surface-soft p-md text-body-md text-ink">
                <strong className="font-bold">Das hat nicht geklappt.</strong>{" "}
                {Object.keys(errors).length
                  ? "Bitte prüfen Sie die markierten Felder."
                  : "Bitte versuchen Sie es erneut oder rufen Sie uns an:"}{" "}
                <a href={site.phone.href} className="link link-underlined inline-flex items-center gap-xxs font-bold">
                  <PhoneIcon className="size-4" />
                  {site.phone.display}
                </a>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
