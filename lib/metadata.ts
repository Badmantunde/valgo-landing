import type { Metadata } from "next";
import { SITE, LAUNCH, SOCIAL_LINKS, APP_LINKS } from "@/lib/constants";

export const SEO = {
  ogImage: "/og-image.jpg",
  ogImagePng: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "ValGo - Your Favorite Campus Meals Delivered in 15 Minutes. OOU Ago Iwoye Campus Pilot.",
  twitterHandle: "@usevalgo",
  locale: "en_NG",
  keywords: [
    // Entity & Brand
    "ValGo",
    "usevalgo",
    "ValGo Nigeria",
    "ValGo campus delivery",
    "ValGo Innovations Limited",
    // Campus & Location
    "OOU food delivery",
    "Olabisi Onabanjo University delivery app",
    "Ago Iwoye food delivery",
    "hostel food delivery Ago Iwoye",
    "OOU campus food delivery",
    "Oloko hall food delivery",
    "Mini campus Ago Iwoye food",
    "university delivery app Nigeria",
    "campus delivery nationwide Nigeria",
    // Crave & Food Items
    "order party jollof OOU",
    "smash burgers campus delivery Nigeria",
    "crispy peppered wings Ago Iwoye",
    "campus shawarma delivery",
    "late night hostel food delivery",
    "hot amala abula Ago Iwoye",
    "campus groceries delivery OOU",
    "pharmacy delivery OOU",
    // Economics, Logistics & Riders
    "student delivery platform Nigeria",
    "student earning platform Nigeria",
    "campus logistics startup Nigeria",
    "student rider jobs OOU",
    "delivery rider daily payout Nigeria",
    "campus vendor platform Nigeria",
    "cashless student food ordering",
    // Conversational & AEO (Answer Engine Queries)
    "best campus food delivery app Nigeria",
    "fast food delivery 15 minutes Nigeria",
    "how to order food at Olabisi Onabanjo University",
    "what is ValGo delivery",
    "who founded ValGo delivery",
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
  const canonicalUrl = url.endsWith("/") && url !== `${SITE.url}/` ? url.slice(0, -1) : url;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO.keywords, ...keywords],
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-NG": canonicalUrl,
        "en": canonicalUrl,
      },
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
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SEO.locale,
      type: "website",
      images: [
        {
          url: `${SITE.url}${SEO.ogImage}`,
          width: SEO.ogImageWidth,
          height: SEO.ogImageHeight,
          alt: SEO.ogImageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      images: [`${SITE.url}${SEO.ogImage}`],
    },
    category: "Food Delivery & Campus Logistics",
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },
    other: {
      "geo.region": "NG-OG",
      "geo.placename": `${LAUNCH.city}, Ogun State, Nigeria`,
      "geo.position": "6.9538;3.9189",
      "ICBM": "6.9538, 3.9189",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": SITE.name,
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
    },
  };
}

export function getSharedMetadata(
  description: string,
  path: string = "/"
): Omit<Metadata, "title"> {
  const metadata = createPageMetadata({
    title: SITE.name,
    description,
    path,
  });
  delete (metadata as Record<string, unknown>).title;
  return metadata;
}

/**
 * Connected Schema.org Entity Graph for Answer Engine Optimization (AEO)
 * Ingested by Perplexity, ChatGPT Search, Claude, Google Gemini / AI Overviews
 */
