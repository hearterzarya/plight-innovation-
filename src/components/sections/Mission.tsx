"use client";

import { motion } from "framer-motion";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

const MAP = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  border: "rgba(203, 213, 225, 0.14)",
  cyan: "#00D9FF",
  green: "#16A34A",
  amber: "#F59E0B",
  text: "#F8FAFC",
  muted: "#94A3B8",
  forest: "rgba(22, 101, 52, 0.35)",
  forestDeep: "rgba(22, 163, 74, 0.12)",
} as const;

const floatingChips = [
  { label: "Edge Node", position: "top-[6%] left-[4%] sm:left-[6%]", color: MAP.green, delay: 0 },
  { label: "Neural Vision", position: "top-[6%] right-[4%] sm:right-[6%]", color: MAP.cyan, delay: 0.2 },
  {
    label: "On-Device AI",
    position: "top-[38%] left-[2%] sm:left-[4%]",
    color: MAP.amber,
    delay: 0.4,
  },
  {
    label: "Telemetry Sync",
    position: "bottom-[38%] left-[28%] sm:left-[32%]",
    color: MAP.amber,
    delay: 0.6,
  },
  {
    label: "24/7 Autonomous",
    position: "bottom-[10%] right-[4%] sm:right-[8%]",
    color: MAP.green,
    delay: 0.8,
  },
];

const villageHeights = [22, 34, 28, 40, 26, 32, 24, 36, 30];

const wildlifeDots = [
  { left: "18%", top: "32%", delay: 0 },
  { left: "22%", top: "48%", delay: 0.5 },
  { left: "14%", top: "58%", delay: 1 },
  { left: "26%", top: "40%", delay: 1.4 },
];

