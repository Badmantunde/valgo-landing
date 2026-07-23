import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

interface ContentSubsection {
  heading: string;
  body?: string[];
  list?: string[];
}

interface ContentSection {
  heading: string;
  body: string[];
  list?: string[];
  subsections?: ContentSubsection[];
  footer?: string[];
}

interface ContentPageProps {
  eyebrow?: string;
  title: string;
  description?: string;
  lastUpdated?: string;
  sections: ContentSection[];
  className?: string;
}

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-muted text-sm leading-relaxed"
        >
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  );
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
                {section.list && <ContentList items={section.list} />}
                {section.subsections && (
                  <div className="mt-6 space-y-6">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.heading}>
                        <h3 className="text-base font-semibold text-foreground">
                          {subsection.heading}
                        </h3>
                        {subsection.body && (
                          <div className="mt-3 space-y-3">
                            {subsection.body.map((paragraph) => (
                              <p
                                key={paragraph.slice(0, 40)}
                                className="text-muted leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                        {subsection.list && <ContentList items={subsection.list} />}
                      </div>
                    ))}
                  </div>
                )}
                {section.footer && (
                  <div className="mt-4 space-y-4">
                    {section.footer.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-muted leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
