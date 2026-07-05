"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
}

const sizeMap = {
  sm: "max-w-[160px]",
  md: "max-w-[220px]",
  lg: "max-w-[300px]",
  xl: "max-w-[360px]",
};

export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
  size = "md",
  interactive = false,
}: PhoneFrameProps) {
  const frame = (
    <div
      className={cn(
        "relative mx-auto w-full",
        sizeMap[size],
        className
      )}
    >
      <div className="rounded-[1.25rem] bg-[#0c0c0e] p-[3px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300 group-hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45)]">
        <div className="rounded-[1.1rem] overflow-hidden bg-black ring-1 ring-white/10">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            priority={priority}
            className="w-full h-auto block"
            sizes="(max-width: 768px) 200px, 300px"
          />
        </div>
      </div>
    </div>
  );

  if (!interactive) return frame;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group"
    >
      {frame}
    </motion.div>
  );
}

interface ScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** Flat screenshot without device chrome, for inline previews */
export function AppScreenshot({ src, alt, className, priority = false }: ScreenshotProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-white shadow-card", className)}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        priority={priority}
        className="w-full h-auto block"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
}
