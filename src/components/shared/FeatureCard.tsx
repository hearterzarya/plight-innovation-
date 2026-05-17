import { type LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, tag, className }: FeatureCardProps) {
  return (
    <GlassCard
      className={cn(
        "flex h-full flex-col p-6 transition-all hover:border-cyan-400/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-7",
        className
      )}
    >
      {tag && (
        <span className="mb-3 inline-flex w-fit rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
          {tag}
        </span>
      )}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
        <Icon className="h-5 w-5 text-cyan-400" aria-hidden />
      </div>
      <h3 className="type-h4 text-white">{title}</h3>
      <p className="type-body-sm mt-2 flex-1 text-text-cool">{description}</p>
    </GlassCard>
  );
}
