"use client";

import { motion } from "framer-motion";
import {
  Award,
  Crown,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Shirt,
  Briefcase,
} from "lucide-react";

const TIERS = [
  {
    tier: "Tier 01",
    name: "Campus Scout",
    target: "1 – 49 Student Activations",
    badge: "Entry Level",
    color: "blue",
    description:
      "Kick off your ambassador journey. Introduce classmates, roommates, and fellowship members to the easiest way to order food on campus.",
    perks: [
      "Referral commission on every verified first-time customer order",
      "Free weekly ValGo meal vouchers & dining perks",
      "Official ValGo Ambassador digital badge & verified status",
      "Access to private ambassador network & WhatsApp team hub",
    ],
  },
  {
    tier: "Tier 02",
    name: "Faculty & Hall Lead",
    target: "50 – 199 Student Activations",
    badge: "Most Popular",
    color: "amber",
    description:
      "Become the go-to food lead in your faculty or hall of residence. Organize study-group snack drops and hostel activations.",
    perks: [
      "Boosted referral commission on all campus signups",
      "Official ValGo varsity jacket, cap & limited merch kit",
      "Monthly data & airtime allowance for campus outreach",
      "Regular free meal drops from top partner kitchens",
      "ValGo event sponsorship & snack drops for faculty mixers",
    ],
  },
  {
    tier: "Tier 03",
    name: "Campus Director",
    target: "200+ Student Activations",
    badge: "Executive Tier",
    color: "purple",
    description:
      "Lead ValGo operations for your entire university. Manage junior scouts, liaise with student union leaders, and drive university-wide growth.",
    perks: [
      "Top-tier referral commission & campus leadership stipend",
      "Direct 1-on-1 mentorship with ValGo CEO, CTO & Head of Growth",
      "Priority fast-track consideration for paid tech & marketing internships",
      "Official signed Letter of Recommendation & LinkedIn endorsement",
      "All-expense-paid quarterly team dinner with founders",
    ],
  },
];

export function AmbassadorTierSystem() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 border border-blue-100">
            <TrendingUp className="h-3.5 w-3.5" />
            Progression Ladder
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
            Ambassador Tier System &amp;{" "}
            <span className="text-blue-600">Rewards</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Grow your influence on campus, unlock higher referral rewards, score exclusive merch drops, and build real leadership credentials.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-border bg-slate-50/50 p-6 sm:p-8 shadow-xs hover:border-blue-300 hover:bg-white hover:shadow-card transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600">
                  {tier.tier}
                </span>
                <span className="rounded-md bg-blue-100/80 px-2.5 py-0.5 text-[11px] font-bold text-blue-800">
                  {tier.badge}
                </span>
              </div>

              <h3 className="text-xl font-black text-foreground">
                {tier.name}
              </h3>
              <span className="text-xs font-semibold text-muted mt-0.5 block mb-4">
                {tier.target}
              </span>

              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                {tier.description}
              </p>

              <div className="pt-4 border-t border-border space-y-3 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block mb-2">
                  What You Unlock:
                </span>
                {tier.perks.map((perk) => (
                  <div
                    key={perk}
                    className="flex items-start gap-2 text-xs font-medium text-foreground/85 leading-relaxed"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
