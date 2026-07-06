import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, VISION } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ExplorePages() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeUp className="max-w-xl mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-3">
            Explore
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Built for every campus, starting in Nigeria
          </h2>
          <p className="mt-3 text-muted text-sm leading-relaxed">
            ValGo is a Nigerian student platform. {VISION.launchNote} Explore our
            services, partners, and how to get involved at launch.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {NAV_LINKS.map((link) => (
            <StaggerItem key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center justify-between bg-white p-5 hover:bg-blue-50/60 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-blue-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
