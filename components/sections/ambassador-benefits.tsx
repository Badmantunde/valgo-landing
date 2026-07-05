import {
  Crown,
  Gift,
  Shirt,
  Briefcase,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const benefits = [
  {
    icon: Crown,
    title: "Campus Leadership",
    description:
      "Lead ValGo initiatives on your campus and build real startup experience.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    description:
      "Earn commission for every student, vendor, and rider you bring to ValGo.",
  },
  {
    icon: Shirt,
    title: "Exclusive Merch",
    description:
      "Get ValGo-branded gear and early access to limited edition drops.",
  },
  {
    icon: Briefcase,
    title: "Internship Pathway",
    description:
      "Top ambassadors receive priority consideration for ValGo internships.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Organize campus events, food festivals, and student engagement activations.",
  },
];

export function AmbassadorBenefits() {
  return (
    <section className="py-16 sm:py-20 bg-[#fafbfc]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why join"
          title="Perks, rewards, and real experience"
          description="Ambassadors get more than a title. You build skills, earn rewards, and help shape how ValGo grows on campus."
          align="left"
          className="mb-10 max-w-2xl"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="bg-white p-6 h-full hover:bg-blue-50/30 transition-colors">
                  <div className="h-9 w-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
