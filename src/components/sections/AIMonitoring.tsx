"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Camera,
  PawPrint,
  Flame,
  MapPin,
  Smartphone,
  Zap,
  Shield,
  Target,
  Bell,
  Video,
  ScanEye,
  Radio,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

/* ─── Design tokens (AI detection panel) ─── */
const AI = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  border: "rgba(203, 213, 225, 0.14)",
  cyan: "#00D9FF",
  amber: "#F59E0B",
  green: "#16A34A",
  fire: "#F97316",
  text: "#F8FAFC",
  muted: "#94A3B8",
} as const;

const WILDLIFE_IMAGES = {
  camera: "/images/wildlife/camera.png",
  elephant: "/images/wildlife/elephant.png",
  tiger: "/images/wildlife/tiger.png",
  leopard: "/images/wildlife/leopard.png",
  forestFire: "/images/wildlife/forest-fire.png",
} as const;

/* ─── Radar animal detection cards ─── */
const radarAnimals: {
  id: string;
  name: string;
  confidence: string;
  status: string;
  icon: LucideIcon;
  dotColor: string;
  iconBg: string;
  position: string;
  floatDelay: number;
  image?: string;
}[] = [
  {
    id: "elephant",
    name: "Elephant",
    confidence: "94%",
    status: "Monitoring",
    icon: PawPrint,
    dotColor: AI.amber,
    iconBg: "rgba(245, 158, 11, 0.15)",
    position: "bottom-[14%] left-[2%] sm:left-[4%]",
    floatDelay: 0,
    image: WILDLIFE_IMAGES.elephant,
  },
  {
    id: "tiger",
    name: "Tiger",
    confidence: "91%",
    status: "Detection Ready",
    icon: Target,
    dotColor: AI.amber,
    iconBg: "rgba(249, 115, 22, 0.15)",
    position: "top-[10%] left-[2%] sm:left-[6%]",
    floatDelay: 0.6,
    image: WILDLIFE_IMAGES.tiger,
  },
  {
    id: "leopard",
    name: "Leopard",
    confidence: "89%",
    status: "Active",
    icon: ScanEye,
    dotColor: AI.cyan,
    iconBg: "rgba(0, 217, 255, 0.12)",
    position: "top-[12%] right-[2%] sm:right-[4%]",
    floatDelay: 1.2,
    image: WILDLIFE_IMAGES.leopard,
  },
];

/* ─── Right column species feature pills ─── */
const speciesFeatures: {
  id: string;
  title: string;
  micro: string;
  icon: LucideIcon;
  accent: string;
  iconColor: string;
  image?: string;
}[] = [
  {
    id: "elephants",
    title: "Elephants",
    micro: "Large movement detection",
    icon: PawPrint,
    accent: "rgba(245, 158, 11, 0.12)",
    iconColor: AI.amber,
    image: WILDLIFE_IMAGES.elephant,
  },
  {
    id: "tigers",
    title: "Tigers",
    micro: "Predator activity monitoring",
    icon: Target,
    accent: "rgba(249, 115, 22, 0.12)",
    iconColor: "#FB923C",
    image: WILDLIFE_IMAGES.tiger,
  },
  {
    id: "leopards",
    title: "Leopards",
    micro: "Village-edge alerting",
    icon: ScanEye,
    accent: "rgba(0, 217, 255, 0.1)",
    iconColor: AI.cyan,
    image: WILDLIFE_IMAGES.leopard,
  },
  {
    id: "forest-fire",
    title: "Forest Fire",
    micro: "Early visual risk signals",
    icon: Flame,
    accent: "rgba(249, 115, 22, 0.14)",
    iconColor: AI.fire,
    image: WILDLIFE_IMAGES.forestFire,
  },
];