export function getSiteSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization Identity
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/logo-blue.svg`,
          width: 512,
          height: 512,
          caption: `${SITE.name} Logo`,
        },
        image: `${SITE.url}${SEO.ogImage}`,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        foundingDate: "2026",
        founders: [
          {
            "@type": "Person",
            name: "Idowu Damilare",
            jobTitle: "Chief Executive Officer & Co-Founder",
          },
          {
            "@type": "Person",
            name: "Abiola Babatunde",
            jobTitle: "Chief Technology Officer & Co-Founder",
          },
          {
            "@type": "Person",
            name: "Isajobi Quadri",
            jobTitle: "Head of Growth & Marketing & Co-Founder",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "11, Adeyiga Street, Ikosi-Ketu",
          addressLocality: "Kosofe",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },
        foundingLocation: {
          "@type": "Place",
          name: `${LAUNCH.university}, ${LAUNCH.location}`,
          geo: {
            "@type": "GeoCoordinates",
            latitude: 6.9538,
            longitude: 3.9189,
          },
        },
        areaServed: [
          {
            "@type": "CollegeOrUniversity",
            name: LAUNCH.university,
            alternateName: LAUNCH.universityShort,
          },
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
      },

      // 2. WebSite with Search Action
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-NG",
        publisher: {
          "@id": `${SITE.url}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://usevalgo.com/store?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      // 3. Specialized Campus Food Delivery Service
      {
        "@type": "FoodDeliveryService",
        "@id": `${SITE.url}/#food-delivery-service`,
        name: "ValGo Campus Food Delivery",
        serviceType: "Hostel and Campus Food Delivery",
        provider: {
          "@id": `${SITE.url}/#organization`,
        },
        description:
          "Fast 15 to 20 minute campus food delivery connecting university students with popular local restaurants, bukas, and student kitchens.",
        url: SITE.url,
        priceRange: "₦",
        currenciesAccepted: "NGN",
        paymentAccepted: "Cashless, Debit Card, Bank Transfer, ValGo Wallet",
        areaServed: {
          "@type": "CollegeOrUniversity",
          name: `${LAUNCH.university} (${LAUNCH.universityShort})`,
          address: {
            "@type": "PostalAddress",
            addressLocality: LAUNCH.city,
            addressRegion: "Ogun State",
            addressCountry: "NG",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Campus Cravings Menu",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smoky Party Jollof & Dodo Delivery" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Double Smash Cheeseburgers Delivery" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crispy Fiery Peppered Wings Delivery" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Late Night Shawarma Delivery" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hostel Essentials & Cold Drinks Delivery" } },
          ],
        },
      },

      // 4. Software Application / Mobile App
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#software-app`,
        name: "ValGo Campus App",
        operatingSystem: "Android, iOS, Web",
        applicationCategory: "FoodEstablishment",
        installUrl: APP_LINKS.customer.playStore,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
          availability: "https://schema.org/InStock",
        },
        description:
          "Order hot campus meals and daily hostel essentials in 15 to 20 minutes with zero hidden fees.",
        url: SITE.url,
        featureList: [
          "Campus restaurant and buka discovery",
          "15 to 20 minute doorstep hostel delivery",
          "Real-time GPS order and rider tracking",
          "₦0 hidden or surprise surge fees",
          "Cashless student payment methods",
        ],
      },

      // 5. Speakable Specification for AI Voice & Answer Engines
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: "ValGo | Campus Food Delivery in 15 Minutes",
        isPartOf: {
          "@id": `${SITE.url}/#website`,
        },
        about: {
          "@id": `${SITE.url}/#organization`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "p", "#faq"],
        },
      },
    ],
  };
}

export function getOrganizationSchema() {
  return getSiteSchemaGraph();
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
      name: SITE.legalName,
      url: SITE.url,
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ValGo Customer App",
    applicationCategory: "FoodEstablishment",
    operatingSystem: "iOS, Android, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      description: "Free download on Google Play and Web",
    },
    description: SITE.description,
    url: SITE.url,
    featureList: [
      "15 to 20 minute hostel delivery",
      "Campus food discovery",
      "Real-time live GPS order tracking",
      "₦0 hidden surge fees",
      "Local student payment options",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "University students and campus residents in Nigeria",
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
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "11, Adeyiga Street, Ikosi-Ketu",
      addressLocality: "Kosofe",
      addressRegion: "Lagos",
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

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

