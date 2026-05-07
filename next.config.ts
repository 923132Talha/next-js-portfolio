import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.alias["next/dist/compiled/react-error-overlay"] = "next/dist/client/noop";
    }
    return config;
  },
};

export default nextConfig;
