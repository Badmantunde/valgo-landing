import { PageHero } from "@/components/layout/page-hero";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Platform",
  description: `Explore the ValGo platform: customer app, vendor dashboard, rider app, and ambassador program. Launching first at OOU in Ago Iwoye, built for every Nigerian campus.`,
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One ecosystem. Four powerful experiences."
        description="ValGo connects students, local vendors, riders, and ambassadors in one platform built for campus life, starting in Ago Iwoye and scaling to universities nationwide."
      />
      <PlatformOverview />
      <ProductShowcase />
    </>
  );
}
