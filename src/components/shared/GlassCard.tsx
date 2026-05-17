import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-bg-graphite/90 to-bg-midnight/70 backdrop-blur-md",
        className
      )}
    >
      {children}
    </Tag>
  );
}
