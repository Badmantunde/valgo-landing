"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

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
    const payload: Record<string, string> = {
      _subject: "New ValGo newsletter signup",
      _template: "table",
      _captcha: "false",
      source: "Footer newsletter",
    };
    new FormData(form).forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
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
