import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionIntroProps {
  label?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  label,
  title,
  subtitle,
  accent,
  align = "center",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "section-header",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-3xl",
        className
      )}
    >
      {label && <SectionLabel className="block">{label}</SectionLabel>}
      <h2 className="type-h2 text-white">{title}</h2>
      {accent && (
        <p className="type-accent-line mt-3 text-cyan-400/90">{accent}</p>
      )}
      {subtitle && (
        <p
          className={cn(
            "type-lead mt-5 max-w-[720px]",
            align === "center" && "mx-auto",
            accent && "mt-4"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
