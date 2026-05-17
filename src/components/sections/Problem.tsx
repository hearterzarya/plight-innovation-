"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BellOff,
  Clock,
  HeartPulse,
  MapPin,
  PawPrint,
  Radio,
  Trees,
  TriangleAlert,
  Users,
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
  icon: typeof AlertTriangle;
  watermark: typeof PawPrint;
  title: string;
  description: string;
  chip: string;
  accent: AccentKey;
}[] = [
  {
    icon: AlertTriangle,
    watermark: PawPrint,
    title: "Sudden Wildlife Movement",
    description:
      "Wild animals can approach villages without warning, creating immediate danger near homes, farms, and forest-fringe settlements.",
    chip: "High Risk",
    accent: "amber",
  },
  {
    icon: BellOff,
    watermark: Clock,
    title: "No Immediate Warning",
    description:
      "Traditional methods fail to alert residents and forest teams in time when animals enter populated areas.",
    chip: "No Alert",
    accent: "cyan",
  },
  {
    icon: HeartPulse,
    watermark: TriangleAlert,
    title: "Risk to Human Life",
    description:
      "Encounters with leopards, tigers, and elephants can lead to injuries, fatalities, livestock loss, and fear among rural families.",
    chip: "Human Safety",
    accent: "danger",
  },
  {
    icon: Radio,
    watermark: MapPin,
    title: "Delayed Field Response",
    description:
      "Without real-time monitoring and evidence, authorities often receive information after the danger has already reached communities.",
    chip: "Delayed Response",
    accent: "green",
  },
];

const impactStrip = [
  { icon: Trees, label: "Forest-edge risk" },
  { icon: BellOff, label: "No early warning" },
  { icon: AlertTriangle, label: "Livestock & property loss" },
  { icon: Users, label: "Community fear" },
];

export function Problem() {
  return (
    <section
      className="relative overflow-hidden py-[4.5rem] lg:py-[7.5rem]"
      style={{ backgroundColor: PROBLEM.bg }}
    >
      {/* Background atmosphere */}
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
      {/* Cyan scan lines */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[18%] h-px opacity-20"
        style={{ background: `linear-gradient(90deg, transparent, ${PROBLEM.cyan}, transparent)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[42%] h-px opacity-10"
        style={{ background: `linear-gradient(90deg, transparent, ${PROBLEM.cyan}, transparent)` }}
        aria-hidden
      />
      {/* Amber danger dots */}
      {[
        { left: "12%", top: "28%" },
        { left: "78%", top: "22%" },
        { left: "88%", top: "55%" },
        { left: "8%", top: "62%" },
      ].map((dot, i) => (
        <div
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 animate-pulse rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            background: PROBLEM.amber,
            boxShadow: `0 0 12px ${PROBLEM.amber}`,
            animationDelay: `${i * 0.4}s`,
          }}
          aria-hidden
        />
      ))}
      {/* Forest silhouette */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 w-full opacity-[0.14] sm:h-28"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#16A34A"
          d="M0 80 L0 48 Q60 18 120 42 Q180 8 240 36 Q300 14 360 38 Q420 10 480 34 Q540 16 600 40 Q660 12 720 36 Q780 20 840 44 Q900 14 960 38 Q1020 24 1080 46 L1200 32 L1200 80 Z"
        />
      </svg>

      <div className="container-custom relative mx-auto">
        {/* Heading */}
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
            The Real Challenge: Human–Animal Conflict
          </h2>
          <p
            className="mx-auto mt-6 max-w-[760px] leading-[1.6]"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)",
              color: PROBLEM.muted,
            }}
          >
            Rural communities across India face a growing crisis that demands intelligent,
            field-ready technology.
          </p>
        </AnimateIn>

        {/* Challenge cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:gap-8 xl:grid-cols-4">
          {challengeCards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 0.08}>
              <ChallengeCard card={card} />
            </AnimateIn>
          ))}
        </div>

        {/* Impact strip */}
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
      {/* Wildlife watermark */}
      <Watermark
        className={cn(
          "pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 stroke-[0.75] sm:h-36 sm:w-36",
          styles.watermark
        )}
        strokeWidth={1}
        aria-hidden
      />

      {/* Status chip */}
      <span
        className={cn(
          "relative z-10 mb-5 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
          styles.chip
        )}
      >
        {card.chip}
      </span>

      {/* Icon */}
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

      {/* Bottom accent line */}
      <div
        className="relative z-10 mt-6 h-px w-12 opacity-60 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${styles.line}, transparent)` }}
        aria-hidden
      />
    </motion.article>
  );
}
