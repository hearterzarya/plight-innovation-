"use client";

import {
  Shield,
  Radio,
  Brain,
  Lightbulb,
  Volume2,
  Wrench,
  Camera,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const products = [
  {
    icon: Camera,
    title: "AI Wildlife Monitoring System",
    description:
      "360° AI surveillance with species recognition, 20-second video alerts, and integrated deterrent response. Field-tested at Jim Corbett National Park.",
    useCase: "Forest-border surveillance & national parks",
    tech: "AI object detection, 360° camera, mobile alerts",
    area: "Jim Corbett, Uttarakhand & UP",
    featured: true,
    badge: "Latest Innovation",
  },
  {
    icon: Shield,
    title: "Wildlife Repellent Device",
    description:
      "Flagship smart deterrent with flashing lights and sound alerts — deployed across 100+ villages in Bijnor.",
    useCase: "Village perimeter & residential safety",
    tech: "Embedded systems, multi-sensor activation",
    area: "Bijnor, Uttar Pradesh",
    featured: false,
    badge: "100+ Villages",
  },
  {
    icon: Radio,
    title: "Smart Rural Protection System",
    description: "Networked safety infrastructure for coordinated village-wide protection.",
    useCase: "Multi-village deployment",
    tech: "IoT, wireless mesh",
    area: "Rural UP",
  },
  {
    icon: Brain,
    title: "AI-Based Wildlife Alert System",
    description: "Intelligent detection and automated alert distribution to residents.",
    useCase: "High-risk wildlife corridors",
    tech: "AI, edge computing",
    area: "Forest-adjacent villages",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Light Deterrent System",
    description: "Fox Light evolution — multi-color high-intensity deterrent lighting.",
    useCase: "Perimeter deterrence",
    tech: "Electronics, optics",
    area: "Agricultural zones",
  },
  {
    icon: Volume2,
    title: "Sound Alert Warning Device",
    description: "Integrated audio warning system for immediate community notification.",
    useCase: "Night-time alert coverage",
    tech: "Audio engineering, automation",
    area: "Residential clusters",
  },
  {
    icon: Wrench,
    title: "Custom Electronics & IoT Solutions",
    description: "Bespoke hardware development for government, NGO, and CSR partners.",
    useCase: "Specialized deployments",
    tech: "Full-stack hardware dev",
    area: "Pan-India",
  },
];

export function Products() {
  return (
    <section className="section-padding relative">
      <div className="container-custom mx-auto">
        <AnimateIn>
          <SectionLabel>Solutions</SectionLabel>
          <SectionHeading
            title="Smart Protection Systems for Safer Communities"
            subtitle="From village deterrent devices to AI-powered forest surveillance."
            align="center"
          />
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <AnimateIn key={product.title} delay={i * 0.08}>
              <div
                className={`glass-card group relative h-full rounded-2xl p-6 transition-all hover:border-cyan-400/25 ${
                  product.featured
                    ? "border-cyan-400/30 ring-1 ring-cyan-400/20 md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                {"badge" in product && product.badge && (
                  <span
                    className={`absolute -top-3 left-6 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      product.featured
                        ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-bg-deep"
                        : "border border-green-400/30 bg-green-400/10 text-green-400"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <product.icon
                  className={`mb-4 h-8 w-8 ${
                    product.featured
                      ? "text-cyan-400"
                      : "text-text-cool group-hover:text-cyan-400"
                  } transition-colors`}
                />
                <h3 className="type-h4 text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-cool">
                  {product.description}
                </p>
                <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
                  <MetaRow label="Use Case" value={product.useCase} />
                  <MetaRow label="Technology" value={product.tech} />
                  <MetaRow label="Deployment" value={product.area} />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="shrink-0 font-medium text-cyan-400/80">{label}:</span>
      <span className="text-text-cool">{value}</span>
    </div>
  );
}
