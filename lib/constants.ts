export const SITE = {
  name: "ValGo",
  tagline: "The operating system for student life.",
  description:
    "ValGo is Nigeria's student-first logistics and lifestyle platform: food, groceries, pharmacy, parcels, and campus services. Launching first at Olabisi Onabanjo University in Ago Iwoye, then expanding nationwide.",
  url: "https://valgo.ng",
  email: "hello@valgo.ng",
} as const;

export const LAUNCH = {
  city: "Ago Iwoye",
  university: "Olabisi Onabanjo University",
  universityShort: "OOU",
  year: "2026",
  location: "Ago Iwoye, Ogun State",
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