const floatingChips: {
  label: string;
  icon: LucideIcon;
  color: string;
  position: string;
}[] = [
  {
    label: "GPS Locked",
    icon: MapPin,
    color: AI.green,
    position: "bottom-[28%] left-[1%] sm:left-[3%]",
  },
  {
    label: "Deterrent Active",
    icon: Zap,
    color: AI.cyan,
    position: "left-[0%] top-[42%] sm:left-[1%]",
  },
  {
    label: "Alert Sent",
    icon: Smartphone,
    color: AI.amber,
    position: "top-[4%] right-[0%] sm:right-[2%]",
  },
  {
    label: "20s Clip Recorded",
    icon: Video,
    color: AI.amber,
    position: "bottom-[32%] right-[0%] sm:right-[2%]",
  },
];

const alertData = [
  { label: "Animal Type / Category", example: "Leopard Detected" },
  { label: "Detection Time & Date", example: "Real-time timestamp" },
  { label: "Confidence Level", example: "94.2% accuracy" },
  { label: "Alert Notification", example: "Instant mobile push" },
  { label: "Location Information", example: "GPS coordinates" },
];

const capabilities = [
  {
    icon: Camera,
    title: "360° Smart Surveillance",
    desc: "Continuous monitoring across 100–150 meter range in all directions.",
  },
  {
    icon: Brain,
    title: "AI Species Recognition",
    desc: "Object detection trained for high-risk wildlife and fire incidents.",
  },
  {
    icon: Zap,
    title: "Integrated Deterrent System",
    desc: "Smart warning lights and sound alerts from the Wildlife Repellent Device.",
  },
  {
    icon: Video,
    title: "20-Second Video Evidence",
    desc: "Auto-recorded clips sent instantly to authorized mobile devices.",
  },
  {
    icon: Smartphone,
    title: "Real-Time Mobile Alerts",
    desc: "Notifications to monitoring teams and senior forest authorities.",
  },
  {
    icon: Shield,
    title: "Proactive Protection",
    desc: "Identify threats before incidents — not just react after danger arrives.",
  },
];

