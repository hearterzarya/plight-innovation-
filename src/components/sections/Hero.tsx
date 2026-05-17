"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Shield,
  Radio,
  Cpu,
  Camera,
  Bell,
  Volume2,
  Zap,
  PawPrint,
  ScanEye,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/GridBackground";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { cn } from "@/lib/utils";

const HERO = {
  bg: "#050A14",
  surface: "#101A2B",
  surfaceSoft: "#132036",
  text: "#F8FAFC",
  muted: "#94A3B8",
  silver: "#CBD5E1",
  cyan: "#00D9FF",
  blue: "#2563EB",
  green: "#16A34A",
  amber: "#F59E0B",
  border: "rgba(203, 213, 225, 0.14)",
} as const;

const WILDLIFE_ASSETS = {
  camera: "/images/wildlife/camera.png",
  cameraAlt: "/images/ai/360-camera.png",
  elephant: "/images/wildlife/elephant.png",
  tiger: "/images/wildlife/tiger.png",
  leopard: "/images/wildlife/leopard.png",
} as const;

const trustBadges = [
  { icon: MapPin, label: "100+ Villages Deployed" },
  { icon: Shield, label: "Wildlife Safety Technology" },
  { icon: Cpu, label: "AI Wildlife Monitoring" },
  { icon: Radio, label: "Built in Bijnor, UP" },
];

const detectionCards = [
  {
    id: "elephant",
    label: "Elephant",
    status: "Monitoring",
    confidence: "94%",
    color: "green" as const,
    icon: PawPrint,
    image: WILDLIFE_ASSETS.elephant,
    position: "bottom-[18%] left-[4%] sm:left-[6%]",
    delay: 0,
  },
  {
    id: "tiger",
    label: "Tiger",
    status: "Alert Ready",
    confidence: "91%",
    color: "amber" as const,
    icon: Target,
    image: WILDLIFE_ASSETS.tiger,
    position: "top-[14%] left-[4%] sm:left-[8%]",
    delay: 0.5,
  },
  {
    id: "leopard",
    label: "Leopard",
    status: "Active",
    confidence: "89%",
    color: "cyan" as const,
    icon: ScanEye,
    image: WILDLIFE_ASSETS.leopard,
    position: "top-[16%] right-[4%] sm:right-[6%]",
    delay: 1,
  },
];

