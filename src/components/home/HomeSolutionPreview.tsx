import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Camera } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/GlassCard";

const products = [
  {
    icon: Shield,
    title: "Wildlife Repellent Device",
    description:
      "Flagship smart deterrent with flashing lights and sound alerts — deployed across 100+ villages in Bijnor.",
    tag: "Deployed",
  },
  {
    icon: Camera,
    title: "AI Wildlife Monitoring",
    description:
      "360° AI surveillance with species recognition, video alerts, and integrated deterrent response.",
    tag: "Innovation",
  },
  {
    icon: Zap,
    title: "Intelligent Deterrence",
    description:
      "Non-lethal, wildlife-safe activation designed for forest-edge and rural safety networks.",
    tag: "Field-Ready",
  },
];

export function HomeSolutionPreview() {
  return (
    <Section className="section-padding bg-bg-midnight/30">
      <Container>
        <SectionHeader
          label="Our Solutions"
          title="Intelligent Electronics for Rural Safety"
          subtitle="From proven village deterrents to next-generation AI surveillance — built and tested in India."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <GlassCard className="relative aspect-[4/3] overflow-hidden p-2">
            <Image
              src="/images/wildlife/camera.png"
              alt="PLIGHT AI wildlife monitoring camera unit in field deployment"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </GlassCard>
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
