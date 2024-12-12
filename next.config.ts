import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.builder.io', // Allow images from this domain
      'static.vecteezy.com', // Add this domain
      'img.freepik.com', // Add this domain
      'i.etsystatic.com', // Add this domain
      'png.pngtree.com', // Add this domain
    ],
  },
};

export default nextConfig;
