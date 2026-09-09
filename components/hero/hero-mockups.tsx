"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ShoppingBag } from "lucide-react";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { heroScreens } from "@/data/product-screens";
import { FOOD_IMAGES } from "@/data/food-images";
import { APP_LINKS } from "@/lib/constants";
import { float, floatDelayed } from "@/lib/animations";

const homePhoneClass = "w-full max-w-[270px] sm:max-w-[310px] lg:max-w-[340px]";
const sidePhoneClass = "w-full max-w-[140px] sm:max-w-[165px] lg:max-w-[185px]";

export function HeroMockups() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto h-[530px] sm:h-[610px] lg:h-[650px]">
      {/* Central Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-4 sm:top-6 lg:top-8 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PhoneFrame
            src={heroScreens.primary}
            alt="ValGo food ordering home screen"
            size="xl"
            className={homePhoneClass}
            priority
            interactive
          />
        </motion.div>
      </motion.div>

      {/* Floating Glossy "Quick Order" Orb Button (Inspired by Reference Image 1) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 300 }}
        className="absolute -top-2 right-2 sm:right-6 z-30"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href={APP_LINKS.customer.web}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white shadow-[0_10px_25px_rgba(41,102,233,0.5)] border-2 border-white/40 transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 mb-0.5 text-amber-300 transition-transform group-hover:-translate-y-0.5" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-tight text-center leading-none">
              Quick<br />Order
            </span>
            <span className="absolute -bottom-1 rounded-full bg-amber-400 px-2 py-0.5 text-[8px] font-black uppercase text-blue-950 flex items-center gap-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-ping" />
              LIVE
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Receipt / Crave Card (Inspired by Reference Image 1: "DOUBLE TROUBLE") */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-2 sm:left-0 top-16 sm:top-24 z-20 hidden xs:block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[170px] sm:w-[200px] rounded-lg border border-white/20 bg-[#0a1628]/95 p-3 shadow-2xl backdrop-blur-md text-white hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
              <Flame className="h-3 w-3 text-amber-400 fill-amber-400" />
              HOT &amp; FRESH
            </span>
            <span className="text-[9px] font-mono text-white/50">#VG-2401</span>
          </div>
          <div className="relative h-24 w-full rounded overflow-hidden mb-2">
            <Image
              src={FOOD_IMAGES.heroFeast}
              alt="ValGo Signature Party Jollof & Shawarma Feast"
              fill
              className="object-cover"
              sizes="200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 right-1.5 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white shadow-sm">
              ₦3,800
            </span>
          </div>
          <p className="text-xs font-bold leading-tight line-clamp-1">Party Jollof &amp; Shawarma</p>
          <div className="mt-1 flex items-center justify-between text-[10px] text-white/60">
            <span>Mama T&apos;s Kitchen</span>
            <span className="text-emerald-400 font-semibold">18 min</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Side Phone Mockups */}
      <div className="absolute inset-x-0 bottom-[4%] sm:bottom-[6%] hidden sm:flex items-end justify-between gap-3 z-[5]">
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
              size="sm"
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
              size="sm"
              className={sidePhoneClass}
              interactive
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile side phones */}
      <div className="absolute inset-x-0 bottom-0 flex sm:hidden items-end justify-center gap-2 z-[5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-[38%] max-w-[130px]"
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
          className="w-[38%] max-w-[130px]"
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
