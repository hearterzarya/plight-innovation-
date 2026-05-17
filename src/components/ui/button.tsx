import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070A] shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110",
        secondary:
          "border border-cyan-400/30 bg-white/5 text-slate-100 backdrop-blur-sm hover:border-cyan-400/60 hover:bg-cyan-400/10",
        ghost:
          "text-slate-300 hover:bg-white/5 hover:text-white",
        amber:
          "border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-[52px] px-6 text-base sm:px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };


