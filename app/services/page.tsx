import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { WhyValGo } from "@/components/sections/why-valgo";
import { BusinessGrowth } from "@/components/sections/business-growth";
import { LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Food delivery, groceries, pharmacy, parcels, and more. All the services ValGo brings to ${LAUNCH.university} in ${LAUNCH.city}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One platform. Every service OOU students need."
        description={`From food delivery to campus shopping, ValGo's multi-service roadmap starts in ${LAUNCH.city} and grows with our OOU community.`}
      />
      <WhyValGo />
      <BusinessGrowth />
    </>
  );
}
