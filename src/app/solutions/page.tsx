import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Solution } from "@/components/sections/Solution";
import { Products } from "@/components/sections/Products";

export const metadata = pageMetadata(
  "Edge AI Solutions",
  "Industrial-grade edge computing, autonomous AI vision nodes, off-grid telemetry, and production-ready IoT hardware from PLIGHT."
);

export default function SolutionsPage() {
  return (
    <PageShell
      label="Core Solutions"
      title="Industrial-Grade Edge Computing & AI Hardware"
      subtitle="End-to-end hardware engineering—from autonomous neural vision nodes to scalable, off-grid telemetry infrastructure."
    >
      <Solution />
      <Products />
    </PageShell>
  );
}
