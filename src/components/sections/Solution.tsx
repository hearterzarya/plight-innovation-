"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Shield,
  Sun,
  Radio,
  Box,
  Zap,
  Wrench,
  Volume2,
} from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

const SOL = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  cardDeep: "rgba(5, 10, 20, 0.92)",
  border: "rgba(203, 213, 225, 0.14)",
  cyan: "#00D9FF",
  amber: "#F59E0B",
  green: "#16A34A",
  danger: "#EF4444",
  text: "#F8FAFC",
  muted: "#94A3B8",
} as const;

const callouts = [
  { icon: Cpu, label: "On-Device Neural Processing", anchor: { x: 50, y: 10 } },
  { icon: Shield, label: "Ruggedized Industrial Enclosure", anchor: { x: 12, y: 26 } },
  { icon: Sun, label: "24/7 Solar Power Architecture", anchor: { x: 88, y: 26 } },
  { icon: Radio, label: "Secure Telemetry (4G/LTE & GPS)", anchor: { x: 50, y: 90 } },
  { icon: Wrench, label: "Field-tested durability", anchor: { x: 12, y: 74 } },
  { icon: Zap, label: "Quick deployment ready", anchor: { x: 88, y: 74 } },
] as const;

const bottomFeatures = [
  { icon: Cpu, title: "High-Efficiency Microcontrollers", desc: "Engineered for continuous, unsupervised operation with minimal power draw in remote locations." },
  { icon: Zap, title: "Zero-Latency Vision AI", desc: "On-device AI inference for real-time object detection without relying on cloud infrastructure." },
  { icon: Radio, title: "Resilient Telemetry", desc: "Seamless data synchronization using integrated cellular modems and secure network protocols." },
  { icon: Sun, title: "Off-Grid Independence", desc: "Independent energy management systems built specifically for 24/7 continuous deployment." },
  { icon: Box, title: "Production-Ready Build", desc: "Weatherproof and ruggedized hardware designed to withstand harsh physical and environmental wear." },
  { icon: Wrench, title: "Custom Logic Control", desc: "Programmable automation tailored for complex industrial, environmental, and commercial operations." },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden py-[4.5rem] lg:py-[7.5rem]"
      style={{ backgroundColor: SOL.bg }}
    >
      <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} className="z-[1]" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-bg-midnight/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(0, 217, 255, 0.08) 0%, transparent 70%)" }}
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 w-full opacity-[0.12] sm:h-24"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#16A34A"
          d="M0 80 L0 50 Q80 20 160 45 Q240 10 320 40 Q400 15 480 38 Q560 8 640 35 Q720 18 800 42 Q880 12 960 36 Q1040 22 1120 48 L1200 35 L1200 80 Z"
        />
      </svg>

      <div className="container-custom relative z-10 mx-auto">
        <AnimateIn className="mx-auto max-w-4xl text-center">
          <SectionLabel className="tracking-[0.14em]">Flagship Architecture</SectionLabel>
          <h2
            className="mt-4 font-[family-name:var(--font-sora)] font-extrabold text-white"
            style={{
              fontSize: "clamp(2.125rem, 4.5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Autonomous Edge AI Node
          </h2>
          <p
            className="mx-auto mt-6 max-w-[760px] leading-[1.65]"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)",
              color: SOL.muted,
            }}
          >
            A fully integrated, solar-powered computing unit designed to run high-performance
            neural accelerators and custom object detection pipelines in extreme off-grid environments.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} className="mt-12 sm:mt-14 lg:mt-[4.5rem]">
          <ProductShowcase />
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {bottomFeatures.map((feat, i) => (
            <AnimateIn key={feat.title} delay={0.08 * i}>
              <FeatureCard feat={feat} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-[1.75rem] border p-4 sm:rounded-[2rem] sm:p-6 lg:min-h-[520px] lg:p-8"
      style={{
        background: `linear-gradient(180deg, ${SOL.card} 0%, ${SOL.cardDeep} 100%)`,
        borderColor: SOL.border,
        boxShadow: "0 32px 100px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 217, 255, 0.06)",
      }}
    >
      {/* Inner grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(${SOL.border} 1px, transparent 1px), linear-gradient(90deg, ${SOL.border} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Desktop / tablet: radial showcase */}
      {/* TODO: Replace with rugged Edge AI Node render. */}
      <div className="relative mx-auto hidden min-h-[480px] md:block lg:min-h-[500px]">
        <ConnectorLines />
        {callouts.map((c, i) => (
          <CalloutChip key={c.label} callout={c} index={i} />
        ))}
        <DeviceUnit className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Mobile: device then callout grid — TODO: Replace with rugged Edge AI Node render. */}
      <div className="flex flex-col items-center gap-8 md:hidden">
        <div className="relative flex min-h-[320px] w-full items-center justify-center py-6">
          <DeviceUnit />
        </div>
        <div className="grid w-full grid-cols-1 gap-3 min-[400px]:grid-cols-2">
          {callouts.map((c, i) => (
            <CalloutChip key={c.label} callout={c} index={i} mobile />
          ))}
        </div>
      </div>
    </div>
  );
}

