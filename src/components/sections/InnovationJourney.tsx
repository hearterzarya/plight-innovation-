"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Zap,
  ScanEye,
  Volume2,
  MapPin,
  Camera,
  TreePine,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

const JOURNEY = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  cardDeep: "rgba(5, 10, 20, 0.92)",
  border: "rgba(203, 213, 225, 0.14)",
  cyan: "#00D9FF",
  blue: "#2563EB",
  green: "#16A34A",
  amber: "#F59E0B",
  text: "#F8FAFC",
  muted: "#94A3B8",
} as const;

type Accent = "amber" | "cyan" | "green";

const accentMap: Record<
  Accent,
  { icon: string; chip: string; badge: string; glow: string; line: string }
> = {
  amber: {
    icon: "text-amber-400",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    badge: "border-amber-400/40 text-amber-400",
    glow: "group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]",
    line: JOURNEY.amber,
  },
  cyan: {
    icon: "text-cyan-400",
    chip: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    badge: "border-cyan-400/40 text-cyan-400",
    glow: "group-hover:shadow-[0_20px_60px_rgba(0,217,255,0.12)]",
    line: JOURNEY.cyan,
  },
  green: {
    icon: "text-emerald-400",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    badge: "border-emerald-400/40 text-emerald-400",
    glow: "group-hover:shadow-[0_20px_60px_rgba(22,163,74,0.12)]",
    line: JOURNEY.green,
  },
};

const milestones: {
  step: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  accent: Accent;
}[] = [
  {
    step: "01",
    title: "Real Problem Identified",
    description:
      "Villages in Bijnor faced increasing wildlife danger near homes and farms.",
    tag: "Field Problem",
    icon: AlertTriangle,
    accent: "amber",
  },
  {
    step: "02",
    title: "Fox Light Innovation System",
    description:
      "A colored light-based deterrent system was developed to discourage animal entry.",
    tag: "First Innovation",
    icon: Zap,
    accent: "cyan",
  },
  {
    step: "03",
    title: "Field Learning",
    description:
      "Deployment revealed the need for immediate alert warnings when animals approached.",
    tag: "Field Feedback",
    icon: ScanEye,
    accent: "amber",
  },
  {
    step: "04",
    title: "Wildlife Repellent Device",
    description:
      "Light deterrence was combined with integrated sound alerts for complete protection.",
    tag: "Product Evolution",
    icon: Volume2,
    accent: "cyan",
  },
  {
    step: "05",
    title: "100+ Village Deployment",
    description:
      "Deployed across more than 100 villages in Bijnor with government support.",
    tag: "Real Impact",
    icon: MapPin,
    accent: "green",
  },
  {
    step: "06",
    title: "AI Wildlife Monitoring System",
    description:
      "Advanced AI with 360° surveillance for real-time species detection and forest fire alerts.",
    tag: "AI Upgrade",
    icon: Camera,
    accent: "cyan",
  },
  {
    step: "07",
    title: "Jim Corbett Field Trials",
    description: "Successfully tested under real forest conditions at Jim Corbett.",
    tag: "Field Trial",
    icon: TreePine,
    accent: "green",
  },
  {
    step: "08",
    title: "Forest Department Partnerships",
    description:
      "Active collaboration with Uttarakhand and Uttar Pradesh forest departments.",
    tag: "Collaboration",
    icon: Building2,
    accent: "green",
  },
];

