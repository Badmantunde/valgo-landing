"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Bike,
  Utensils,
  Star,
  MapPin,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { AppStoreBadges } from "@/components/ui/app-store-badges";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations on scroll
  // The phone glides upwards aggressively so it moves directly above and over the hero headline/content
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -440]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.05]);

  // Hero copy gently recedes and fades as the phone rises above it
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85], [1, 0.6, 0.05]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Orbiting cards flare slightly outwards in 3D parallax depth
  const leftCardX = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const rightCardX = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Background sky subtle parallax
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[105svh] lg:min-h-[115svh] overflow-hidden flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Background: Radiant Sunny Sky with Soft Natural Clouds (Parallax) */}
      <motion.div style={{ y: skyY, scale: skyScale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero/valgo-sky-clouds.jpg"
          alt="ValGo Bright Sunny Sky with Soft Drifting Clouds"
          fill
          priority
          className="object-cover object-top select-none"
          sizes="100vw"
        />
        {/* Sky Ambient Tint & Sun Flare Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1b5ecd]/55 via-[#2b72e3]/30 to-[#4d97f2]/50 mix-blend-multiply pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating Ambient Cloud Puffs */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {/* Soft Cloud Puff 1 - Left */}
        <motion.div
          animate={{
            x: [-15, 20, -15],
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-20 w-80 sm:w-[480px] h-64 rounded-full bg-white/40 blur-3xl"
        />

        {/* Soft Cloud Puff 2 - Right */}
        <motion.div
          animate={{
            x: [20, -15, 20],
            y: [8, -8, 8],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -right-24 w-96 sm:w-[520px] h-72 rounded-full bg-white/35 blur-3xl"
        />

        {/* Soft Cloud Puff 3 - Center Light */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-60 rounded-full bg-sky-200/30 blur-3xl"
        />
      </div>

      {/* Main Centered Hero Copy (Parallax Recedes & Fades as Phone Moves Above) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
        className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-start pointer-events-auto"
      >
        {/* Campus Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md border border-white/40 shadow-xs"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span>OOU Ago Iwoye Campus Pilot</span>
        </motion.div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tight uppercase drop-shadow-[0_4px_30px_rgba(10,35,90,0.35)] select-none">
            YOUR FAVORITE CAMPUS MEALS,
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200">
              DELIVERED IN 15 MINUTES.
            </span>
          </h1>
        </motion.div>

        {/* Catchy Conversion Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          Skip long cafeteria queues and WhatsApp delays. From steaming party jollof and double smash burgers to spicy wings and cold drinks, ValGo delivers your favorite campus spots straight to your hostel in 15 to 20 minutes.
        </motion.p>

        {/* Dual Conversion Buttons: Both on a Single Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25, type: "spring", stiffness: 300 }}
          className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-auto max-w-full mx-auto"
        >
          <Link
            href={APP_LINKS.customer.web}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full bg-[#0c0c0e] px-3.5 xs:px-5 sm:px-8 py-3 sm:py-4 text-[11px] xs:text-xs sm:text-sm font-black tracking-wider sm:tracking-widest text-white uppercase shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">START ORDERING NOW</span>
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#waitlist"
            className="group shrink-0 inline-flex items-center justify-center rounded-full bg-white/25 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 text-[11px] xs:text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md border border-white/50 shadow-lg hover:bg-white/35 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">JOIN WAITLIST</span>
          </Link>
        </motion.div>

        {/* App Store Download Badges with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-6 flex flex-col items-center gap-1.5"
        >
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70">
            Available On iOS &amp; Android
          </p>
          <AppStoreBadges role="customer" variant="dark" className="justify-center" />
        </motion.div>

        {/* Micro Trust Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 text-[11px] sm:text-xs font-semibold text-white/95"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md border border-white/30 shadow-xs">
            <Clock className="h-3.5 w-3.5 text-amber-300" />
            15 to 20 Min Delivery
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md border border-white/30 shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            40+ OOU Food Spots
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md border border-white/30 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-200" />
            ₦0 Hidden Fees
          </span>
        </motion.div>
      </motion.div>

      {/* Centerpiece: Floating Smartphone Portal (Parallax Ascends OVER the Content on Scroll) */}
      <motion.div
        style={{ y: phoneY, scale: phoneScale }}
        className="relative z-30 w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 flex flex-col items-center pointer-events-none"
      >
        {/* Floating Device Chassis with Orbiting Micro-Cards */}
        <div className="relative w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[400px] flex justify-center pointer-events-auto">
          {/* Orbiting Card 1: Left - Hot Campus Spot */}
          <motion.div
            style={{ x: leftCardX }}
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{
              opacity: 1,
              y: [-6, 6, -6],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -left-2 xs:-left-8 sm:-left-20 md:-left-28 top-6 sm:top-14 z-30 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/80 bg-white/90 p-2 sm:p-3 shadow-[0_16px_36px_rgba(15,35,80,0.18)] backdrop-blur-xl max-w-[165px] xs:max-w-[195px] sm:max-w-[240px]"
          >
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-xs">
              <Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs font-black text-neutral-900 truncate">Mama T&apos;s Kitchen</span>
                <span className="inline-flex items-center text-[9px] sm:text-[10px] font-bold text-amber-500">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400 mr-0.5" /> 4.9
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-neutral-500 truncate">Party Jollof &amp; Peppered Wings</p>
            </div>
          </motion.div>

          {/* Orbiting Card 2: Right - Live Dispatch Status */}
          <motion.div
            style={{ x: rightCardX }}
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{
              opacity: 1,
              y: [7, -7, 7],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -right-2 xs:-right-8 sm:-right-20 md:-right-28 top-24 sm:top-36 z-30 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/80 bg-white/90 p-2 sm:p-3 shadow-[0_16px_36px_rgba(15,35,80,0.18)] backdrop-blur-xl max-w-[165px] xs:max-w-[195px] sm:max-w-[240px]"
          >
            <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-500 text-white shadow-xs">
              <Bike className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500 border-2 border-white" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] sm:text-xs font-black text-neutral-900 truncate">Rider En Route</span>
                <span className="rounded-md bg-emerald-100 px-1 py-0.2 text-[8px] sm:text-[9px] font-bold text-emerald-800">
                  12 Min
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-neutral-500 truncate">
                <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-neutral-400 shrink-0" />
                <span>Oloko Hall Dropoff</span>
              </div>
            </div>
          </motion.div>

          {/* Orbiting Pill 3: Bottom Left - Fast Handoff */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-4, 4, -4],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.7 },
              scale: { duration: 0.7, delay: 0.7 },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="hidden sm:flex absolute -left-10 sm:-left-16 bottom-20 z-30 items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-3.5 py-1.5 shadow-md backdrop-blur-md text-[11px] font-bold text-neutral-800"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Zero Queue Wait</span>
          </motion.div>

          {/* Authentic Floating Smartphone Mockup (Parallax Elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: [-8, 6, -8],
            }}
            transition={{
              opacity: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[380px] md:max-w-[410px] select-none"
          >
            <div className="relative aspect-[1426/2871] w-full filter drop-shadow-[0_30px_60px_rgba(10,35,80,0.35)]">
              <Image
                src="/images/hero/mockup.png"
                alt="ValGo Live Campus Experience App Mockup"
                fill
                priority
                className="object-contain select-none"
                sizes="(max-width: 640px) 350px, 410px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

