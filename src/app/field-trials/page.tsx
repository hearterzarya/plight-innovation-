import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { FieldTrials } from "@/components/sections/FieldTrials";

export const metadata = pageMetadata(
  "Field Trials",
  "Jim Corbett National Park field trials, prototype testing, detection range validation, mobile alerts, and AI confidence results."
);

export default function FieldTrialsPage() {
  return (
    <PageShell
      label="Field Trials"
      title="Proven Under Real Forest Conditions"
      subtitle="From prototype bench tests and 40m/60m validation to 100–150m production coverage — validated at Jim Corbett National Park."
    >
      <FieldTrials />
    </PageShell>
  );
}
