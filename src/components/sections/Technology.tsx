"use client";

import {
  Cpu,
  CircuitBoard,
  Wifi,
  Brain,
  Bell,
  Layers,
  Hammer,
  Factory,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  { icon: Cpu, title: "Electronics Engineering", desc: "Precision circuit design for field reliability" },
  { icon: CircuitBoard, title: "Embedded Systems", desc: "Firmware-driven intelligent automation" },
  { icon: Wifi, title: "IoT Hardware", desc: "Connected devices for rural safety networks" },
  { icon: Brain, title: "AI-Powered Automation", desc: "Smart detection and response systems" },
  { icon: Bell, title: "Smart Alert Systems", desc: "Instant multi-modal warning technology" },
  { icon: Layers, title: "PCB Design", desc: "Custom boards optimized for deployment" },
  { icon: Hammer, title: "Rapid Prototyping", desc: "Fast iteration from concept to field test" },
  { icon: Factory, title: "Field-Ready Manufacturing", desc: "Production built for rural conditions" },
];

export function Technology() {
  return (
    <section id="technology" className="section-padding relative">
      <div className="container-custom mx-auto">
        <AnimateIn>
          <SectionLabel>Engineering</SectionLabel>
          <SectionHeading
            title="Engineering Intelligence Into Rural Safety"
            subtitle="Deep-tech capabilities spanning electronics, embedded systems, IoT, and AI."
            align="center"
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.title} delay={i * 0.06} className="h-full">
              <div className="group glass-card relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all hover:border-cyan-400/30 lg:p-7">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-400/5 transition-all group-hover:bg-cyan-400/10" />
                <pillar.icon className="relative mb-4 h-8 w-8 text-cyan-400" />
                <h3 className="type-h4 relative text-white">
                  {pillar.title}
                </h3>
                <p className="type-body-sm relative mt-2 text-text-cool">{pillar.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
