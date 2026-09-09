"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppStoreBadges } from "@/components/ui/app-store-badges";
import { PulseDot } from "@/components/ui/motion";
import { VISION } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-center lg:text-left"
    >
      <motion.div variants={item} className="flex justify-center lg:justify-start">
        <Badge
          variant="blue"
          className="mb-5 inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-semibold shadow-sm"
        >
          <PulseDot color="amber" />
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          {VISION.badge}
        </Badge>
      </motion.div>

      <motion.h1
        variants={item}
        className="text-[2.5rem] xs:text-5xl sm:text-[3.6rem] md:text-[4rem] lg:text-[4.25rem] font-black text-white leading-[1.03] tracking-[-0.03em] uppercase"
      >
        Hot Meals.
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
          Instant Cravings.
        </span>
        <span className="block text-amber-400 font-extrabold text-[0.85em]">
          Delivered Fast.
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal"
      >
        Craving sizzling party jollof, juicy smash burgers, fiery wings, or late-night shawarma? ValGo connects you to your campus&apos;s best food spots with rapid delivery straight to your hostel or doorstep.
      </motion.p>

      {/* Main Call to Action: Join Waitlist */}
      <motion.div
        variants={item}
        className="mt-8 flex items-center justify-center lg:justify-start"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative group inline-block w-full sm:w-auto"
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 to-amber-300 opacity-40 blur-sm group-hover:opacity-100 transition duration-300" />
          <Button
            href="#waitlist"
            variant="white"
            size="lg"
            className="relative w-full sm:w-auto font-extrabold text-blue-700 shadow-xl hover:bg-blue-50 px-8 py-3.5 text-base tracking-wide"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-2 text-blue-600 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>

      {/* App Store Download Badges */}
      <motion.div variants={item} className="mt-5">
        <div className="flex flex-col items-center lg:items-start gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
            Get the Customer App
          </span>
          <AppStoreBadges role="customer" variant="dark" className="justify-center lg:justify-start" />
        </div>
      </motion.div>

      {/* Campus Proof / Crave Metrics */}
      <motion.div
        variants={item}
        className="mt-10 pt-7 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left"
      >
        <div>
          <span className="block text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
            15–25<span className="text-blue-300 text-sm font-semibold"> min</span>
          </span>
          <span className="text-white/50 text-xs mt-0.5 block font-medium">Avg. Hostel Delivery</span>
        </div>
        <div className="border-x border-white/10 px-2 sm:px-4">
          <span className="block text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
            40+
          </span>
          <span className="text-white/50 text-xs mt-0.5 block font-medium">Verified Campus Spots</span>
        </div>
        <div>
          <span className="block text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
            ₦0
          </span>
          <span className="text-white/50 text-xs mt-0.5 block font-medium">Surprise Surge Fees</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
