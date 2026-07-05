import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform",
  description: `Explore the ValGo platform: customer app, vendor dashboard, rider app, and ambassador program launching at ${LAUNCH.university}.`,
};

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
