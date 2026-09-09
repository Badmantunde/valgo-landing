import { ArrowUpRight, MapPin, Clock, Briefcase, Zap, Compass, Target, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { createPageMetadata } from "@/lib/metadata";
import { SITE, LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Careers & Open Roles | Join ValGo",
  description: `Join the ValGo team building Nigeria's student-first platform. Open roles at our launch campus at ${LAUNCH.university} in ${LAUNCH.city} and remote nationwide.`,
  path: "/careers",
  keywords: [
    "ValGo careers",
    "startup jobs Nigeria",
    "tech jobs Ago Iwoye",
    "campus operations jobs",
    "student internships Nigeria",
  ],
});

const openRoles = [
  {
    title: "Campus Operations Lead",
    location: "Ago Iwoye (On-site)",
    department: "Operations",
    type: "Full-time",
    description:
      "Own vendor onboarding, rider dispatch efficiency, and day-to-day ground logistics for our first campus launch at OOU in Ago Iwoye, creating the execution playbook for nationwide expansion.",
  },
  {
    title: "Growth & Campus Marketing Associate",
    location: "Hybrid (Ago Iwoye / Lagos)",
    department: "Growth",
    type: "Full-time",
    description:
      "Drive student user acquisition across faculties, student lodges, and campus events through grassroots campaigns, ambassador network leadership, and digital content.",
  },
  {
    title: "Mobile & Full-Stack Software Engineer",
    location: "Remote (Nigeria)",
    department: "Engineering",
    type: "Full-time",
    description:
      "Architect and ship core features for the ValGo customer, vendor, and rider applications. Build resilient offline-first systems, real-time GPS dispatch, and seamless payment flows.",
  },
  {
    title: "Student Campus Ambassador",
    location: "OOU Campus & Student Lodges",
    department: "Community",
    type: "Part-time",
    description:
      "Lead ValGo activations in your faculty or hall of residence. Earn dining rewards, referral bonuses, and fast-track consideration for post-graduation tech roles.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Move fast, stay grounded",
    description:
      "We ship quickly but never at the expense of our campus communities. Every feature starts with solving a real student or vendor pain point.",
  },
  {
    icon: Compass,
    title: "Built for Nigerian reality",
    description:
      "Local context is our moat. We optimize for spotty campus connectivity, hostel gate curfews, and the unique tempo of university semesters.",
  },
  {
    icon: Target,
    title: "Ownership & high impact",
    description:
      "Small team, high autonomy. Everyone at ValGo touches the live product. Your code, marketing copy, or logistics strategy touches thousands of students within days.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join The ValGo Team"
        icon={Briefcase}
        title="Help Us Build the Future"
        accentTitle="Of Campus Life & Commerce."
        description="ValGo is an ambitious, product-focused team launching at our first university in Ago Iwoye, on a mission to power commerce and fast delivery for students nationwide."
      />

      <CheckeredStrip size="md" variant="blue-white" />

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Our Culture &amp; Operating Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Why Build With ValGo?
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              We are tackling the unaddressed infrastructure of university towns by building high-utility tools for students, kitchens, and couriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeUp key={value.title} delay={i * 0.08}>
                  <div className="rounded-xl border border-border bg-slate-50/50 p-6 sm:p-7 h-full hover:border-blue-300 hover:bg-white hover:shadow-card transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 sm:py-24 bg-[#fafbfc]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Current Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                Open Positions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md">
              Don&apos;t see a role that fits? Reach out to us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-blue-600 font-semibold hover:underline">
                {SITE.email}
              </a>{" "}
              with your portfolio and how you can help.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 0.05}>
                <div className="rounded-xl bg-white border border-border p-6 sm:p-7 shadow-xs hover:border-blue-300 hover:shadow-card transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 border border-blue-100">
                          {role.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted font-medium">
                          <MapPin className="h-3 w-3 text-muted" />
                          {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted font-medium">
                          <Clock className="h-3 w-3 text-muted" />
                          {role.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                        {role.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed max-w-3xl">
                        {role.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {role.title === "Student Campus Ambassador" ? (
                        <Button href="/ambassadors" variant="primary" size="md" className="font-bold">
                          View Program
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                          variant="primary"
                          size="md"
                          className="font-bold"
                        >
                          Apply for Role
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* General Application Banner */}
          <div className="mt-14 rounded-xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Build the future of campus tech with us
                </h4>
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  Send your resume, GitHub, or portfolio directly to the founding team at {SITE.email}.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${SITE.email}?subject=General Application`}
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Send Open Application
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
