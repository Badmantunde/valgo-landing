"use client";

import { motion } from "framer-motion";
import { Bike, ArrowUpRight, Banknote, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";
import { APP_LINKS } from "@/lib/constants";

export function RiderAccessCta() {
  return (
    <section id="register-rider" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DOWNLOAD &amp; DELIVER"
          title="Ready to earn daily on campus?"
          description="Download the ValGo Rider App from Google Play, complete your quick rider verification, and start earning between lectures."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border-2 border-blue-600/20 bg-gradient-to-b from-blue-50/40 via-white to-white p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <GooglePlayIcon className="h-3.5 w-3.5" />
                Google Play Store App Download
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Get the ValGo Rider App
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg">
                The rider application and shift management are fully handled inside the Android app. Download now to register with your student ID, choose your delivery zone, and receive instant delivery requests.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/85 font-medium text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Daily payouts straight to your bank</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>100% of customer tips kept</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Flexible shifts between classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Thermal gear &amp; campus route guidance</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
              <Button
                href={APP_LINKS.rider.playStore}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-bold text-sm px-8 py-3.5 shadow-md justify-center"
              >
                <GooglePlayIcon className="h-5 w-5 mr-2" />
                Download Rider App (Google Play)
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
              <span className="text-[11px] text-muted text-center">
                Android 8.0+ supported &bull; iOS version coming soon
              </span>
            </div>
          </div>

          {/* Highlights Row */}
          <div className="mt-8 pt-6 border-t border-border/80 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="flex justify-center mb-1.5 text-blue-600">
                <Banknote className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold text-foreground">Daily Withdrawals</p>
              <p className="text-[11px] text-muted mt-0.5">Every evening direct to bank</p>
            </div>
            <div className="border-x border-border/80 px-2">
              <div className="flex justify-center mb-1.5 text-amber-500">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold text-foreground">Student Schedule</p>
              <p className="text-[11px] text-muted mt-0.5">Log on whenever you are free</p>
            </div>
            <div>
              <div className="flex justify-center mb-1.5 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold text-foreground">Safety &amp; Gear</p>
              <p className="text-[11px] text-muted mt-0.5">Branded jacket &amp; thermal bag</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
