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
  "Our mission, origin story, team, and innovation journey — building wildlife safety technology from Bijnor, Uttar Pradesh."
);

export default function AboutPage() {
  return (
    <PageShell
      label="About PLIGHT"
      title="Mission, Team & Innovation Journey"
      subtitle="Deep-tech wildlife safety born in Bijnor — engineered for government-scale rural protection."
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
