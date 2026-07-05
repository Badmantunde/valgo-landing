"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { waitlistRoles, type WaitlistRole } from "@/data/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { LAUNCH } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WaitlistProps {
  defaultRole?: WaitlistRole;
  showHeader?: boolean;
}

export function Waitlist({ defaultRole = "customer", showHeader = true }: WaitlistProps) {
  const [role, setRole] = useState<WaitlistRole>(defaultRole);
  const [submitted, setSubmitted] = useState(false);

  const config = waitlistRoles.find((r) => r.id === role)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 sm:py-24 bg-white border-t border-border">

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            eyebrow="Join ValGo"
            title={`Join the ${LAUNCH.city} launch`}
            description={`ValGo is a Nigerian platform launching first at ${LAUNCH.university}. Join the waitlist and we'll expand to more universities soon.`}
          />
        )}

        <div className="mt-10">
          <div className="flex rounded-md border border-border bg-[#fafbfc] p-1 gap-1">
            {waitlistRoles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  setRole(r.id);
                  setSubmitted(false);
                }}
                className={cn(
                  "flex-1 py-2 px-2 sm:px-3 rounded text-xs sm:text-sm font-medium transition-colors",
                  role === r.id
                    ? "bg-white text-blue-600 shadow-sm border border-border"
                    : "text-muted hover:text-foreground"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted text-center mt-4">{config.description}</p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-[var(--radius-lg)] border border-blue-200 bg-blue-50 p-8 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground">
                  You&apos;re on the list!
                </h3>
                <p className="text-muted mt-2">
                  We&apos;ll reach out with launch updates from ValGo.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key={role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >
                {config.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-blue-500 ml-0.5">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className="w-full h-10 px-3 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full h-10 px-3 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}

                <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                  Join as {config.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
