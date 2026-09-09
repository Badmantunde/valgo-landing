import { RidersHero } from "@/components/sections/riders-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { RiderEarningsBreakdown } from "@/components/sections/rider-earnings-breakdown";
import { RiderExperience } from "@/components/sections/rider-experience";
import { RiderOnboardingSteps } from "@/components/sections/rider-onboarding-steps";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Deliver with ValGo | Student & Campus Rider Opportunities",
  description: "Ride with ValGo on campus. Daily payouts, flexible shifts between classes, smart hostel routing, and extra performance bonuses.",
  path: "/riders",
  keywords: [
    "student rider jobs",
    "delivery rider OOU Ago Iwoye",
    "campus delivery gig Nigeria",
    "ValGo rider app",
    "daily payout rider jobs",
  ],
});

export default function RidersPage() {
  return (
    <>
      <RidersHero />
      <CheckeredStrip size="md" variant="blue-white" />
      <RiderEarningsBreakdown />
      <RiderExperience />
      <RiderOnboardingSteps />
      <div id="register-rider">
        <Waitlist defaultRole="rider" />
      </div>
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
