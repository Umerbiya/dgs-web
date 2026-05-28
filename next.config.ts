import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // No 'output: export' — we are using a custom Node.js server (server.js)
  // which is required for cPanel / Phusion Passenger deployments.
  // Image Optimization is enabled by default with a Node server.
};

export default nextConfig;
