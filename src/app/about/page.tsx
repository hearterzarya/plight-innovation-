import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Mission } from "@/components/sections/Mission";
import { Problem } from "@/components/sections/Problem";
import { Team } from "@/components/sections/Team";
import { WhyPlight } from "@/components/sections/WhyPlight";
import { Vision } from "@/components/sections/Vision";
import { InnovationJourney } from "@/components/sections/InnovationJourney";

export const metadata = pageMetadata(
  "About",
  "Mission, engineering journey, and edge AI expertise — production-ready embedded systems forged in real-world field conditions."
);

export default function AboutPage() {
  return (
    <PageShell
      label="About PLIGHT"
      title="Mission & Engineering Journey"
      subtitle="Forged in extreme real-world conditions—engineered for global, production-scale edge intelligence."
    >
      <Mission />
      <Problem />
      <InnovationJourney />
      <Team />
      <WhyPlight />
      <Vision />
    </PageShell>
  );
}
