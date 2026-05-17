import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <SectionHeading title={title} subtitle={subtitle} align={align} />
    </div>
  );
}
