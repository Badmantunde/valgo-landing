import { AmbassadorsHero } from "@/components/sections/ambassadors-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { AmbassadorIntro } from "@/components/sections/ambassador-intro";
import { AmbassadorBenefits } from "@/components/sections/ambassador-benefits";
import { AmbassadorTierSystem } from "@/components/sections/ambassador-tier-system";
import { AmbassadorFaq } from "@/components/sections/ambassador-faq";
import { AmbassadorApplication } from "@/components/sections/ambassador-application";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Student Ambassador Program | ValGo Campus Reps",
  description: "Earn referral rewards, free weekly meals, exclusive merch, and real leadership experience as a ValGo campus ambassador. Represent your faculty or hall at OOU and beyond.",
  path: "/ambassadors",
  keywords: [
    "campus ambassador program",
    "student reps OOU Ago Iwoye",
    "earn on campus Nigeria",
    "student influencer marketing",
    "ValGo ambassador perks",
  ],
});

export default function AmbassadorsPage() {
  return (
    <>
      <AmbassadorsHero />
      <CheckeredStrip size="md" variant="blue-white" />
      <AmbassadorIntro />
      <div id="benefits">
        <AmbassadorBenefits />
      </div>
      <AmbassadorTierSystem />
      <AmbassadorFaq />
      <div id="ambassador-form">
        <AmbassadorApplication />
      </div>
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
