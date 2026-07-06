import { PageHero } from "@/components/layout/page-hero";
import { AmbassadorIntro } from "@/components/sections/ambassador-intro";
import { AmbassadorBenefits } from "@/components/sections/ambassador-benefits";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Student Ambassadors",
  description: `Earn as a ValGo campus ambassador: rewards, merch, and leadership experience. Launching first at OOU in Ago Iwoye, opening to more universities soon.`,
  path: "/ambassadors",
});

export default function AmbassadorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ambassador Program"
        title="Lead your campus. Shape ValGo."
        description="Represent ValGo on campus, drive sign-ups, and build leadership experience while you earn. Our ambassador program starts at OOU in Ago Iwoye and expands to more universities."
      />
      <AmbassadorIntro />
      <AmbassadorBenefits />
      <Waitlist defaultRole="ambassador" showHeader={false} />
    </>
  );
}
