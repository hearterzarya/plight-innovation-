import { MapPin, Shield, Cpu, Radio, type LucideIcon } from "lucide-react";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const stats: {
  icon: LucideIcon;
  value: string;
  label: string;
}[] = [
  { icon: MapPin, value: "24/7", label: "Autonomous Operations" },
  { icon: Shield, value: "Field-Tested", label: "Industrial-Grade Embedded" },
  { icon: Cpu, value: "Edge AI", label: "Real-Time Neural Vision" },
  { icon: Radio, value: "IoT Ready", label: "Secure 4G & GPS Telemetry" },
];

export function HomeTrustStats() {
  return (
    <Section
      id="trust-stats"
      className="overflow-hidden border-y border-cyan-400/10 bg-[#050A14]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#050A14] via-[#060d18] to-[#07111f]"
        aria-hidden
      />
      <PcbCircuitBackground corner="left" intensity="strong" glow vignette className="z-[1]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <PremiumTrustStatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PremiumTrustStatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-[136px] flex-col items-center justify-center",
        "rounded-2xl border border-cyan-400/20 p-4 text-center sm:min-h-[152px] sm:p-5 lg:min-h-[160px] lg:p-6",
        "bg-[rgba(12,20,36,0.62)] shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,217,255,0.06)]",
        "backdrop-blur-xl transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-cyan-400/45",
        "hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(0,217,255,0.14)]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div
        className={cn(
          "relative mb-3 flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12",
          "border border-cyan-400/15 bg-cyan-400/[0.08]",
          "shadow-[0_0_20px_rgba(0,217,255,0.08)]",
          "transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(0,217,255,0.2)]"
        )}
      >
        <Icon className="h-5 w-5 text-cyan-400" aria-hidden />
      </div>

      <p
        className={cn(
          "relative font-[family-name:var(--font-sora)] font-extrabold leading-none tracking-tight text-white",
          value.length > 8 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl lg:text-4xl"
        )}
        style={{ textShadow: "0 0 24px rgba(0, 217, 255, 0.15)" }}
      >
        <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-400/90 bg-clip-text text-transparent">
          {value}
        </span>
      </p>

      <p className="relative mt-2 max-w-[11rem] text-xs leading-snug text-text-cool sm:mt-2.5 sm:text-sm">
        {label}
      </p>
    </article>
  );
}
