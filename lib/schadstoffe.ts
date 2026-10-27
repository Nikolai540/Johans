// Texte der Seite /schadstoffe/ (Ratgeber Schadstoffe im Altbau).
// Vorsichtig formuliert: Laborproben werden empfohlen, nicht selbst durchgeführt; Arbeiten mit schwach
// gebundenem Asbest werden nicht versprochen (keine behördliche Zulassung bestätigt).
// PLATZHALTER: Bestätigen, ob J&L PAK- und PCB-haltige Bauteile selbst ausbaut – dann den Abschnitt "Unser Part" dort konkreter fassen.

export const schadstoffe = {
  title: "Schadstoffsanierung in Landsberg: Asbest, KMF & PAK erkennen | J&L Bauprojekte",
  description:
    "Asbest erkennen, KMF-Mineralwolle entsorgen, PAK im Parkettkleber: Wo Schadstoffe im Altbau stecken und wie eine Sanierung nach TRGS 519 abläuft. Schadstoffsanierung in Landsberg, Augsburg und im Allgäu.",
  h1: "Schadstoffe im Altbau: erkennen, richtig handeln, sicher sanieren",
  intro:
    "In vielen Häusern, die zwischen 1950 und 1995 gebaut oder modernisiert wurden, stecken Baustoffe, die heute verboten sind. Solange sie unberührt bleiben, merkt man davon meist nichts. Kritisch wird es beim Umbau. Hier lesen Sie, worauf Sie beim Hauskauf und vor der Sanierung achten sollten – und wie wir Schadstoffe in Landsberg am Lech, Augsburg und im Allgäu fachgerecht ausbauen.",

  why: {
    h2: "Warum Schadstoffe im Altbau in Profihände gehören",
    intro:
      "Gefährlich sind die meisten Altlasten nicht, solange sie fest verbaut sind. Gefährlich wird es, wenn beim Schleifen, Stemmen oder Herausreißen Fasern und Stäube frei werden – und sich unbemerkt im ganzen Haus verteilen.",
    items: [
      {
        title: "Unsichtbar",
        text: "Asbest im Spachtel oder PAK im Kleber sieht man nicht. Ob ein Baustoff belastet ist, zeigt erst die Schadstoffprüfung: Baujahr, Materialien und im Zweifel eine Laborprobe.",
      },
      {
        title: "Langfristig",
        text: "Eingeatmete Fasern bleiben in der Lunge. Erkrankungen zeigen sich oft erst Jahrzehnte später – deshalb gibt es bei Schadstoffen kein „kurz mal schnell“.",
      },
      {
        title: "Streng geregelt",
        text: "Für Arbeiten mit Asbest schreibt die TRGS 519 eine sachkundige Person, Gefährdungsbeurteilung, Schutzmaßnahmen und eine Anzeige bei der Behörde vor. Die Entsorgung läuft nur mit Nachweis.",
      },
      {
        title: "Teuer, wenn es schiefgeht",
        text: "Einmal im Haus verteilte Fasern lassen sich nur mit großem Aufwand wieder entfernen. Eine fachgerechte Sanierung von Anfang an ist fast immer die günstigere Lösung.",
      },
    ],
    years: [
      { value: "1993", label: "Seitdem sind Herstellung und Verwendung von Asbest in Deutschland verboten." },
      { value: "1996", label: "Mineralwolle, die vorher hergestellt wurde, gilt als krebsverdächtig." },
      { value: "1989", label: "Seitdem ist PCB verboten – vorher steckte es in dauerelastischen Fugen." },
    ],
  },

  big3: {
    h2: "Die großen Drei: Asbest, KMF und PAK/PCB",
    intro: "Diese Schadstoffe finden wir in Altbauten der Region am häufigsten. So erkennen Sie, wo sie stecken können.",
    items: [
      {
        id: "asbest",
        name: "Asbest",
        lead: "Die Faser, die bis 1993 in fast allem steckte.",
        where: [
          "Floor-Flex-Platten und Cushion-Vinyl, oft mit schwarzem Kleber",
          "Fliesenkleber, Spachtelmasse und manche Putze",
          "Asbestzement (Eternit): Dach- und Fassadenplatten, Blumenkästen, Fensterbänke",
          "Nachtspeicheröfen, Rohrisolierungen, Brandschutzplatten",
        ],
        danger:
          "Asbestfasern sind so fein, dass sie tief in die Lunge gelangen und dort bleiben. Sie können Asbestose, Lungenkrebs und Mesotheliom (Krebs des Rippenfells) auslösen – oft erst 20 bis 40 Jahre später.",
        recognize:
          "Ein erster Hinweis ist das Baujahr: Gebaut oder modernisiert vor 1993? Dann besteht Verdacht. Typisch sind graue Faserzementplatten und quadratische Bodenplatten von 25 oder 30 cm. Gewissheit bringt nur eine Laborprobe – Asbest erkennen kann man mit bloßem Auge nicht.",
        ours:
          "Mit Sachkunde nach TRGS 519 (Anlage 4) bauen wir asbesthaltige Bauteile wie Eternit-Platten, alte Bodenbeläge und Kleber aus und entsorgen sie mit Nachweis. Für schwach gebundenen Asbest, etwa in Isolierungen, gelten strengere Vorgaben – was in Ihrem Fall vorgeschrieben ist, sagen wir Ihnen nach der Besichtigung offen.",
      },
      {
        id: "kmf",
        name: "KMF – alte Mineralwolle",
        lead: "Glas- und Steinwolle aus der Zeit vor 1996.",
        where: [
          "Dämmung im Dach, zwischen den Sparren und in Decken",
          "Dämmung in leichten Zwischenwänden",
          "Rohr- und Heizungsdämmung",
          "Trittschalldämmung unter altem Estrich",
        ],
        danger:
          "Künstliche Mineralfasern (KMF), die vor 1996 hergestellt wurden, gelten als krebsverdächtig: Die Fasern sind lange im Körper beständig. Beim Ausbau reizen sie außerdem Haut, Augen und Atemwege.",
        recognize:
          "Entscheidend ist das Herstellungsjahr. Mineralwolle, die zwischen 1996 und 2000 ohne RAL-Gütezeichen eingebaut wurde, ist ebenfalls verdächtig. Lässt sich das Alter nicht klären, wird sie wie alte Mineralwolle behandelt.",
        ours:
          "Den Ausbau erledigen wir nach TRGS 521: staubarm, mit Schutzausrüstung, direkt in reißfeste Säcke verpackt. Alte KMF-Mineralwolle entsorgen wir über zugelassene Annahmestellen – über den normalen Bauschutt oder Wertstoffhof geht das nicht.",
      },
      {
        id: "pak-pcb",
        name: "PAK und PCB",
        lead: "Teer im Parkettkleber, Gift in alten Fugen.",
        where: [
          "PAK: schwarzer, teerhaltiger Parkettkleber, vor allem bis in die 1970er-Jahre",
          "PAK: Holzpflaster, Teerkork und alte Dachpappen",
          "PCB: dauerelastische Fugenmassen, vor allem aus den Jahren 1955 bis 1975",
          "PCB: Anstriche und Kondensatoren alter Leuchten",
        ],
        danger:
          "Einige PAK (polyzyklische aromatische Kohlenwasserstoffe) sind krebserzeugend und werden über Staub und Haut aufgenommen. PCB (polychlorierte Biphenyle) reichern sich im Körper an und können aus Fugen in die Raumluft ausgasen.",
        recognize:
          "Typisch für PAK ist ein schwarzer, teerartiger Kleber unter Parkett, oft mit einem Geruch nach Mottenkugeln. PCB-Verdacht besteht bei weichen, dauerelastischen Fugen in Häusern aus den 1950er- bis 1970er-Jahren. Klarheit schafft eine Laboranalyse.",
        ours:
          "Verdachtsstellen sprechen wir bei der Besichtigung an und empfehlen, wo nötig, eine Laboranalyse. Danach klären wir mit Ihnen, welche Schutzmaßnahmen und welcher Entsorgungsweg vorgeschrieben sind, bevor der alte Boden herauskommt.",
      },
    ],
  },

  checklist: {
    h2: "Schadstoffprüfung im Altbau: Checkliste vor dem Hauskauf",
    intro: "Wer ein älteres Haus kauft, sollte diese Punkte vor der Unterschrift klären – und mögliche Sanierungskosten in den Kaufpreis einrechnen.",
    items: [
      "Baujahr und Jahr der letzten Modernisierung erfragen",
      "Alte Bodenbeläge anheben lassen: Sind darunter schwarzer Kleber oder kleine quadratische Platten?",
      "Dach, Fassade, Garage und Schuppen auf graue Faserzementplatten prüfen",
      "Nach Nachtspeicheröfen und alten Rohrisolierungen fragen",
      "Dämmung im Dach ansehen: Wann wurde sie eingebaut?",
      "Weiche Fugen an Fenstern und Fertigteilen beachten",
      "Bei Verdacht eine Materialprobe im Labor untersuchen lassen",
    ],
  },

  process: {
    h2: "So läuft eine Sanierung nach TRGS 519 bei uns ab",
    intro:
      "Die TRGS 519 regelt, wie mit Asbest gearbeitet werden muss. Unser Sachkundenachweis – oft als „TRGS 519 Zertifizierung“ bezeichnet – ist die Voraussetzung dafür. Jeder Schritt ist dokumentiert.",
    steps: [
      {
        title: "Kostenlose Erstbesichtigung",
        text: "Wir sehen uns Baujahr, Materialien und Umfang vor Ort an, sprechen Verdachtsstellen an und empfehlen, wo nötig, eine Laborprobe.",
      },
      {
        title: "Gefährdungs\u00adbeurteilung und Arbeitsplan",
        text: "Wie fest ist der Schadstoff gebunden, welches Verfahren ist zulässig? Daraus legen wir die Schutzmaßnahmen fest – Sie erhalten ein verbindliches Angebot.",
      },
      {
        title: "Anzeige bei der Behörde",
        text: "Asbestarbeiten zeigen wir vor Beginn beim zuständigen Gewerbeaufsichtsamt an. Darum müssen Sie sich nicht kümmern.",
      },
      {
        title: "Geschützter Ausbau",
        text: "Arbeitsbereich abschotten, staubarm und feucht arbeiten, mit Industriesaugern der Staubklasse H direkt an der Quelle absaugen, Atemschutz und Schutzanzüge tragen. Platten bauen wir zerstörungsfrei aus.",
      },
      {
        title: "Professionelle Entsorgung",
        text: "Belastete Abfälle verpacken wir staubdicht, kennzeichnen sie und geben sie bei zugelassenen Anlagen ab. Sie erhalten die Entsorgungsnachweise und eine besenreine Baustelle.",
      },
    ],
    note: "Fest gebunden oder schwach gebunden? Für schwach gebundenen Asbest, etwa in Isolierungen oder Leichtbauplatten, gelten noch strengere Vorgaben bis hin zu Unterdruck und Freimessung. Welcher Weg in Ihrem Fall vorgeschrieben ist, sagen wir Ihnen nach der Besichtigung offen.",
  },

  after: {
    h2: "Nach der Sanierung geht es direkt weiter",
    text: "Sind die Schadstoffe raus, verlegen wir auf Wunsch gleich den neuen Laminat- oder Vinylboden, renovieren die Räume und übernehmen den Umzug. Ein Ansprechpartner, ein Zeitplan, keine Wartezeit zwischen zwei Firmen.",
  },

  faqs: [
    {
      q: "Wie kann ich Asbest erkennen?",
      a: "Mit bloßem Auge gar nicht. Hinweise sind ein Baujahr oder eine Modernisierung vor 1993, graue Faserzementplatten, alte quadratische Bodenplatten und schwarzer Kleber. Sicherheit bringt nur eine Materialprobe aus dem Labor.",
    },
    {
      q: "Darf ich asbesthaltige Platten selbst entfernen?",
      a: "Davon raten wir dringend ab. Schon kleine Fehler setzen Fasern frei, die sich im ganzen Haus verteilen. Für Ausbau, Verpackung, Transport und Entsorgung gelten strenge Vorgaben – lassen Sie die Arbeiten von einem Betrieb mit Sachkunde nach TRGS 519 erledigen.",
    },
    {
      q: "Was bedeutet TRGS 519?",
      a: "Die TRGS 519 ist die Technische Regel für Gefahrstoffe zu Asbest. Sie legt fest, wer mit Asbest arbeiten darf, welche Schutzmaßnahmen nötig sind und wie die Arbeiten angezeigt und dokumentiert werden. Wir arbeiten mit Sachkunde nach TRGS 519, Anlage 4.",
    },
    {
      q: "Wie entsorge ich alte KMF-Mineralwolle?",
      a: "Alte Mineralwolle muss staubdicht in reißfesten Säcken verpackt und bei einer zugelassenen Annahmestelle abgegeben werden – in den normalen Bauschutt oder auf den Wertstoffhof darf sie nicht. Den Ausbau und die Entsorgung übernehmen wir für Sie.",
    },
    {
      q: "Ist schwarzer Parkettkleber gefährlich?",
      a: "Schwarzer, teerhaltiger Parkettkleber kann PAK enthalten, von denen einige krebserzeugend sind. Solange er unter dem Parkett liegt, ist das Risiko gering. Vor dem Herausreißen oder Abschleifen sollte er im Labor untersucht werden.",
    },
    {
      q: "Was kostet eine Schadstoffsanierung?",
      a: "Das hängt von Schadstoff, Menge und Gefährdung ab: Fest gebundene Eternit-Platten sind deutlich weniger aufwendig als belastete Isolierungen. Nach der kostenlosen Besichtigung – und wenn nötig einer Laboranalyse – erhalten Sie ein verbindliches Angebot inklusive Schutzmaßnahmen und Entsorgung.",
    },
  ],
};
