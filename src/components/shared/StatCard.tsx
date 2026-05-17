import { type LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value: React.ReactNode;
  label: string;
  className?: string;
}

export function StatCard({ icon: Icon, value, label, className }: StatCardProps) {
  return (
    <GlassCard
      className={cn(
        "flex h-full min-h-[140px] flex-col items-center justify-center p-5 text-center transition-shadow hover:shadow-[0_0_24px_rgba(0,217,255,0.12)] sm:p-6",
        className
      )}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
        <Icon className="h-5 w-5 text-cyan-400" aria-hidden />
      </div>
      <div className="font-[family-name:var(--font-sora)] text-3xl font-extrabold text-gradient sm:text-4xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-text-cool">{label}</p>
    </GlassCard>
  );
}
