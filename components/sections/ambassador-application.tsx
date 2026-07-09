"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ambassadorFormFields } from "@/data/ambassador-form";
import type { WaitlistField } from "@/data/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { formDataToObject, formSubmitErrorMessage, submitForm } from "@/lib/form-submit";

function FormField({ field }: { field: WaitlistField }) {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        {field.label}
        {field.required && <span className="text-blue-500 ml-0.5">*</span>}
      </label>
      {field.hint && (
        <p className="text-xs text-muted mb-2 leading-relaxed">{field.hint}</p>
      )}
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
  );
}

export function AmbassadorApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;

    try {
      await submitForm("New ValGo Ambassador application", {
        role: "Ambassador",
        ...formDataToObject(form),
      });
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : formSubmitErrorMessage());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="relative mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Apply"
          title="Become a ValGo ambassador"
          description="Tell us about yourself, your social presence, and the communities you're part of. We'll review applications and reach out before launch."
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 rounded-[var(--radius-lg)] border border-blue-200 bg-blue-50 p-8 text-center"
            >
              <CheckCircle2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground">
                Application received!
              </h3>
              <p className="text-muted mt-2">
                Thanks for applying. We&apos;ll review your details and get back
                to you with next steps.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 space-y-4"
            >
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {ambassadorFormFields.map((field) => (
                <FormField key={field.name} field={field} />
              ))}

              {error && (
                <p className="text-sm text-red-600 text-center" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit application"}
                {!submitting && <ArrowUpRight className="h-4 w-4" />}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
