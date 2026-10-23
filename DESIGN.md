---
name: J&L Bauprojekte
description: Handwerk aus der Region zwischen Lech und Ammersee – Logo-Gelb auf Anthrazit, warmer Stein, klare Ansprache.
colors:
  primary: "#ffc000"
  primary-active: "#e6ad00"
  primary-disabled: "#e2ded4"
  ink: "#1d1c1a"
  body: "#3a3834"
  body-strong: "#1a1a1a"
  muted: "#6b675f"
  muted-soft: "#9a9a9a"
  hairline: "#e7e3da"
  hairline-strong: "#cfc9bc"
  canvas: "#ffffff"
  surface-soft: "#f3f1ec"
  surface-card: "#faf9f6"
  surface-strong: "#e7e3da"
  surface-dark: "#1f1e1c"
  surface-dark-elevated: "#2d2b28"
  on-primary: "#1d1c1a"
  on-dark: "#ffffff"
  on-dark-soft: "#c9c4b8"
  success: "#22c55e"
  warning: "#f59e0b"
  error: "#dc2626"
typography:
  display-xl:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "4rem"
    fontWeight: 700
    lineHeight: 1.05
  display-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
  display-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
  display-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.55
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.55
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.5px"
  nav-link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.3px"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"
  nav: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
    height: "48px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
    height: "48px"
  button-secondary-active:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  card-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
    height: "48px"
  chip-service:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "44px"
  chip-service-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
  badge:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.nav-link}"
    height: "{spacing.nav}"
---

# Design System: J&L Bauprojekte

## Overview

**Creative North Star: "Die Baustellentafel"**

Die Website spricht wie das Schild am Bauzaun: Logo-Gelb auf Anthrazit, große klare Zeilen, keine Umwege. Sie ist zupackend, ehrlich und regional. Zupackend heißt kräftige 700er-Überschriften neben leichtem 300er-Fließtext und ein Anruf-Button, der immer in Reichweite ist. Ehrlich heißt echte Firmendaten, Fremdfotos als „Symbolbild“ gekennzeichnet, Platzhalter im Code markiert statt erfunden. Regional heißt Fotos von Lechwehr, Altstadt, Ammersee und Buchloe, Ortsnamen im Text und eine eigene Karte mit beiden Standorten.

Helle Abschnitte stehen auf Weiß oder warmem Stein, dunkle Bänder in Anthrazit tragen Hero, Vertrauensbereich und Navigation. Inhalte sitzen auf weißen Karten; erst beim Überfahren hebt sich eine Karte an und zeigt ihre gelbe Oberkante – das Wiedererkennungsmerkmal und die einzige Dekoration. Bewegung ist knapp: Hero-Texte steigen einmal ein, Abschnitte blenden beim Scrollen in 500 ms ein, Fotos stehen sofort da.

