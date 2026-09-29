"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base styles shared by every variant
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: green fill, glow shadow, fully rounded
        primary:
          "rounded-full bg-primary text-primary-foreground shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:bg-accent hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]",

        // Secondary: glassmorphism card look
        secondary:
          "rounded-2xl border border-white/10 bg-card/45 text-foreground backdrop-blur-xl hover:bg-card/60 hover:border-white/20",

        // Ghost: transparent, only text + hover tint
        ghost:
          "rounded-full bg-transparent text-foreground hover:bg-hover hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
