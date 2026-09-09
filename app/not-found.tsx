import { ArrowUpRight, Home, ShoppingBag, UtensilsCrossed, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { APP_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between bg-[#0a1628] text-white overflow-hidden pt-28 sm:pt-36">
      <AbstractHeroBg />

      <div className="relative mx-auto my-auto max-w-2xl px-5 sm:px-6 py-12 text-center">
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-6">
          <Flame className="h-4 w-4 text-amber-400 fill-amber-400" />
          404: Lost In Transit
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
          Looks Like Your Food{" "}
          <span className="text-amber-400 block sm:inline">Took A Detour.</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
          Even our fastest campus rider couldn&apos;t track down this page. But the kitchen is still firing and food is waiting!
        </p>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={APP_LINKS.customer.web}
            variant="white"
            size="lg"
            className="w-full sm:w-auto font-bold text-blue-700 shadow-lg"
          >
            <ShoppingBag className="h-4 w-4 mr-1.5 text-blue-600" />
            Order on Web
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>

          <Button
            href="/restaurants"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/25 text-white hover:bg-white/10"
          >
            <UtensilsCrossed className="h-4 w-4 mr-1.5" />
            Browse Restaurants
          </Button>

          <Button
            href="/"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white/80 hover:text-white"
          >
            <Home className="h-4 w-4 mr-1.5" />
            Back to Home
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/50">
          <span>Need help? <a href="mailto:support@usevalgo.com" className="text-blue-300 hover:underline">support@usevalgo.com</a></span>
          <span>&bull;</span>
          <span>Partner portal: <a href="https://vendor.usevalgo.com" className="text-blue-300 hover:underline">vendor.usevalgo.com</a></span>
        </div>
      </div>

      <CheckeredStrip size="md" variant="blue-white" />
    </div>
  );
}
