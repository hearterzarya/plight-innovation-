import Link from "next/link";
import { ArrowRight, PawPrint, BellOff, Clock, TriangleAlert } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: PawPrint,
    title: "Human–Wildlife Conflict",
    description:
      "Forest-fringe villages face recurring encounters with elephants, tigers, and leopards — often with limited early warning.",
    tag: "Challenge",
  },
  {
    icon: BellOff,
    title: "Delayed Community Response",
    description:
      "Traditional deterrents lack intelligent detection, leaving residents vulnerable during critical night-time hours.",
    tag: "Risk",
  },
  {
    icon: Clock,
    title: "Slow Manual Monitoring",
    description:
      "Forest departments cannot scale human patrols across hundreds of villages and vast border corridors.",
    tag: "Scale",
  },
  {
    icon: TriangleAlert,
    title: "Life & Livelihood Impact",
    description:
      "Crop damage, injuries, and fatalities demand technology that is field-ready and government-deployable.",
    tag: "Impact",
  },
];

export function HomeChallengePreview() {
  return (
    <Section className="section-padding">
      <Container>
        <SectionHeader
          label="The Challenge"
          title="Rural Communities Need Smarter Protection"
          subtitle="Human–animal conflict threatens lives, crops, and forest-border livelihoods across India."
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
