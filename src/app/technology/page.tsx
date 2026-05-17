import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { AIMonitoring } from "@/components/sections/AIMonitoring";
import { Technology } from "@/components/sections/Technology";

export const metadata = pageMetadata(
  "Technology",
  "AI camera systems, detection workflow, specifications, alerts, solar, battery, and deterrence technology from PLIGHT Innovation."
);

export default function TechnologyPage() {
  return (
    <PageShell
      label="Technology"
      title="AI, IoT & Deep-Tech Engineering"
      subtitle="360° surveillance, species recognition, intelligent deterrence, and field-ready electronics built for forest-edge deployment."
    >
      <AIMonitoring />
      <Technology />
    </PageShell>
  );
}
