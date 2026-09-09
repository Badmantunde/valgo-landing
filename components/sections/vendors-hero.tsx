"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowRight, Store, CheckCircle2, Flame } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FOOD_IMAGES } from "@/data/food-images";
import { APP_LINKS } from "@/lib/constants";

export function VendorsHero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0a1628] text-white">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Copy & Actions */}
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
              <UtensilsCrossed className="h-3.5 w-3.5 text-amber-300" />
              FOR RESTAURANTS, BUKAS &amp; CAMPUS KITCHENS
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-black uppercase tracking-tight leading-[1.04] text-white">
              Turn Campus Hunger Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                Growing Restaurant Revenue.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Whether you run a popular university buka, a fast food grill, a student bakery, or an established restaurant, ValGo puts your menu in front of thousands of hungry students ordering daily from their hostels.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                href={APP_LINKS.vendor.web}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
                className="font-extrabold text-blue-700 shadow-md"
              >
                <Store className="h-4 w-4 mr-2 text-blue-600" />
                Vendor Portal
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>

              <Button
                href="#register-vendor"
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10 font-semibold"
              >
                Register Your Kitchen
              </Button>
            </div>

            {/* Quick value badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ₦0 Upfront Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Automated Weekly Payouts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Live Kitchen Portal
              </span>
            </div>
          </motion.div>

          {/* Right: Mouth-Watering Sizzling Food Card + Live Vendor Order Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Sizzling Food Feature */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a1628]">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={FOOD_IMAGES.jollofPlatter}
                  alt="Sizzling Firewood Jollof Platter with Plantain & Peppered Beef"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 rounded-lg bg-blue-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20 inline-flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-amber-300" />
                  Best Campus Seller
                </span>
                <span className="absolute bottom-3 right-3 rounded-md bg-amber-400 px-2.5 py-1 text-xs font-black text-blue-950 shadow-md">
                  ₦3,500 / order
                </span>
              </div>

              <div className="p-5 bg-white/[0.04] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Smoky Party Jollof &amp; Peppered Beef</h3>
                    <p className="text-xs text-white/60 mt-0.5">Mama T&apos;s Campus Kitchen &bull; OOU Main Gate</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-emerald-400">18 min prep</span>
                    <p className="text-[10px] text-white/40">142 orders this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Incoming Order Alert Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-3 sm:-left-6 rounded-xl border border-white/20 bg-[#0a1628]/95 p-4 shadow-2xl backdrop-blur-md text-white max-w-[280px]"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  NEW HOSTEL ORDER
                </span>
                <span className="text-[9px] font-mono text-white/50">#VG-9021</span>
              </div>
              <p className="text-xs font-bold text-white line-clamp-1">2x Double Smash Burgers + Wings</p>
              <div className="flex items-center justify-between text-[11px] mt-1.5 text-white/70">
                <span>Deliver to: <strong>Hostel Block C</strong></span>
                <span className="font-extrabold text-amber-400">₦8,400</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
