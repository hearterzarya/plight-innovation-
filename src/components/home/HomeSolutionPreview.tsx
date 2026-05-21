import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ScanEye, Sun, Factory } from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/GlassCard";

const products = [
  {
    icon: ScanEye,
    title: "Autonomous AI Vision Systems",
    description:
      "Integrating high-performance neural accelerators and custom object detection pipelines for real-time, zero-latency analysis without cloud dependency.",
    tag: "Edge Vision",
  },
  {
    icon: Sun,
    title: "Ruggedized Remote Telemetry",
    description:
      "Solar-powered, 24/7 edge nodes equipped with robust microcontrollers and secure 4G/LTE connectivity for uninterrupted execution in extreme environments.",
    tag: "Off-Grid",
  },
  {
    icon: Factory,
    title: "Commercial Automation & Control",
    description:
      "Designing, prototyping, and manufacturing scalable IoT automation devices—from precision programmable digital timers to complex logic control units.",
    tag: "Production-Ready",
  },
];

export function HomeSolutionPreview() {
  return (
    <Section className="section-padding overflow-hidden bg-bg-midnight/30">
      <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} />
      <Container className="relative z-10">
        <SectionHeader
          label="Core Capabilities"
          title="Production-Ready Edge Computing Solutions"
          subtitle="End-to-end hardware and AI integration—from intelligent computer vision nodes to fully automated, off-grid industrial infrastructure."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-[42%] rounded-full bg-cyan-400/12 blur-3xl"
              aria-hidden
            />
            <Image
              src="/images/plight/hero.png"
              alt="PLIGHT edge AI vision node — solar-powered field deployment"
              width={1086}
              height={1449}
              className="relative z-10 h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(34, 211, 238, 0.18)) drop-shadow(0 16px 32px rgba(0, 0, 0, 0.3))",
              }}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            {products.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/solutions">
            <Button size="lg">
              Explore All Solutions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
