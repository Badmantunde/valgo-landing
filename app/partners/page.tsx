import { PartnersHero } from "@/components/sections/partners-hero";
import { PartnersFlow } from "@/components/sections/partners-flow";
import { VendorExperience } from "@/components/sections/vendor-experience";
import { RiderExperience } from "@/components/sections/rider-experience";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "For Partners",
  description: `Join ValGo as a vendor or rider. A Nigerian student platform launching first at OOU in Ago Iwoye, expanding to more universities. Zero upfront fees, daily rider payouts.`,
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
