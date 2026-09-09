"use client";

import { motion } from "framer-motion";
import { Timer, BadgePercent, Store, Users, Target, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Timer,
    title: "Hyperlocal Campus Speed",
    description:
      "Traditional delivery apps are built for sprawling cities with distant restaurants. ValGo is architected around the compact geography of university campuses, dispatching riders in 15–25 minutes flat.",
  },
  {
    icon: BadgePercent,
    title: "Student-First Economics",
    description:
      "Student budgets are delicate. We reject inflated markups, hidden delivery service charges, and surge gouging during rainfall. Transparent pricing that respects student wallets.",
  },
  {
    icon: Store,
    title: "Kitchen & Buka Empowerment",
    description:
      "Local campus bukaterias, grills, and student bakers are the cultural heartbeat of university life. We give them enterprise-grade order dashboards, thermal packaging, and zero upfront fees to grow.",
  },
  {
    icon: Users,
    title: "Student Growth & Earning",
    description:
      "ValGo is built by students, for students. Our delivery riders are campus youth earning daily payouts around lectures, and our ambassadors gain real startup marketing leadership.",
  },
];

export function AboutStory() {
  return (
    <section id="mission" className="py-20 sm:py-28 bg-white border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Story Content Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="blue" className="bg-blue-50 text-blue-700 border-blue-200 font-bold mb-3">
            OUR STORY
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            From Ago Iwoye Hostels to <span className="text-blue-600">Universities Nationwide</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed font-normal">
            Every university student in Nigeria knows the feeling: it&apos;s 9:30 PM, night classes just ended, hostel stores have run out of provisions, and the best buka is a 25-minute trek in the dark.
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed font-normal">
            ValGo was created to turn that friction into an effortless experience. By integrating local campus food spots, dispatching student riders, and leveraging live order tracking, we make hostel doorstep delivery as seamless as tapping a button.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="h-11 w-11 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
