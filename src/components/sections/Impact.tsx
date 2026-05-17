"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Building2,
  Shield,
  Radio,
  CheckCircle2,
  TreePine,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

const IMPACT = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  cardDeep: "rgba(5, 10, 20, 0.92)",
  surface: "#132036",
  border: "rgba(203, 213, 225, 0.14)",
  cyan: "#00D9FF",
  blue: "#2563EB",
  green: "#16A34A",
  amber: "#F59E0B",
  text: "#F8FAFC",
  muted: "#94A3B8",
} as const;

const stats = [
  { value: 100, suffix: "+", label: "Villages Covered", icon: MapPin },
  { value: 4, suffix: "", label: "Forest Dept. Partners", icon: Building2 },
  { value: 150, suffix: "m", label: "AI Detection Range", icon: Radio },
  { value: 100, suffix: "%", label: "Field-Tested", icon: Shield },
];

const impactPoints = [
  "100+ villages protected in Bijnor region",
  "Jim Corbett National Park field trials",
  "Uttarakhand & UP Forest Department collaboration",
  "AI-powered real-time wildlife surveillance",
  "Faster response for forest-border communities",
];

const trustStrip = [
  "Built for forest-fringe communities",
  "Designed for public-sector deployment",
  "AI + IoT wildlife safety",
  "Non-lethal deterrence",
];

const mapChips = [
  { label: "Uttar Pradesh", position: "bottom-[18%] left-[8%]" },
  { label: "Uttarakhand", position: "top-[12%] right-[10%]" },
  { label: "Bijnor", position: "bottom-[32%] left-[38%]" },
  { label: "Jim Corbett Trial", position: "top-[28%] right-[22%]" },
  { label: "100+ Villages", position: "bottom-[8%] right-[12%]" },
];

