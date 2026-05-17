"use client";

import { X, Check } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const traditional = [
  "Manual warnings and delayed response",
  "No automated detection systems",
  "Constant fear among villagers",
  "Limited scalability across regions",
  "No integrated alert technology",
];

const plight = [
  "AI-powered 360° wildlife surveillance",
  "Real-time video alerts to forest authorities",
  "Automatic deterrent lights and sound response",
  "100+ village deployment proven",
  "Field-tested at Jim Corbett National Park",
];

const reasons = [
  "Built from real field problems in Bijnor",
  "AI Wildlife Monitoring tested at Jim Corbett",
  "Designed for Indian rural & forest conditions",
  "Engineering-led product development",
  "Uttarakhand & UP Forest Department partnerships",
  "Human-first innovation approach",
];

export function WhyPlight() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-bg-midnight/30" />
      <div className="container-custom relative mx-auto">
        <AnimateIn>
          <SectionLabel>Why Us</SectionLabel>
          <SectionHeading title="Why PLIGHT Innovation?" align="center" />
        </AnimateIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimateIn delay={0.1}>
            <ComparisonCard
              title="Traditional Approach"
              items={traditional}
              type="negative"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <ComparisonCard
              title="PLIGHT Innovation"
              items={plight}
              type="positive"
            />
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3} className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3"
              >
                <Check className="h-4 w-4 shrink-0 text-green-400" />
                <span className="text-sm text-text-silver">{reason}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ComparisonCard({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: "negative" | "positive";
}) {
  const isPositive = type === "positive";
  return (
    <div
      className={`rounded-2xl border p-8 ${
        isPositive
          ? "border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-600/5"
          : "border-white/5 bg-bg-graphite/50"
      }`}
    >
      <h3
        className={`type-h3 ${
          isPositive ? "text-cyan-400" : "text-text-cool"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {isPositive ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
            )}
            <span className="text-sm text-text-cool">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
