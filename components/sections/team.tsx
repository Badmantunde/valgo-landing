"use client";

import { motion } from "framer-motion";
import { TailwindImageAccordion } from "@/components/ui/tailwind-image-accordion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Cpu, TrendingUp, Users } from "lucide-react";

const founderPillars = [
  {
    icon: ShieldCheck,
    title: "Executive Vision",
    description: "Laser-focused on solving the campus hunger run with reliable 20-minute delivery and student-friendly pricing.",
  },
  {
    icon: Cpu,
    title: "Engineering Scale",
    description: "High-concurrency infrastructure engineered for peak hostel dinner rushes, live GPS dispatch, and zero order drops.",
  },
  {
    icon: TrendingUp,
    title: "Campus Growth",
    description: "Grassroots student ambassador networks, merchant growth partnerships, and hyper-targeted student engagement.",
  },
  {
    icon: Users,
    title: "Community & Culture",
    description: "Hands-on faculty reps, hostel lead networks, campus activations, and exceptional student dining satisfaction.",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="relative py-20 sm:py-28 bg-[#080e1a] text-white border-y border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge
            variant="blue"
            className="bg-blue-500/20 text-blue-300 border-blue-400/30 font-bold mb-3 px-3 py-1"
          >
            LEADERSHIP
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            The Minds Behind <span className="text-blue-400">ValGo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Built by engineers and campus leaders who experienced hostel hunger firsthand, creating Nigeria&apos;s most reliable university food ecosystem.
          </p>
        </div>

        {/* Interactive Image Accordion */}
        <TailwindImageAccordion />

        {/* Founder Focus Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {founderPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
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
