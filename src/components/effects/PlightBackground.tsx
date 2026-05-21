import Image from "next/image";
import { cn } from "@/lib/utils";

export const PLIGHT_BG_SRC = "/images/plight/bg.png";

interface PlightBackgroundProps {
  /** hero: full-bleed with left-weighted overlay for copy; page: softer header band */
  variant?: "hero" | "page";
  className?: string;
  priority?: boolean;
}

export function PlightBackground({
  variant = "hero",
  className,
  priority = variant === "hero",
}: PlightBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <Image
        src={PLIGHT_BG_SRC}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          "object-cover",
          variant === "hero" ? "object-[62%_50%]" : "object-[70%_45%] opacity-90"
        )}
      />
      {variant === "hero" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/96 via-[#050A14]/78 to-[#050A14]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/25 to-[#050A14]/70" />
          <div
            className="absolute inset-0"
            style={{ boxShadow: "inset 0 0 140px 48px rgba(5, 10, 20, 0.8)" }}
          />
          <div className="absolute inset-0 bg-cyan-500/[0.04]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/92 via-[#050A14]/88 to-bg-deep" />
          <div className="absolute inset-0 bg-cyan-500/[0.03]" />
        </>
      )}
    </div>
  );
}
