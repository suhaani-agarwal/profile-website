import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/profile-web-suhaani",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // If using images with static hosting
  },
  
  /* config options here */
};

export default nextConfig;
