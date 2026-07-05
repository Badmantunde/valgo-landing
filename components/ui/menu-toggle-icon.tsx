"use client";

import { motion } from "framer-motion";

interface MenuToggleIconProps {
  open: boolean;
  className?: string;
}

const lineTransition = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };

export function MenuToggleIcon({ open, className }: MenuToggleIconProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="overflow-visible"
      >
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={
            open
              ? { d: "M6 6 L18 18" }
              : { d: "M4 7 L20 7" }
          }
          transition={lineTransition}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={
            open
              ? { d: "M12 12 L12 12", opacity: 0 }
              : { d: "M4 12 L20 12", opacity: 1 }
          }
          transition={lineTransition}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={
            open
              ? { d: "M6 18 L18 6" }
              : { d: "M4 17 L20 17" }
          }
          transition={lineTransition}
        />
      </svg>
    </div>
  );
}