const floatingChips: {
  label: string;
  icon: LucideIcon;
  color: string;
  position: string;
  delay: number;
  hideMobile?: boolean;
}[] = [
  { label: "GPS Locked", icon: MapPin, color: HERO.green, position: "bottom-[32%] left-[2%]", delay: 0 },
  {
    label: "Sound Alert Active",
    icon: Volume2,
    color: HERO.amber,
    position: "top-[38%] left-[0%]",
    delay: 0.3,
    hideMobile: true,
  },
  { label: "Deterrent Active", icon: Zap, color: HERO.cyan, position: "bottom-[42%] right-[2%]", delay: 0.6 },
  {
    label: "20s Clip Recorded",
    icon: Video,
    color: HERO.amber,
    position: "top-[6%] right-[2%]",
    delay: 0.9,
    hideMobile: true,
  },
  {
    label: "Zone Protected",
    icon: Shield,
    color: HERO.green,
    position: "top-[42%] right-[0%]",
    delay: 1.2,
    hideMobile: true,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-x-hidden pt-16 sm:min-h-screen"
      style={{ backgroundColor: HERO.bg }}
    >
      <GridBackground />
      {!compact && <FloatingParticles />}

      {/* Hero-specific atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 78% 45%, rgba(0, 217, 255, 0.09) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(22, 163, 74, 0.04) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px 40px rgba(5, 10, 20, 0.85)",
        }}
        aria-hidden
      />
      {/* Forest silhouette */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 w-full opacity-[0.12] sm:h-32"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#16A34A"
          d="M0 80 L0 50 Q80 20 160 45 Q240 10 320 40 Q400 15 480 38 Q560 8 640 35 Q720 18 800 42 Q880 12 960 36 Q1040 22 1120 48 L1200 35 L1200 80 Z"
        />
      </svg>

      <div className="container-custom relative w-full py-10 sm:py-14 lg:py-20">
        <div className="grid min-w-0 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-20">
          {/* Left column — copy & CTAs */}
          <div className="flex min-w-0 flex-col justify-center lg:pr-4 xl:pr-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-md"
              style={{
                borderColor: "rgba(0, 217, 255, 0.22)",
                background: "rgba(16, 26, 43, 0.55)",
              }}
            >
              <span
                className="h-2 w-2 animate-pulse rounded-full"
                style={{ background: HERO.cyan, boxShadow: `0 0 8px ${HERO.cyan}` }}
              />
              <span className="type-label tracking-[0.12em]" style={{ color: HERO.cyan }}>
                Wildlife Safety | Rural Innovation
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="type-display text-balance text-white"
            >
              AI-Powered Wildlife Safety for{" "}
              <span className="hero-gradient-text">Smarter Villages</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="type-hero-lead mt-5 sm:mt-6"
              style={{ color: HERO.silver }}
            >
              PLIGHT Innovation builds intelligent electronics, AI-enabled deterrent systems,
              and smart rural protection technologies designed to reduce human-animal conflict
              and protect communities.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-start gap-3 sm:gap-4"
            >
              <Link href="/solutions" className="group">
                <Button size="lg" className="shadow-lg shadow-cyan-500/20">
                  Explore Our Innovation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="secondary" size="lg">
                  View Impact
                </Button>
              </Link>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="type-body-sm mt-6 max-w-[520px]"
              style={{ color: HERO.muted }}
            >
              Field-ready systems for forest-fringe and rural safety deployments.
            </motion.p>

            {!compact && (
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="hero-stat-card flex h-full min-h-[96px] flex-col items-center justify-center gap-2 rounded-2xl border p-3.5 text-center backdrop-blur-md sm:min-h-[104px] sm:p-4"
                  style={{
                    background: "rgba(16, 26, 43, 0.72)",
                    borderColor: HERO.border,
                  }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "rgba(0, 217, 255, 0.1)" }}
                  >
                    <badge.icon className="h-4 w-4" style={{ color: HERO.cyan }} />
                  </div>
                  <span
                    className="type-caption font-semibold leading-tight"
                    style={{ color: HERO.silver }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
            )}
          </div>

          {/* Right column — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-0 items-center justify-center lg:pl-2 xl:pl-4"
          >
            {compact ? <HeroStaticVisual /> : <HeroMonitoringDashboard />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroStaticVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full min-w-0 max-w-[min(100%,420px)] overflow-hidden rounded-3xl border p-6 sm:max-w-[480px]"
      style={{
        background: `linear-gradient(160deg, ${HERO.surface} 0%, ${HERO.bg} 100%)`,
        borderColor: HERO.border,
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.45)",
      }}
    >
      <Image
        src={WILDLIFE_ASSETS.camera}
        alt="PLIGHT AI wildlife monitoring system — 360-degree field camera"
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 90vw, 480px"
        priority
      />
    </div>
  );
}

function HeroMonitoringDashboard() {
  return (
    <div
      className="relative mx-auto w-full min-w-0 max-w-[min(100%,480px)] sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px]"
      style={{
        filter: "drop-shadow(0 24px 64px rgba(0, 0, 0, 0.45))",
      }}
    >
      {/* Dashboard frame */}
      <div
        className="relative overflow-hidden rounded-[1.25rem] border p-5 sm:rounded-3xl sm:p-6"
        style={{
          background: `linear-gradient(160deg, ${HERO.surface} 0%, ${HERO.surfaceSoft} 50%, ${HERO.bg} 100%)`,
          borderColor: HERO.border,
          boxShadow: "0 0 0 1px rgba(0, 217, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Header bar */}
        <div className="mb-3 flex items-center justify-between border-b pb-3" style={{ borderColor: HERO.border }}>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-400/80" />
            <div className="h-2 w-2 rounded-full" style={{ background: HERO.green }} />
          </div>
          <span className="type-micro font-semibold uppercase tracking-[0.15em]" style={{ color: HERO.cyan }}>
            AI Wildlife Command
          </span>
          <div className="flex items-center gap-1">
            <Bell className="h-3 w-3" style={{ color: HERO.amber }} />
            <span className="type-micro font-medium" style={{ color: HERO.muted }}>
              Live
            </span>
          </div>
        </div>

        {/* Radar viewport */}
        <div className="relative mx-auto aspect-square w-full max-w-full overflow-hidden">
          {/* Sensor grid */}
          <div
            className="absolute inset-4 rounded-2xl opacity-40"
            style={{
              backgroundImage: `linear-gradient(${HERO.border} 1px, transparent 1px), linear-gradient(90deg, ${HERO.border} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          {/* Village blocks */}
          <div className="absolute bottom-[18%] left-1/2 flex -translate-x-1/2 gap-1.5 opacity-50" aria-hidden>
            {[28, 40, 34, 48, 32, 38, 30].map((h, i) => (
              <div
                key={i}
                className="w-5 rounded-t-sm sm:w-6"
                style={{
                  height: h,
                  background: "linear-gradient(to top, rgba(148, 163, 184, 0.25), rgba(148, 163, 184, 0.08))",
                }}
              />
            ))}
          </div>

          {/* Forest boundary arc */}
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 400 400"
            aria-hidden
          >
            <ellipse cx="200" cy="200" rx="170" ry="170" fill="none" stroke="#16A34A" strokeWidth="0.5" strokeDasharray="4 6" />
            <ellipse cx="200" cy="200" rx="120" ry="120" fill="none" stroke="rgba(0,217,255,0.3)" strokeWidth="0.5" />
          </svg>

          {/* Pulsing radar rings */}
          {[1, 2, 3, 4].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: 48 + ring * 44,
                height: 48 + ring * 44,
                borderColor: `rgba(0, 217, 255, ${0.28 - ring * 0.05})`,
              }}
              animate={{ opacity: [0.12, 0.4, 0.12], scale: [1, 1.015, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: ring * 0.35, ease: "easeInOut" }}
            />
          ))}

          {/* Rotating scan line */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-[1] origin-bottom"
            style={{ width: 2, height: "38%", marginLeft: -1, marginTop: "-38%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(to top, ${HERO.cyan}, transparent)`,
                opacity: 0.5,
              }}
            />
          </motion.div>

          {/* Center camera */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 hero-camera-float">
            <HeroCameraModule />
          </div>

          {/* Wildlife detection cards */}
          {detectionCards.map((card) => (
            <HeroDetectionCard key={card.id} card={card} />
          ))}

          {/* Floating chips */}
          {floatingChips.map((chip) => (
            <HeroFloatingChip key={chip.label} chip={chip} />
          ))}

          {/* Detection range */}
          <div
            className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-xl border px-4 py-2 text-center backdrop-blur-md"
            style={{ background: "rgba(16, 26, 43, 0.85)", borderColor: HERO.border }}
          >
            <p className="type-micro font-semibold uppercase tracking-wider" style={{ color: HERO.muted }}>
              Detection Range
            </p>
            <p className="font-heading type-body-sm font-bold" style={{ color: HERO.text }}>
              100 – 150 meters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCameraModule() {
  const [imgSrc, setImgSrc] = useState<string | null>(WILDLIFE_ASSETS.camera);

  const handleImageError = () => {
    if (imgSrc === WILDLIFE_ASSETS.camera) {
      setImgSrc(WILDLIFE_ASSETS.cameraAlt);
    } else {
      setImgSrc(null);
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-5 rounded-3xl blur-2xl"
        style={{ background: "rgba(0, 217, 255, 0.18)" }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <div
        className="relative flex h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-2xl border-2 sm:h-[108px] sm:w-[108px]"
        style={{
          background: "rgba(16, 26, 43, 0.9)",
          borderColor: "rgba(0, 217, 255, 0.5)",
          boxShadow: `0 0 40px rgba(0, 217, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt="360° AI surveillance camera"
            fill
            sizes="108px"
            className="object-cover object-center"
            onError={handleImageError}
            priority
          />
        ) : (
          <Camera className="h-10 w-10 sm:h-11 sm:w-11" style={{ color: HERO.cyan }} />
        )}
        <div
          className="absolute inset-x-0 bottom-0 flex items-center justify-center py-1.5"
          style={{
            background: "linear-gradient(to top, rgba(5, 10, 20, 0.95), transparent)",
          }}
        >
          <span
            className="text-[9px] font-bold uppercase sm:text-[10px]"
            style={{ color: HERO.cyan, letterSpacing: "0.15em" }}
          >
            360° AI
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroDetectionCard({
  card,
}: {
  card: (typeof detectionCards)[number];
}) {
  const [imgOk, setImgOk] = useState(true);
  const Icon = card.icon;

  const accent =
    card.color === "green"
      ? HERO.green
      : card.color === "amber"
        ? HERO.amber
        : HERO.cyan;

  return (
    <motion.div
      className={cn(
        "absolute z-20 w-[100px] rounded-xl border p-2 backdrop-blur-md sm:w-[118px] sm:p-2.5 lg:w-[132px]",
        card.position
      )}
      style={{
        background: "rgba(16, 26, 43, 0.88)",
        borderColor: HERO.border,
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: card.delay, ease: "easeInOut" }}
      whileHover={{ y: -6, boxShadow: `0 12px 32px rgba(0, 217, 255, 0.12)` }}
    >
      <div className="flex items-center gap-2">
        <div
          className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
          style={{ borderColor: HERO.border, background: `${accent}18` }}
        >
          {imgOk ? (
            <Image
              src={card.image}
              alt={card.label}
              width={36}
              height={36}
              className="h-full w-full object-cover opacity-90"
              onError={() => setImgOk(false)}
            />
          ) : (
            <Icon className="h-4 w-4" style={{ color: accent }} />
          )}
        </div>
        <div className="min-w-0">
          <p className="type-caption truncate font-semibold" style={{ color: HERO.text }}>
            {card.label}
          </p>
          <p className="text-xs font-bold tabular-nums" style={{ color: accent }}>
            {card.confidence}
          </p>
        </div>
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: accent }} />
        <span className="type-micro font-medium" style={{ color: HERO.muted }}>
          {card.status}
        </span>
      </div>
    </motion.div>
  );
}

function HeroFloatingChip({
  chip,
}: {
  chip: (typeof floatingChips)[number];
}) {
  const Icon = chip.icon;
  return (
    <motion.div
      className={cn(
        "absolute z-10 flex max-w-[130px] items-center gap-1.5 rounded-full border px-2 py-1 backdrop-blur-md sm:max-w-none",
        chip.position,
        chip.hideMobile && "hidden sm:flex"
      )}
      style={{
        background: "rgba(16, 26, 43, 0.9)",
        borderColor: HERO.border,
        animation: `hero-chip-float 3s ease-in-out ${chip.delay}s infinite`,
      }}
    >
      <Icon className="h-3 w-3 shrink-0" style={{ color: chip.color }} />
      <span className="type-micro truncate font-medium" style={{ color: HERO.muted }}>
        {chip.label}
      </span>
    </motion.div>
  );
}
