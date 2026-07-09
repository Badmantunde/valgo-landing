"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORM_SUBMIT_ACTION, formSubmitNextUrl } from "@/lib/form-submit";

function NewsletterFormInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const nextUrl = formSubmitNextUrl(pathname, "newsletter=1");

  useEffect(() => {
    if (searchParams.get("newsletter") === "1") {
      setSubmitted(true);
    }
  }, [searchParams]);

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-blue-100">
        <Check className="h-4 w-4 text-blue-300" />
        Thanks! We&apos;ll keep you posted on launch updates.
      </div>
    );
  }

  return (
    <form action={FORM_SUBMIT_ACTION} method="POST" className="flex flex-col gap-2">
      <input type="hidden" name="_subject" value="New ValGo newsletter signup" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="source" value="Footer newsletter" />

      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="flex-1 h-10 px-4 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Email for newsletter"
        />
        <Button variant="primary" size="md" type="submit">
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}

export function NewsletterForm() {
  return (
    <Suspense fallback={null}>
      <NewsletterFormInner />
    </Suspense>
  );
}
