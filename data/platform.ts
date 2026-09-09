import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag,
  Store,
  Bike,
  GraduationCap,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export interface PlatformLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PlatformEcosystem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string;
  primaryLink: PlatformLink;
  secondaryLink?: PlatformLink;
  comingSoonApple?: boolean;
}

export const platforms: PlatformEcosystem[] = [
  {
    id: "customer",
    title: "Customer App & Web",
    subtitle: "Order food & essentials in seconds",
    description:
      "Browse 40+ campus eateries, customize your meals, and order with ease on web or Android. Doorstep delivery right to your hostel.",
    features: [
      "Instant web ordering at usevalgo.com/store",
      "Live rider GPS tracking",
      "Student budget deals & combos",
      "Group orders & split pay",
    ],
    icon: ShoppingBag,
    accent: "from-blue-500 to-blue-600",
    primaryLink: {
      label: "Order on Web",
      href: APP_LINKS.customer.web,
      external: true,
    },
    secondaryLink: {
      label: "Google Play App",
      href: APP_LINKS.customer.playStore,
      external: true,
    },
    comingSoonApple: true,
  },
  {
    id: "vendor",
    title: "Vendor Hub & App",
    subtitle: "Grow your food business on campus",
    description:
      "Manage kitchen orders in real time, adjust item availability, track daily revenue, and reach thousands of hungry students.",
    features: [
      "Web portal at vendor.usevalgo.com",
      "Live order dispatch notification",
      "Instant menu & price adjustments",
      "Zero upfront fees & weekly settlement",
    ],
    icon: Store,
    accent: "from-blue-600 to-blue-700",
    primaryLink: {
      label: "Vendor Portal (Web)",
      href: APP_LINKS.vendor.web,
      external: true,
    },
    secondaryLink: {
      label: "Vendor Android App",
      href: APP_LINKS.vendor.playStore,
      external: true,
    },
    comingSoonApple: true,
  },
  {
    id: "rider",
    title: "Rider App",
    subtitle: "Earn flexibly on your own schedule",
    description:
      "Accept delivery requests, navigate short campus routes, and cash out your earnings every single day. Full freedom.",
    features: [
      "Download on Google Play Store",
      "Daily automated payouts",
      "Smart campus hostel routing",
      "Performance & streak bonuses",
    ],
    icon: Bike,
    accent: "from-blue-400 to-blue-500",
    primaryLink: {
      label: "Get Rider App",
      href: APP_LINKS.rider.playStore,
      external: true,
    },
    secondaryLink: {
      label: "Partner Details",
      href: "/partners#riders",
      external: false,
    },
    comingSoonApple: true,
  },
  {
    id: "ambassador",
    title: "Student Ambassador",
    subtitle: "Lead your campus & earn rewards",
    description:
      "Represent ValGo on campus, onboard friends and hostels, earn commissions on every order, and gain startup experience.",
    features: [
      "Campus leadership role",
      "Cash commission on referrals",
      "Exclusive ValGo merch & gear",
      "Direct internship pathway",
    ],
    icon: GraduationCap,
    accent: "from-blue-700 to-blue-800",
    primaryLink: {
      label: "Apply as Ambassador",
      href: "/ambassadors",
      external: false,
    },
    secondaryLink: {
      label: "Ambassador Perks",
      href: "/ambassadors#benefits",
      external: false,
    },
  },
];
