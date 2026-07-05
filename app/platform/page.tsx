import { PageHero } from "@/components/layout/page-hero";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Platform",
  description: `Explore the ValGo platform: customer app, vendor dashboard, rider app, and ambassador program launching at ${LAUNCH.university} in ${LAUNCH.city}.`,
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One ecosystem. Four powerful experiences."
        description={`ValGo connects OOU students, Ago Iwoye vendors, riders, and ambassadors in a unified platform built for campus life in ${LAUNCH.city}.`}
      />
      <PlatformOverview />
      <ProductShowcase />
    </>
  );
}
