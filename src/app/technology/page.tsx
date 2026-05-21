import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { AIMonitoring } from "@/components/sections/AIMonitoring";
import { Technology } from "@/components/sections/Technology";

export const metadata = pageMetadata(
  "Technology",
  "Neural accelerators, edge AI architecture, embedded systems, resilient telemetry, and production-ready hardware engineering from PLIGHT."
);

export default function TechnologyPage() {
  return (
    <PageShell
      label="Technology"
      title="AI, IoT & Deep-Tech Engineering"
      subtitle="Fusing high-performance neural accelerators, custom microcontrollers, and resilient telemetry for production-ready edge deployments."
    >
      <AIMonitoring />
      <Technology />
    </PageShell>
  );
}