**Key Characteristics:**
- Logo-Gelb (#ffc000) als einzige Handlungs- und Markenfarbe, Text darauf immer in Tinte.
- Anthrazit (#1f1e1c) für Navigation, Hero und Vertrauensbänder; Weiß und warmer Stein (#f3f1ec) für Inhalt.
- Inter in 700 (Überschriften, Buttons) gegen 300 (Fließtext); 400 nur in der Navigation.
- Weiße Karten mit weichem Schatten und 4px Radius; die gelbe Oberkante erscheint erst beim Überfahren.
- Fotos aus der Region, rechteckig, ohne Rahmen; Symbolbilder als solche beschriftet.
- Ruhige Bewegung, die „Bewegung reduzieren“ respektiert und ohne JavaScript nichts versteckt.

## Colors

Eine Signalfarbe aus dem Logo, umgeben von warmen Neutraltönen zwischen Stein und Anthrazit.

### Primary
- **Logo-Gelb** (#ffc000): Primär-Buttons („Jetzt anrufen“, „Kostenlose Besichtigung anfragen“), die Oberkante von Karten beim Überfahren, Icon-Kacheln der Regionskarten, Abzeichen „Schwerpunkt in der Region“, Standortpunkte auf der Karte, Textmarkierung und der Fokusrahmen auf dunklen Flächen.
- **Gelb gedrückt** (#e6ad00): Hover- und Druckzustand des Primär-Buttons.

### Neutral
- **Anthrazit** (#1f1e1c): Kopfzeile, Hero, Vertrauens- und Ablaufbänder, mobile Aktionsleiste, Karte im Einsatzgebiet.
- **Anthrazit erhöht** (#2d2b28): Karten und Kanten auf Anthrazit, Trennlinie unter der Kopfzeile.
- **Warmer Stein** (#f3f1ec): Wechselnde helle Abschnitte (Leistungen, FAQ, Footer), Adressblöcke.
- **Papierweiß** (#ffffff) und **Kartenweiß** (#faf9f6): Seitenfläche, Kartenfläche, Platzhalter hinter Fotos.
- **Tinte** (#1d1c1a): Überschriften, Text auf Gelb, Fokusrahmen auf hellen Flächen.
- **Fließtext** (#3a3834) und **Gedämpft** (#6b675f): Absätze; Platzhalter, inaktive Verzeichniseinträge.
- **Haarlinie** (#e7e3da) und **Haarlinie kräftig** (#cfc9bc): Kartenrand, Ortschips.
- **Auf Dunkel** (#ffffff) und **Auf Dunkel gedämpft** (#c9c4b8): Text auf Anthrazit; gedämpft für Navigation, Brotkrumen, Bildunterschriften.

### Named Rules
**Die Ein-Gelb-Regel.** Gelb ist Handlung und Markenkante, nie Fließtext oder Fläche hinter Absätzen. Gelber Text auf Weiß erreicht nur 1,6:1 und ist verboten.

**Die Schild-Regel.** Auf Gelb steht immer Tinte (#1d1c1a), nie Weiß.

## Typography

**Display Font:** Inter (selbst gehostet, variable 300–700) mit system-ui als Fallback
**Body Font:** Inter

**Character:** Eine Schrift, zwei Stimmen: schwere 700er-Zeilen für Aussagen, leichte 300er für Erklärungen. Das wirkt wie Beschriftung auf Bauschild und Prospekt zugleich.

### Hierarchy
- **Display XL** (700, 4rem, 1.05): Hero-Überschrift der Startseite ab Desktop.
- **Display LG** (700, 3rem, 1.1): Abschnittsüberschriften ab Desktop, H1 der Unterseiten.
- **Display MD** (700, 2rem, 1.15): Abschnittsüberschriften mobil, H1 mobil.
- **Display SM** (700, 1.5rem, 1.25): Kartentitel (Leistungen, Regionen), Menüpunkte im mobilen Menü.
- **Title LG / MD / SM** (700; 1.25 / 1.125 / 1rem): Kartengruppen, Einleitungen, Linktexte und Labels.
- **Body MD** (300, 1rem, 1.55): Fließtext, Absätze höchstens 52–60ch breit.
- **Body SM** (300, 0.875rem, 1.55): Bildunterschriften, Orte, Kleingedrucktes.
- **Button** (700, 0.875rem, 0.5px Laufweite): Button-Beschriftungen.
- **Nav Link** (400, 0.875rem, 0.3px Laufweite): Hauptnavigation.

### Named Rules
**Die Zwei-Stimmen-Regel.** Überschriften 700, Fließtext 300. Kein 500, kein fetter Fließtext außer für einzelne Hervorhebungen wie Telefonnummern.

**Die Komposita-Regel.** Deutsche Wörter wie „Haushaltsauflösung“ müssen passen: Überschriften sind ausbalanciert, und unter 22.5rem Viewport-Breite (sehr kleine Geräte oder stark vergrößerte Schrift) rücken Display-Größen eine Stufe herunter und Text darf trennen.

## Layout

Zwölfspaltiges Raster ab 64rem, darunter eine Spalte. Inhalt maximal 90rem breit, Seitenränder 16 / 24 / 32px (mobil / ab 48rem / ab 64rem). Abschnitte haben 80px Innenabstand oben und unten und wechseln zwischen Weiß, Stein und Anthrazit; zwei gleiche Flächen hintereinander werden vermieden.

Breakpoints in rem (40 / 48 / 64 / 72rem) folgen der Schriftgröße im Browser: Wer größere Schrift einstellt, bekommt früher das kompaktere Layout. Die Desktop-Navigation erscheint ab 72rem (≈1150px), darunter das Burger-Menü. Unter 64rem erscheint unten die Aktionsleiste mit „Jetzt anrufen“ und „Kontakt aufnehmen“, sobald die Hero-Buttons aus dem Bild sind.

Abstände nach Token: eng gruppiert mit 4–12px, Kartenpolster 24–32px, Abschnitte 48–80px.

## Elevation & Depth

Hell ist leicht angehoben, dunkel ist Fläche. Karten schweben mit einem weichen, zweistufigen Schatten über Weiß und Stein; auf Mausgeräten heben sie sich beim Überfahren um 3px und zeigen die gelbe Kante. Dunkle Bänder bleiben flach, ihre Karten setzen sich nur durch einen Ton heller ab. Fotos tragen keine Schatten; unter Text auf Fotos liegt ein Verlauf aus Tinte.

### Shadow Vocabulary
- **Karte** (`box-shadow: inset 0 0 0 #ffc000, 0 1px 2px rgb(29 28 26 / 0.06), 0 12px 32px -16px rgb(29 28 26 / 0.28)`): alle weißen Karten in Ruhe; der leere Innenschatten hält die Liste für den Übergang gleich lang.
- **Karte gehoben** (`box-shadow: inset 0 3px 0 #ffc000, 0 2px 4px rgb(29 28 26 / 0.06), 0 20px 40px -18px rgb(29 28 26 / 0.35)`): Hover auf Mausgeräten, zusammen mit `translateY(-3px)` und gelbem oberem Rand; bei Tastaturfokus dieselbe Kante ohne Anheben.
- **Karte dunkel** (`box-shadow: inset 0 0 0 #ffc000, 0 12px 32px -16px rgb(0 0 0 / 0.6)`, beim Überfahren `inset 0 3px 0 #ffc000, 0 20px 40px -18px rgb(0 0 0 / 0.7)`): Karten auf Anthrazit.

### Named Rules
**Die Kanten-Regel.** In Ruhe haben Karten keine farbige Kante. Beim Überfahren mit der Maus oder bei Tastaturfokus in der Karte erscheint oben 4px Gelb: 1px Rand plus 3px Innenschatten, damit die Kante dem 4px-Radius folgt. Auf Touch-Geräten bleibt sie aus. Farbige Kanten links oder rechts gibt es nicht.

## Shapes

Leicht entschärfte Rechtecke: 4px Radius für Buttons, Karten, Eingabefelder, Leistungs-Chips und Icon-Kacheln. Pillenform nur für kleine Abzeichen und Ortschips. Fotos sind rechteckig ohne Radius. Die Netzwerk-Karte zeigt beim Überfahren eine 8px-Kante und hat deshalb oben eckige, unten 4px abgerundete Ecken.

## Components

### Buttons
Klar, groß, immer erreichbar.
- **Shape:** 4px Radius, mindestens 48px hoch, 14px × 32px Polster.
- **Primary:** Logo-Gelb mit Tinte, 700, 0.875rem, 0.5px Laufweite; meist mit Telefon-Icon.
- **Secondary:** Weiß mit Tinte; auf Anthrazit ohne Kontur.
- **Hover / Active:** Gelb dunkelt auf #e6ad00, Weiß wird Stein; beim Drücken `scale(0.97)`.
- **Umbruch:** Beschriftungen brechen nur um, wenn der Platz nicht reicht; die Telefonnummer bricht nie.

### Links
- Im Text unterstrichen (`link-underlined`), beim Überfahren dicker und gelb unterstrichen.
- Navigations- und Kartenlinks ohne Unterstrich, der beim Überfahren erscheint.
- Linktexte beschreiben das Ziel („Leistungen in Landsberg & Umgebung“), nie „Mehr erfahren“.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** Weiß auf hellen Abschnitten, Anthrazit erhöht auf dunklen.
- **Shadow Strategy:** siehe Elevation & Depth, Kanten-Regel.
- **Border:** 1px Haarlinie; beim Überfahren oder bei Tastaturfokus oben Gelb.
- **Internal Padding:** 24px, ab 40rem bis 32px.
- **Keine verschachtelten Karten.**

### Inputs / Fields
- **Style:** Weiß, 1px Rand in Gedämpft, 4px Radius, mindestens 48px hoch, 16px Text.
- **Focus:** 2px Tinte-Rahmen mit 2px Abstand.
- **Error:** Rand in Fehler-Rot, Meldung darunter mit `aria-describedby`.
- **Leistungs-Chips:** Umschalter im Formular, 44px hoch; gewählt in Gelb mit fetter Schrift.

### Navigation
- **Kopfzeile:** Anthrazit, 64px, klebt oben; Logo-Bagger plus „J&L Bauprojekte“, Links in Auf Dunkel gedämpft, aktiver Link weiß, fett und unterstrichen; rechts der gelbe Anruf-Button.
- **Mobil (unter 72rem):** Burger öffnet ein Vollbild-Menü in Anthrazit mit großen Einträgen; der Fokus springt ins Menü, der Rest der Seite ist gesperrt, Escape schließt.
- **Aktionsleiste (unter 64rem):** Anthrazit am unteren Rand mit Anruf- und Kontakt-Button.

### Regionskarte (Signatur)
Weiße Karte mit 56px Icon-Kachel in Gelb (Stadttor, Segelboot, Haus), optionalem Abzeichen „Unser Standort“ oder „Unser Firmensitz“, Regionsname als Link mit über die ganze Karte gespannter Klickfläche, Ortsliste, Schwerpunkt-Text und beschreibendem Pfeil-Hinweis.

### Einsatzgebiet-Karte (Signatur)
Eigene SVG-Karte auf Anthrazit: Lech als Linie, Ammersee als Fläche, Orte als Punkte, beide Standorte als gelbe Punkte mit Legende „Unsere Standorte“. Beschriftungen überlappen nicht.

### Einblendung
Abschnitte blenden beim Scrollen einmal in 500ms ein (16px nach oben, Ease-out), gestaffelt um 60ms. Hero-Texte steigen ohne Verzögerung ein. Fotos werden nie verdeckt. Bei „Bewegung reduzieren“ entfällt alles.

## Do's and Don'ts

### Do:
- **Do** Logo-Gelb (#ffc000) für die eine Hauptaktion pro Bereich und für die Kartenkante beim Überfahren verwenden.
- **Do** Text auf Gelb immer in Tinte (#1d1c1a) setzen.
- **Do** Abschnitte zwischen Weiß, Stein (#f3f1ec) und Anthrazit (#1f1e1c) wechseln.
- **Do** Fotos aus der Region zeigen und Fremdfotos aus Gewerken als „Symbolbild“ beschriften.
- **Do** Ortsnamen und echte Firmendaten nennen; offene Angaben im Code als PLATZHALTER markieren.
- **Do** Touch-Ziele mindestens 44px hoch halten und Breakpoints in rem schreiben.

### Don't:
- **Don't** gelben Text auf hellem Grund verwenden.
- **Don't** farbige Kanten links oder rechts an Karten, Hinweisen oder Listen setzen.
- **Don't** Karten in Karten verschachteln.
- **Don't** Fotos per Animation verdecken oder verzögert einblenden.
- **Don't** Bewertungen, Referenzen oder Zahlen erfinden; nur belegte Angaben aus `lib/site.ts`.
- **Don't** Schriftschnitt 500 oder negative Laufweite einführen.
