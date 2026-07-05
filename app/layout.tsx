import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import {
  getSharedMetadata,
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getWebSiteSchema,
} from "@/lib/metadata";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ValGo | Everything Students Need. Delivered.",
    template: "%s | ValGo",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  ...getSharedMetadata(SITE.description),
};

const siteSchema = [
  getOrganizationSchema(),
  getWebSiteSchema(),
  getSoftwareApplicationSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={`${workSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <JsonLd data={siteSchema} />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
