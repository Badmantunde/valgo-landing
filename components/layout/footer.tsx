"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { InstagramIcon, XIcon } from "@/components/ui/social-icons";
import { AppStoreBadges } from "@/components/ui/app-store-badges";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { SITE, SOCIAL_LINKS, VISION } from "@/lib/constants";

const footerLinks = {
  Product: [
    { label: "Platform", href: "/platform" },
    { label: "Services", href: "/services" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "For Partners", href: "/partners" },
  ],
  Company: [
    { label: "Ambassadors", href: "/ambassadors" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <Logo variant="white" className="mb-5" />
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm mb-6">
              {SITE.tagline} {VISION.launchNote}
            </p>
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
                    <Link
                      href={link.href}
                      className="text-sm text-blue-100/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
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
