"use client";

import type { WaitlistRole } from "@/data/faq";
import { AppAccessCta } from "./app-access-cta";
import { VendorAccessCta } from "./vendor-access-cta";
import { RiderAccessCta } from "./rider-access-cta";

interface WaitlistProps {
  defaultRole?: WaitlistRole;
  showHeader?: boolean;
}

/**
 * Backward-compatible wrapper delegating to modern access CTAs (Web Access & Google Play Store)
 */
export function Waitlist({ defaultRole = "customer", showHeader = true }: WaitlistProps) {
  if (defaultRole === "restaurant") {
    return <VendorAccessCta />;
  }
  if (defaultRole === "rider") {
    return <RiderAccessCta />;
  }
  return <AppAccessCta showHeader={showHeader} />;
}
