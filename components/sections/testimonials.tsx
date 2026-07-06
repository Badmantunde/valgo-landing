"use client";

import { motion } from "framer-motion";
import { testimonials, type TestimonialType } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const typeLabels: Record<TestimonialType, string> = {
  student: "Student",
  restaurant: "Restaurant Owner",
  rider: "Rider",
  university: "University Leader",
};

const avatarStyles: Record<TestimonialType, string> = {
  student: "bg-blue-100 text-blue-700 ring-blue-200/80",
  restaurant: "bg-amber-100 text-amber-800 ring-amber-200/80",
  rider: "bg-emerald-100 text-emerald-800 ring-emerald-200/80",
  university: "bg-slate-100 text-slate-700 ring-slate-200/80",
};

function getInitial(name: string) {
  const letter = name.replace(/^Dr\.\s+/i, "").trim().charAt(0);
  return letter.toUpperCase();
}

function TestimonialAvatar({
  author,
  type,
}: {
  author: string;
  type: TestimonialType;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-1",
        avatarStyles[type]
      )}
      aria-hidden="true"
    >
      {getInitial(author)}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by students, vendors & riders"
          description="Hear from students, vendors, and riders helping build ValGo, starting at our first campus and growing nationwide."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <Badge variant="default" className="self-start mb-4">
                {typeLabels[testimonial.type]}
              </Badge>

              <p className="text-foreground leading-relaxed flex-1 text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <TestimonialAvatar
                  author={testimonial.author}
                  type={testimonial.type}
                />
                <div className="min-w-0">
                  <cite className="text-sm font-semibold text-foreground not-italic block truncate">
                    {testimonial.author}
                  </cite>
                  <p className="text-xs text-muted leading-snug mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
