# JL Bauprojekte – One-Pager

Next.js 16 (App Router) + Tailwind CSS 4. Design-Tokens aus `DESIGN.md` (BMW corporate) in `app/globals.css`.

## Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Vor dem Livegang ersetzen

Alle Platzhalter sind im Code mit `PLATZHALTER` markiert:

| Was | Wo |
| --- | --- |
| Straße, Rechtsform, Erreichbarkeit (Telefon/E-Mail von jlbauprojekte.de übernommen) | `lib/site.ts` |
| Welche Gewerke selbst / über Partner | `lib/content.ts` → `trades` |
| Impressum, Datenschutzerklärung | `app/impressum/page.tsx`, `app/datenschutz/page.tsx` |
| Domain | `.env` → `NEXT_PUBLIC_SITE_URL` |

## Kontaktformular

`POST /api/kontakt` validiert, filtert Spam (Honeypot, Drosselung) und versendet per [Resend](https://resend.com).
Variablen siehe `.env.example`. Ohne Konfiguration wird die Anfrage im Entwicklungsmodus nur protokolliert;
in Produktion antwortet die API mit 503 und das Formular verweist auf die Telefonnummer.
Ohne JavaScript funktioniert das Formular als normales POST mit Weiterleitung auf `/anfrage`.

## SEO

- Metadata, Open Graph, Canonical, Geo-Tags: `app/layout.tsx`
- Schema.org `GeneralContractor`/`LocalBusiness` + `WebSite` + `FAQPage`: `components/JsonLd.tsx`
- `sitemap.xml`, `robots.txt`: `app/sitemap.ts`, `app/robots.ts`

## Regionale Landingpages

Die Sektion „Einsatzgebiet“ auf der Startseite verteilt auf drei Regionen (`lib/regions.ts` → `regions`):
`/einsatzgebiet/landsberg-am-lech/`, `/einsatzgebiet/ammersee-westufer/`, `/einsatzgebiet/buchloe-fuchstal/`.
Vorlage: `components/RegionPage.tsx`, Texte in `lib/regions.ts`. Standorte (Vilgertshofen, Landsberg) in `lib/site.ts`.

Neue Region veröffentlichen:

1. In `lib/regions.ts` einen `RegionPage`-Datensatz anlegen und in `regionPages` eintragen (Sitemap).
2. Ordner `app/einsatzgebiet/landsberg-am-lech/` kopieren, Ordnername = Slug aus `regions[].href`, Import anpassen.
3. Texte je Region eigenständig schreiben (Schwerpunkte, Orte, FAQ) – reine Ortsnamen-Kopien wertet Google als Brückenseiten.

## Bilder

Alle Fotos stammen aus Wikimedia Commons (CC0 / CC BY / CC BY-SA), Quellen und Lizenzen in
`lib/images.ts` und im Footer. Die Gewerke-Fotos sind als Symbolbilder gekennzeichnet. Eigene Projektfotos
können in `lib/images.ts` direkt eingesetzt werden.
