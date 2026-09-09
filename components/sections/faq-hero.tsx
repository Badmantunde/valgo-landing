"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Sparkles,
  ArrowDown,
  UtensilsCrossed,
  Store,
  Bike,
  GraduationCap,
} from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quickStats = [
  { label: "Stakeholder Tracks", value: "4" },
  { label: "Common Questions", value: "20+" },
  { label: "Campus Support", value: "24/7" },
];

export function FAQHero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0a1628] text-white">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <Badge
              variant="blue"
              className="mb-5 inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm rounded-lg px-3.5 py-1 text-xs font-semibold"
            >
              <HelpCircle className="h-3.5 w-3.5 text-amber-300" />
              VALGO KNOWLEDGE BASE &amp; HELP
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-black uppercase tracking-tight leading-[1.05] text-white">
              Got Questions?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                We&apos;ve Got Every Answer.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Find instant answers for hungry students ordering meals, food vendors listing their kitchens, riders delivering on campus, and ambassadors leading the movement.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                href="#faq-content"
                variant="white"
                size="lg"
                className="font-bold text-blue-700 shadow-md"
              >
                Browse All Questions
                <ArrowDown className="h-4 w-4 ml-1.5" />
              </Button>
              <Button
                href="#waitlist"
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Overview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Instant Directory
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  OOU Ago Iwoye Launch
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-blue-500/20 text-blue-300">
                      <UtensilsCrossed className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Customers &amp; Foodies</h4>
                      <p className="text-xs text-white/60">Ordering, delivery times &amp; packaging</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-bold">6 FAQs &rarr;</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-amber-500/20 text-amber-300">
                      <Store className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Vendors &amp; Restaurants</h4>
                      <p className="text-xs text-white/60">₦0 setup, kitchen portal &amp; payouts</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-bold">5 FAQs &rarr;</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-blue-500/20 text-blue-300">
                      <Bike className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Delivery Riders</h4>
                      <p className="text-xs text-white/60">Daily bank payouts &amp; flexible shifts</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-bold">5 FAQs &rarr;</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-purple-500/20 text-purple-300">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Campus Ambassadors</h4>
                      <p className="text-xs text-white/60">Free meals, cash perks &amp; leadership</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-bold">4 FAQs &rarr;</span>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                {quickStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-lg sm:text-xl font-black text-white">{stat.value}</span>
                    <span className="block text-[10px] text-white/50 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
