import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { FieldTrials } from "@/components/sections/FieldTrials";

export const metadata = pageMetadata(
  "Field Validation",
  "Real-world field validation of PLIGHT edge AI hardware—range testing, inference accuracy, and telemetry performance in extreme off-grid environments."
);

export default function FieldTrialsPage() {
  return (
    <PageShell
      label="Field Validation"
      title="Real-World Edge AI Hardware Validation"
      subtitle="Real-world field validation of PLIGHT's edge AI hardware in extreme off-grid environments—from bench tests to national-park stress trials."
    >
      <FieldTrials />
    </PageShell>
  );
}
