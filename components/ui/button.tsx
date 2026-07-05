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

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 shadow-sm",
  secondary:
    "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200",
  outline:
    "border border-blue-500 text-blue-500 hover:bg-blue-50",
  ghost: "text-blue-600 hover:bg-blue-50",
  white:
    "bg-white text-blue-600 hover:bg-blue-50 shadow-sm",
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
  whileHover: { scale: 1.03, y: -1 },
  whileTap: { scale: 0.97 },
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
    "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...motionProps}
      {...(props as ButtonProps)}
    >
      {children}
    </motion.button>
  );
});
