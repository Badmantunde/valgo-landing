import { Layers } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The ValGo Platform | Apps & Tools for Campus Life",
  description: `Explore the complete ValGo platform: customer web store & app, vendor dashboard, rider navigation, and campus ambassadors. Built for Nigerian university commerce.`,
  path: "/platform",
  keywords: [
    "ValGo platform",
    "customer app ValGo",
    "vendor dashboard usevalgo",
    "campus delivery system",
  ],
});

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform Architecture"
        icon={Layers}
        title="ONE UNIFIED ECOSYSTEM."
        accentTitle="FOUR PURPOSE-BUILT EXPERIENCES."
        description="ValGo connects students, local kitchens, campus riders, and brand ambassadors in a fast, reliable food and hyper-local commerce network."
      />
      <CheckeredStrip size="sm" variant="blue-white" />
      <PlatformOverview />
      <ProductShowcase />
      <CheckeredStrip size="sm" variant="dark-blue" />
    </>
  );
}
