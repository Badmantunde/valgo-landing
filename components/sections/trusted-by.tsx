import { trustedPartners } from "@/data/showcase";
import { FadeUp } from "@/components/ui/motion";

export function TrustedBy() {
  return (
    <section className="py-12 sm:py-14 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-center text-xs font-medium text-muted uppercase tracking-widest mb-8">
            Launch partners · Starting in Ago Iwoye
          </p>
        </FadeUp>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {[...trustedPartners, ...trustedPartners].map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="flex shrink-0 items-center gap-2.5 px-4 py-2 border border-border rounded bg-[#fafbfc]"
              >
                <span className="h-7 w-7 flex items-center justify-center bg-blue-50 text-blue-600 text-xs font-semibold rounded">
                  {partner.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground whitespace-nowrap">
                    {partner.name}
                  </p>
                  <p className="text-[10px] text-muted capitalize">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
