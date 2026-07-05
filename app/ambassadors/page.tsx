import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { AmbassadorIntro } from "@/components/sections/ambassador-intro";
import { AmbassadorBenefits } from "@/components/sections/ambassador-benefits";
import { Waitlist } from "@/components/sections/waitlist";
import { LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Student Ambassadors",
  description: `Lead the ValGo community at ${LAUNCH.university}. Earn rewards, exclusive merch, and internship opportunities.`,
};

export default function AmbassadorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ambassador Program"
        title="Lead OOU. Shape ValGo."
        description={`Represent ValGo at ${LAUNCH.university}, drive sign-ups across campus, and build leadership experience with a fast-growing startup in ${LAUNCH.city}.`}
      />
      <AmbassadorIntro />
      <AmbassadorBenefits />
      <Waitlist defaultRole="ambassador" showHeader={false} />
    </>
  );
}
