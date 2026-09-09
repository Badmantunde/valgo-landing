"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { InstagramIcon, XIcon } from "@/components/ui/social-icons";
import { AppStoreBadges } from "@/components/ui/app-store-badges";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { SITE, SOCIAL_LINKS, VISION, APP_LINKS } from "@/lib/constants";

const footerLinks = {
  Order: [
    { label: "Order on Web", href: APP_LINKS.customer.web, external: true },
    { label: "Vendors & Menus", href: "/vendors" },
    { label: "Campus Services", href: "/services" },
    { label: "Platform Overview", href: "/platform" },
  ],
  Partners: [
    { label: "Vendors & Kitchens", href: "/vendors" },
    { label: "Campus Riders", href: "/riders" },
    { label: "Vendor Portal (Web)", href: APP_LINKS.vendor.web, external: true },
    { label: "Rider App (Google Play)", href: APP_LINKS.rider.playStore, external: true },
  ],
  Company: [
    { label: "Leadership", href: "/#team" },
    { label: "Ambassadors", href: "/ambassadors" },
    { label: "FAQs", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Delete Account", href: "/delete-account" },
  ],
};

export function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <Logo variant="white" className="mb-5" />
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm mb-4">
              {SITE.tagline} {VISION.launchNote}
            </p>
            <div className="text-xs text-blue-100/60 space-y-1 mb-6">
              <p><strong className="text-white/80">Headquarters:</strong> {SITE.address}</p>
              <p><strong className="text-white/80">Phone:</strong> <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white transition-colors">{SITE.phoneDisplay}</a> &bull; <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a></p>
            </div>
            <div className="flex gap-2 mb-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.platform === "x" ? <XIcon /> : <InstagramIcon />}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-100/60 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-blue-100/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pt-10 mt-2 border-t border-white/10">
            <div className="max-w-md">
              <h4 className="text-sm font-semibold text-white mb-4">
                Stay in the loop
              </h4>
              <p className="text-sm text-blue-100/60 mb-4">
                Launch updates from ValGo as we grow from our first campus to
                universities across Nigeria.
              </p>
              <NewsletterForm />
            </div>

            <AppStoreBadges variant="dark" className="lg:justify-end shrink-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-blue-100/50">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <p className="text-sm text-blue-100/50">
            Built in Nigeria, for Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
