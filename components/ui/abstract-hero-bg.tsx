"use client";

import { motion } from "framer-motion";

export function AbstractHeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0a1628]" />

      <motion.div
        className="absolute inset-0 hero-abstract-mesh"
        animate={{
          opacity: [0.92, 1, 0.92],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "linear-gradient(125deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
        }}
      />

      <svg
        className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] opacity-[0.08]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="0.5" />
      </svg>

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [12, 14, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[18%] w-32 h-32 border border-white/[0.06]"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] bottom-[25%] w-24 h-24 border border-white/[0.04]"
      />
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [45, 48, 45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[20%] bottom-[15%] w-16 h-16 bg-blue-500/[0.06]"
      />

      <div className="absolute inset-0 hero-dot-field opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
