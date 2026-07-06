import Image from "next/image";
import { Package, Bike, Home, Wallet } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { PARTNER_IMAGES } from "@/data/partner-images";

const steps = [
  {
    icon: Package,
    title: "Vendor prepares the order",
    description:
      "Restaurants and shops receive orders on the ValGo dashboard, prepare meals, and pack them in branded bags.",
  },
  {
    icon: Bike,
    title: "Rider picks up and heads out",
    description:
      "ValGo riders collect from local vendors with optimized routes across town and campus.",
  },
  {
    icon: Home,
    title: "Delivered to the customer",
    description:
      "Orders arrive at hostels, homes, and offices. Customers track every step in the app.",
  },
  {
    icon: Wallet,
    title: "Everyone gets paid",
    description:
      "Vendors receive reliable weekly settlements. Riders earn daily with transparent fees and performance bonuses.",
  },
];

export function PartnersFlow() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-3">
              How it works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-tight">
              From kitchen to customer: the full ValGo journey
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Every order on ValGo connects local vendors, riders, and students.
              We handle the tech, tracking, and payments, starting at our first
              campus and scaling nationwide.
            </p>

            <div className="mt-8 space-y-5">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <span className="h-9 w-9 flex items-center justify-center rounded bg-blue-50 text-blue-600 border border-blue-100">
                        <Icon className="h-4 w-4" />
                      </span>
                      {i < steps.length - 1 && (
                        <span className="w-px flex-1 bg-border mt-2 min-h-[20px]" />
                      )}
                    </div>
                    <div className="pb-1">
                      <h3 className="text-sm font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-card">
              <Image
                src={PARTNER_IMAGES.vendorHandoff}
                alt="ValGo vendor handing order to rider at pickup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                Pickup · Vendor to rider
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
