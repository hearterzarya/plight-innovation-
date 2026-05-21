"use client";

import Image from "next/image";
import {
  TreePine,
  CheckCircle2,
  Building2,
  Camera,
  Smartphone,
  ScanEye,
  Radio,
  FlaskConical,
  Gauge,
  Cpu,
  AlertTriangle,
} from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
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
      "Initial validation of sensors, optics, NPUs, and embedded firmware under controlled conditions before off-grid deployment.",
    tag: "Phase 1",
  },
  {
    icon: Radio,
    title: "40m & 60m Range Validation",
    description:
      "Progressive field checks confirmed reliable on-device inference and telemetry triggering at 40-meter and 60-meter distances.",
    tag: "Phase 2",
  },
  {
    icon: Camera,
    title: "100–150m Production Range",
    description:
      "Full-system validation confirmed continuous 360° neural vision across approximately 100 to 150 meters in all directions.",
    tag: "Phase 3",
  },
];

const confidenceResults = [
  {
    icon: ScanEye,
    title: "Object Detection Pipeline",
    description: "94% edge confidence — custom detection classes validated under live field load.",
    tag: "Edge AI",
  },
  {
    icon: Cpu,
    title: "On-Device Inference",
    description: "91% sustained accuracy — sub-second local processing without cloud round-trips.",
    tag: "NPU",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Flagging",
    description: "89% precision — environmental and motion anomalies identified before escalation.",
    tag: "Analytics",
  },
];

const alertFields = [
  { label: "Detection Class", example: "Custom AI model output" },
  { label: "Inference Latency", example: "Sub-millisecond execution" },
  { label: "Confidence Level", example: ">94.2% edge accuracy" },
  { label: "Data Sync Status", example: "Secure payload transmitted" },
  { label: "Location Info", example: "GPS / GNSS coordinates" },
];

export function FieldTrials() {
  return (
    <>
      <Section id="field-validation" className="section-padding overflow-hidden">
        <PcbCircuitBackground corner="left" intensity="subtle" vignette={false} />
        <Container className="relative z-10">
          <AnimateIn>
            <SectionLabel>Field Validation</SectionLabel>
            <SectionHeading
              title="Stress-Tested in Demanding Real-World Environments"
              subtitle="Real-world field validation of PLIGHT's edge AI hardware in extreme off-grid environments."
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
                      Case Study — National Park
                    </span>
                  </div>
                  <h2 className="type-h3 mt-3 text-white">Jim Corbett National Park Validation</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-cool">
                    PLIGHT edge vision nodes were stress-tested in Jim Corbett National Park—one of
                    India&apos;s most demanding off-grid environments. Trials validated on-device
                    neural inference, telemetry sync, and 24/7 autonomous uptime under harsh field
                    conditions. Wildlife monitoring was the deployment use case; the proof point is
                    industrial-grade edge hardware performance.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    <span>Field validation results confirmed at scale</span>
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
                      Public-Sector Deployment
                    </span>
                  </div>
                  <h2 className="type-h3 mt-3 text-white">Institutional Field Partners</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-cool">
                    Following successful validation, PLIGHT collaborated with the{" "}
                    <span className="font-medium text-white">Uttarakhand Forest Department</span>{" "}
                    and the{" "}
                    <span className="font-medium text-white">Uttar Pradesh Forest Department</span>{" "}
                    on forest-edge deployments—demonstrating how production-ready edge AI
                    infrastructure performs in public-sector, mission-critical environments.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      "Uttarakhand Forest Dept.",
                      "UP Forest Dept.",
                      "National Park Validation",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      <Section id="detection-range" className="section-padding overflow-hidden bg-bg-midnight/30">
        <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} />
        <Container className="relative z-10">
          <AnimateIn>
            <SectionLabel>Validation Proof</SectionLabel>
            <SectionHeading
              title="Progressive Range & Inference Validation"
              subtitle="Detection distance and on-device inference were validated in stages—from 40m and 60m prototype checks to production-ready 100–150 meter neural vision coverage."
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
                  alt="PLIGHT edge AI vision node during field validation"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <p className="type-body-sm mt-6 text-center text-text-cool">
                Continuous 360° edge vision within approximately{" "}
                <span className="font-semibold text-white">100 to 150 meters</span>—with earlier
                prototype milestones confirmed at 40m and 60m during staged validation.
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
                <SectionLabel>Edge Telemetry</SectionLabel>
                <SectionHeading
                  title="Secure Field Data Payloads"
                  subtitle="Every inference triggers secure telemetry with detection class, latency, confidence, and GNSS metadata."
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
                <SectionLabel>Edge Performance</SectionLabel>
                <SectionHeading
                  title="Inference Accuracy Results"
                  subtitle="Field validation recorded high-confidence on-device detections across vision and anomaly pipelines."
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
                <h3 className="type-h4 text-white">Prototype-to-Production Validation</h3>
                <p className="type-body-sm mt-2 text-text-cool">
                  PLIGHT&apos;s engineering path spans rapid prototyping, 100+ active edge node
                  deployments in demanding conditions, and national-park stress validation—ensuring
                  every hardware revision is production-ready before enterprise-scale rollout.
                </p>
              </div>
            </GlassCard>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
