import { catchment, site, type LocationId } from "./site";

// Texte, die sich zwischen den beiden Startseiten unterscheiden. Eigene Texte je Standort,
// damit Google die Seiten nicht als Doppel wertet und jede für ihren Ort ranken kann.
type HomeCopy = {
  heroIntro: string;
  places: readonly string[];
  aboutRegion: string;
  regionTitle: string;
  regionIntro: string;
  /** Zusätzliche Fragen vor den allgemeinen FAQ */
  faqs: { q: string; a: string }[];
};

export const homeCopy: Record<LocationId, HomeCopy> = {
  landsberg: {
    heroIntro:
      "Wir räumen, bauen zurück und machen Räume wieder bewohnbar. Sauber, pünktlich und mit einem festen Ansprechpartner.",
    places: catchment,
    aboutRegion:
      "Sie rufen eine Nummer an und bekommen ein Angebot für alles. Für Eigentümer, Erbengemeinschaften, Hausverwaltungen und Gewerbe in Landsberg am Lech und der Region zwischen Augsburg, Ammersee und Allgäu.",
    regionTitle: "Zwischen Augsburg, Ammersee und Allgäu",
    regionIntro:
      "Unsere Standorte sind Landsberg am Lech und Vilgertshofen. Von dort sind wir schnell bei Ihnen, zur Besichtigung genauso wie auf der Baustelle. Kurze Wege sparen Ihnen Geld.",
    faqs: [],
  },
  vilgertshofen: {
    heroIntro:
      "Unser Firmensitz liegt in Vilgertshofen, südlich von Landsberg am Lech. Von hier aus räumen, entkernen und renovieren wir, mit einem festen Ansprechpartner vom ersten Anruf bis zur Übergabe.",
    places: ["Vilgertshofen", "Fuchstal", "Denklingen", "Landsberg am Lech", "Schongau", "Buchloe", "Kaufering", "Ammersee-Region", "Augsburg", "Allgäu"],
    aboutRegion:
      "Vom Firmensitz in Vilgertshofen aus arbeiten wir für Eigentümer, Erbengemeinschaften, Hausverwaltungen und Gewerbe in den Orten ringsum: in Fuchstal und Denklingen, in Landsberg am Lech, Schongau und Buchloe und weiter bis Augsburg, an den Ammersee und ins Allgäu.",
    regionTitle: "Von Vilgertshofen in die ganze Region",
    regionIntro:
      "Unser Firmensitz ist in Vilgertshofen, zur Gemeinde gehören auch Issing, Mundraching, Pflugdorf und Stadl. Dazu kommt unser Standort in Landsberg am Lech. Nach Fuchstal, Denklingen oder Schongau ist es von hier nicht weit, zur Besichtigung genauso wie auf die Baustelle. Kurze Wege sparen Ihnen Geld.",
    faqs: [
      {
        q: "Wo ist Ihr Firmensitz?",
        a: `In der ${site.address.street} in ${site.address.postalCode} ${site.address.locality}. Einen zweiten Standort haben wir in der ${site.branch.street} in ${site.branch.locality}. Zur Besichtigung kommen wir zu Ihnen.`,
      },
      {
        q: "Kommen Sie auch nach Fuchstal, Denklingen und Schongau?",
        a: "Ja. Die Orte rund um Vilgertshofen gehören zu unserem Einzugsgebiet, genauso wie Landsberg am Lech, Buchloe, Augsburg, der Ammersee und das Allgäu. Ihr Ort fehlt? Rufen Sie an, wir sagen Ihnen gleich, ob wir kommen.",
      },
    ],
  },
};