export function AIMonitoring() {
  return (
    <section id="ai-monitoring" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-midnight/60 to-bg-deep" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[100px]" />

      <div className="container-custom relative mx-auto">
        <AnimateIn className="text-center max-w-4xl mx-auto">
          <SectionLabel>Next-Generation Innovation</SectionLabel>
          <h2 className="type-h2 mt-4 text-white">
            AI Wildlife Monitoring System
          </h2>
          <p className="type-accent-line mt-3 text-cyan-400/90">
            From village alerts to intelligent forest surveillance
          </p>
          <p className="type-lead mx-auto mt-5 max-w-[720px]">
            After deploying wildlife safety devices across 100+ villages in Bijnor, PLIGHT
            Innovation advanced into Artificial Intelligence-powered real-time monitoring —
            identifying dangerous wildlife and forest fire threats before incidents occur.
          </p>
        </AnimateIn>

        {/* Premium detection panel */}
        <div
          className="mt-16 overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-10"
          style={{
            backgroundColor: AI.bg,
            borderColor: AI.border,
          }}
        >
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <AnimateIn delay={0.1} className="order-1">
              <DetectionRadarVisual />
            </AnimateIn>

            <AnimateIn delay={0.2} className="order-2">
              <SpeciesFeaturePanel />
            </AnimateIn>
          </div>
        </div>

        {/* Alert data payload */}
        <AnimateIn delay={0.15} className="mt-20">
          <h3 className="type-h3 text-center text-white">
            Real-Time Intelligence Delivered
          </h3>
          <p className="type-body-sm mx-auto mt-3 max-w-[720px] text-center text-text-cool">
            Every detection triggers instant mobile alerts with critical field data
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {alertData.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 transition-all hover:border-cyan-400/25"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Bell className="h-4 w-4 text-cyan-400" />
                </div>
                <p className="type-label text-text-cool">{item.label}</p>
                <p className="type-body-sm mt-1 font-medium text-white">{item.example}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <AnimateIn key={cap.title} delay={i * 0.06}>
              <div className="glass-card h-full rounded-xl p-6 transition-all hover:border-cyan-400/20">
                <cap.icon className="mb-3 h-7 w-7 text-cyan-400" />
                <h4 className="type-h4 text-white">{cap.title}</h4>
                <p className="type-body-sm mt-2 text-text-cool">{cap.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2} className="mt-20">
          <p className="type-accent-line text-center text-text-cool">
            Building a smarter ecosystem for wildlife protection, rural safety, and
            AI-powered environmental monitoring across India.{" "}
            <a
              href="/field-trials"
              className="text-cyan-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              View field trial results
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Right column: species pills + intelligent response ─── */
function SpeciesFeaturePanel() {
  return (
    <div className="flex flex-col gap-6">
      <p className="leading-relaxed" style={{ color: AI.muted }}>
        The system combines advanced AI with a 360-degree smart surveillance camera,
        continuously monitoring surrounding areas within approximately{" "}
        <span className="font-semibold" style={{ color: AI.text }}>
          100 to 150 meters
        </span>
        . Unlike traditional systems, it detects, responds, and alerts — integrating all
        major features of the Wildlife Repellent Device.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {speciesFeatures.map((species) => (
          <SpeciesPillCard key={species.id} species={species} />
        ))}
      </div>

      <IntelligentResponseCard />
    </div>
  );
}

function SpeciesPillCard({
  species,
}: {
  species: (typeof speciesFeatures)[number];
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex items-center gap-3 rounded-2xl border p-4 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,217,255,0.08)]"
      style={{
        background: AI.card,
        borderColor: AI.border,
      }}
    >
      <SpeciesIconBox species={species} />
      <div className="min-w-0 flex-1">
        <p
          className="font-[family-name:var(--font-sora)] text-sm font-semibold"
          style={{ color: AI.text }}
        >
          {species.title}
        </p>
        <p className="mt-0.5 text-xs leading-snug" style={{ color: AI.muted }}>
          {species.micro}
        </p>
      </div>
    </motion.div>
  );
}

function SpeciesIconBox({
  species,
}: {
  species: (typeof speciesFeatures)[number];
}) {
  const Icon = species.icon;
  const [useImage, setUseImage] = useState(true);

  return (
    <div
      className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all group-hover:scale-105"
      style={{
        background: species.accent,
        borderColor: AI.border,
      }}
    >
      {species.image && useImage ? (
        <Image
          src={species.image}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover"
          onError={() => setUseImage(false)}
        />
      ) : (
        <Icon className="h-5 w-5" style={{ color: species.iconColor }} />
      )}
    </div>
  );
}

function IntelligentResponseCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-5 sm:p-6"
      style={{
        background: `linear-gradient(135deg, rgba(16, 26, 43, 0.9) 0%, rgba(7, 17, 31, 0.85) 100%)`,
        borderColor: "rgba(0, 217, 255, 0.25)",
        boxShadow: "0 0 40px rgba(0, 217, 255, 0.06)",
      }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-full"
        style={{ background: `linear-gradient(to bottom, ${AI.cyan}, ${AI.green})` }}
      />
      <div className="flex items-start gap-3 pl-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "rgba(0, 217, 255, 0.12)" }}
        >
          <Radio className="h-5 w-5" style={{ color: AI.cyan }} />
        </div>
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: AI.cyan }}
          >
            Intelligent Response
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: AI.muted }}>
            On detection, the system activates deterrent lights and sound alerts, records a
            20-second video clip, and sends it with full metadata to authorized forest
            authorities and monitoring teams.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Lights + Sound", "20s Video", "Mobile Alert"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
                style={{
                  borderColor: AI.border,
                  color: AI.muted,
                  background: "rgba(0, 217, 255, 0.06)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CameraRadarCore() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <>
      {imgOk ? (
        <Image
          src={WILDLIFE_IMAGES.camera}
          alt="360° AI surveillance camera"
          fill
          sizes="112px"
          className="object-cover object-center"
          onError={() => setImgOk(false)}
          priority
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Camera className="h-9 w-9 sm:h-10 sm:w-10" style={{ color: AI.cyan }} />
        </div>
      )}
      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-center py-1.5"
        style={{
          background: "linear-gradient(to top, rgba(5, 10, 20, 0.95), transparent)",
        }}
      >
        <span
          className="text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]"
          style={{ color: AI.cyan }}
        >
          360° AI
        </span>
      </div>
    </>
  );
}

