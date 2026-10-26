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
| Baustellenfotos der Bildersammlung (einfarbige Platzhalter) | `lib/gallery.ts`, `public/images/galerie/` |
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

## Leistungsseiten

`/entkernung-abbruch-rueckbau/` (Sprungmarke `#schadstoffsanierung` für Asbest und Mineralwolle),
`/entruempelung-haushaltsaufloesung/` und `/renovierung/` (Sprungmarken `#trockenbau`, `#bodenverlegung`, `#umzuege`).
Vorlage: `components/ServicePage.tsx`, Texte in `lib/subpages.ts`, Kurztexte und Formular-Auswahl in `lib/content.ts`.

## Karte

Die Einsatzgebiet-Karte (`components/LocationMap.tsx`) nutzt [Leaflet](https://leafletjs.com) mit Kacheln von
OpenStreetMap. Leaflet und die Kacheln laden erst, wenn die Karte in Sichtweite kommt. Standorte und
Routenlinks (Google Maps) stehen in `lib/site.ts` → `locations`. Die Kachelabrufe übertragen die IP-Adresse
an die OpenStreetMap Foundation – in der Datenschutzerklärung beschrieben.

## Regionale Landingpages

Die Sektion „Einsatzgebiet“ auf der Startseite verteilt auf sechs Regionen (`lib/regions.ts` → `regions`):
`/einsatzgebiet/landsberg-am-lech/`, `/einsatzgebiet/ammersee-westufer/`, `/einsatzgebiet/buchloe-fuchstal/`,
`/einsatzgebiet/augsburg/`, `/einsatzgebiet/schongau/`, `/einsatzgebiet/allgaeu/`.
Vorlage: `components/RegionPage.tsx`, Texte in `lib/regions.ts`. Standorte (Vilgertshofen, Landsberg) in `lib/site.ts`.

Neue Region veröffentlichen:

1. In `lib/regions.ts` einen `RegionPage`-Datensatz anlegen und in `regionPages` eintragen (Sitemap).
2. Ordner `app/einsatzgebiet/landsberg-am-lech/` kopieren, Ordnername = Slug aus `regions[].href`, Import anpassen.
3. Texte je Region eigenständig schreiben (Schwerpunkte, Orte, FAQ) – reine Ortsnamen-Kopien wertet Google als Brückenseiten.

## Bilder

Alle Fotos stammen aus Wikimedia Commons (CC0 / CC BY / CC BY-SA), Quellen und Lizenzen in
`lib/images.ts` und im Footer. Die Gewerke-Fotos sind als Symbolbilder gekennzeichnet. Eigene Projektfotos
können in `lib/images.ts` direkt eingesetzt werden.
