import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { AMBASSADOR_IMAGES } from "@/data/ambassador-images";

export function AmbassadorIntro() {
  return (
    <section id="ambassadors" className="py-16 sm:py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <SectionHeader
              eyebrow="Ambassador Program"
              title="Lead your campus. Shape the future."
              description="ValGo Student Ambassadors are the heartbeat of our campus communities, driving growth, building culture, and earning while they lead."
              align="left"
            />

            <Button href="#apply" variant="primary" size="lg" className="mt-8">
              Apply Now
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden border border-border shadow-card">
              <Image
                src={AMBASSADOR_IMAGES.campusOutreach}
                alt="ValGo campus ambassador talking to students about the app on campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                Campus outreach · Student ambassadors
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
