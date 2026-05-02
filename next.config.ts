import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/demo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
