import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dir }) => {
    // Ensure webpack resolves modules from the project directory
    config.resolve = config.resolve || {};
    config.resolve.modules = [
      path.resolve(dir, "node_modules"),
      "node_modules",
      ...(config.resolve.modules || []),
    ];
    
    // Ensure resolve roots include the project directory
    config.resolve.roots = [
      path.resolve(dir),
      ...(config.resolve.roots || []),
    ];
    
    return config;
  },
};

export default nextConfig;
