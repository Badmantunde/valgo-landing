"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GooglePlayIcon, AppleIcon } from "@/components/ui/app-store-badges";
import { APP_LINKS, LAUNCH } from "@/lib/constants";

interface AppAccessCtaProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function AppAccessCta({
  showHeader = true,
  eyebrow = "GET THE APP",
  title = "Get your campus meals in minutes",
  description = `Skip long cafeteria queues. Order hot meals, grills, and campus essentials starting at ${LAUNCH.universityShort} ${LAUNCH.city} with the official ValGo app on Apple App Store and Google Play.`,
}: AppAccessCtaProps) {
  return (
    <section id="access-valgo" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Apple iOS App */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-900/15 bg-gradient-to-b from-slate-900/[0.04] via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <AppleIcon className="h-3.5 w-3.5" />
                  Apple iOS
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                  Now on App Store
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Download for iPhone &amp; iPad
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Experience lightning-fast campus dining on iOS. Track your rider in real time, reorder favorite meals with 1 tap, and get instant push updates straight to your lock screen.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Real-time GPS delivery tracking from kitchen to hostel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Instant push notifications when your food is dispatched</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Fast bank transfer &amp; card checkout with zero hidden fees</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.customer.appStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center font-bold text-sm bg-slate-950 text-white hover:bg-slate-800 shadow-sm"
              >
                <AppleIcon className="h-4 w-4 mr-2" />
                Download on the App Store
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Official release on Apple App Store for iOS
              </p>
            </div>
          </motion.div>

          {/* Card 2: Android Google Play App */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-blue-600/20 bg-gradient-to-b from-blue-50/50 via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <GooglePlayIcon className="h-3.5 w-3.5" />
                  Google Play
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                  Now on Android
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Download for Android
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lightweight, battery-efficient, and engineered for student life. Browse 40+ OOU campus bukas and restaurants, customize meal portions, and order in seconds.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Optimized for low data usage on campus networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Live rider route updates straight to your hostel gate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Seamless student re-ordering and group meal combos</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.customer.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center font-bold text-sm shadow-sm"
              >
                <GooglePlayIcon className="h-4 w-4 mr-2" />
                Get it on Google Play
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Official release on Google Play Store for Android
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ambassador Program Banner (The Only Waitlist) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-xl bg-[#fafbfc] border border-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5 text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Want to lead on campus? Join the Ambassador Waitlist
              </p>
              <p className="text-xs text-muted mt-0.5">
                Earn weekly free meal credits, cash referral perks, and executive mentorship representing ValGo at OOU.
              </p>
            </div>
          </div>
          <Link
            href="/ambassadors#apply"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white border border-border px-4 py-2.5 text-xs sm:text-sm font-bold text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors shrink-0 whitespace-nowrap shadow-xs"
          >
            <span>Apply as Ambassador</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
