import { cn } from "@/lib/utils";

export const PCB_CIRCUIT_SRC = "/images/plight/pcb-circuit-bg.png";

type Corner = "left" | "right";
type Intensity = "subtle" | "medium" | "strong";

const OPACITY: Record<Intensity, string> = {
  subtle: "0.10",
  medium: "0.14",
  strong: "0.17",
};

interface PcbCircuitBackgroundProps {
  /** Pattern originates top-left in the asset; right corner uses horizontal flip */
  corner?: Corner | "both";
  intensity?: Intensity;
  /** Soft cyan glow behind content */
  glow?: boolean;
  /** Light gradient so text/cards stay readable */
  vignette?: boolean;
  className?: string;
}

export function PcbCircuitBackground({
  corner = "left",
  intensity = "medium",
  glow = false,
  vignette = true,
  className,
}: PcbCircuitBackgroundProps) {
  const opacity = OPACITY[intensity];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {corner === "both" ? (
        <>
          <PcbCircuitLayer corner="left" opacity={opacity} size="min(68vw, 600px)" />
          <PcbCircuitLayer
            corner="right"
            opacity={OPACITY.subtle}
            size="min(55vw, 480px)"
          />
        </>
      ) : (
        <PcbCircuitLayer corner={corner} opacity={opacity} />
      )}

      {glow && (
        <div className="absolute left-1/2 top-1/2 h-[min(360px,60vw)] w-[min(840px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.09] blur-[80px] sm:blur-[100px]" />
      )}

      {vignette && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/50 via-[#050A14]/30 to-[#050A14]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-[#050A14]/35" />
        </>
      )}
    </div>
  );
}

function PcbCircuitLayer({
  corner,
  opacity,
  size = "min(72vw, 640px)",
}: {
  corner: Corner;
  opacity: string;
  size?: string;
}) {
  const flip = corner === "right";

  return (
    <div
      className={cn("absolute inset-0", flip && "scale-x-[-1]")}
      style={{
        backgroundImage: `url(${PCB_CIRCUIT_SRC})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: `${size} auto`,
        opacity,
        mixBlendMode: "screen",
      }}
    />
  );
}
