import { PageHero } from "@/components/layout/page-hero";
import { WhyValGo } from "@/components/sections/why-valgo";
import { BusinessGrowth } from "@/components/sections/business-growth";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description: `Food delivery, groceries, pharmacy, parcels, and more. Everything ValGo brings to students on campus, launching first at OOU in Ago Iwoye.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One platform. Every service students need."
        description="From food delivery to campus shopping, ValGo's multi-service roadmap starts at our first campus in Ago Iwoye and grows with students nationwide."
      />
      <WhyValGo />
      <BusinessGrowth />
    </>
  );
}
