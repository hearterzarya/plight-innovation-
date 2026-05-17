import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function PageHeader({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mx-auto max-w-4xl",
        align === "center" && "text-center",
        className
      )}
    >
      {label && <SectionLabel className="tracking-[0.14em]">{label}</SectionLabel>}
      <h1
        className={cn(
          "font-[family-name:var(--font-sora)] font-extrabold text-white",
          label ? "mt-4" : ""
        )}
        style={{
          fontSize: "clamp(2.125rem, 4.5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.045em",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-6 max-w-[860px] leading-[1.65] text-text-cool",
            align === "center" && "mx-auto"
          )}
          style={{ fontSize: "clamp(1.0625rem, 1.45vw, 1.3125rem)" }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
