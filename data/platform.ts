import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag,
  Store,
  Bike,
  GraduationCap,
} from "lucide-react";

export interface PlatformEcosystem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string;
}

export const platforms: PlatformEcosystem[] = [
  {
    id: "customer",
    title: "Customer App",
    subtitle: "Order everything campus life demands",
    description:
      "Browse restaurants, groceries, pharmacy, and campus services in one beautifully designed app. Track orders in real time and pay seamlessly.",
    features: [
      "Multi-category ordering",
      "Live order tracking",
      "Campus-exclusive deals",
      "Group orders & split pay",
    ],
    icon: ShoppingBag,
    accent: "from-blue-500 to-blue-600",
  },
  {
    id: "vendor",
    title: "Vendor Dashboard",
    subtitle: "Grow your business on campus",
    description:
      "Manage menus, monitor orders, access analytics, and reach thousands of students, all from a powerful dashboard built for local businesses.",
    features: [
      "Real-time order management",
      "Menu & inventory tools",
      "Marketing campaigns",
      "Reliable weekly payouts",
    ],
    icon: Store,
    accent: "from-blue-600 to-blue-700",
  },
  {
    id: "rider",
    title: "Rider App",
    subtitle: "Earn flexibly around your schedule",
    description:
      "Accept delivery requests, optimize routes with smart navigation, and get paid daily. Built for students who want flexible income.",
    features: [
      "Flexible shift scheduling",
      "Route optimization",
      "Daily payouts",
      "Performance bonuses",
    ],
    icon: Bike,
    accent: "from-blue-400 to-blue-500",
  },
  {
    id: "ambassador",
    title: "Student Ambassador",
    subtitle: "Lead your campus community",
    description:
      "Represent ValGo on your campus, earn referral rewards, access exclusive merch, and build leadership experience with a fast-growing startup.",
    features: [
      "Campus leadership role",
      "Referral commission",
      "Exclusive merchandise",
      "Internship pathway",
    ],
    icon: GraduationCap,
    accent: "from-blue-700 to-blue-800",
  },
];
