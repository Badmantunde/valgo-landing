import { ContentPage } from "@/components/layout/content-page";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH, SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using ValGo's delivery platform, customer app, vendor dashboard, and rider services in Nigeria.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of Service"
      description="Please read these terms carefully before using ValGo."
      lastUpdated="July 1, 2026"
      sections={[
        {
          heading: "Agreement to terms",
          body: [
            `These Terms of Service ("Terms") govern your access to and use of the ValGo platform operated by ValGo Technologies Ltd, including our website, mobile applications, and related services.`,
            "By creating an account, placing an order, or otherwise using ValGo, you agree to be bound by these Terms. If you do not agree, you may not use our services.",
          ],
        },
        {
          heading: "Eligibility",
          body: [
            "You must be at least 16 years old to use ValGo. By using our services, you represent that you meet this requirement and have the legal capacity to enter into these Terms.",
            "Vendor and rider partners must provide accurate business or personal information and maintain any licenses or permits required to operate in their jurisdiction.",
          ],
        },
        {
          heading: "Our services",
          body: [
            "ValGo is a technology platform that connects customers with independent vendors and delivery riders. ValGo does not prepare food, sell products directly, or employ riders as delivery agents unless explicitly stated.",
            `We are launching first in ${LAUNCH.city} at ${LAUNCH.university}. Service availability, delivery areas, and features may vary by location and are subject to change during our rollout.`,
          ],
        },
        {
          heading: "Accounts and registration",
          body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
            "You agree to provide accurate, current, and complete information during registration and to update it as needed.",
          ],
        },
        {
          heading: "Orders and payments",
          body: [
            "When you place an order through ValGo, you enter into a direct transaction with the vendor for goods and services. ValGo facilitates the order, payment, and delivery coordination.",
          ],
          list: [
            "Prices displayed in the app are set by vendors and may change without notice.",
            "Payment is processed at the time of order unless otherwise stated. Accepted methods include card, bank transfer, and other options shown in the app.",
            "Delivery fees, service fees, and applicable taxes are shown before you confirm your order.",
            "Refunds and cancellations are handled according to our refund policy and the vendor's preparation status at the time of cancellation.",
          ],
        },
        {
          heading: "Vendor and rider obligations",
          body: [
            "Vendors must provide accurate menu information, maintain food safety standards, and fulfill orders in a timely manner. Riders must deliver orders safely and professionally.",
            "ValGo reserves the right to suspend or remove partners who violate these Terms, receive consistently poor ratings, or engage in fraudulent activity.",
          ],
        },
        {
          heading: "Prohibited conduct",
          body: ["You agree not to:"],
          list: [
            "Use ValGo for any unlawful purpose or in violation of any applicable regulations.",
            "Submit false orders, abuse promotions, or attempt to defraud vendors, riders, or ValGo.",
            "Harass, threaten, or discriminate against other users, vendors, or riders.",
            "Reverse engineer, scrape, or interfere with the platform's operation or security.",
            "Use ValGo to deliver prohibited items including illegal substances, weapons, or hazardous materials.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content, trademarks, logos, and software on the ValGo platform are owned by ValGo Technologies Ltd or its licensors. You may not copy, modify, or distribute our intellectual property without written permission.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "ValGo provides the platform on an 'as is' basis. To the fullest extent permitted by Nigerian law, ValGo is not liable for indirect, incidental, or consequential damages arising from your use of the platform.",
            "ValGo's total liability for any claim related to our services is limited to the amount you paid to ValGo for the relevant order in the 30 days preceding the claim.",
          ],
        },
        {
          heading: "Dispute resolution",
          body: [
            "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to the courts of Ogun State, Nigeria.",
          ],
        },
        {
          heading: "Changes to terms",
          body: [
            "We may modify these Terms at any time. Material changes will be communicated through the app or by email. Continued use of ValGo after changes take effect constitutes acceptance of the updated Terms.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about these Terms? Contact us at ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