function ConnectorLines() {
  const center = { x: 50, y: 50 };
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {callouts.map((c) => (
        <line
          key={c.label}
          x1={center.x}
          y1={center.y}
          x2={c.anchor.x}
          y2={c.anchor.y}
          stroke={SOL.cyan}
          strokeWidth="0.15"
          strokeOpacity="0.35"
          strokeDasharray="1 1"
        />
      ))}
    </svg>
  );
}

function CalloutChip({
  callout,
  index,
  mobile = false,
}: {
  callout: (typeof callouts)[number];
  index: number;
  mobile?: boolean;
}) {
  const Icon = callout.icon;

  if (mobile) {
    return (
      <motion.div
        className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5 backdrop-blur-md"
        style={{ background: SOL.card, borderColor: SOL.border }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "rgba(0, 217, 255, 0.1)" }}
        >
          <Icon className="h-4 w-4" style={{ color: SOL.cyan }} />
        </div>
        <span className="text-xs font-medium leading-snug" style={{ color: SOL.muted }}>
          {callout.label}
        </span>
      </motion.div>
    );
  }

  const posClass =
    callout.anchor.y < 20
      ? "top-[4%] left-1/2 -translate-x-1/2"
      : callout.anchor.y > 80
        ? "bottom-[4%] left-1/2 -translate-x-1/2"
        : callout.anchor.x < 30
          ? "top-1/2 left-[2%] -translate-y-1/2 lg:left-[3%]"
          : callout.anchor.x > 70
            ? "top-1/2 right-[2%] -translate-y-1/2 lg:right-[3%]"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <motion.div
      className={cn("absolute z-20 max-w-[160px] lg:max-w-[180px]", posClass)}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.25, ease: "easeInOut" }}
    >
      <div
        className="flex items-center gap-2 rounded-xl border px-3 py-2 backdrop-blur-md"
        style={{
          background: "rgba(16, 26, 43, 0.92)",
          borderColor: SOL.border,
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "rgba(0, 217, 255, 0.12)" }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: SOL.cyan }} />
        </div>
        <span className="text-[11px] font-medium leading-tight sm:text-xs" style={{ color: SOL.text }}>
          {callout.label}
        </span>
      </div>
    </motion.div>
  );
}

