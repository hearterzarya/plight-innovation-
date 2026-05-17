"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function Vision() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-midnight via-bg-deep to-bg-midnight" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container-custom relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn>
            <SectionLabel>Vision</SectionLabel>
            <h2 className="type-h2 mt-4 text-white">
              Building the Future of Rural Safety Technology
            </h2>
            <p className="type-lead mt-6 max-w-[720px]">
              PLIGHT Innovation is building a smarter ecosystem for wildlife protection,
              rural safety, and AI-powered environmental monitoring — from village deterrent
              devices across Bijnor to intelligent 360° surveillance tested at Jim Corbett
              and deployed with forest departments across Uttarakhand and Uttar Pradesh.
            </p>
            <p className="type-accent-line mt-4 text-cyan-400/80">
              Where deep-tech meets human safety at the village level.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <VisionMap />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function VisionMap() {
  const nodes = [
    { x: 30, y: 35, label: "Bijnor" },
    { x: 45, y: 50, label: "" },
    { x: 60, y: 30, label: "" },
    { x: 55, y: 65, label: "" },
    { x: 70, y: 45, label: "" },
    { x: 40, y: 70, label: "" },
  ];

  return (
    <div className="glass-card relative aspect-square max-w-md overflow-hidden rounded-2xl p-6 mx-auto lg:mx-0 lg:ml-auto">
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
        Smart Village Network — India
      </p>
      <svg viewBox="0 0 100 100" className="mt-4 h-full w-full">
        <path
          d="M20 60 Q35 20 50 40 Q65 15 80 50 Q70 80 50 75 Q30 90 20 60Z"
          fill="rgba(0,229,255,0.05)"
          stroke="rgba(0,229,255,0.2)"
          strokeWidth="0.5"
        />
        {nodes.map((n, i) => (
          <g key={i}>
            {i > 0 && (
              <line
                x1={nodes[0].x}
                y1={nodes[0].y}
                x2={n.x}
                y2={n.y}
                stroke="rgba(0,229,255,0.15)"
                strokeWidth="0.3"
                strokeDasharray="2,2"
              />
            )}
            <circle cx={n.x} cy={n.y} r={i === 0 ? 4 : 2.5} fill={i === 0 ? "#00E5FF" : "rgba(0,229,255,0.5)"}>
              {i === 0 && (
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
              )}
            </circle>
          </g>
        ))}
        <text x={30} y={32} fill="#00E5FF" fontSize="4" fontWeight="bold">
          Bijnor HQ
        </text>
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-text-cool">
        <span>Wildlife Corridors</span>
        <span>Safety Zones</span>
        <span>AI Signals</span>
      </div>
    </div>
  );
}
