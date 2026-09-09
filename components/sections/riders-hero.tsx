"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike, ArrowRight, Zap, Banknote, ShieldCheck, Clock } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PARTNER_IMAGES } from "@/data/partner-images";
import { APP_LINKS } from "@/lib/constants";

export function RidersHero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0a1628] text-white">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <Badge
              variant="blue"
              className="mb-5 inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-semibold"
            >
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              DELIVER &amp; EARN ON CAMPUS
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-black uppercase tracking-tight leading-[1.04] text-white">
              Deliver on Campus.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                Get Paid Every Single Day.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Earn reliable income on your own schedule between lectures. Deliver hot meals and groceries to hostels and faculty blocks, complete with daily payouts, thermal gear, and 100% of customer tips kept.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                href={APP_LINKS.rider.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
                className="font-extrabold text-blue-700 shadow-md"
              >
                <Bike className="h-4 w-4 mr-2 text-blue-600" />
                Get Rider App (Google Play)
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>

              <Button
                href="#register-rider"
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10 font-semibold"
              >
                Sign Up as Rider
              </Button>
            </div>

            {/* Rider Trust Highlights */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5">
                <Banknote className="h-4 w-4 text-emerald-400" />
                Daily Direct Payouts
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-300" />
                100% Flexible Timetable
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Rider Safety &amp; Gear
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Image & Floating Shift Earnings Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Hero Feature Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a1628]">
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src={PARTNER_IMAGES.campusRider}
                  alt="ValGo campus delivery rider on motorcycle with royal blue thermal box"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-black/20" />
                <span className="absolute top-3 left-3 rounded-lg bg-blue-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20 inline-flex items-center gap-1.5">
                  <Bike className="h-3.5 w-3.5 text-amber-300" />
                  Verified Campus Rider
                </span>
                <span className="absolute bottom-3 right-3 rounded-md bg-emerald-500 px-2.5 py-1 text-xs font-black text-white shadow-md">
                  Active Shift &bull; Online
                </span>
              </div>

              <div className="p-5 bg-white/[0.04] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Campus Delivery Partner</h3>
                    <p className="text-xs text-white/60 mt-0.5">OOU Ago Iwoye &bull; Faculty &amp; Hostel Routes</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-emerald-400">Daily Payouts</span>
                    <p className="text-[10px] text-white/40">100% Tips Kept</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Rider Shift Earnings Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-3 sm:-left-6 rounded-xl border border-white/20 bg-[#0a1628]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-md text-white max-w-[300px]"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  TODAY&apos;S SHIFT
                </span>
                <span className="text-[9px] font-mono text-amber-300 font-bold">14 TRIPS</span>
              </div>
              <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                ₦18,450
              </span>
              <p className="text-[11px] text-white/60 mt-0.5">
                Including surge multiplier &amp; ₦2,200 tips
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