const villageDots = [
  { x: 152, y: 158 },
  { x: 178, y: 162 },
  { x: 160, y: 178 },
  { x: 185, y: 155 },
  { x: 145, y: 172 },
  { x: 172, y: 148 },
  { x: 158, y: 185 },
  { x: 190, y: 170 },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-[family-name:var(--font-sora)] font-extrabold"
      style={{
        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
        lineHeight: 1,
        letterSpacing: "-0.03em",
        background: `linear-gradient(135deg, ${IMPACT.cyan} 0%, ${IMPACT.blue} 50%, ${IMPACT.green} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden py-[4.5rem] lg:py-[7.5rem]"
      style={{ backgroundColor: IMPACT.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${IMPACT.border} 1px, transparent 1px), linear-gradient(90deg, ${IMPACT.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container-custom relative mx-auto">
        <AnimateIn className="mx-auto max-w-4xl text-center">
          <SectionLabel className="tracking-[0.14em]">Real Impact</SectionLabel>
          <h2
            className="mt-4 font-[family-name:var(--font-sora)] font-extrabold text-white"
            style={{
              fontSize: "clamp(2.125rem, 4.5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Real Impact Across Rural Communities
          </h2>
          <p
            className="mx-auto mt-6 max-w-[860px] leading-[1.65]"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)",
              color: IMPACT.muted,
            }}
          >
            From 100+ village deployments in Bijnor to AI surveillance trials at Jim Corbett
            and forest department partnerships.
          </p>
        </AnimateIn>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08}>
              <StatCard stat={stat} />
            </AnimateIn>
          ))}
        </div>

        {/* Impact dashboard */}
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <AnimateIn delay={0.15}>
            <DeploymentMapCard />
          </AnimateIn>
          <AnimateIn delay={0.22}>
            <ImpactHighlightsCard />
          </AnimateIn>
        </div>

        {/* Trust strip */}
        <AnimateIn delay={0.3} className="mt-8 lg:mt-10">
          <div
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border px-5 py-4 text-center sm:gap-x-6 sm:px-8"
            style={{
              background: `linear-gradient(180deg, ${IMPACT.card}, ${IMPACT.cardDeep})`,
              borderColor: IMPACT.border,
            }}
          >
            {trustStrip.map((text, i) => (
              <span key={text} className="inline-flex items-center gap-3 sm:gap-6">
                {i > 0 && (
                  <span className="hidden text-sm sm:inline" style={{ color: IMPACT.muted }}>
                    •
                  </span>
                )}
                <span className="text-xs font-medium sm:text-sm" style={{ color: IMPACT.muted }}>
                  {text}
                </span>
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const Icon = stat.icon;
  return (
    <motion.div
      className="group flex h-full min-h-[160px] flex-col items-center rounded-[1.25rem] border p-5 text-center transition-shadow duration-300 sm:p-6"
      style={{
        background: `linear-gradient(180deg, ${IMPACT.card}, ${IMPACT.cardDeep})`,
        borderColor: IMPACT.border,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.22)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 56px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 217, 255, 0.15)",
      }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(0,217,255,0.2)]"
        style={{ background: "rgba(0, 217, 255, 0.08)" }}
      >
        <Icon className="h-6 w-6" style={{ color: IMPACT.cyan }} />
      </div>
      <Counter value={stat.value} suffix={stat.suffix} />
      <p className="mt-3 text-sm font-medium leading-snug" style={{ color: IMPACT.muted }}>
        {stat.label}
      </p>
    </motion.div>
  );
}

function DeploymentMapCard() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border"
      style={{
        background: `linear-gradient(160deg, ${IMPACT.card} 0%, ${IMPACT.cardDeep} 100%)`,
        borderColor: IMPACT.border,
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="border-b px-5 py-4 sm:px-6" style={{ borderColor: IMPACT.border }}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: IMPACT.cyan }}
            >
              Deployment Coverage
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-sora)] text-lg font-bold text-white sm:text-xl">
              Bijnor Region Coverage
            </h3>
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1"
            style={{
              borderColor: "rgba(22, 163, 74, 0.35)",
              background: "rgba(22, 163, 74, 0.1)",
            }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: IMPACT.green }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400">
              Live Network
            </span>
          </div>
        </div>
      </div>

      <div className="relative min-h-[280px] flex-1 p-4 sm:min-h-[320px] sm:p-5">
        <div
          className="absolute inset-4 rounded-xl opacity-30 sm:inset-5"
          style={{
            backgroundImage: `linear-gradient(${IMPACT.border} 1px, transparent 1px), linear-gradient(90deg, ${IMPACT.border} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        <svg
          className="relative h-full w-full min-h-[240px]"
          viewBox="0 0 400 260"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Stylized deployment map showing Bijnor, Uttar Pradesh, and Uttarakhand coverage"
        >
          {/* Abstract North India outline */}
          <path
            d="M 60 200 Q 80 120 140 90 Q 200 60 280 75 Q 340 85 360 140 Q 370 190 320 220 Q 240 250 160 235 Q 90 220 60 200 Z"
            fill="rgba(16, 26, 43, 0.6)"
            stroke={IMPACT.border}
            strokeWidth="1"
          />
          {/* Uttar Pradesh region */}
          <path
            d="M 90 175 Q 120 130 180 120 Q 240 115 270 150 Q 250 200 180 210 Q 120 205 90 175 Z"
            fill="rgba(37, 99, 235, 0.12)"
            stroke="rgba(37, 99, 235, 0.35)"
            strokeWidth="0.8"
          />
          {/* Uttarakhand region */}
          <path
            d="M 200 95 Q 260 70 320 85 Q 340 120 300 145 Q 250 140 200 115 Z"
            fill="rgba(22, 163, 74, 0.12)"
            stroke="rgba(22, 163, 74, 0.35)"
            strokeWidth="0.8"
          />
          {/* Coverage rings — Bijnor */}
          <circle cx="168" cy="168" r="55" fill="none" stroke={IMPACT.cyan} strokeWidth="0.6" strokeOpacity="0.25">
            <animate attributeName="r" values="55;58;55" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="168" cy="168" r="38" fill="none" stroke={IMPACT.green} strokeWidth="0.5" strokeOpacity="0.3">
            <animate attributeName="r" values="38;41;38" dur="3.5s" repeatCount="indefinite" />
          </circle>
          {/* Network lines */}
          <path
            d="M 168 168 L 268 118"
            stroke={IMPACT.cyan}
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="4 3"
            fill="none"
          />
          <path
            d="M 168 168 L 130 195"
            stroke={IMPACT.cyan}
            strokeWidth="0.8"
            strokeOpacity="0.25"
            strokeDasharray="3 3"
            fill="none"
          />
          {/* Village dots */}
          {villageDots.map((v, i) => (
            <g key={i}>
              <circle cx={v.x} cy={v.y} r="4" fill="rgba(0, 217, 255, 0.2)">
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2.5s"
                  begin={`${i * 0.25}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={v.x} cy={v.y} r="2" fill={IMPACT.cyan} opacity="0.8" />
            </g>
          ))}
          {/* Bijnor node */}
          <g>
            <circle cx="168" cy="168" r="10" fill="rgba(0, 217, 255, 0.2)">
              <animate attributeName="r" values="10;14;10" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="168" cy="168" r="5" fill={IMPACT.cyan} />
          </g>
          {/* Jim Corbett node */}
          <g>
            <circle cx="268" cy="118" r="8" fill="rgba(245, 158, 11, 0.2)">
              <animate attributeName="r" values="8;11;8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="268" cy="118" r="4" fill={IMPACT.amber} />
          </g>
        </svg>

        {mapChips.map((chip) => (
          <span
            key={chip.label}
            className={cn(
              "absolute z-10 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider backdrop-blur-sm sm:text-[10px] sm:px-2.5",
              chip.position
            )}
            style={{
              background: "rgba(16, 26, 43, 0.9)",
              borderColor: IMPACT.border,
              color: IMPACT.muted,
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImpactHighlightsCard() {
  return (
    <div
      className="flex h-full flex-col rounded-[1.5rem] border"
      style={{
        background: `linear-gradient(160deg, ${IMPACT.card} 0%, ${IMPACT.cardDeep} 100%)`,
        borderColor: IMPACT.border,
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 217, 255, 0.04)",
      }}
    >
      <div className="border-b px-5 py-4 sm:px-6" style={{ borderColor: IMPACT.border }}>
        <span
          className="inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
          style={{
            borderColor: "rgba(22, 163, 74, 0.35)",
            background: "rgba(22, 163, 74, 0.1)",
            color: IMPACT.green,
          }}
        >
          Verified Field Deployment
        </span>
        <h3 className="mt-3 font-[family-name:var(--font-sora)] text-lg font-bold text-white sm:text-xl">
          Impact Highlights
        </h3>
        <p className="mt-1 text-sm" style={{ color: IMPACT.muted }}>
          State-level deployment experience & field trial readiness
        </p>
      </div>

      <div className="relative flex-1 px-5 py-5 sm:px-6 sm:py-6">
        {/* Timeline line */}
        <div
          className="absolute bottom-6 left-[2.15rem] top-6 w-px"
          style={{
            background: `linear-gradient(180deg, ${IMPACT.cyan}, ${IMPACT.green}, transparent)`,
            opacity: 0.35,
          }}
          aria-hidden
        />

        <ul className="relative space-y-4">
          {impactPoints.map((point, i) => (
            <motion.li
              key={point}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div
                className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border"
                style={{
                  borderColor: "rgba(22, 163, 74, 0.35)",
                  background: "rgba(22, 163, 74, 0.12)",
                }}
              >
                <CheckCircle2 className="h-4 w-4" style={{ color: IMPACT.green }} />
              </div>
              <span className="pt-0.5 text-sm leading-relaxed sm:text-base" style={{ color: IMPACT.text }}>
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        <div
          className="mt-6 rounded-xl border p-4 sm:p-5"
          style={{
            borderColor: "rgba(0, 217, 255, 0.2)",
            background: `linear-gradient(135deg, rgba(0, 217, 255, 0.06) 0%, rgba(37, 99, 235, 0.04) 100%)`,
            borderLeftWidth: 3,
            borderLeftColor: IMPACT.cyan,
          }}
        >
          <div className="flex items-center gap-2">
            <TreePine className="h-4 w-4" style={{ color: IMPACT.green }} />
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: IMPACT.cyan }}>
              Government & Forest Collaboration
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: IMPACT.muted }}>
            Village deployments in partnership with{" "}
            <span className="font-medium" style={{ color: IMPACT.text }}>
              CDO Purna Borah
            </span>{" "}
            and{" "}
            <span className="font-medium" style={{ color: IMPACT.text }}>
              DFO Gyan Singh
            </span>
            . The AI Wildlife Monitoring System is expanding through the{" "}
            <span className="font-medium" style={{ color: IMPACT.text }}>
              Uttarakhand Forest Department
            </span>{" "}
            and{" "}
            <span className="font-medium" style={{ color: IMPACT.text }}>
              Uttar Pradesh Forest Department
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
