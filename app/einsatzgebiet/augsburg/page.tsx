import type { Metadata } from "next";

import { RegionPage } from "@/components/RegionPage";
import { augsburgPage as page, regionById } from "@/lib/regions";

const path = regionById(page.region).href;

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: path },
  openGraph: { type: "website", locale: "de_DE", url: path, title: page.title, description: page.description },
};

export default function Page() {
  return <RegionPage page={page} />;
}
