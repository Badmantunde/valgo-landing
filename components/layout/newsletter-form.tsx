"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formSubmitErrorMessage, submitForm } from "@/lib/form-submit";

export function NewsletterForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      await submitForm("New ValGo newsletter signup", {
        email,
        source: "Footer newsletter",
      });
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : formSubmitErrorMessage());
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-blue-100">
        <Check className="h-4 w-4 text-blue-300" />
        Thanks! We&apos;ll keep you posted on launch updates.
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="flex-1 h-10 px-4 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Email for newsletter"
        />
        <Button variant="primary" size="md" type="submit" disabled={submitting}>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
      {error && (
        <p className="text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
