import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function WhyValGo() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-blue-50/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What's available"
          title="From food to finance, all in one app"
          description="Our asset-light logistics model powers a multi-service ecosystem, from today's food delivery to tomorrow's financial services."
        />

        <StaggerContainer className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group relative rounded-lg bg-white border border-border p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-9 w-9 rounded bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    {service.status === "coming-soon" && (
                      <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                        Soon
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                    {service.description}
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
