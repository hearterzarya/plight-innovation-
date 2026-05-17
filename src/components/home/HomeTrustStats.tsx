import { MapPin, Shield, Cpu, Radio } from "lucide-react";
import { StatCard } from "@/components/shared/StatCard";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const stats = [
  { icon: MapPin, value: "100+", label: "Villages Deployed" },
  { icon: Shield, value: "Field-Tested", label: "Wildlife Safety Technology" },
  { icon: Cpu, value: "AI", label: "Wildlife Monitoring" },
  { icon: Radio, value: "Bijnor", label: "Built in Uttar Pradesh" },
];

export function HomeTrustStats() {
  return (
    <Section className="section-padding border-y border-white/5 bg-bg-midnight/40">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
