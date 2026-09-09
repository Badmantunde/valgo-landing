"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Store, Bike, ArrowRight, CheckCircle2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { PARTNER_IMAGES } from "@/data/partner-images";
import { APP_LINKS } from "@/lib/constants";

export function PartnersHero() {
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
              <Handshake className="h-3.5 w-3.5 text-blue-400" />
              VALGO PARTNER ECOSYSTEM
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-black uppercase tracking-tight leading-[1.04] text-white">
              Grow Your Kitchen.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                Power Campus Logistics.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              ValGo connects university restaurants, local bukas, and student riders directly with thousands of hungry campus customers. Zero upfront fees, guaranteed daily/weekly payouts, and dedicated partner apps built for Ago Iwoye and expanding nationwide.
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
                href={APP_LINKS.rider.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Bike className="h-4 w-4 mr-2" />
                Get Rider App
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/60">
              <Link
                href="/vendors"
                className="text-blue-300 hover:text-white underline underline-offset-4 transition-colors font-medium"
              >
                Learn more about Vendors &rarr;
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/riders"
                className="text-blue-300 hover:text-white underline underline-offset-4 transition-colors font-medium"
              >
                Learn more about Riders &rarr;
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">40+</p>
                <p className="text-xs text-white/60 mt-0.5 font-medium">Launch Partners</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">₦0</p>
                <p className="text-xs text-white/60 mt-0.5 font-medium">Upfront Fees</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">Daily</p>
                <p className="text-xs text-white/60 mt-0.5 font-medium">Rider Payouts</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Dual Visual Showcase (Vendor + Rider) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[420px] space-y-4">
              {/* Card 1: Buka Vendor Owner */}
              <div className="group relative rounded-xl overflow-hidden border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm p-3">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
                  <Image
                    src={PARTNER_IMAGES.bukaVendor}
                    alt="ValGo Buka Vendor Owner Managing Orders on Tablet"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                        Campus Kitchens
                      </span>
                      <p className="text-sm font-black text-white">Live Vendor Dashboard</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5">
                      <CheckCircle2 className="h-3 w-3" />
                      Live in Ago Iwoye
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Campus Rider */}
              <div className="group relative rounded-xl overflow-hidden border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm p-3">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
                  <Image
                    src={PARTNER_IMAGES.campusRider}
                    alt="ValGo Campus Delivery Rider with Thermal Backpack"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                        Rider Network
                      </span>
                      <p className="text-sm font-black text-white">Earn Daily On Campus</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded bg-blue-500/90 text-white text-[10px] font-bold px-2 py-0.5">
                      <Bike className="h-3 w-3" />
                      100% Tips Kept
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