export function InnovationJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-[4.5rem] lg:py-[7.5rem]"
      style={{ backgroundColor: JOURNEY.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(${JOURNEY.border} 1px, transparent 1px), linear-gradient(90deg, ${JOURNEY.border} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(0, 217, 255, 0.07) 0%, transparent 70%)" }}
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 w-full opacity-[0.1] sm:h-20"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#16A34A"
          d="M0 80 L0 52 Q100 18 200 42 Q300 12 400 38 Q500 10 600 36 Q700 14 800 40 Q900 18 1000 44 L1200 30 L1200 80 Z"
        />
      </svg>

      <div className="container-custom relative mx-auto">
        <AnimateIn className="mx-auto max-w-4xl text-center">
          <SectionLabel className="tracking-[0.14em]">Innovation Journey</SectionLabel>
          <h2
            className="mt-4 font-[family-name:var(--font-sora)] font-extrabold text-white"
            style={{
              fontSize: "clamp(2.125rem, 4.5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            From Village Alerts to AI-Powered Forest Surveillance
          </h2>
          <p
            className="mx-auto mt-6 max-w-[820px] leading-[1.65]"
            style={{
              fontSize: "clamp(1.0625rem, 1.45vw, 1.3125rem)",
              color: JOURNEY.muted,
            }}
          >
            A real-world innovation journey that started with rural safety challenges and
            evolved into AI-enabled wildlife monitoring, deterrence, and forest department
            collaboration.
          </p>
        </AnimateIn>

        {/* Desktop & tablet: 2-row milestone grid */}
        <div className="relative mt-12 hidden md:mt-16 md:block">
          <TimelineConnectors reduceMotion={reduceMotion} />
          <div className="grid gap-6 md:grid-cols-2 lg:gap-7 xl:grid-cols-4 xl:gap-8">
            {milestones.map((item, i) => (
              <AnimateIn key={item.step} delay={i * 0.06}>
                <MilestoneCard item={item} index={i} reduceMotion={reduceMotion} />
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-10 md:hidden">
          <div
            className="absolute bottom-0 left-[15px] top-0 w-px"
            style={{
              background: `linear-gradient(180deg, ${JOURNEY.cyan}, ${JOURNEY.blue}, ${JOURNEY.green})`,
              opacity: 0.45,
            }}
            aria-hidden
          />
          {!reduceMotion && (
            <motion.div
              className="absolute left-[11px] top-0 h-3 w-3 rounded-full"
              style={{
                background: JOURNEY.cyan,
                boxShadow: `0 0 12px ${JOURNEY.cyan}`,
              }}
              animate={{ top: ["0%", "95%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
          )}
          <div className="space-y-5 pl-10">
            {milestones.map((item, i) => (
              <AnimateIn key={item.step} delay={i * 0.06}>
                <div className="relative">
                  <div
                    className="absolute -left-[25px] top-8 z-10 h-3 w-3 rounded-full border-2"
                    style={{
                      borderColor: JOURNEY.cyan,
                      background: JOURNEY.bg,
                      boxShadow: `0 0 8px ${JOURNEY.cyan}`,
                    }}
                    aria-hidden
                  />
                  <MilestoneCard item={item} index={i} reduceMotion={reduceMotion} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <AnimateIn delay={0.4} className="mt-10 md:mt-14">
          <div
            className="relative overflow-hidden rounded-2xl border px-5 py-4 text-center sm:px-8 sm:py-5"
            style={{
              background: `linear-gradient(90deg, rgba(0, 217, 255, 0.08) 0%, ${JOURNEY.card} 40%, ${JOURNEY.card} 60%, rgba(0, 217, 255, 0.06) 100%)`,
              borderColor: "rgba(0, 217, 255, 0.22)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1"
              style={{ background: JOURNEY.cyan }}
              aria-hidden
            />
            <p
              className="font-[family-name:var(--font-sora)] text-base font-semibold sm:text-lg"
              style={{ color: JOURNEY.text }}
            >
              From a local rural challenge to{" "}
              <span style={{ color: JOURNEY.cyan }}>field-tested AI wildlife protection</span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function TimelineConnectors({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
      {/* Row 1 horizontal connector */}
      <div
        className="absolute left-[6%] right-[6%] top-[52px] h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${JOURNEY.cyan}, ${JOURNEY.blue}, ${JOURNEY.cyan}, transparent)`,
          opacity: 0.5,
        }}
      />
      {/* Row 2 horizontal connector */}
      <div
        className="absolute left-[6%] right-[6%] top-[calc(50%+52px)] h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${JOURNEY.green}, ${JOURNEY.cyan}, ${JOURNEY.green}, transparent)`,
          opacity: 0.45,
        }}
      />
      {/* Center vertical bridge between rows */}
      <div
        className="absolute left-1/2 top-[52px] w-px -translate-x-1/2"
        style={{
          height: "calc(50% - 52px)",
          background: `linear-gradient(180deg, ${JOURNEY.cyan}, ${JOURNEY.green})`,
          opacity: 0.35,
        }}
      />
      {!reduceMotion && (
        <motion.div
          className="absolute top-[48px] h-2 w-2 rounded-full"
          style={{
            background: JOURNEY.cyan,
            boxShadow: `0 0 14px ${JOURNEY.cyan}`,
            left: "6%",
          }}
          animate={{ left: ["6%", "94%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

function MilestoneCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof milestones)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const styles = accentMap[item.accent];
  const Icon = item.icon;

  return (
    <motion.article
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col rounded-3xl border p-6 transition-shadow duration-300 sm:p-7",
        styles.glow
      )}
      style={{
        background: `linear-gradient(180deg, ${JOURNEY.card} 0%, ${JOURNEY.cardDeep} 100%)`,
        borderColor: JOURNEY.border,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.22)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      {/* Number badge */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <motion.div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-[#0a1220] font-[family-name:var(--font-sora)] text-sm font-bold",
            styles.badge
          )}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        >
          {item.step}
        </motion.div>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]",
            styles.chip
          )}
        >
          {item.tag}
        </span>
      </div>

      {/* Icon */}
      <div
        className={cn(
          "mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition-shadow duration-300",
          "group-hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
        )}
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <Icon className={cn("h-5 w-5", styles.icon)} />
      </div>

      <h3
        className="font-[family-name:var(--font-sora)] font-bold text-white"
        style={{
          fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
          lineHeight: 1.25,
        }}
      >
        {item.title}
      </h3>
      <p
        className="mt-3 flex-1"
        style={{
          fontSize: "clamp(0.9375rem, 1vw, 1rem)",
          lineHeight: 1.65,
          color: JOURNEY.muted,
        }}
      >
        {item.description}
      </p>

      {/* Bottom accent */}
      <div
        className="mt-5 h-0.5 w-10 opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${styles.line}, transparent)`,
        }}
        aria-hidden
      />
    </motion.article>
  );
}
