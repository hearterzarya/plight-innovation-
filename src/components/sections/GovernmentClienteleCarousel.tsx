"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Shield, TreePine, Radio, Landmark } from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { cn } from "@/lib/utils";

const GOV = {
  bg: "#050A14",
  card: "rgba(16, 26, 43, 0.72)",
  cardInner: "rgba(255, 255, 255, 0.035)",
  border: "rgba(203, 213, 225, 0.14)",
  text: "#F8FAFC",
  muted: "#94A3B8",
  cyan: "#00D9FF",
  blue: "#2563EB",
  green: "#16A34A",
  amber: "#F59E0B",
} as const;

export type ClienteleItem = {
  id: string;
  name: string;
  logo: string;
  tag: string;
  initials: string;
  fallbackIcon: typeof Building2;
};

export const clienteleLogos: ClienteleItem[] = [
  {
    id: "up-gov",
    name: "Uttar Pradesh Government",
    logo: "/images/clientele/uttar-pradesh-government.png",
    tag: "State Project",
    initials: "UP",
    fallbackIcon: Landmark,
  },
  {
    id: "uk-gov",
    name: "Uttarakhand Government",
    logo: "/images/clientele/uttarakhand-government.png",
    tag: "State Project",
    initials: "UK",
    fallbackIcon: Landmark,
  },
  {
    id: "forest-dept",
    name: "Forest Edge Deployment",
    logo: "/images/clientele/forest-department.png",
    tag: "Field Infrastructure",
    initials: "FE",
    fallbackIcon: TreePine,
  },
  {
    id: "district-admin",
    name: "Public Safety Technology",
    logo: "/images/clientele/district-administration.png",
    tag: "Public Sector",
    initials: "PS",
    fallbackIcon: Building2,
  },
  {
    id: "wildlife-div",
    name: "Environmental Monitoring",
    logo: "/images/clientele/wildlife-division.png",
    tag: "Edge AI",
    initials: "EM",
    fallbackIcon: Shield,
  },
  {
    id: "public-sector",
    name: "Rural Safety Infrastructure",
    logo: "/images/clientele/public-sector.png",
    tag: "IoT Infrastructure",
    initials: "RS",
    fallbackIcon: Radio,
  },
];

const trustStrip = [
  "Built for extreme environments",
  "Designed for field deployment",
  "Edge AI + IoT infrastructure",
];

export function GovernmentClienteleCarousel() {
  const marqueeItems = [...clienteleLogos, ...clienteleLogos];

  return (
    <section
      id="government-experience"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: GOV.bg }}
    >
      <PcbCircuitBackground corner="left" intensity="subtle" vignette={false} className="z-[1]" />

      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0, 217, 255, 0.08) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full"
        style={{ background: GOV.cyan, boxShadow: `0 0 12px ${GOV.cyan}` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[18%] bottom-[25%] h-1 w-1 rounded-full opacity-60"
        style={{ background: GOV.blue, boxShadow: `0 0 10px ${GOV.blue}` }}
        aria-hidden
      />

      <div className="container-custom relative z-10 mx-auto">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <span
            className="type-label inline-block rounded-full border px-4 py-1 tracking-[0.2em]"
            style={{
              borderColor: "rgba(37, 99, 235, 0.35)",
              background: "rgba(37, 99, 235, 0.1)",
              color: GOV.cyan,
            }}
          >
            Public Sector Collaboration
          </span>
          <h2
            className="type-h2 mt-5 text-white"
            style={{ color: GOV.text }}
          >
            Government Project Experience
          </h2>
          <p className="type-lead mx-auto mt-5 max-w-[720px]" style={{ color: GOV.muted }}>
            PLIGHT has delivered technology-led edge deployments with government departments and
            state-level stakeholders—building production-ready embedded AI, telemetry, and field
            monitoring infrastructure for demanding real-world environments.
          </p>
        </AnimateIn>

        {/* Carousel */}
        <AnimateIn delay={0.12} className="relative mt-14 max-w-full overflow-hidden lg:mt-16">
          <div
            className="clientele-fade-left pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 lg:w-32"
            aria-hidden
          />
          <div
            className="clientele-fade-right pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 lg:w-32"
            aria-hidden
          />

          <div className="clientele-marquee group overflow-hidden">
            <div className="clientele-marquee-track flex w-max gap-4 sm:gap-5">
              {marqueeItems.map((item, index) => (
                <ClienteleLogoCard key={`${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Reduced motion: static grid */}
          <div className="clientele-static-grid mt-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clienteleLogos.map((item) => (
              <ClienteleLogoCard key={item.id} item={item} staticLayout />
            ))}
          </div>
        </AnimateIn>

        {/* Trust strip */}
        <AnimateIn delay={0.2} className="mt-12">
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border px-6 py-4 text-center sm:gap-x-8"
            style={{
              background: GOV.card,
              borderColor: GOV.border,
            }}
          >
            {trustStrip.map((text, i) => (
              <span key={text} className="inline-flex items-center gap-2 sm:gap-4">
                {i > 0 && (
                  <span className="hidden sm:inline" style={{ color: GOV.muted }} aria-hidden>
                    •
                  </span>
                )}
                <span className="text-xs font-medium sm:text-sm" style={{ color: GOV.muted }}>
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

function ClienteleLogoCard({
  item,
  staticLayout = false,
}: {
  item: ClienteleItem;
  staticLayout?: boolean;
}) {
  const [imgOk, setImgOk] = useState(true);
  const FallbackIcon = item.fallbackIcon;

  return (
    <article
      className={cn(
        "clientele-logo-card group/card flex shrink-0 flex-col items-center justify-between rounded-3xl border p-5 backdrop-blur-[18px] transition-all duration-300",
        staticLayout
          ? "w-full min-h-[130px]"
          : "h-[120px] w-[180px] sm:h-[140px] sm:w-[240px] lg:w-[260px]"
      )}
      style={{
        background: GOV.cardInner,
        borderColor: GOV.border,
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
      }}
    >
      <span
        className="self-start rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
        style={{
          borderColor: "rgba(37, 99, 235, 0.25)",
          background: "rgba(37, 99, 235, 0.08)",
          color: GOV.blue,
        }}
      >
        {item.tag}
      </span>

      <div className="relative flex flex-1 flex-col items-center justify-center py-2">
        {imgOk ? (
          <Image
            src={item.logo}
            alt={`${item.name} emblem`}
            width={120}
            height={56}
            className="max-h-14 w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover/card:opacity-100 group-hover/card:grayscale-0"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover/card:border-cyan-400/30"
            style={{
              background: "rgba(0, 217, 255, 0.06)",
              borderColor: GOV.border,
            }}
          >
            <FallbackIcon className="h-7 w-7 opacity-70" style={{ color: GOV.cyan }} />
            <span
              className="absolute -bottom-1 text-[10px] font-bold tracking-widest"
              style={{ color: GOV.muted }}
            >
              {item.initials}
            </span>
          </div>
        )}
      </div>

      <p
        className="type-caption mt-1 line-clamp-2 text-center font-medium leading-tight"
        style={{ color: GOV.text }}
      >
        {item.name}
      </p>
    </article>
  );
}
