# Prompt: Hero mit Wanddurchbruch

## Aufgabe

Baue die Hero-Section der Startseite neu (`components/Hero.tsx` plus eine neue Client-Komponente). Beim Laden steht eine echte Wand vor dem Hero-Foto. Sie bekommt Risse, bricht in unregelmäßigen Stücken weg und gibt das Foto frei. Es soll wie ein echter Durchbruch auf einer Baustelle aussehen, nicht wie ein Spiel. Ein Abbruchunternehmen muss dabei vertrauenswürdig wirken.

## Ausgangslage (nicht neu erfinden)

- `Hero.tsx` ist eine Foto-Überblendung mit Titel, Intro und zwei Buttons. Diese Ebene bleibt als Hintergrund unter der Wand. `data-hero-actions` muss bleiben, `MobileActions` nutzt es. Der `h1` bleibt von Anfang an im DOM.
- Next.js 16, Tailwind 4, Tokens in `DESIGN.md` und `app/globals.css`. Lies vor dem ersten Code die passende Anleitung in `node_modules/next/dist/docs/` (siehe `AGENTS.md`).
- Der Cookie-Banner liegt unten auf `z-[55]`, die Navbar ist 64 px hoch (`--spacing-nav`). Die Wand liegt nur über der Hero, nie über Banner oder Navbar.
- Es gibt noch keine Mauer und keinen Canvas. Ein früherer Versuch mit rechteckigen Ziegeln und „Tippen zum Zerstören" wirkte wie ein Spiel. Nicht wiederholen.

## Skills (falls verfügbar)

frontend-design oder taste-skill für den Look, ponytail (Level full) fürs Coding, humanizer für alle Texte, playwright-cli zum Testen. Fehlt einer, mach ohne ihn weiter.

## Ablauf der Animation (insgesamt höchstens 2,2 s)

Sie startet von selbst, sobald Wandbild und Hero-Foto geladen sind. Niemand muss tippen.

1. **0 bis 0,6 s, Wand steht.** Wandfoto vollflächig, darauf klein und ruhig „J&L Bauprojekte · Abbruch · Entkernung · Entrümpelung". Kein Hinweis zum Antippen.
2. **0,6 bis 1,0 s, Risse.** Von einem Einschlagpunkt (Mitte, leicht unterhalb) laufen dünne, dunkle Risslinien nach außen. Sie verzweigen sich und werden erst am Ende ganz sichtbar.
3. **1,0 bis 2,2 s, Einsturz.** Die Wand ist entlang der Risse in 24 bis 60 unregelmäßige Dreiecke und Vielecke zerteilt (versetztes Raster, kein Rechteck-Ziegel). Die Stücke nahe am Einschlag lösen sich zuerst, die äußeren folgen wellenförmig. Sie fallen mit Schwerkraft und leichter Drehung (höchstens ±1,5 rad/s) und werden zum Ende hin ausgeblendet. Dazu feiner Staub: weiche, unscharfe Sprites mit niedriger Deckkraft, die sich langsam verziehen. Keine Quadrate oder Konfetti.
4. **Danach** wird die Wand entfernt, Fokus und Scroll bleiben unberührt.

Mit Tippen oder einem Klick auf einen unauffälligen Button „Überspringen" (unten links, über der Safe-Area) endet die Animation sofort. Sie läuft pro Sitzung nur einmal (`sessionStorage`, in `try/catch`). Mit `prefers-reduced-motion` und ohne JavaScript (`scripting: none`) wird die Wand gar nicht gezeigt.

## So wirkt es echt

- **Material:** ein echtes Foto einer Altbauwand (grauer, rissiger Putz mit freiliegenden Ziegeln), keine gezeichneten Steine. Die Stücke bekommen Ausschnitte genau dieses Fotos, damit die Textur beim Fallen stimmt.
- **Farben:** natürliches Grau, Sandstein, gebrochenes Ziegelrot. Keine gesättigten Spielfarben.
- **Tiefe:** an den Bruchkanten eine dünne hellere Kante und innen ein feiner Schatten. Während des Falls ein weicher Schlagschatten.
- **Bewegung:** keine übertriebene Kamerawackler. Auf Desktop höchstens 3 px Versatz für 150 ms beim Einschlag, auf Mobile keiner. Kein Ton.
- **Pacing:** `--ease-out` und `--ease-in-out` aus den Tokens, Fall mit echter Beschleunigung.

## Responsive und Performance (Pflicht)

- Höhe `calc(100dvh - var(--spacing-nav))`, nie `100vh`. Hinweis und Button dürfen von der Adressleiste nicht abgeschnitten werden.
- Zwei Detailstufen: unter 768 px nur 24 Stücke und höchstens 25 Staubsprites, sonst bis 60 Stücke und 80 Sprites. Canvas-DPR auf 2 begrenzen. Ziel sind konstante 60 FPS auf einem Mittelklasse-Handy.
- Bei `resize` oder Drehen die Canvas-Größe neu berechnen, solange die Wand steht. Läuft der Einsturz schon, nichts mehr ändern.
- `touch-action: none` auf der Wand, solange sie steht, damit kein Gummiband-Scrolling entsteht. Danach `pointer-events: none`, damit Buttons sofort klickbar sind.
- Der LCP darf nicht schlechter werden. Das Hero-Foto lädt mit `preload` wie bisher, das Wandbild ist klein (siehe Assets) und blockiert nichts. Schlägt das Laden fehl, überspringt die Komponente die Animation.

## Assets

- Lege `public/images/hero/wand-1920.webp` (1920 × 1080) und `wand-900.webp` (900 × 1200, für unter 768 px) ab, jeweils unter 250 KB. Bindest du sie mit `next/image` oder `<picture>` ein, wähle, was zum Canvas passt.
- Das Foto muss ich liefern. Liegt es nicht vor, erzeuge eine ehrliche Platzhalter-Textur (Putz mit Ziegelflecken) im Canvas und schreib in den Abschlussbericht, dass das echte Foto fehlt.

## Qualität und Abschluss

- Barrierefrei: Die Wand ist `aria-hidden`, der Skip-Button hat ein sichtbares Fokus-Ring und ein `aria-label`. Texte auf Deutsch, ohne Floskeln.
- Prüfe vor dem Start, ob ein alter Dev-Server noch auf dem Port läuft, und beende ihn nach dem Test.
- Teste mit Playwright auf 360 × 740, 768 × 1024 und 1440 × 900: Wand steht, Mitte der Animation, Ende, Drehen vor dem Start, `prefers-reduced-motion`. Schau dir die Screenshots an, bevor du Erfolg meldest.
- `npm run lint` (tsc) muss durchlaufen.
- Branch-Name beginnt mit einer Zahl, Commit-Nachrichten auf Deutsch.
- Endbericht: was gebaut ist, was du nicht geprüft hast (z. B. echte Geräte), und ob das Wandfoto fehlt.
