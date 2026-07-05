import { timeline } from "@/data/growth";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp } from "@/components/ui/motion";

export function BusinessGrowth() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Vision"
          title="Building the student super app"
          description="ValGo's roadmap extends far beyond food delivery. We're building the operating system for student life across Nigeria."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-blue-200 sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((event, i) => (
              <FadeUp key={event.year} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="sm:w-1/2 sm:text-right flex sm:justify-end">
                    <div
                      className={`sm:max-w-md ${
                        i % 2 === 0 ? "sm:text-right" : "sm:text-left sm:ml-auto"
                      }`}
                    >
                      <span className="inline-block text-4xl sm:text-5xl font-bold text-blue-500/20">
                        {event.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                        {event.title}
                      </h3>
                      <p className="text-muted mt-3 leading-relaxed text-sm sm:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/30 z-10">
                    {i + 1}
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
