import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ExplorePages() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeUp className="max-w-xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Explore The Network
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground uppercase">
            Everything You Need, One Campus At A Time
          </h2>
          <p className="mt-2 text-muted text-sm leading-relaxed">
            From late-night hostel food deliveries and weekly grocery runs to student earning gigs. Dive into our services, verified partners, and campus initiatives.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden shadow-sm">
          <StaggerItem>
            <a
              href="https://usevalgo.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-blue-50/50 p-5 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <div>
                <span className="block text-sm font-bold text-foreground group-hover:text-white transition-colors">
                  Order Food on Web
                </span>
                <span className="block text-xs text-blue-600 group-hover:text-blue-100 transition-colors">
                  usevalgo.com/store &bull; Live Now
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-blue-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://vendor.usevalgo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-blue-50/50 p-5 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <div>
                <span className="block text-sm font-bold text-foreground group-hover:text-white transition-colors">
                  Vendor Web Portal
                </span>
                <span className="block text-xs text-blue-600 group-hover:text-blue-100 transition-colors">
                  vendor.usevalgo.com &bull; Kitchen Dashboard
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-blue-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </StaggerItem>

          {NAV_LINKS.map((link) => (
            <StaggerItem key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center justify-between bg-white p-5 hover:bg-blue-50/70 transition-all duration-300"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-blue-600 transition-colors">
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
