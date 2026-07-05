import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ValGo uses cookies and similar technologies on our website.`,
};

export default function CookiesPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="This policy explains how ValGo uses cookies and similar tracking technologies."
      lastUpdated="July 1, 2026"
      sections={[
        {
          heading: "What are cookies",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience.",
            "We also use similar technologies such as local storage, session storage, and pixels that function in comparable ways.",
          ],
        },
        {
          heading: "How we use cookies",
          body: [
            "ValGo uses cookies on our website and web-based tools for the following purposes:",
          ],
          list: [
            "Essential cookies: Required for the website to function, including security, load balancing, and remembering your cookie preferences.",
            "Analytics cookies: Help us understand how visitors use our site, which pages are popular, and where users come from. We use this data to improve our website and marketing.",
            "Functional cookies: Remember your preferences such as language settings and form inputs to provide a smoother experience.",
            "Marketing cookies: Used to measure the effectiveness of our advertising campaigns and deliver relevant content. These are only set with your consent where required.",
          ],
        },
        {
          heading: "Third-party cookies",
          body: [
            "Some cookies are placed by third-party services we use, such as analytics providers and social media platforms. These third parties have their own privacy policies governing how they use the data they collect.",
          ],
        },
        {
          heading: "Cookies in our mobile apps",
          body: [
            "Our mobile applications may use device identifiers and similar technologies rather than browser cookies. These serve comparable purposes such as keeping you logged in, analytics, and crash reporting. Refer to our Privacy Policy for more details on app data collection.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling essential cookies may affect website functionality.",
            "To opt out of analytics tracking, you can use browser extensions or adjust your browser's privacy settings. Where we display a cookie consent banner, you can update your preferences at any time.",
          ],
        },
        {
          heading: "Updates to this policy",
          body: [
            "We may update this Cookie Policy as our use of cookies changes or as regulations evolve. Check this page periodically for the latest version.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            `If you have questions about our use of cookies, contact us at ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
