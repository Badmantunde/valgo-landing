import { PartnersHero } from "@/components/sections/partners-hero";
import { PartnersFlow } from "@/components/sections/partners-flow";
import { VendorExperience } from "@/components/sections/vendor-experience";
import { RiderExperience } from "@/components/sections/rider-experience";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "For Partners",
  description: `Join ValGo as a vendor or rider in ${LAUNCH.city}. A Nigerian delivery platform launching first at ${LAUNCH.university}. Zero upfront fees, daily rider payouts.`,
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersFlow />
      <VendorExperience />
      <RiderExperience />
      <Waitlist defaultRole="restaurant" />
    </>
  );
}
