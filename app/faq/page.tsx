import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import { LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ValGo's launch at ${LAUNCH.university} in ${LAUNCH.city}.`,
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions about ValGo at OOU"
        description={`Everything you need to know about our ${LAUNCH.year} launch in ${LAUNCH.city} and how to get involved.`}
      />
      <FAQ />
      <Waitlist showHeader={false} />
    </>
  );
}
