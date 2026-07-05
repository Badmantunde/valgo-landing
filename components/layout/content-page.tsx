import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

interface ContentSection {
  heading: string;
  body: string[];
  list?: string[];
}

interface ContentPageProps {
  eyebrow?: string;
  title: string;
  description?: string;
  lastUpdated?: string;
  sections: ContentSection[];
  className?: string;
}

export function ContentPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
  className,
}: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className={cn("py-16 sm:py-20 bg-white", className)}>
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {lastUpdated && (
            <p className="text-sm text-muted mb-10">Last updated: {lastUpdated}</p>
          )}

          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-muted text-sm leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
