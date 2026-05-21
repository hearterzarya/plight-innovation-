"use client";

import { motion } from "framer-motion";
import {
  Timer,
  Cpu,
  Zap,
  Radio,
  CloudOff,
  Thermometer,
  Battery,
  WifiOff,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

const PROBLEM = {
  bg: "#050A14",
  cardTop: "rgba(16, 26, 43, 0.82)",
  cardBottom: "rgba(5, 10, 20, 0.92)",
  border: "rgba(203, 213, 225, 0.14)",
  text: "#F8FAFC",
  muted: "#94A3B8",
  cyan: "#00D9FF",
  amber: "#F59E0B",
  green: "#16A34A",
  danger: "#EF4444",
} as const;

type AccentKey = "amber" | "cyan" | "danger" | "green";

const accentStyles: Record<
  AccentKey,
  {
    icon: string;
    iconBg: string;
    chip: string;
    border: string;
    glow: string;
    watermark: string;
    line: string;
  }
> = {
  amber: {
    icon: "text-amber-400",
    iconBg: "bg-amber-400/10 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    border: "group-hover:border-amber-400/40",
    glow: "group-hover:shadow-[0_24px_80px_rgba(245,158,11,0.12)]",
    watermark: "text-amber-500/10",
    line: PROBLEM.amber,
  },
  cyan: {
    icon: "text-cyan-400",
    iconBg: "bg-cyan-400/10 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]",
    chip: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    border: "group-hover:border-cyan-400/40",
    glow: "group-hover:shadow-[0_24px_80px_rgba(0,217,255,0.1)]",
    watermark: "text-cyan-500/10",
    line: PROBLEM.cyan,
  },
  danger: {
    icon: "text-red-400",
    iconBg: "bg-red-400/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]",
    chip: "border-red-400/30 bg-red-400/10 text-red-300",
    border: "group-hover:border-red-400/35",
    glow: "group-hover:shadow-[0_24px_80px_rgba(239,68,68,0.1)]",
    watermark: "text-red-500/10",
    line: PROBLEM.danger,
  },
  green: {
    icon: "text-emerald-400",
    iconBg: "bg-emerald-400/10 group-hover:shadow-[0_0_20px_rgba(22,163,74,0.25)]",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    border: "group-hover:border-emerald-400/35",
    glow: "group-hover:shadow-[0_24px_80px_rgba(22,163,74,0.1)]",
    watermark: "text-emerald-500/10",
    line: PROBLEM.green,
  },
};

const challengeCards: {
  icon: typeof Timer;
  watermark: typeof CloudOff;
  title: string;
  description: string;
  chip: string;
  accent: AccentKey;
}[] = [
  {
    icon: Timer,
    watermark: CloudOff,
    title: "The Cloud Bottleneck",
    description:
      "Mission-critical physical operations cannot wait for cloud round-trips. They require zero-latency, on-device neural processing.",
    chip: "Latency",
    accent: "amber",
  },
  {
    icon: Cpu,
    watermark: Thermometer,
    title: "Environmental Extremes",
    description:
      "Standard electronics fail in the field. Production-ready edge nodes must withstand harsh climates and physical wear.",
    chip: "Hardware",
    accent: "cyan",
  },
  {
    icon: Zap,
    watermark: Battery,
    title: "Off-Grid Reliance",
    description:
      "Continuous 24/7 AI operations demand ultra-efficient power management and independent solar integration for unsupervised execution.",
    chip: "Power",
    accent: "danger",
  },
  {
    icon: Radio,
    watermark: WifiOff,
    title: "Network Instability",
    description:
      "Remote deployments lack stable internet, necessitating resilient 4G/LTE and GPS telemetry for secure data synchronization.",
    chip: "Connectivity",
    accent: "green",
  },
];

const impactStrip = [
  { icon: CloudOff, label: "Cloud latency limits" },
  { icon: Thermometer, label: "Harsh field conditions" },
  { icon: Battery, label: "Off-grid power demands" },
  { icon: WifiOff, label: "Unstable connectivity" },
];

export function Problem() {
  return (
    <section
      className="relative overflow-hidden py-[4.5rem] lg:py-[7.5rem]"
      style={{ backgroundColor: PROBLEM.bg }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container-custom relative mx-auto">
        <AnimateIn className="mx-auto max-w-4xl text-center">
          <SectionLabel className="tracking-[0.14em]">The Challenge</SectionLabel>
          <h2
            className="mt-4 font-[family-name:var(--font-sora)] font-extrabold text-white"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            The Real Challenge: Scaling Edge Infrastructure
          </h2>
          <p
            className="mx-auto mt-6 max-w-[760px] leading-[1.6]"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)",
              color: PROBLEM.muted,
            }}
          >
            Deploying AI in the real world demands bypassing the limitations of traditional cloud computing.
          </p>
        </AnimateIn>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:gap-8 xl:grid-cols-4">
          {challengeCards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 0.08}>
              <ChallengeCard card={card} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.35} className="mt-10 lg:mt-14">
          <div
            className="grid gap-3 rounded-[1.25rem] border p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 lg:grid-cols-4 lg:rounded-[1.75rem]"
            style={{
              background: `linear-gradient(180deg, ${PROBLEM.cardTop}, ${PROBLEM.cardBottom})`,
              borderColor: PROBLEM.border,
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.25)",
            }}
          >
            {impactStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(0, 217, 255, 0.08)" }}
                >
                  <item.icon className="h-4 w-4 text-cyan-400/90" />
                </div>
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: PROBLEM.muted }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ChallengeCard({
  card,
}: {
  card: (typeof challengeCards)[number];
}) {
  const styles = accentStyles[card.accent];
  const Icon = card.icon;
  const Watermark = card.watermark;

  return (
    <motion.article
      className={cn(
        "group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-300 sm:p-8",
        styles.border,
        styles.glow
      )}
      style={{
        background: `linear-gradient(180deg, ${PROBLEM.cardTop}, ${PROBLEM.cardBottom})`,
        borderColor: PROBLEM.border,
        boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Watermark
        className={cn(
          "pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 stroke-[0.75] sm:h-36 sm:w-36",
          styles.watermark
        )}
        strokeWidth={1}
        aria-hidden
      />

      <span
        className={cn(
          "relative z-10 mb-5 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
          styles.chip
        )}
      >
        {card.chip}
      </span>

      <div
        className={cn(
          "relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-all duration-300",
          styles.iconBg
        )}
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        <Icon className={cn("h-6 w-6 transition-transform duration-300 group-hover:scale-110", styles.icon)} />
      </div>

      <h3
        className="relative z-10 font-[family-name:var(--font-sora)] font-bold text-white"
        style={{
          fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)",
          lineHeight: 1.25,
        }}
      >
        {card.title}
      </h3>
      <p
        className="relative z-10 mt-3 flex-1"
        style={{
          fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
          lineHeight: 1.65,
          color: PROBLEM.muted,
        }}
      >
        {card.description}
      </p>

      <div
        className="relative z-10 mt-6 h-px w-12 opacity-60 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${styles.line}, transparent)` }}
        aria-hidden
      />
    </motion.article>
  );
}
