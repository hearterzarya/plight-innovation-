import Link from "next/link";
import { ArrowRight, MapPin, Building2, Radio, Shield } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: MapPin, value: "100+", label: "Villages Covered" },
  { icon: Building2, value: "4", label: "Forest Dept. Partners" },
  { icon: Radio, value: "150m", label: "AI Detection Range" },
  { icon: Shield, value: "100%", label: "Field-Tested" },
];

export function HomeImpactPreview() {
  return (
    <Section className="section-padding">
      <Container>
        <SectionHeader
          label="Real-World Impact"
          title="Proven Deployment at Scale"
          subtitle="From 100+ village deployments in Bijnor to AI surveillance trials at Jim Corbett National Park."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/impact">
            <Button variant="secondary" size="lg">
              View Full Impact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