export function Mission() {
  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-midnight/50 to-bg-deep"
        aria-hidden
      />
      <PcbCircuitBackground corner="left" intensity="subtle" vignette={false} className="z-[1]" />
      <div className="container-custom relative z-10 mx-auto">
        <div className="grid min-w-0 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-20">
          <AnimateIn className="min-w-0">
            <div className="flex flex-col justify-center lg:pr-4 xl:pr-8">
              <SectionLabel>Our Origin</SectionLabel>
              <h2 className="type-h2 mt-4 text-white">
                Technology Built for the Physical World
              </h2>
              <p className="type-accent-line mt-3 text-cyan-400/90">
                Born from complex field challenges in Najibabad, India
              </p>
              <div className="type-body mt-6 max-w-[620px] space-y-4 text-text-cool">
                <p>
                  PLIGHT was founded with a singular focus: taking artificial intelligence out of
                  the cloud and embedding it directly into the physical world. Our foundational
                  engineering didn&apos;t happen in a sterile lab—it started by deploying
                  mission-critical systems in the extreme, off-grid environments of Najibabad.
                </p>
                <p>
                  To operate autonomously in these challenging conditions, we had to master the
                  integration of high-performance neural accelerators, ruggedized microcontrollers,
                  and low-power telemetry. What began as a localized hardware deployment rapidly
                  evolved into a robust architecture for industrial edge computing.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} className="flex min-w-0 items-center justify-center lg:justify-end">
            <RuralSafetyNetworkMap />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function RuralSafetyNetworkMap() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,520px)] lg:max-w-[560px]">
      <div
        className="overflow-hidden rounded-[1.25rem] border p-4 sm:rounded-3xl sm:p-5"
        style={{
          background: `linear-gradient(160deg, ${MAP.card} 0%, rgba(10, 18, 32, 0.9) 100%)`,
          borderColor: MAP.border,
          boxShadow:
            "0 0 0 1px rgba(0, 217, 255, 0.06), 0 24px 64px rgba(0, 0, 0, 0.45)",
        }}
      >
        <div
          className="mb-3 flex items-center justify-between gap-2 border-b pb-3"
          style={{ borderColor: MAP.border }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ background: MAP.green, boxShadow: `0 0 8px ${MAP.green}` }}
            />
            <span
              className="type-micro font-semibold uppercase tracking-[0.14em]"
              style={{ color: MAP.cyan }}
            >
              Live Monitoring
            </span>
          </div>
          <span className="font-heading type-body-sm font-bold" style={{ color: MAP.text }}>
            Edge Network Active
          </span>
          <span className="type-micro hidden font-medium sm:inline" style={{ color: MAP.muted }}>
            Bijnor
          </span>
        </div>

        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
          style={{ backgroundColor: MAP.bg }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(${MAP.border} 1px, transparent 1px), linear-gradient(90deg, ${MAP.border} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden
          />

          <div
            className="absolute inset-y-0 left-0 w-[42%]"
            style={{
              background: `linear-gradient(90deg, ${MAP.forest} 0%, ${MAP.forestDeep} 70%, transparent 100%)`,
            }}
            aria-hidden
          />

          <svg
            className="absolute inset-y-0 left-[38%] h-full w-16 -translate-x-1/2 opacity-60"
            viewBox="0 0 40 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 0 Q20 50 8 100 T0 200 L40 200 L40 0 Z"
              fill="rgba(22, 163, 74, 0.15)"
              stroke={MAP.green}
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </svg>

          <motion.div
            className="absolute inset-y-3 right-2 w-[48%] rounded-xl border"
            style={{
              borderColor: "rgba(22, 163, 74, 0.35)",
              background:
                "radial-gradient(ellipse at 60% 50%, rgba(22, 163, 74, 0.18) 0%, rgba(22, 163, 74, 0.04) 55%, transparent 80%)",
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <div
            className="absolute bottom-[14%] right-[4%] flex items-end justify-end gap-1 sm:gap-1.5"
            aria-hidden
          >
            {villageHeights.map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-sm sm:w-3.5"
                style={{
                  height: h,
                  background:
                    "linear-gradient(to top, rgba(148, 163, 184, 0.35), rgba(148, 163, 184, 0.1))",
                  borderTop: "1px solid rgba(203, 213, 225, 0.2)",
                }}
              />
            ))}
          </div>

          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-[46%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: 36 + ring * 32,
                height: 36 + ring * 32,
                borderColor: `rgba(0, 217, 255, ${0.35 - ring * 0.08})`,
              }}
              animate={{ opacity: [0.15, 0.45, 0.15], scale: [1, 1.02, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: ring * 0.4,
                ease: "easeInOut",
              }}
              aria-hidden
            />
          ))}

          <motion.div
            className="absolute left-[46%] top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 sm:h-11 sm:w-11"
              style={{
                background: "rgba(16, 26, 43, 0.95)",
                borderColor: MAP.cyan,
                boxShadow: `0 0 24px rgba(0, 217, 255, 0.35)`,
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden>
                <path
                  fill={MAP.cyan}
                  d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4zm0 2.18l6 3v5.82c0 4.12-2.69 8.02-6 9.18-3.31-1.16-6-5.06-6-9.18V7.18l6-3z"
                />
              </svg>
            </div>
            <span
              className="type-micro mt-1 font-semibold uppercase tracking-wider"
              style={{ color: MAP.cyan }}
            >
              AI Shield
            </span>
          </motion.div>

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" aria-hidden>
            <defs>
              <linearGradient id="mission-alert-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={MAP.amber} stopOpacity="0.2" />
                <stop offset="50%" stopColor={MAP.amber} stopOpacity="0.9" />
                <stop offset="100%" stopColor={MAP.cyan} stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 55 140 Q 120 120, 165 155 T 240 130"
              fill="none"
              stroke="url(#mission-alert-grad)"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
              transition={{
                pathLength: { duration: 2, ease: "easeOut" },
                opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <circle r="4" fill={MAP.amber} opacity="0.9">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 55 140 Q 120 120, 165 155 T 240 130"
              />
            </circle>
          </svg>

          {wildlifeDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute z-10 h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5"
              style={{
                left: dot.left,
                top: dot.top,
                background: MAP.amber,
                boxShadow: `0 0 10px ${MAP.amber}`,
              }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
              aria-hidden
            />
          ))}

          <span
            className="type-micro absolute left-[6%] top-[22%] font-semibold uppercase tracking-wider"
            style={{ color: "rgba(22, 163, 74, 0.9)" }}
          >
            Field Zone
          </span>
          <span
            className="type-micro absolute right-[8%] top-[22%] font-semibold uppercase tracking-wider"
            style={{ color: MAP.cyan }}
          >
            Deploy
          </span>

          {floatingChips.map((chip) => (
            <MapChip key={chip.label} chip={chip} />
          ))}
        </div>

        <div
          className="mt-3 flex items-center gap-2 rounded-xl border px-3 py-2.5 sm:px-4"
          style={{ background: MAP.card, borderColor: MAP.border }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: MAP.green }}
          />
          <p className="type-body-sm" style={{ color: MAP.muted }}>
            <span className="font-semibold" style={{ color: MAP.text }}>
              Najibabad, Bijnor
            </span>
            {" — "}Field-tested edge AI engineering hub
          </p>
        </div>
      </div>
    </div>
  );
}

function MapChip({ chip }: { chip: (typeof floatingChips)[number] }) {
  return (
    <motion.div
      className={cn(
        "absolute z-20 flex max-w-[118px] items-center gap-1.5 rounded-full border px-2 py-1 backdrop-blur-md sm:max-w-none sm:px-2.5",
        chip.position
      )}
      style={{
        background: "rgba(16, 26, 43, 0.92)",
        borderColor: MAP.border,
      }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        delay: chip.delay,
        ease: "easeInOut",
      }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: chip.color, boxShadow: `0 0 6px ${chip.color}` }}
      />
      <span className="type-micro truncate font-medium" style={{ color: MAP.muted }}>
        {chip.label}
      </span>
    </motion.div>
  );
}
