"use client";

import { motion } from "framer-motion";
import { Store, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";
import { APP_LINKS } from "@/lib/constants";

export function VendorAccessCta() {
  return (
    <section id="register-vendor" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ONBOARD YOUR KITCHEN"
          title="Start selling to thousands of campus students"
          description="Register your restaurant or student food business with zero upfront costs. Choose web access or get the vendor mobile app."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Web Access - Vendor Portal */}
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
                  <Store className="h-3.5 w-3.5" />
                  Web Access
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                  Desktop &amp; Mobile
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                ValGo Kitchen Portal (Web)
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Open your digital storefront, upload dishes, customize prices, track customer orders, and view weekly sales settlements in your browser.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Full kitchen dashboard on phone, tablet, or laptop</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Real-time menu item toggling (mark dishes sold out instantly)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Automated weekly direct bank account settlements</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.vendor.web}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center font-bold text-sm shadow-sm"
              >
                <Store className="h-4 w-4 mr-2" />
                Open Vendor Portal (Web)
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Direct URL: <span className="font-mono text-foreground font-semibold">{APP_LINKS.vendor.webDisplay}</span>
              </p>
            </div>
          </motion.div>

          {/* Card 2: Google Play Store - Vendor App */}
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
                  Vendor Mobile App
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                ValGo Vendor App (Android)
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Receive loud audio chimes for incoming hostel orders, confirm meal preparation times, and hand off packed bags to verified riders.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Instant sound alerts when a hungry student places an order</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Manage prep times &amp; request rider pickup in 1 tap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Built for Android kitchen phones &amp; order-station tablets</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.vendor.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="w-full justify-center font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
              >
                <GooglePlayIcon className="h-4 w-4 mr-2" />
                Download Vendor App (Google Play)
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted font-medium">
                Available now on Google Play Store for Android devices
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vendor Onboarding Support Note */}
        <div className="mt-10 rounded-xl bg-slate-50 border border-border p-4 sm:p-5 flex items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Need hands-on help setting up your menu? Our campus team will visit your kitchen in Ago Iwoye within 24 hours.</span>
          </div>
          <a
            href="mailto:partners@usevalgo.com"
            className="font-bold text-blue-600 hover:underline shrink-0 whitespace-nowrap"
          >
            Contact Partner Support &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
