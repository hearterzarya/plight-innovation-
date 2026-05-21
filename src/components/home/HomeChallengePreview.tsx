import Link from "next/link";
import { ArrowRight, Timer, Cpu, Zap, Radio } from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Timer,
    title: "Real-Time Local Processing",
    description:
      "Bypassing cloud dependency by processing heavy AI models directly on the hardware. This ensures instant, mission-critical decision-making when milliseconds matter.",
    tag: "Latency",
  },
  {
    icon: Cpu,
    title: "Advanced Neural Vision",
    description:
      "Integrating high-efficiency neural accelerators with robust microcontrollers to unlock deep learning and computer vision capabilities in extreme, off-grid environments.",
    tag: "Capability",
  },
  {
    icon: Zap,
    title: "24/7 Autonomous Execution",
    description:
      "Engineered for absolute power efficiency. Our edge computing systems run continuously on independent power grids, requiring zero manual intervention.",
    tag: "Efficiency",
  },
  {
    icon: Radio,
    title: "Resilient Telemetry",
    description:
      "Equipped with seamless 4G, LoRa, and GPS telemetry, ensuring uninterrupted data synchronization and precise remote management from anywhere.",
    tag: "Connectivity",
  },
];

export function HomeChallengePreview() {
  return (
    <Section className="section-padding overflow-hidden bg-bg-deep">
      <PcbCircuitBackground corner="left" intensity="subtle" vignette={false} />
      <Container className="relative z-10">
        <SectionHeader
          label="The Edge Revolution"
          title="Architecting a Smarter World with Embedded Intelligence"
          subtitle="Traditional cloud computing is too slow for real-world action. We bring high-performance neural processing directly to the hardware—building a faster, resilient, and fully autonomous physical world."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/about">
            <Button variant="secondary" size="lg">
              Read Our Mission & Story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
