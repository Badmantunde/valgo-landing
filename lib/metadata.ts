import type { Metadata } from "next";
import { SITE, LAUNCH, SOCIAL_LINKS } from "@/lib/constants";

export const SEO = {
  ogImage: "/og-image.jpg",
  ogImageWidth: 1024,
  ogImageHeight: 639,
  ogImageAlt:
    "ValGo: Nigeria's student-first platform for food, essentials, and campus life. Launching at OOU in Ago Iwoye, expanding to universities nationwide.",
  twitterHandle: "@usevalgo",
  locale: "en_NG",
  keywords: [
    "ValGo",
    "usevalgo",
    "student delivery Nigeria",
    "campus food delivery",
    "OOU delivery",
    "Olabisi Onabanjo University delivery",
    "Ago Iwoye food delivery",
    "university delivery app Nigeria",
    "campus delivery nationwide",
    "student earning platform Nigeria",
    "student logistics platform",
    "campus groceries delivery",
    "pharmacy delivery OOU",
    "Nigeria delivery startup",
    "student life app",
    "restaurant delivery Ago Iwoye",
    "campus services Nigeria",
  ],
} as const;

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SEO.locale,
      type: "website",
      images: [
        {
          url: SEO.ogImage,
          width: SEO.ogImageWidth,
          height: SEO.ogImageHeight,
          alt: SEO.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      images: [SEO.ogImage],
    },
    category: "technology",
    applicationName: SITE.name,
    authors: [{ name: "ValGo Technologies Ltd", url: SITE.url }],
    creator: "ValGo Technologies Ltd",
    publisher: "ValGo Technologies Ltd",
    formatDetection: {
      telephone: false,
    },
    other: {
      "geo.region": "NG-OG",
      "geo.placename": LAUNCH.city,
    },
  };
}

export function getSharedMetadata(
  description: string,
  path: string = "/"
): Omit<Metadata, "title"> {
  const { title: _title, ...shared } = createPageMetadata({
    title: SITE.name,
    description,
    path,
  });
  return shared;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: "ValGo Technologies Ltd",
    url: SITE.url,
    logo: `${SITE.url}/logo-blue.svg`,
    description: SITE.description,
    email: SITE.email,
    foundingLocation: {
      "@type": "Place",
      name: LAUNCH.location,
    },
    areaServed: [
      {
        "@type": "City",
        name: LAUNCH.city,
      },
      {
        "@type": "Country",
        name: "Nigeria",
      },
    ],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-NG",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN",
      availability: "https://schema.org/PreOrder",
      description: "Coming soon on App Store and Google Play",
    },
    description: SITE.description,
    url: SITE.url,
    featureList: [
      "Food delivery",
      "Groceries delivery",
      "Pharmacy delivery",
      "Parcel delivery",
      "Campus services",
      "Live order tracking",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "University students in Nigeria",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: `ValGo delivery platform for Nigerian students, launching first at ${LAUNCH.university} in ${LAUNCH.city} and expanding nationwide.`,
    url: SITE.url,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: LAUNCH.city,
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "EducationalOrganization",
      name: LAUNCH.university,
    },
  };
}

export function getFAQSchema(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
