import { ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { WhyValGo } from "@/components/sections/why-valgo";
import { Metrics } from "@/components/sections/metrics";
import { BusinessGrowth } from "@/components/sections/business-growth";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Campus Services | Food Delivery, Groceries & Errands",
  description: `From hot meals and groceries to pharmacy and quick parcel drops. Explore how ValGo powers student daily life across campus. Starting at OOU Ago Iwoye.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Services"
        icon={ShoppingBag}
        title="ONE CAMPUS SUPER-APP."
        accentTitle="EVERY SERVICE STUDENTS NEED."
        description="From authentic buka meals and late-night snacks to pharmacy runs and rapid parcel dispatch. ValGo's multi-service platform starts at OOU Ago Iwoye and scales to every campus in Nigeria."
      />
      <CheckeredStrip size="sm" variant="blue-white" />
      <WhyValGo />
      <CheckeredStrip size="sm" variant="dark-blue" />
      <Metrics />
      <CheckeredStrip size="sm" variant="blue-white" />
      <BusinessGrowth />
      <CheckeredStrip size="sm" variant="dark-blue" />
    </>
  );
}
