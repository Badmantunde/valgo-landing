"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  TrendingUp,
  Layers,
  CloudRain,
  HeartHandshake,
  CheckCircle2,
  Zap,
} from "lucide-react";

const EARNING_PILLARS = [
  {
    icon: Banknote,
    title: "Guaranteed Base Fee",
    description:
      "Competitive guaranteed payment for every single completed delivery across campus faculties, student lodges, and town routes.",
  },
  {
    icon: Layers,
    title: "Batch Trip Multiplier",
    description:
      "Pick up multiple orders from nearby campus bukas in one stop. Stack delivery payouts and double your hourly earnings.",
  },
  {
    icon: CloudRain,
    title: "Weather & Rush Hour Surge",
    description:
      "Earn higher rates during peak student rush hours (12pm–3pm & 7pm–10pm) and rain boosts when student demand peaks.",
  },
  {
    icon: HeartHandshake,
    title: "100% Direct Tips",
    description:
      "Students appreciate speedy delivery. Every naira of in-app or cash tips belongs 100% to you, zero commission taken.",
  },
];

const EXAMPLE_SHIFTS = [
  {
    time: "Lunch Rush (12:00 PM – 2:30 PM)",
    deliveries: "4 Deliveries",
    earning: "₦4,200",
    note: "Between morning & afternoon lectures",
  },
  {
    time: "Dinner & Night Study (6:30 PM – 9:30 PM)",
    deliveries: "6 Deliveries + Batch Bonus",
    earning: "₦7,500",
    note: "Hostel & private student lodge drop-offs",
  },
  {
    time: "Daily Streak & Top Rating Bonus",
    deliveries: "10 Deliveries completed",
    earning: "+₦1,500",
    note: "Automated daily milestone reward",
  },
];

export function RiderEarningsBreakdown() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 border border-blue-100">
            <TrendingUp className="h-3.5 w-3.5" />
            Transparent Earnings Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
            Earn On Your Schedule.{" "}
            <span className="text-blue-600">Withdraw Every Day.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            No waiting till month-end. Deliver on campus on bicycle, motorcycle, or on foot, and cash out your daily earnings directly into any Nigerian bank account.
          </p>
        </motion.div>

        {/* 4 Earning Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EARNING_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.015 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col rounded-xl border border-border bg-slate-50/50 p-6 shadow-xs hover:border-blue-300 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Earnings Simulator / Real Day Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-slate-50 p-6 sm:p-10 shadow-xs"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Sample Student Rider Day
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                How a Student Earns ₦13,000+ Daily
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Most ValGo riders fit deliveries around their university lecture timetable. Work 2 hours at lunch, take classes in the afternoon, and complete a short evening shift before settling down to study.
              </p>
              <div className="pt-2 space-y-2.5">
                {[
                  "Cash out anytime: daily automated withdrawals",
                  "Keep 100% of customer tips",
                  "Insulated ValGo delivery box provided",
                  "Campus support team on WhatsApp and in person",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift Breakdown Column */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-lg border border-border bg-white p-4 sm:p-5 shadow-xs divide-y divide-border">
                {EXAMPLE_SHIFTS.map((shift) => (
                  <div key={shift.time} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {shift.time}
                      </h4>
                      <span className="text-[11px] text-muted block mt-0.5">
                        {shift.note} ({shift.deliveries})
                      </span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-blue-600 shrink-0">
                      {shift.earning}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Callout */}
              <div className="rounded-lg bg-blue-600 p-4 text-white flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-blue-200 font-bold block">
                    Estimated Daily Total
                  </span>
                  <span className="text-xs text-blue-100">
                    5–6 flexible hours total
                  </span>
                </div>
                <span className="text-2xl font-black tracking-tight">
                  ₦13,200/day
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
