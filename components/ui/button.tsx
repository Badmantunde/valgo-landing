"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/**
 * Base classes per variant — hover states drive a smooth color animation
 * via `transition-all duration-300` + a shimmer layer using a `::before`
 * pseudo element trick (overflow-hidden + translate).
 */
const variants: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-blue-500 text-white shadow-sm " +
    "hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.55)] " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-in-out",
  secondary:
    "relative overflow-hidden bg-blue-50 text-blue-700 border border-blue-200 " +
    "hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 hover:shadow-[0_0_14px_rgba(59,130,246,0.18)] " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-blue-200/40 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-in-out",
  outline:
    "relative overflow-hidden border border-blue-500 text-blue-500 " +
    "hover:bg-blue-500 hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-in-out",
  ghost:
    "relative overflow-hidden text-blue-600 " +
    "hover:bg-blue-50 hover:text-blue-700 " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-blue-100/50 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-in-out",
  white:
    "relative overflow-hidden bg-white text-blue-600 shadow-sm " +
    "hover:bg-blue-50 hover:text-blue-700 hover:shadow-[0_0_16px_rgba(255,255,255,0.45)] " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-blue-100/40 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-in-out",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-11 px-6 text-sm gap-2",
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type LinkButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const motionProps = {
  whileHover: { scale: 1.04, y: -1.5 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring" as const, stiffness: 420, damping: 22 },
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | LinkButtonProps
>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <motion.span className="inline-flex" {...motionProps}>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      </motion.span>
    );
  }

  return (
    <motion.span className="inline-flex" {...motionProps}>
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonProps)}
      >
        {children}
      </button>
    </motion.span>
  );
});
