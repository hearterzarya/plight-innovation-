import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Resources } from "@/components/sections/Resources";

export const metadata = pageMetadata(
  "Resources",
  "Product specifications, brochures, and FAQs for PLIGHT wildlife safety systems."
);

export default function ResourcesPage() {
  return (
    <PageShell
      label="Resources"
      title="Specifications, Brochures & FAQs"
      subtitle="Technical documentation and answers for government departments, partners, and procurement teams."
    >
      <Resources />
    </PageShell>
  );
}
