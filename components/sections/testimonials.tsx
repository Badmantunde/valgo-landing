"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

const typeLabels = {
  student: "Student",
  restaurant: "Restaurant Owner",
  rider: "Rider",
  university: "University Leader",
};

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

              <p className="text-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <cite className="text-sm font-semibold text-foreground not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
