"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Students are already waiting for ValGo"
          description="On the waitlist, in group chats, and around campus, students are excited for launch and happy something built for them is almost here."
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
                On the waitlist
              </Badge>

              <p className="text-foreground leading-relaxed flex-1 text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold ring-1 ring-blue-200/80"
                  aria-hidden="true"
                >
                  {getInitial(testimonial.author)}
                </div>
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
