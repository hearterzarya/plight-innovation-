import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-header max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="type-h2 text-white">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "type-lead mt-5 max-w-[720px]",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
