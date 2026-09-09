import { PartnersHero } from "@/components/sections/partners-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { PartnersFlow } from "@/components/sections/partners-flow";
import { VendorExperience } from "@/components/sections/vendor-experience";
import { RiderExperience } from "@/components/sections/rider-experience";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Partner With ValGo | Vendors & Campus Riders",
  description: `Partner with ValGo as a food vendor or delivery rider. Access thousands of campus orders with zero setup fees, daily rider payouts, and dedicated partner portals.`,
  path: "/partners",
  keywords: [
    "ValGo partner",
    "campus rider jobs Nigeria",
    "restaurant delivery partner OOU",
    "student delivery rider",
    "vendor portal ValGo",
  ],
});

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <CheckeredStrip size="sm" variant="blue-white" />
      <PartnersFlow />
      <VendorExperience />
      <RiderExperience />
      <Waitlist defaultRole="restaurant" />
      <CheckeredStrip size="sm" variant="dark-blue" />
    </>
  );
}
