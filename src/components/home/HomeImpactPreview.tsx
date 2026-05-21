import Link from "next/link";
import { ArrowRight, MapPin, Clock, ScanEye, Shield } from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: MapPin, value: "100+", label: "Active Edge Nodes" },
  { icon: Clock, value: "24/7", label: "Autonomous Uptime" },
  { icon: ScanEye, value: "150m", label: "Neural Vision Range" },
  { icon: Shield, value: "100%", label: "Production-Ready" },
];

export function HomeImpactPreview() {
  return (
    <Section className="section-padding overflow-hidden bg-bg-deep">
      <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} />
      <Container className="relative z-10">
        <SectionHeader
          label="Real-World Execution"
          title="Proven Deployment at Scale"
          subtitle="From extreme off-grid environments to commercial hardware manufacturing, our edge computing systems are engineered for continuous, uninterrupted performance."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/impact">
            <Button variant="secondary" size="lg">
              View Technical Case Studies
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
