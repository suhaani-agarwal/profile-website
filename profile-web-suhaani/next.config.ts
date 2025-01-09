import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/profile-web-suhaani",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  distDir : 'app',
  /* config options here */
};

export default nextConfig;
