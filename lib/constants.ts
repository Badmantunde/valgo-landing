export const APP_LINKS = {
  customer: {
    name: "ValGo Food & Campus Delivery",
    playStore: "https://play.google.com/store/apps/details?id=com.valgo.customer",
    appStoreComingSoon: true,
    web: "https://usevalgo.com/store",
    webDisplay: "usevalgo.com/store",
  },
  rider: {
    name: "ValGo Rider",
    playStore: "https://play.google.com/store/apps/details?id=com.valgo.rider",
    appStoreComingSoon: true,
  },
  vendor: {
    name: "ValGo Vendor",
    playStore: "https://play.google.com/store/apps/details?id=com.valgo.vendor",
    appStoreComingSoon: true,
    web: "https://vendor.usevalgo.com",
    webDisplay: "vendor.usevalgo.com",
  },
} as const;

export const SITE = {
  name: "ValGo",
  legalName: "ValGo Innovations Limited",
  tagline: "Your favorite meals & campus essentials, delivered in minutes.",
  description:
    "Order piping hot jollof, burgers, shawarma, groceries, and campus essentials with ValGo. Fast, student-friendly doorstep delivery starting at OOU in Ago Iwoye, expanding across Nigerian universities.",
  url: "https://usevalgo.com",
  email: "hello@usevalgo.com",
  supportEmail: "support@usevalgo.com",
  phone: "+234 703 962 2479",
  phoneRaw: "+2347039622479",
  phoneDisplay: "07039622479",
  address: "11, Adeyiga Street, Ikosi-Ketu, Kosofe, Lagos",
  headquarters: "11, Adeyiga Street, Ikosi-Ketu, Kosofe, Lagos, Nigeria",
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
  badge: `Fast Campus Delivery • Launching at ${LAUNCH.universityShort}`,
  heroTitle: "HOT MEALS. INSTANT CRAVINGS. DELIVERED IN MINUTES.",
  heroSubtitle:
    "Skip the hostel cooking queues. From smoky party jollof and loaded smash burgers to late-night grills and groceries, ValGo brings the best campus spots straight to your door.",
  hero:
    "ValGo is Nigeria's student-first delivery platform. Order with ease on web or mobile, deliver as a rider, or grow your food business, starting at OOU Ago Iwoye and expanding across universities nationwide.",
  launchNote: `We're launching first at ${LAUNCH.university} in ${LAUNCH.city}, expanding to universities across Nigeria.`,
  nationwide: "Built for hungry students, riders, and vendors on every Nigerian campus.",
} as const;

export interface NavChildItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Vendors", href: "/vendors" },
  { label: "Riders", href: "/riders" },
  { label: "Ambassadors", href: "/ambassadors" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Our story, mission & executive team" },
      { label: "FAQs", href: "/faq", description: "Answers for customers, vendors & riders" },
      { label: "Blog", href: "/blog", description: "Food trends, news & campus updates" },
      { label: "Careers", href: "/careers", description: "Join our campus tech & operations team" },
    ],
  },
];

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
