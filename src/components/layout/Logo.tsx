import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { box: "h-8 w-8", px: 32 },
  md: { box: "h-9 w-9", px: 36 },
  lg: { box: "h-11 w-11", px: 44 },
} as const;

interface LogoProps {
  showWordmark?: boolean;
  size?: keyof typeof sizeMap;
  className?: string;
  wordmarkClassName?: string;
}

export function Logo({
  showWordmark = true,
  size = "md",
  className,
  wordmarkClassName,
}: LogoProps) {
  const dimensions = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg",
          dimensions.box
        )}
      >
        <Image
          src="/logo.png"
          alt="PLIGHT logo"
          width={dimensions.px}
          height={dimensions.px}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      {showWordmark && (
        <span
          className={cn(
            "font-heading text-sm font-bold tracking-wide text-white",
            wordmarkClassName
          )}
        >
          PLIGHT
        </span>
      )}
    </div>
  );
}