/* ─── Left column: AI radar visual ─── */
function DetectionRadarVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-h-[420px] max-w-[420px] sm:max-h-[460px] sm:max-w-[460px]"
      style={{ background: `radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.04) 0%, transparent 65%)` }}
    >
      {/* Pulsing radar rings */}
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 56 + ring * 52,
            height: 56 + ring * 52,
            borderColor: `rgba(0, 217, 255, ${0.22 - ring * 0.04})`,
          }}
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [1, 1.02, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: ring * 0.35, ease: "easeInOut" }}
        />
      ))}

      {/* Rotating scan line */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-[1] origin-bottom"
        style={{ width: 2, height: "42%", marginLeft: -1, marginTop: "-42%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `linear-gradient(to top, ${AI.cyan}, transparent)`,
            opacity: 0.55,
          }}
        />
      </motion.div>

      {/* Center 360° camera module */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute -inset-4 rounded-2xl blur-xl"
          style={{ background: "rgba(0, 217, 255, 0.15)" }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <div
          className="relative h-[100px] w-[100px] overflow-hidden rounded-2xl border-2 sm:h-[112px] sm:w-[112px]"
          style={{
            background: AI.card,
            borderColor: "rgba(0, 217, 255, 0.45)",
            boxShadow: `0 0 32px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)`,
          }}
        >
          <CameraRadarCore />
        </div>
      </div>

      {/* Animal detection cards */}
      {radarAnimals.map((animal) => (
        <RadarAnimalCard key={animal.id} animal={animal} />
      ))}

      {/* Floating status chips */}
      {floatingChips.map((chip) => (
        <FloatingChip key={chip.label} chip={chip} />
      ))}

      {/* Detection range */}
      <div
        className="absolute bottom-[4%] left-1/2 z-10 -translate-x-1/2 rounded-xl border px-4 py-2 text-center backdrop-blur-sm"
        style={{ background: AI.card, borderColor: AI.border }}
      >
        <p className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: AI.muted }}>
          Detection Range
        </p>
        <p
          className="font-[family-name:var(--font-sora)] text-sm font-bold"
          style={{ color: AI.text }}
        >
          100 – 150 meters
        </p>
      </div>
    </div>
  );
}

function RadarAnimalCard({ animal }: { animal: (typeof radarAnimals)[number] }) {
  const Icon = animal.icon;
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.div
      className={cn(
        "absolute z-20 w-[128px] rounded-xl border backdrop-blur-md sm:w-[140px]",
        animal.position
      )}
      style={{
        background: AI.card,
        borderColor: AI.border,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
      }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: animal.floatDelay, ease: "easeInOut" }}
      whileHover={{
        y: -6,
        boxShadow: `0 12px 36px rgba(0, 217, 255, 0.12), 0 0 0 1px rgba(0, 217, 255, 0.2)`,
      }}
    >
      <div className="p-3">
        <div className="flex items-start gap-2.5">
          <div
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
            style={{ background: animal.iconBg, borderColor: AI.border }}
          >
            {animal.image && imgOk ? (
              <Image
                src={animal.image}
                alt={animal.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <Icon className="h-5 w-5" style={{ color: animal.dotColor }} />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold" style={{ color: AI.text }}>
              {animal.name}
            </p>
            <p
              className="font-[family-name:var(--font-sora)] text-sm font-bold tabular-nums"
              style={{ color: AI.cyan }}
            >
              {animal.confidence}
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full animate-pulse"
            style={{ background: animal.dotColor }}
          />
          <span className="text-[10px] font-medium" style={{ color: AI.muted }}>
            {animal.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingChip({ chip }: { chip: (typeof floatingChips)[number] }) {
  const Icon = chip.icon;
  return (
    <motion.div
      className={cn("absolute z-10 flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-md", chip.position)}
      style={{ background: AI.card, borderColor: AI.border }}
      animate={{ opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon className="h-3 w-3 shrink-0" style={{ color: chip.color }} />
      <span className="whitespace-nowrap text-[9px] font-medium sm:text-[10px]" style={{ color: AI.muted }}>
        {chip.label}
      </span>
    </motion.div>
  );
}
