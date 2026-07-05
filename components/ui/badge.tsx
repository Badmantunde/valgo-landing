import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "amber" | "outline" | "dark";
}

const variants = {
  default: "bg-blue-50 text-blue-700 border-blue-100",
  blue: "bg-blue-500 text-white border-blue-500",
  amber: "bg-amber-400/15 text-amber-500 border-amber-400/30",
  outline: "bg-transparent text-muted border-border",
  dark: "bg-blue-900/10 text-blue-800 border-blue-200",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
