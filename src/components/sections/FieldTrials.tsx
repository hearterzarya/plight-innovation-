"use client";

import Image from "next/image";
import {
  TreePine,
  CheckCircle2,
  Building2,
  Camera,
  Smartphone,
  Target,
  PawPrint,
  ScanEye,
  Radio,
  FlaskConical,
  Gauge,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { GlassCard } from "@/components/shared/GlassCard";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const detectionStages = [
  {
    icon: Gauge,
    title: "Prototype Bench Testing",
    description:
      "Initial validation of sensors, optics, and embedded firmware under controlled conditions before forest deployment.",
    tag: "Phase 1",
  },
  {
    icon: Radio,
    title: "40m & 60m Range Validation",
    description:
      "Progressive field checks confirmed reliable detection and alert triggering at 40-meter and 60-meter distances during early trials.",
    tag: "Phase 2",
  },
  {
    icon: Camera,
    title: "100–150m Production Range",
    description:
      "Full-system trials validated continuous 360° monitoring across approximately 100 to 150 meters in all directions.",
    tag: "Phase 3",
  },
];

const confidenceResults = [
  { icon: PawPrint, title: "Elephant", description: "94% confidence — monitoring state confirmed in live trials.", tag: "Species AI" },
  { icon: Target, title: "Tiger", description: "91% confidence — alert-ready detection in forest-edge scenarios.", tag: "Species AI" },
  { icon: ScanEye, title: "Leopard", description: "89% confidence — active tracking with rapid mobile notification.", tag: "Species AI" },
];

const alertFields = [
  { label: "Animal Type / Category", example: "Leopard Detected" },
  { label: "Detection Time & Date", example: "Real-time timestamp" },
  { label: "Confidence Level", example: "94.2% accuracy" },
  { label: "Alert Notification", example: "Instant mobile push to forest teams" },
  { label: "Location Information", example: "GPS coordinates for rapid response" },
];

export function FieldTrials() {
  return (
    <>
      <Section id="jim-corbett" className="section-padding">
        <Container>
          <AnimateIn>
            <SectionLabel>Field Trials</SectionLabel>
            <SectionHeading
              title="Validated in India&apos;s Most Demanding Forests"
              subtitle="From prototype testing to Jim Corbett National Park — PLIGHT systems are proven under real wildlife conditions."
              align="center"
            />
          </AnimateIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <AnimateIn>
              <GlassCard className="relative overflow-hidden p-8">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-400/10 blur-2xl" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-green-400" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
                      Field Validated
                    </span>
                  </div>
                  <h2 className="type-h3 mt-3 text-white">Jim Corbett National Park</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-cool">
                    The AI Wildlife Monitoring System was successfully tested in Jim Corbett
                    National Park — one of India&apos;s most important wildlife regions. Field
                    trials demonstrated highly promising results, proving the effectiveness of
                    AI-driven monitoring and automated alert systems in challenging forest
                    environments.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    <span>Promising field trial results confirmed</span>
                  </div>
                </div>
              </GlassCard>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <GlassCard className="relative overflow-hidden border-cyan-400/20 p-8">
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-cyan-400" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Active Collaboration
                    </span>
                  </div>
                  <h2 className="type-h3 mt-3 text-white">Forest Department Partnerships</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-cool">
                    Following successful trials, PLIGHT Innovation is actively collaborating with
                    the{" "}
                    <span className="font-medium text-white">Uttarakhand Forest Department</span>{" "}
                    and the{" "}
                    <span className="font-medium text-white">Uttar Pradesh Forest Department</span>{" "}
                    to expand intelligent wildlife safety infrastructure across forest-bordering
                    regions.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Uttarakhand Forest Dept.", "UP Forest Dept.", "Jim Corbett Trials"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-400"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </GlassCard>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      <Section id="detection-range" className="section-padding bg-bg-midnight/30">
        <Container>
          <AnimateIn>
            <SectionLabel>Detection Proof</SectionLabel>
            <SectionHeading
              title="Progressive Range Validation"
              subtitle="Detection distance was validated in stages — from early prototype checks at 40m and 60m to production-ready 100–150 meter coverage."
              align="center"
            />
          </AnimateIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {detectionStages.map((stage, i) => (
              <AnimateIn key={stage.title} delay={i * 0.08}>
                <FeatureCard
                  icon={stage.icon}
                  title={stage.title}
                  description={stage.description}
                  tag={stage.tag}
                />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.2} className="mt-12">
            <GlassCard className="relative mx-auto max-w-3xl overflow-hidden p-6 sm:p-8">
              <div className="relative mx-auto aspect-video max-h-[280px] w-full">
                <Image
                  src="/images/wildlife/camera.png"
                  alt="PLIGHT 360-degree AI camera deployed during field trials"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <p className="type-body-sm mt-6 text-center text-text-cool">
                Continuous 360° monitoring within approximately{" "}
                <span className="font-semibold text-white">100 to 150 meters</span> — with
                earlier prototype milestones confirmed at 40m and 60m during staged testing.
              </p>
            </GlassCard>
          </AnimateIn>
        </Container>
      </Section>

      <Section id="alerts-confidence" className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <AnimateIn>
                <SectionLabel>Mobile Alerts</SectionLabel>
                <SectionHeading
                  title="Instant Field Intelligence"
                  subtitle="Every detection triggers real-time mobile alerts with species, confidence, timestamp, and location data."
                  align="left"
                />
              </AnimateIn>
              <div className="mt-8 space-y-3">
                {alertFields.map((item, i) => (
                  <AnimateIn key={item.label} delay={i * 0.05}>
                    <GlassCard className="flex items-start justify-between gap-4 p-4 sm:p-5">
                      <div>
                        <p className="type-label text-text-cool">{item.label}</p>
                        <p className="type-body-sm mt-1 font-medium text-white">{item.example}</p>
                      </div>
                      <Smartphone className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
                    </GlassCard>
                  </AnimateIn>
                ))}
              </div>
            </div>

            <div>
              <AnimateIn>
                <SectionLabel>AI Confidence</SectionLabel>
                <SectionHeading
                  title="Species Recognition Results"
                  subtitle="Field trials recorded high-confidence detections for elephants, tigers, and leopards."
                  align="left"
                />
              </AnimateIn>
              <div className="mt-8 grid gap-4">
                {confidenceResults.map((result, i) => (
                  <AnimateIn key={result.title} delay={i * 0.08}>
                    <FeatureCard
                      icon={result.icon}
                      title={result.title}
                      description={result.description}
                      tag={result.tag}
                    />
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>

          <AnimateIn delay={0.15} className="mt-16">
            <GlassCard className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
              <FlaskConical className="h-10 w-10 shrink-0 text-amber-400" aria-hidden />
              <div>
                <h3 className="type-h4 text-white">Prototype-to-Production Testing</h3>
                <p className="type-body-sm mt-2 text-text-cool">
                  PLIGHT&apos;s innovation journey spans rapid prototyping, village-scale
                  deployment across 100+ Bijnor communities, and national-park validation —
                  ensuring every device is field-ready before government-scale rollout.
                </p>
              </div>
            </GlassCard>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
