"use client";

import { motion } from "framer-motion";
import { Users, Compass, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LAUNCH } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0a1628] text-white">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Mission */}
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
              <Compass className="h-3.5 w-3.5 text-amber-300" />
              VALGO INNOVATIONS &bull; OUR STORY &amp; MISSION
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-black uppercase tracking-tight leading-[1.04] text-white">
              Built for Campus Life.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                Powered by Student Cravings.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              ValGo was born out of real hostel hunger runs, missed dinners during exam seasons, and the lack of reliable delivery infrastructure on Nigerian university campuses. We are building the campus-first logistics network designed around student life.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                href="#team"
                variant="white"
                size="lg"
                className="font-extrabold text-blue-700 shadow-md"
              >
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                Meet The Founders
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>

              <Button
                href="#roadmap"
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10 font-semibold"
              >
                Our Roadmap
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>

            {/* Launch Origin Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Origin: {LAUNCH.universityShort} Ago Iwoye
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Student-First Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-blue-300" />
                Expanding Across Nigeria
              </span>
            </div>
          </motion.div>

          {/* Right Column: Mission Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 shadow-2xl text-white">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  The ValGo Creed
                </span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 font-bold">
                  CAMPUS ECOSYSTEM
                </span>
              </div>

              <blockquote className="my-6 text-base sm:text-lg font-medium text-white/90 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                &ldquo;No student should ever have to choose between finishing an assignment and going to bed hungry because food spots are too far or closed.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/80">Average Hostel Delivery</span>
                  <span className="text-xs font-black text-emerald-400">15–25 Minutes</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/80">Launch Campus</span>
                  <span className="text-xs font-black text-blue-300">OOU Ago Iwoye, 2026</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/80">Onboarded Kitchens</span>
                  <span className="text-xs font-black text-amber-400">40+ Verified Spots</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
