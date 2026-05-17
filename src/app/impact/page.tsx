import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Impact } from "@/components/sections/Impact";
import { GovernmentClienteleCarousel } from "@/components/sections/GovernmentClienteleCarousel";

export const metadata = pageMetadata(
  "Impact",
  "100+ village deployments in Bijnor, government collaboration, and measurable wildlife safety impact across Uttar Pradesh and Uttarakhand."
);

export default function ImpactPage() {
  return (
    <PageShell
      label="Impact"
      title="Real-World Deployment at Scale"
      subtitle="Government partnerships, village coverage, and field-proven outcomes across India's forest-fringe communities."
    >
      <Impact />
      <GovernmentClienteleCarousel />
    </PageShell>
  );
}
