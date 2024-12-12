import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.builder.io'], // Allow images from this domain
  },
};

export default nextConfig;
