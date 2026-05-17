import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn("type-label mb-4 inline-block text-cyan-400", className)}>
      {children}
    </span>
  );
}
