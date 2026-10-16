import type { Metadata } from "next";

import { ServicePage } from "@/components/ServicePage";
import { entruempelung as page } from "@/lib/subpages";

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: { type: "website", locale: "de_DE", url: page.path, title: page.title, description: page.description },
};

export default function Page() {
  return <ServicePage page={page} />;
}
