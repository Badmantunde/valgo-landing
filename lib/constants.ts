export const SITE = {
  name: "ValGo",
  tagline: "The operating system for student life.",
  description:
    "ValGo is Nigeria's student-first platform for food, essentials, and campus services, with real earning paths for students. Launching first at Olabisi Onabanjo University in Ago Iwoye, then expanding to universities nationwide.",
  url: "https://usevalgo.com",
  email: "valgodelivery@outlook.com",
} as const;

export const LAUNCH = {
  city: "Ago Iwoye",
  university: "Olabisi Onabanjo University",
  universityShort: "OOU",
  year: "2026",
  location: "Ago Iwoye, Ogun State",
} as const;

/** Shared positioning: nationwide vision, OOU/Ago Iwoye as first launch market */
export const VISION = {
  badge: `Launching first at ${LAUNCH.universityShort}, ${LAUNCH.year}`,
  hero:
    "ValGo is Nigeria's student-first platform for food, groceries, pharmacy, parcels, and campus essentials. Order with comfort, earn as a rider or ambassador, starting at OOU in Ago Iwoye and growing to universities across the country.",
  launchNote: `We're launching first at ${LAUNCH.university} in ${LAUNCH.city}, then expanding to more campuses nationwide.`,
  nationwide: "Built for Nigerian students on every campus, not just one city.",
} as const;

export const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Services", href: "/services" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "For Partners", href: "/partners" },
  { label: "Ambassadors", href: "/ambassadors" },
  { label: "FAQ", href: "/faq" },
] as const;

export type SocialPlatform = "x" | "instagram";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "x",
    label: "X (Twitter)",
    href: "https://x.com/usevalgo",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/usevalgo",
  },
] as const;

export const OOU_OPTIONS = [
  "Olabisi Onabanjo University (Main Campus)",
  "Faculty of Science",
  "Faculty of Education",
  "College of Medicine",
  "Other OOU Campus Area",
] as const;
