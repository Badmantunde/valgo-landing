"use client";

import { motion } from "framer-motion";
import { Store, Bike, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";
import { APP_LINKS } from "@/lib/constants";

export function PartnersAccessCta() {
  return (
    <section id="partner-access" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="JOIN THE NETWORK"
          title="Start partnering with ValGo today"
          description="Whether you cook student favorites or deliver across campus, get connected directly to campus demand."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Vendors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-blue-600/20 bg-gradient-to-b from-blue-50/40 via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Store className="h-3.5 w-3.5" />
                For Food Vendors &amp; Kitchens
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Kitchen Portal &amp; Vendor App
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                List your menu with ₦0 upfront fees. Access the Kitchen Portal on web or download the Vendor App on Google Play to start taking orders.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Web Access:</strong> Manage menus &amp; payouts at vendor.usevalgo.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Google Play:</strong> Instant audio order alerts on Android</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row gap-3">
              <Button
                href={APP_LINKS.vendor.web}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="flex-1 justify-center font-bold text-xs sm:text-sm shadow-sm"
              >
                <Store className="h-4 w-4 mr-1.5" />
                Vendor Portal (Web)
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
              <Button
                href={APP_LINKS.vendor.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="flex-1 justify-center font-semibold text-xs sm:text-sm"
              >
                <GooglePlayIcon className="h-4 w-4 mr-1.5" />
                Vendor App (Play)
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Riders */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-900/10 bg-gradient-to-b from-slate-900/[0.03] via-white to-white p-6 sm:p-8 shadow-sm hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Bike className="h-3.5 w-3.5" />
                For Campus Riders
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                ValGo Rider Mobile App
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Deliver meals between lectures with daily bank payouts and 100% customer tips kept. Onboarding and trip dispatch are managed in the Android app.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Google Play Store:</strong> Download the Rider App to sign up</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Daily payouts &bull; Guaranteed campus-only routes</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Button
                href={APP_LINKS.rider.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                className="w-full justify-center font-bold text-xs sm:text-sm bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
              >
                <GooglePlayIcon className="h-4 w-4 mr-2" />
                Download Rider App (Google Play)
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
