import { ContentPage } from "@/components/layout/content-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Account Deletion Request",
  description: "Learn how to request deletion of your ValGo account and personal data, what information is deleted or retained, and processing timelines.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return (
    <ContentPage
      eyebrow="Legal & Privacy"
      title="Account Deletion Request"
      description="Information on how to delete your ValGo account and manage your data."
      lastUpdated="August 11, 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            `ValGo Technologies Ltd ("ValGo", "we", "us") respects your privacy and ensures you have full control over your personal information. You can request the permanent deletion of your ValGo account and associated personal data at any time.`,
            "This page explains the step-by-step process for requesting account deletion, what data is permanently removed, what limited information may be retained for regulatory compliance, and processing timelines.",
          ],
        },
        {
          heading: "How to request account deletion",
          body: [
            "We offer two ways to request the deletion of your account and personal data:",
          ],
          list: [
            "Option 1 (In-App): Open the ValGo app, navigate to Profile / Account Settings, tap 'Delete Account', and confirm your request.",
            `Option 2 (Email / Web): Send an email to support@usevalgo.com or ${SITE.email} from the email address registered with your ValGo account with the subject line 'Account Deletion Request'. Please include your registered name, email, and phone number so we can verify ownership of the account.`,
          ],
        },
        {
          heading: "What data is deleted vs. retained",
          body: [
            "When your account deletion request is processed, we strictly manage your data in accordance with privacy laws and regulatory guidelines:",
          ],
          list: [
            "Deleted data: Your profile details (name, email, phone number, university affiliation), saved delivery addresses, push notification tokens, account credentials, and personal preferences will be permanently purged.",
            "Retained data: Historical financial transaction records and invoice logs are retained in anonymized format strictly as required by applicable Nigerian tax laws and accounting regulations. Security and fraud logs may be retained for a limited statutory period.",
          ],
        },
        {
          heading: "Processing timeframe",
          body: [
            "Account deletion requests submitted in-app or via email are processed within 30 days of receipt.",
            "Once processed, you will receive a confirmation email, and your account will be permanently deactivated. You will no longer be able to log in or access order history with those credentials.",
          ],
        },
        {
          heading: "Scope of deletion (Full deletion only)",
          body: [
            "ValGo supports full account deletion. Requesting account deletion will remove your entire profile and associated personal data.",
            "Partial data deletion (such as deleting specific order records while maintaining an active account) is not offered. If you wish to clear your data, you must proceed with full account deletion.",
          ],
        },
        {
          heading: "Questions and support",
          body: [
            `If you have any questions or require assistance with deleting your account, please contact our support team at support@usevalgo.com or ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
