"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { heroScreens } from "@/data/product-screens";

export function HeroMockups() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto h-[480px] sm:h-[540px] lg:h-[580px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] z-10"
      >
        <PhoneFrame
          src={heroScreens.primary}
          alt="ValGo home screen"
          size="lg"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 sm:left-[-4%] bottom-[8%] z-[5] scale-[0.82] sm:scale-[0.86] origin-bottom-left hidden sm:block"
      >
        <PhoneFrame
          src={heroScreens.secondary}
          alt="ValGo order tracking"
          size="sm"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 sm:right-[-4%] bottom-[12%] z-[5] scale-[0.82] sm:scale-[0.86] origin-bottom-right hidden sm:block"
      >
        <PhoneFrame
          src={heroScreens.tertiary}
          alt="Mama T's Kitchen menu on ValGo"
          size="sm"
        />
      </motion.div>
    </div>
  );
}
