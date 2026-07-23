import { ContentPage } from "@/components/layout/content-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.legalName} collects, uses, discloses, stores, and protects your personal information when you use our Platform.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we collect, use, disclose, store, and protect your personal information when you use ValGo."
      lastUpdated="July 23, 2026"
      sections={[
        {
          heading: "1. Introduction",
          body: [
            "Welcome to ValGo.",
            'ValGo Innovations Limited ("ValGo", "we", "our", or "us") operates a digital marketplace that connects customers with independent vendors and delivery riders. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you use our website, mobile applications, and related services (collectively, the "Platform").',
            "By accessing or using our Platform, you acknowledge that you have read and understood this Privacy Policy.",
            "Effective Date: July 23, 2026.",
          ],
        },
        {
          heading: "2. Information We Collect",
          body: [
            "Depending on how you use ValGo, we may collect the following information.",
          ],
          subsections: [
            {
              heading: "Personal Information",
              list: [
                "Full name",
                "Email address",
                "Phone number",
                "Profile photo (optional)",
                "Date of birth (where required)",
                "Delivery addresses",
                "Campus or institution information",
                "Account credentials",
              ],
            },
            {
              heading: "Vendor Information",
              body: ["To verify and onboard vendors, we may collect:"],
              list: [
                "Business name",
                "Business address",
                "Business registration documents (where applicable)",
                "Government-issued identification",
                "Bank account information",
                "Tax or regulatory information where required",
              ],
            },
            {
              heading: "Rider Information",
              body: ["For riders, we may collect:"],
              list: [
                "Identification documents",
                "Contact information",
                "Vehicle or bicycle information",
                "Bank account details",
                "Rider verification information",
              ],
            },
            {
              heading: "Order Information",
              list: [
                "Orders placed",
                "Products purchased",
                "Order history",
                "Delivery instructions",
                "Transaction history",
              ],
            },
            {
              heading: "Device Information",
              body: ["We may automatically collect:"],
              list: [
                "IP address",
                "Device model",
                "Operating system",
                "Browser type",
                "App version",
                "Device identifiers",
                "Crash logs",
                "Diagnostic information",
              ],
            },
            {
              heading: "Location Information",
              body: [
                "With your permission, ValGo may access your device's location to:",
              ],
              list: [
                "Display nearby vendors",
                "Calculate delivery fees",
                "Assign riders",
                "Provide live order tracking",
                "Improve delivery accuracy",
              ],
            },
          ],
          footer: [
            "You can disable location permissions through your device settings; however, some services may not function properly.",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          body: ["We use your information to:"],
          list: [
            "Create and manage your account",
            "Process orders and payments",
            "Deliver products and services",
            "Verify vendor and rider identities",
            "Detect fraud and unauthorized activities",
            "Improve our products and services",
            "Provide customer support",
            "Communicate important service updates",
            "Comply with legal and regulatory obligations",
            "Enforce our Terms and Policies",
          ],
        },
        {
          heading: "4. Payments",
          body: [
            "Payments made on ValGo are processed through secure third-party payment providers.",
            "ValGo does not store your debit or credit card details on its servers.",
            "Payment processors may collect payment information in accordance with their own privacy policies.",
          ],
        },
        {
          heading: "5. Cookies and Similar Technologies",
          body: ["Our website may use cookies and similar technologies to:"],
          list: [
            "Remember your preferences",
            "Keep you signed in",
            "Improve website performance",
            "Analyze traffic and usage",
            "Enhance security",
          ],
          footer: [
            "You may disable cookies through your browser settings, although some features may become unavailable.",
          ],
        },
        {
          heading: "6. Sharing Your Information",
          body: ["We may share your information only when necessary with:"],
          list: [
            "Vendors fulfilling your orders",
            "Delivery riders delivering your orders",
            "Payment processors",
            "Identity verification providers",
            "Cloud hosting providers",
            "Customer support providers",
            "Analytics providers",
            "Government or regulatory authorities where legally required",
          ],
          footer: ["We do not sell your personal information to third parties."],
        },
        {
          heading: "7. Data Security",
          body: [
            "We implement reasonable technical, administrative, and organizational safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
            "These measures include:",
          ],
          list: [
            "Encrypted communications (HTTPS/TLS)",
            "Secure authentication",
            "Role-based access controls",
            "Monitoring and logging",
            "Regular security reviews",
          ],
          footer: [
            "While we strive to protect your information, no method of electronic storage or internet transmission is completely secure.",
          ],
        },
        {
          heading: "8. Data Retention",
          body: ["We retain personal information only for as long as necessary to:"],
          list: [
            "Provide our services",
            "Meet legal and regulatory obligations",
            "Resolve disputes",
            "Prevent fraud",
            "Enforce our agreements",
          ],
          footer: [
            "When information is no longer required, it will be securely deleted or anonymized where appropriate.",
          ],
        },
        {
          heading: "9. Your Privacy Rights",
          body: ["Subject to applicable law, you may have the right to:"],
          list: [
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Object to certain processing activities",
            "Restrict processing",
            "Withdraw consent where processing is based on consent",
            "Request a copy of your information in a portable format",
            "Lodge a complaint with the appropriate data protection authority",
          ],
          footer: ["Requests may be subject to identity verification."],
        },
        {
          heading: "10. Children's Privacy",
          body: [
            "ValGo is not intended for children under the age of 13.",
            "We do not knowingly collect personal information from children under this age. If we become aware that such information has been collected, we will take appropriate steps to delete it.",
          ],
        },
        {
          heading: "11. Third-Party Services",
          body: [
            "Our Platform may contain links to third-party websites or integrate third-party services.",
            "These third parties operate independently and are responsible for their own privacy practices. We encourage users to review their privacy policies before providing personal information.",
          ],
        },
        {
          heading: "12. International Data Transfers",
          body: [
            "Your information may be processed or stored in jurisdictions outside Nigeria where our service providers operate.",
            "Where such transfers occur, we take reasonable steps to ensure appropriate safeguards are in place in accordance with applicable data protection laws.",
          ],
        },
        {
          heading: "13. Changes to This Privacy Policy",
          body: [
            "We may update this Privacy Policy from time to time.",
            'When material changes are made, we will update the "Last Updated" date and, where appropriate, notify users through the Platform or other reasonable means.',
            "Continued use of ValGo after changes become effective constitutes acceptance of the revised Privacy Policy.",
          ],
        },
        {
          heading: "14. Contact Us",
          body: [
            "If you have any questions about this Privacy Policy or how your personal information is handled, please contact us:",
            SITE.legalName,
            `Email: ${SITE.email}`,
            `Website: ${SITE.url}`,
            `Support: ${SITE.supportEmail}`,
          ],
        },
      ]}
    />
  );
}
