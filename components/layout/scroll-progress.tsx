"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-600 to-amber-300 origin-left z-[100] shadow-[0_0_10px_rgba(41,102,233,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