function DeviceUnit({ className }: { className?: string }) {
  return (
    <div className={cn("relative z-10", className)}>
      {/* Protection rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 140 + ring * 44,
            height: 140 + ring * 44,
            borderColor: `rgba(0, 217, 255, ${0.28 - ring * 0.07})`,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: ring * 0.35, ease: "easeInOut" }}
          aria-hidden
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Device body */}
      <motion.div
        className="relative flex w-[148px] flex-col items-center rounded-2xl border-2 px-4 pb-4 pt-5 sm:w-[168px]"
        style={{
          background: "linear-gradient(165deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 45%, rgba(10, 18, 32, 1) 100%)",
          borderColor: "rgba(0, 217, 255, 0.35)",
          boxShadow:
            "0 0 48px rgba(0, 217, 255, 0.2), 0 0 24px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Rugged top bar */}
        <div
          className="absolute inset-x-3 top-0 h-1 rounded-b-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.4), transparent)" }}
          aria-hidden
        />

        {/* Multi-color indicators */}
        <div className="mb-4 flex items-center gap-2">
          <motion.div
            className="h-4 w-4 rounded-full"
            style={{ background: SOL.danger, boxShadow: `0 0 12px ${SOL.danger}` }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.div
            className="h-4 w-4 rounded-full"
            style={{ background: SOL.amber, boxShadow: `0 0 12px ${SOL.amber}` }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="h-4 w-4 rounded-full"
            style={{ background: SOL.cyan, boxShadow: `0 0 12px ${SOL.cyan}` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
          />
        </div>

        {/* Label */}
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: SOL.cyan }}
        >
          PLIGHT
        </p>
        <p className="mt-0.5 text-center font-[family-name:var(--font-sora)] text-sm font-bold leading-tight text-white sm:text-base">
          Edge AI Node
        </p>

        {/* Speaker + sound waves */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg border"
            style={{
              borderColor: "rgba(245, 158, 11, 0.35)",
              background: "rgba(245, 158, 11, 0.1)",
            }}
          >
            <Volume2 className="h-4 w-4" style={{ color: SOL.amber }} />
          </div>
          <div className="flex items-end gap-0.5">
            {[3, 5, 7, 5, 3].map((h, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full"
                style={{ background: SOL.amber, height: h * 2 }}
                animate={{ scaleY: [0.4, 1, 0.4] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Status strip */}
        <div
          className="mt-4 flex w-full items-center justify-between rounded-lg border px-2 py-1.5"
          style={{ borderColor: SOL.border, background: "rgba(0,0,0,0.25)" }}
        >
          <span className="flex items-center gap-1">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: SOL.green }}
            />
            <span className="type-micro font-medium" style={{ color: SOL.muted }}>
              Active
            </span>
          </span>
          <span className="type-micro font-semibold uppercase tracking-wider" style={{ color: SOL.amber }}>
            Alert Ready
          </span>
        </div>

        {/* Side vents */}
        <div
          className="absolute -left-px top-1/2 h-12 w-1 -translate-y-1/2 rounded-l"
          style={{ background: "rgba(148, 163, 184, 0.2)" }}
          aria-hidden
        />
        <div
          className="absolute -right-px top-1/2 h-12 w-1 -translate-y-1/2 rounded-r"
          style={{ background: "rgba(148, 163, 184, 0.2)" }}
          aria-hidden
        />
      </motion.div>
    </div>
  );
}

function FeatureCard({ feat }: { feat: (typeof bottomFeatures)[number] }) {
  const Icon = feat.icon;
  return (
    <motion.div
      className="group flex h-full flex-col rounded-[1.25rem] border p-5 transition-colors duration-300 sm:p-6"
      style={{
        background: `linear-gradient(180deg, ${SOL.card}, ${SOL.cardDeep})`,
        borderColor: SOL.border,
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
        style={{ background: "rgba(0, 217, 255, 0.08)" }}
      >
        <Icon className="h-5 w-5" style={{ color: SOL.cyan }} />
      </div>
      <h4
        className="font-[family-name:var(--font-sora)] text-base font-semibold text-white sm:text-lg"
      >
        {feat.title}
      </h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: SOL.muted }}>
        {feat.desc}
      </p>
    </motion.div>
  );
}
