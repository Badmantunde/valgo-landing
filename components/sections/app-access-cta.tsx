"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";
import { APP_LINKS, LAUNCH } from "@/lib/constants";

interface AppAccessCtaProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function AppAccessCta({
  showHeader = true,
  eyebrow = "ORDER TODAY",
  title = "Get your campus meals in minutes",
  description = `Skip long cafeteria queues. Order hot food and daily essentials starting at ${LAUNCH.universityShort} ${LAUNCH.city} with instant web ordering or the Google Play app.`,
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
          {/* Card 1: Web Access */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-blue-600/20 bg-gradient-to-b from-blue-50/50 via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <Globe className="h-3.5 w-3.5" />
                  Web Access
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                  No Download Needed
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Order Directly on Web
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Open ValGo in any browser on your smartphone, tablet, or laptop. Browse live menus from top campus spots, customize portions, and pay with zero app installation.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Works instantly on iOS, Android, macOS &amp; Windows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Full menu access &amp; instant bank transfer checkout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Ideal for students who prefer ordering in browser</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.customer.web}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center font-bold text-sm shadow-sm"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Launch Web Store
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Live URL: <span className="font-mono text-foreground font-semibold">{APP_LINKS.customer.webDisplay}</span>
              </p>
            </div>
          </motion.div>

          {/* Card 2: Google Play Store App Download */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-900/10 bg-gradient-to-b from-slate-900/[0.03] via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <GooglePlayIcon className="h-3.5 w-3.5" />
                  Google Play Store
                </span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 rounded-full px-2.5 py-0.5">
                  Native Mobile App
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Download for Android
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Install the official ValGo Customer app from Google Play. Get instant push notifications, real-time rider tracking, and 1-tap reordering straight to your hostel.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Real-time GPS delivery tracking from kitchen to hostel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Instant push notifications when your meal is dispatched</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Saved hostel delivery pins &amp; 1-click reordering</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.customer.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="w-full justify-center font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
              >
                <GooglePlayIcon className="h-4 w-4 mr-2" />
                Get it on Google Play
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Android 8.0+ • iOS native app coming soon (iOS users use Web Access)
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
