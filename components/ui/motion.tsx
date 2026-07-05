"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BlurReveal({ children, className, delay = 0 }: BlurRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(14px)", y: 24 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: "blur(14px)", y: 24 }
      }
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
