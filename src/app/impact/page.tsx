import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Impact } from "@/components/sections/Impact";
import { GovernmentClienteleCarousel } from "@/components/sections/GovernmentClienteleCarousel";

export const metadata = pageMetadata(
  "Production Deployments",
  "100+ active edge nodes, field-tested embedded AI, and production-ready deployments across demanding real-world environments."
);

export default function ImpactPage() {
  return (
    <PageShell
      label="Production Deployments"
      title="Real-World Deployment at Scale"
      subtitle="From extreme off-grid environments to commercial hardware manufacturing—edge systems built for continuous performance."
    >
      <Impact />
      <GovernmentClienteleCarousel />
    </PageShell>
  );
}
