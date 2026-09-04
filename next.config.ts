import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/store",
        destination: "https://store.usevalgo.com/",
        permanent: false,
      },
      {
        source: "/store/:path*",
        destination: "https://store.usevalgo.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
