import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH, SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Careers",
  description: `Join the ValGo team building Nigeria's student-first delivery platform. Open roles in ${LAUNCH.city} and remote.`,
  path: "/careers",
});

const openRoles = [
  {
    title: "Campus Operations Lead",
    location: `${LAUNCH.city} (On-site)`,
    type: "Full-time",
    description:
      "Own vendor onboarding, rider recruitment, and day-to-day operations for our OOU launch. You'll work directly with restaurants, shops, and student riders across Ago Iwoye.",
  },
  {
    title: "Growth & Marketing Associate",
    location: "Remote (Nigeria)",
    type: "Full-time",
    description:
      "Drive user acquisition across campus through digital campaigns, ambassador programs, and on-ground activations. Experience with student communities is a strong plus.",
  },
  {
    title: "Software Engineer (Mobile)",
    location: "Remote (Nigeria)",
    type: "Full-time",
    description:
      "Build and ship features for the ValGo customer and rider apps. React Native experience preferred. You'll work on ordering, tracking, payments, and real-time logistics.",
  },
  {
    title: "Student Ambassador",
    location: `${LAUNCH.universityShort} Campus`,
    type: "Part-time",
    description:
      "Represent ValGo on campus, drive sign-ups, and organize student events. Earn commissions, merch, and a pathway to internships. See our ambassador program for details.",
  },
];

const values = [
  {
    title: "Move fast, stay grounded",
    description:
      "We ship quickly but never at the expense of the communities we serve. Every decision starts with the student experience.",
  },
  {
    title: "Build for Nigeria",
    description:
      "Local context matters. We design for unreliable networks, cash-first habits, and the realities of campus life in Nigerian universities.",
  },
  {
    title: "Own your impact",
    description:
      "Small team, big responsibility. Everyone at ValGo touches product, operations, and growth. Your work shows up in the app within days, not quarters.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us build the future of campus life"
        description={`ValGo is a small, ambitious team launching in ${LAUNCH.city}. We're looking for people who want to build something meaningful for Nigerian students.`}
      />

      <section className="py-16 sm:py-20 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-10">
            Why work at ValGo
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.05}>
                <div className="rounded-lg border border-border p-6 h-full">
                  <h3 className="text-sm font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#fafbfc]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-2">
            Open roles
          </h2>
          <p className="text-muted text-sm mb-10">
            Don't see a fit? Email us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:underline">
              {SITE.email}
            </a>{" "}
            with your CV and what you'd like to work on.
          </p>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 0.05}>
                <div className="rounded-lg bg-white border border-border p-6 hover:shadow-card transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {role.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted mt-3 leading-relaxed max-w-2xl">
                        {role.description}
                      </p>
                    </div>
                    {role.title === "Student Ambassador" ? (
                      <Button href="/ambassadors" variant="outline" size="sm" className="shrink-0">
                        Learn more
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        href={`mailto:${SITE.email}?subject=Application: ${role.title}`}
                        variant="primary"
                        size="sm"
                        className="shrink-0"
                      >
                        Apply
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
