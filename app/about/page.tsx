import { AboutHero } from "@/components/sections/about-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { AboutStory } from "@/components/sections/about-story";
import { AboutRoadmap } from "@/components/sections/about-roadmap";
import { Team } from "@/components/sections/team";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "About ValGo | The Operating System for Campus Life",
  description: `Learn about ValGo Innovations Limited, our mission to eliminate campus hunger runs, and our executive founding team. Launching first at ${LAUNCH.university} in Ago Iwoye in ${LAUNCH.year}, expanding nationwide.`,
  path: "/about",
  keywords: [
    "about ValGo",
    "ValGo founders",
    "Idowu Damilare CEO",
    "Abiola Babatunde CTO",
    "Isajobi Quadri Head of Growth",
    "Muritala Ameenat Campus Growth Manager",
    "campus delivery startup Nigeria",
    "OOU delivery company",
  ],
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CheckeredStrip size="md" variant="blue-white" />
      <AboutStory />
      <AboutRoadmap />
      <Team />
      <Waitlist />
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
