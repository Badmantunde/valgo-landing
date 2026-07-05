import { ContentPage } from "@/components/layout/content-page";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH, SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How ValGo collects, uses, and protects your personal information when you use our website, apps, and delivery services in Nigeria.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we handle your data when you use ValGo's website, apps, and services."
      lastUpdated="July 1, 2026"
      sections={[
        {
          heading: "Introduction",
          body: [
            `ValGo Technologies Ltd ("ValGo", "we", "us") operates the ValGo platform, including our website at ${SITE.url}, mobile applications, and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.`,
            "By using ValGo, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly, information generated through your use of our services, and information from third parties where permitted by law.",
          ],
          list: [
            "Account information: name, email address, phone number, and university affiliation when you register or join a waitlist.",
            "Order and transaction data: delivery addresses, order history, payment method details (processed by secure payment partners), and communication with vendors or riders.",
            "Location data: GPS and address information needed to fulfill deliveries, with your permission through the app.",
            "Device and usage data: device type, operating system, app version, IP address, and how you interact with our platform.",
            "Partner data: business name, menu details, and operational information from vendors and riders who join the platform.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use the information we collect to operate, improve, and secure the ValGo platform.",
          ],
          list: [
            "Process and deliver orders, including sharing necessary details with vendors and riders.",
            "Communicate with you about orders, account updates, and launch announcements.",
            "Improve our products, analyze usage patterns, and develop new features.",
            "Prevent fraud, enforce our terms, and comply with applicable laws.",
            "Send marketing communications where you have opted in. You can unsubscribe at any time.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "We do not sell your personal information. We share data only as needed to provide our services or as required by law.",
          ],
          list: [
            "Vendors and riders receive the information necessary to fulfill your order (name, phone, delivery address, order details).",
            "Payment processors handle transaction data under their own privacy policies.",
            "Service providers who assist with hosting, analytics, customer support, and communications, bound by confidentiality obligations.",
            "Law enforcement or regulatory bodies when required by applicable Nigerian law.",
          ],
        },
        {
          heading: "Data retention and security",
          body: [
            "We retain your information for as long as your account is active or as needed to provide services, comply with legal obligations, and resolve disputes.",
            "We implement appropriate technical and organizational measures to protect your data, including encryption in transit and access controls. No method of transmission over the internet is 100% secure.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on applicable law, you may have the right to access, correct, or delete your personal information, withdraw consent for marketing, or request a copy of data we hold about you.",
            `To exercise these rights, contact us at ${SITE.email}. We will respond within a reasonable timeframe.`,
          ],
        },
        {
          heading: "Children's privacy",
          body: [
            "ValGo is intended for users aged 16 and above. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the 'Last updated' date above.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            `If you have questions about this Privacy Policy or our data practices, contact ValGo Technologies Ltd at ${SITE.email}.`,
            `Registered address: ${LAUNCH.location}, Nigeria.`,
          ],
        },
      ]}
    />
  );
}
