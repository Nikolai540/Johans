import { NextResponse, type NextRequest } from "next/server";

import { serviceOrder, services, type ServiceId } from "@/lib/content";
import { site } from "@/lib/site";

type Payload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: ServiceId[];
  consent: boolean;
  website: string;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()0-9\s/.-]{5,40}$/;

// Einfache Drosselung pro IP (pro Server-Instanz): max. 5 Anfragen in 10 Minuten.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function normalize(raw: Record<string, unknown>): Payload {
  const list = Array.isArray(raw.services) ? raw.services : raw.services ? [raw.services] : [];
  return {
    name: str(raw.name, 100),
    email: str(raw.email, 200),
    phone: str(raw.phone, 40),
    message: str(raw.message, 4000),
    services: list.filter((s): s is ServiceId => typeof s === "string" && (serviceOrder as string[]).includes(s)),
    consent: raw.consent === true || raw.consent === "on",
    website: str(raw.website, 200),
  };
}

function validate(p: Payload): Errors {
  const e: Errors = {};
  if (p.name.length < 2) e.name = "Bitte geben Sie Ihren Namen an.";
  if (!EMAIL.test(p.email)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (p.phone && !PHONE.test(p.phone)) e.phone = "Bitte prüfen Sie die Telefonnummer.";
  if (p.message.length < 10) e.message = "Bitte beschreiben Sie Ihr Vorhaben in ein paar Worten.";
  if (!p.consent) e.consent = "Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung.";
  return e;
}

async function send(p: Payload) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;
  const text = [
    `Neue Anfrage über ${site.url}`,
    "",
    `Name: ${p.name}`,
    `E-Mail: ${p.email}`,
    `Telefon: ${p.phone || "–"}`,
    `Leistungen: ${p.services.map((id) => services[id].name).join(", ") || "–"}`,
    "",
    p.message,
  ].join("\n");

  if (!key || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[kontakt] Versand nicht konfiguriert – Anfrage nur protokolliert:\n" + text);
      return true;
    }
    console.error("[kontakt] RESEND_API_KEY / CONTACT_FROM_EMAIL fehlen – Anfrage konnte nicht zugestellt werden.");
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: p.email,
      subject: `Anfrage: ${p.services.map((id) => services[id].name).join(", ") || "Allgemein"} – ${p.name}`,
      text,
    }),
  });
  if (!res.ok) console.error("[kontakt] Versand fehlgeschlagen:", res.status, await res.text().catch(() => ""));
  return res.ok;
}

export async function POST(req: NextRequest) {
  const isJson = (req.headers.get("content-type") ?? "").includes("application/json");
  const reply = (ok: boolean, status: number, errors?: Errors) =>
    isJson
      ? NextResponse.json({ ok, errors }, { status })
      : NextResponse.redirect(new URL(`/anfrage?status=${ok ? "ok" : "fehler"}`, req.url), 303);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return reply(false, 429);

  let raw: Record<string, unknown> = {};
  try {
    if (isJson) {
      raw = (await req.json()) as Record<string, unknown>;
    } else {
      const fd = await req.formData();
      raw = { ...Object.fromEntries(fd.entries()), services: fd.getAll("services") };
    }
  } catch {
    return reply(false, 400);
  }

  const payload = normalize(raw);
  // Honeypot ausgefüllt: still erfolgreich antworten, nichts versenden
  if (payload.website) return reply(true, 200);

  const errors = validate(payload);
  if (Object.keys(errors).length) return reply(false, 422, errors);

  const ok = await send(payload);
  return reply(ok, ok ? 200 : 503);
}
