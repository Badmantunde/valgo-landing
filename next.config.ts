import type { NextConfig } from "next";

const CUSTOMER_WEB_ORIGIN = "https://customer-web-red.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/store/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/store/:path*`,
      },
      {
        source: "/login",
        destination: `${CUSTOMER_WEB_ORIGIN}/login`,
      },
      {
        source: "/register/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/register/:path*`,
      },
      {
        source: "/checkout/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/checkout/:path*`,
      },
      {
        source: "/account/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/account/:path*`,
      },
      {
        source: "/orders/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/orders/:path*`,
      },
      {
        source: "/favourites",
        destination: `${CUSTOMER_WEB_ORIGIN}/favourites`,
      },
      {
        source: "/search",
        destination: `${CUSTOMER_WEB_ORIGIN}/search`,
      },
      {
        source: "/vendor/:path*",
        destination: `${CUSTOMER_WEB_ORIGIN}/vendor/:path*`,
      },
    ];
  },
};

export default nextConfig;
