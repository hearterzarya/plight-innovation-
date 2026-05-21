"use client";

import {
  ScanEye,
  Radio,
  Network,
  Gauge,
  Timer,
  Cpu,
  Factory,
} from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const products = [
  {
    icon: ScanEye,
    title: "Edge AI Vision Systems",
    description:
      "Integrating high-performance neural accelerators and custom object detection pipelines for real-time, zero-latency analysis.",
    useCase: "Industrial & Environmental Monitoring",
    tech: "Neural Accelerators, Custom AI Pipelines",
    area: "Commercial Scale",
    featured: true,
    badge: "Flagship",
  },
  {
    icon: Radio,
    title: "Autonomous Telemetry Nodes",
    description:
      "Solar-powered edge nodes with robust microcontrollers and secure 4G/LTE connectivity for off-grid execution.",
    useCase: "Remote Data Acquisition",
    tech: "Cellular (4G/LTE), LoRa, Custom PCBs",
    area: "Off-Grid Environments",
    featured: false,
    badge: "Field-Tested",
  },
  {
    icon: Network,
    title: "Decentralized IoT Networks",
    description: "Multi-node synchronization across large-scale telemetry infrastructure.",
    useCase: "Multi-Node Synchronization",
    tech: "Wireless Mesh, Edge Computing",
    area: "Large-Scale Infrastructure",
  },
  {
    icon: Gauge,
    title: "Real-Time Inference Engines",
    description: "Zero-latency on-device decision making for mission-critical operations.",
    useCase: "Zero-Latency Decision Making",
    tech: "Deep Learning, Microcontrollers",
    area: "Mission-Critical Operations",
  },
  {
    icon: Timer,
    title: "Commercial Automation Devices",
    description:
      "Programmable WiFi logic, digital timers, and mass-market electronics for consumer and B2B retail.",
    useCase: "Mass Market Electronics",
    tech: "Programmable WiFi Logic & Digital Timers",
    area: "Consumer & B2B Retail",
  },
  {
    icon: Cpu,
    title: "Custom Hardware Integration",
    description: "Embedded systems engineering for specialized sensor deployment and enterprise projects.",
    useCase: "Specialized Sensor Deployment",
    tech: "Embedded Systems Engineering",
    area: "Enterprise Custom Projects",
  },
  {
    icon: Factory,
    title: "Production & Manufacturing",
    description: "Full-stack hardware development from prototype to commercial scale for global B2B partners.",
    useCase: "Prototype to Commercial Scale",
    tech: "Full-Stack Hardware Development",
    area: "Global B2B Partners",
  },
];

export function Products() {
  return (
    <section className="section-padding relative overflow-hidden">
      <PcbCircuitBackground corner="left" intensity="subtle" vignette={false} />
      <div className="container-custom relative z-10 mx-auto">
        <AnimateIn>
          <SectionLabel>Deployments</SectionLabel>
          <SectionHeading
            title="Scalable Edge Infrastructure for the Physical World"
            subtitle="From custom programmable automation to advanced neural surveillance and remote data acquisition."
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
                <h3 className="type-h4 text-white">{product.title}</h3>
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
