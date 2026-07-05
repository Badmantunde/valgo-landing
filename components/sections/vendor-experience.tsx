import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  UtensilsCrossed,
  Megaphone,
  Wallet,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { LAUNCH } from "@/lib/constants";

const vendorBenefits = [
  {
    icon: TrendingUp,
    title: "More orders, zero upfront cost",
    description:
      "Reach customers across Ago Iwoye and OOU campus without paying for ads or setup fees.",
  },
  {
    icon: BarChart3,
    title: "Real-time dashboard",
    description:
      "Track orders, revenue, peak hours, and ratings from one vendor dashboard.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu management",
    description:
      "Update items, prices, and availability in seconds. Pause orders when you're busy.",
  },
  {
    icon: Megaphone,
    title: "Promotions & visibility",
    description:
      "Run discounts, featured listings, and launch campaigns to drive repeat customers.",
  },
  {
    icon: Wallet,
    title: "Reliable payouts",
    description:
      "Weekly settlements with clear fee breakdowns. No hidden charges, ever.",
  },
  {
    icon: Users,
    title: "Customer insights",
    description:
      "See who orders from you, what sells best, and when your peak hours hit.",
  },
];

export function VendorExperience() {
  return (
    <section id="vendors" className="py-16 sm:py-20 bg-[#fafbfc]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeader
            eyebrow="For Vendors"
            title="Restaurants, bakeries, markets: we want you"
            description={`Whether you're in Ita-Merin, Ago Market, or near campus, ValGo puts your business in front of hungry customers in ${LAUNCH.city}.`}
            align="left"
            className="mb-0"
          />
          <Button href="#waitlist" variant="primary" size="md" className="shrink-0">
            Apply as vendor
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {vendorBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="bg-white p-6 h-full hover:bg-blue-50/30 transition-colors">
                  <div className="h-9 w-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <p className="mt-6 text-sm text-muted">
          Already serving customers in Ago Iwoye?{" "}
          <Link href="#waitlist" className="text-blue-600 font-medium hover:underline">
            Join the vendor waitlist
          </Link>
          . Onboarding takes less than 48 hours.
        </p>
      </div>
    </section>
  );
}
