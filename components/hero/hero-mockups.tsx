"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { heroScreens } from "@/data/product-screens";
import { float, floatDelayed } from "@/lib/animations";

const sidePhoneClass = "w-full max-w-[220px] sm:max-w-[240px]";

export function HeroMockups() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto h-[500px] sm:h-[560px] lg:h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-0 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PhoneFrame
            src={heroScreens.primary}
            alt="ValGo home screen"
            size="lg"
            priority
            interactive
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-[6%] sm:bottom-[8%] hidden sm:flex items-end justify-between gap-3 z-[5]">
        <motion.div
          initial={{ opacity: 0, x: -32, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={sidePhoneClass}
        >
          <motion.div variants={float} initial="initial" animate="animate">
            <PhoneFrame
              src={heroScreens.secondary}
              alt="ValGo order tracking"
              size="md"
              className={sidePhoneClass}
              interactive
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={sidePhoneClass}
        >
          <motion.div variants={floatDelayed} initial="initial" animate="animate">
            <PhoneFrame
              src={heroScreens.tertiary}
              alt="Mama T's Kitchen menu on ValGo"
              size="md"
              className={sidePhoneClass}
              interactive
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex sm:hidden items-end justify-center gap-3 z-[5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-[44%] max-w-[158px]"
        >
          <PhoneFrame
            src={heroScreens.secondary}
            alt="ValGo order tracking"
            size="sm"
            className="max-w-none w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-[44%] max-w-[158px]"
        >
          <PhoneFrame
            src={heroScreens.tertiary}
            alt="Mama T's Kitchen menu on ValGo"
            size="sm"
            className="max-w-none w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
