import Image from "next/image";
import {
  Clock,
  Route,
  Banknote,
  Trophy,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { PARTNER_IMAGES } from "@/data/partner-images";

const riderBenefits = [
  {
    icon: Clock,
    title: "Flexible shifts",
    description: "Pick your hours: mornings, evenings, or between classes. You control your schedule.",
  },
  {
    icon: Route,
    title: "Smart routing",
    description: "Optimized pickup and drop-off routes across campus and university towns.",
  },
  {
    icon: Banknote,
    title: "Daily payouts",
    description: "Earnings deposited every day. No waiting until end of week.",
  },
  {
    icon: Trophy,
    title: "Performance bonuses",
    description: "Earn extra for high ratings, streaks, and peak-hour deliveries.",
  },
  {
    icon: Zap,
    title: "Live requests",
    description: "See nearby orders instantly with estimated earnings before you accept.",
  },
];

export function RiderExperience() {
  return (
    <section id="riders" className="py-16 sm:py-20 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 hero-dot-field opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-3">
            {riderBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                >
                    <div className="h-9 w-9 rounded bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
            })}
          </div>

          <FadeUp className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-widest text-blue-300 mb-3">
              For Riders
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              You&apos;re the last mile and the first smile
            </h2>
            <p className="mt-4 text-white/55 text-sm leading-relaxed">
              ValGo riders deliver to hostels, homes, and offices near campus.
              Bicycle, motorcycle, or on foot. Students, graduates, and anyone
              seeking flexible income can apply and earn on their own schedule.
            </p>

            <div className="mt-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-float">
              <Image
                src={PARTNER_IMAGES.riderDelivery}
                alt="ValGo rider handing delivery bag to customer at their door"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
            <p className="mt-2 text-xs text-white/40">
              Branded gear, daily payouts, and routes built for campus life
            </p>

            <Button href="#waitlist" variant="white" size="lg" className="mt-6">
              Apply as rider
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
