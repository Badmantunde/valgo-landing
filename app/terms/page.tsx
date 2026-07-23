import { ContentPage } from "@/components/layout/content-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: `Terms of Service for using ${SITE.legalName}'s website, mobile applications, and related Platform services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of Service"
      description="Please read these terms carefully before using ValGo."
      lastUpdated="July 23, 2026"
      sections={[
        {
          heading: "1. Introduction",
          body: [
            "Welcome to ValGo.",
            'These Terms of Service ("Terms") govern your access to and use of the ValGo website, mobile applications, and related services (collectively, the "Platform"), operated by ValGo Innovations Limited ("ValGo", "we", "our", or "us").',
            "By creating an account or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use ValGo.",
            "Effective Date: July 23, 2026.",
          ],
        },
        {
          heading: "2. About ValGo",
          body: [
            "ValGo is a technology marketplace that connects customers with independent vendors and delivery riders.",
            "ValGo facilitates the ordering, payment, and delivery process but is not the manufacturer, producer, or owner of products sold by vendors unless expressly stated.",
          ],
        },
        {
          heading: "3. Eligibility",
          body: ["To use ValGo, you must:"],
          list: [
            "Be at least 16 years old, or have permission from a parent or legal guardian where permitted by law.",
            "Provide accurate and complete information.",
            "Maintain the confidentiality of your account credentials.",
            "Comply with these Terms and all applicable laws.",
          ],
          footer: ["You are responsible for all activities carried out under your account."],
        },
        {
          heading: "4. User Accounts",
          body: ["Users agree to:"],
          list: [
            "Provide accurate registration information.",
            "Keep account information up to date.",
            "Protect login credentials.",
            "Notify ValGo immediately of any unauthorized account access.",
          ],
          footer: [
            "ValGo reserves the right to suspend or terminate accounts that violate these Terms.",
          ],
        },
        {
          heading: "5. Orders",
          body: [
            "Orders placed through ValGo are offers to purchase products from independent vendors.",
            "Orders are subject to:",
          ],
          list: [
            "Vendor acceptance",
            "Product availability",
            "Successful payment authorization",
          ],
          footer: [
            "ValGo may cancel or decline an order where fraud, pricing errors, technical issues, or other legitimate concerns are identified.",
          ],
        },
        {
          heading: "6. Payments",
          body: [
            "Payments are processed through authorized third-party payment providers.",
            "By making a payment, you authorize ValGo and its payment partners to process your transaction.",
            "Applicable delivery fees, service fees, and taxes (where applicable) will be displayed before checkout.",
          ],
        },
        {
          heading: "7. Vendors",
          body: ["Vendors using ValGo agree to:"],
          list: [
            "Provide accurate business information.",
            "Sell only lawful products.",
            "Maintain product quality.",
            "Fulfil accepted orders promptly.",
            "Comply with all applicable laws and regulations.",
          ],
          footer: ["ValGo may suspend or remove vendors who breach these Terms."],
        },
        {
          heading: "8. Delivery Riders",
          body: ["Delivery riders agree to:"],
          list: [
            "Handle orders with reasonable care.",
            "Deliver to the correct customer.",
            "Comply with applicable traffic and safety laws.",
            "Conduct themselves professionally while using the Platform.",
          ],
        },
        {
          heading: "9. Pricing",
          body: [
            "Product prices are determined by vendors.",
            "Delivery fees and applicable service charges are calculated by ValGo and displayed before payment.",
            "Prices may change without prior notice until an order has been confirmed.",
          ],
        },
        {
          heading: "10. Cancellations and Refunds",
          body: [
            "Refunds and cancellations are governed by ValGo's Refund & Returns Policy.",
            "Eligibility for refunds depends on the circumstances of each order and will be assessed in accordance with that policy.",
          ],
        },
        {
          heading: "11. Prohibited Conduct",
          body: ["Users must not:"],
          list: [
            "Engage in fraudulent activity.",
            "Use stolen payment methods.",
            "Harass vendors, riders, or other users.",
            "Attempt unauthorized access to the Platform.",
            "Reverse engineer or interfere with the Platform.",
            "Upload malicious software or harmful content.",
            "Circumvent ValGo's payment system.",
          ],
          footer: [
            "Violations may result in immediate suspension or termination.",
          ],
        },
        {
          heading: "12. Intellectual Property",
          body: [
            "All ValGo trademarks, logos, software, designs, graphics, content, and branding are owned by or licensed to ValGo Innovations Limited.",
            "Users may not reproduce, copy, modify, distribute, or commercially exploit any part of the Platform without prior written permission.",
          ],
        },
        {
          heading: "13. Privacy",
          body: [
            "Your use of ValGo is subject to our Privacy Policy, which explains how we collect, use, and protect personal information.",
          ],
        },
        {
          heading: "14. Third-Party Services",
          body: [
            "The Platform may integrate third-party services, including payment providers, mapping services, communication tools, and analytics providers.",
            "ValGo is not responsible for the independent policies or practices of third-party services.",
          ],
        },
        {
          heading: "15. Service Availability",
          body: [
            "While we strive to provide uninterrupted service, ValGo does not guarantee that the Platform will always be available or free from errors.",
            "Maintenance, upgrades, technical issues, or circumstances beyond our control may temporarily affect availability.",
          ],
        },
        {
          heading: "16. Disclaimer",
          body: [
            "Products available on ValGo are supplied by independent vendors.",
            "While ValGo facilitates transactions and delivery, we do not guarantee the quality, safety, legality, suitability, or availability of products offered by vendors.",
            'To the extent permitted by applicable law, all services are provided on an "as is" and "as available" basis.',
          ],
        },
        {
          heading: "17. Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, ValGo Innovations Limited, its directors, employees, affiliates, and partners shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from:",
          ],
          list: [
            "Use of the Platform.",
            "Delayed deliveries.",
            "Vendor conduct.",
            "Product defects.",
            "Service interruptions.",
            "Loss of profits, revenue, or data.",
          ],
          footer: [
            "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
          ],
        },
        {
          heading: "18. Indemnification",
          body: [
            "You agree to indemnify and hold harmless ValGo Innovations Limited, its directors, employees, and affiliates from claims, damages, liabilities, and expenses arising from:",
          ],
          list: [
            "Your misuse of the Platform.",
            "Your violation of these Terms.",
            "Your violation of applicable law.",
            "Your infringement of the rights of any third party.",
          ],
        },
        {
          heading: "19. Suspension and Termination",
          body: [
            "ValGo reserves the right to suspend or terminate accounts, remove listings, or restrict access where users violate these Terms or engage in fraudulent, unlawful, or abusive conduct.",
          ],
        },
        {
          heading: "20. Changes to These Terms",
          body: [
            "We may revise these Terms from time to time.",
            'Material updates will be posted on our Platform with an updated "Last Updated" date.',
            "Continued use of ValGo after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "21. Governing Law",
          body: [
            "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.",
            "Any disputes arising from these Terms shall be subject to the jurisdiction of the competent courts of Nigeria, except where applicable law provides otherwise.",
          ],
        },
        {
          heading: "22. Contact Us",
          body: [
            "If you have any questions regarding these Terms, please contact us:",
            SITE.legalName,
            `Email: ${SITE.email}`,
            `Support: ${SITE.supportEmail}`,
            `Website: ${SITE.url}`,
          ],
        },
      ]}
    />
  );
}
