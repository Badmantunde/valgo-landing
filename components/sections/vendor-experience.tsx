import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  UtensilsCrossed,
  Megaphone,
  Wallet,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { PARTNER_IMAGES } from "@/data/partner-images";
import { APP_LINKS } from "@/lib/constants";

const vendorBenefits = [
  {
    icon: TrendingUp,
    title: "More orders, zero upfront cost",
    description:
      "Reach students on campus and in your university town without paying for ads or setup fees.",
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
    <section id="vendors" className="py-16 sm:py-24 bg-[#fafbfc]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeader
            eyebrow="For Vendors"
            title="Restaurants, bakeries, markets: we want you"
            description="Whether you run a restaurant, buka, or market stall near campus, ValGo puts your business in front of students who want to order with ease."
            align="left"
            className="mb-0"
          />
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Button
              href={APP_LINKS.vendor.web}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="font-bold"
            >
              Vendor Portal
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href={APP_LINKS.vendor.playStore}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
            >
              Get Vendor App
            </Button>
          </div>
        </div>

        {/* Vendor Portal Showcase Card with Authentic Nigerian Buka Partner Photo */}
        <div className="mb-14 rounded-xl border border-border bg-white overflow-hidden shadow-card">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <Image
                src={PARTNER_IMAGES.bukaVendor}
                alt="Nigerian campus restaurant and buka owner managing delivery orders with ValGo vendor tablet portal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              <span className="absolute top-4 left-4 rounded-md bg-blue-600/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-sm border border-white/20">
                Verified Vendor Partner
              </span>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Kitchen Technology Made Effortless
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-tight">
                  Digitize Your Kitchen. <span className="text-blue-600">Keep Your Pots Empty.</span>
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  From traditional swallow bukas serving hot amala &amp; ewedu to late-night shawarma grills, ValGo gives your kitchen modern ordering infrastructure. Receive orders with sound chimes, adjust menu portions in seconds, and get paid directly to your bank every day.
                </p>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-border">
                  {[
                    "₦0 upfront setup & zero monthly subscription fees",
                    "Automated daily settlements directly to any Nigerian bank",
                    "Dedicated ValGo riders pick up orders at your kitchen door",
                    "Live order pausing when your kitchen gets busy",
                  ].map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Button
                  href={APP_LINKS.vendor.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="font-bold"
                >
                  Open Vendor Portal
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button
                  href="#register-vendor"
                  variant="outline"
                  size="md"
                >
                  Register Kitchen
                </Button>
              </div>
            </div>
          </div>
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
          Already serving students near campus?{" "}
          <Link href="#waitlist" className="text-blue-600 font-medium hover:underline">
            Join the vendor waitlist
          </Link>
          . Onboarding takes less than 48 hours.
        </p>
      </div>
    </section>
  );
}
