"use client";

import {
  Cpu,
  CircuitBoard,
  Wifi,
  Brain,
  ScanEye,
  Layers,
  Hammer,
  Factory,
} from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  { icon: Cpu, title: "Electronics Engineering", desc: "Precision circuit design for high-reliability field deployments." },
  { icon: CircuitBoard, title: "Embedded Systems", desc: "Custom firmware and RTOS driving intelligent hardware automation." },
  { icon: Wifi, title: "IoT Architecture", desc: "Decentralized, connected nodes for large-scale telemetry networks." },
  { icon: Brain, title: "AI-Powered Automation", desc: "Integrating deep learning models with mechanical and digital control systems." },
  { icon: ScanEye, title: "Edge Vision Systems", desc: "Deploying lightweight, highly accurate visual models on microcontrollers." },
  { icon: Layers, title: "PCB Design", desc: "Custom printed circuit boards optimized for extreme environments and space constraints." },
  { icon: Hammer, title: "Rapid Prototyping", desc: "Accelerated hardware iterations transitioning complex concepts into functional field tests." },
  { icon: Factory, title: "Commercial Manufacturing", desc: "Scaling production-ready hardware for enterprise and B2B deployment." },
];

export function Technology() {
  return (
    <section id="technology" className="section-padding relative overflow-hidden">
      <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} />
      <div className="container-custom relative z-10 mx-auto">
        <AnimateIn>
          <SectionLabel>Engineering</SectionLabel>
          <SectionHeading
            title="Architecting Intelligence for the Physical World"
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
                <h3 className="type-h4 relative text-white">{pillar.title}</h3>
                <p className="type-body-sm relative mt-2 text-text-cool">{pillar.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
