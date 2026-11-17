import type { StaticImageData } from "next/image";

import i0 from "@/public/images/startseite/landsberg-lechwehr.jpg";
import i1 from "@/public/images/startseite/entkernung.jpg";
import i2 from "@/public/images/startseite/sperrmuell.jpg";
import i3 from "@/public/images/startseite/abbruch.jpg";
import i4 from "@/public/images/startseite/trockenbau.jpg";
import i5 from "@/public/images/startseite/sanierung-fachwerk.jpg";
import i6 from "@/public/images/startseite/landsberg-luftbild.jpg";
import i7 from "@/public/images/startseite/utting-ammersee.jpg";
import i8 from "@/public/images/startseite/buchloe-luftbild.jpg";
import i9 from "@/public/images/startseite/landsberg-bayertor.jpg";
import i10 from "@/public/images/startseite/lech-blick-norden.jpg";
import i11 from "@/public/images/allgemein/landsberg-bayertor.jpg";
import i12 from "@/public/images/allgemein/landsberg-lechwehr.jpg";
import i13 from "@/public/images/vilgertshofen/landsberg-lechwehr.jpg";
import i14 from "@/public/images/entkernung-abbruch-rueckbau/entkernung.jpg";
import i15 from "@/public/images/entruempelung-haushaltsaufloesung/sperrmuell.jpg";
import i16 from "@/public/images/renovierung/trockenbau.jpg";
import i17 from "@/public/images/gewerbeaufloesung/entkernung.jpg";
import i18 from "@/public/images/messie-wohnung-entruempeln/sperrmuell.jpg";
import i19 from "@/public/images/wohnungsaufloesung/sperrmuell.jpg";
import i20 from "@/public/images/nachlassaufloesung/sperrmuell.jpg";
import i21 from "@/public/images/keller-dachboden-garage-entruempeln/sperrmuell.jpg";
import i22 from "@/public/images/containerdienst/abbruch.jpg";
import i23 from "@/public/images/wanddurchbruch/entkernung.jpg";
import i24 from "@/public/images/demontage-einbauten/entkernung.jpg";
import i25 from "@/public/images/fliesen-boden-entfernen/entkernung.jpg";
import i26 from "@/public/images/rueckbau-innenausbau/trockenbau.jpg";
import i27 from "@/public/images/kleinere-abbrucharbeiten/abbruch.jpg";
import i28 from "@/public/images/einsatzgebiet/landsberg-am-lech/landsberg-luftbild.jpg";
import i29 from "@/public/images/einsatzgebiet/landsberg-am-lech/landsberg-lech-ufer.jpg";
import i30 from "@/public/images/einsatzgebiet/ammersee-westufer/utting-ammersee.jpg";
import i31 from "@/public/images/einsatzgebiet/ammersee-westufer/sanierung-fachwerk.jpg";
import i32 from "@/public/images/einsatzgebiet/buchloe-fuchstal/buchloe-luftbild.jpg";
import i33 from "@/public/images/einsatzgebiet/buchloe-fuchstal/abbruch.jpg";
import i34 from "@/public/images/einsatzgebiet/augsburg/sperrmuell.jpg";
import i35 from "@/public/images/einsatzgebiet/augsburg/trockenbau.jpg";
import i36 from "@/public/images/einsatzgebiet/schongau/sanierung-fachwerk.jpg";
import i37 from "@/public/images/einsatzgebiet/schongau/abbruch.jpg";
import i38 from "@/public/images/einsatzgebiet/allgaeu/entkernung.jpg";
import i39 from "@/public/images/einsatzgebiet/allgaeu/sperrmuell.jpg";

// Ein Ordner pro Seite unter public/images/<Seitenpfad>/. Bild für eine Seite austauschen = Datei im Ordner ersetzen.
export const files: Record<string, Partial<Record<string, StaticImageData>>> = {
  "startseite": { landsbergLechwehr: i0, entkernung: i1, sperrmuell: i2, abbruch: i3, trockenbau: i4, sanierungFachwerk: i5, landsbergLuftbild: i6, uttingAmmersee: i7, buchloeLuftbild: i8, landsbergBayertor: i9, lechBlickNorden: i10, },
  "allgemein": { landsbergBayertor: i11, landsbergLechwehr: i12, },
  "vilgertshofen": { landsbergLechwehr: i13, },
  "entkernung-abbruch-rueckbau": { entkernung: i14, },
  "entruempelung-haushaltsaufloesung": { sperrmuell: i15, },
  "renovierung": { trockenbau: i16, },
  "gewerbeaufloesung": { entkernung: i17, },
  "messie-wohnung-entruempeln": { sperrmuell: i18, },
  "wohnungsaufloesung": { sperrmuell: i19, },
  "nachlassaufloesung": { sperrmuell: i20, },
  "keller-dachboden-garage-entruempeln": { sperrmuell: i21, },
  "containerdienst": { abbruch: i22, },
  "wanddurchbruch": { entkernung: i23, },
  "demontage-einbauten": { entkernung: i24, },
  "fliesen-boden-entfernen": { entkernung: i25, },
  "rueckbau-innenausbau": { trockenbau: i26, },
  "kleinere-abbrucharbeiten": { abbruch: i27, },
  "einsatzgebiet/landsberg-am-lech": { landsbergLuftbild: i28, landsbergLechUfer: i29, },
  "einsatzgebiet/ammersee-westufer": { uttingAmmersee: i30, sanierungFachwerk: i31, },
  "einsatzgebiet/buchloe-fuchstal": { buchloeLuftbild: i32, abbruch: i33, },
  "einsatzgebiet/augsburg": { sperrmuell: i34, trockenbau: i35, },
  "einsatzgebiet/schongau": { sanierungFachwerk: i36, abbruch: i37, },
  "einsatzgebiet/allgaeu": { entkernung: i38, sperrmuell: i39, },
};
