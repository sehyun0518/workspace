import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "http://localhost:3001/blog",
      },
      {
        source: "/blog/:path*",
        destination: "http://localhost:3001/blog/:path*",
      },
      {
        source: "/portfolio",
        destination: "http://localhost:3002/portfolio",
      },
      {
        source: "/portfolio/:path*",
        destination: "http://localhost:3002/portfolio/:path*",
      },
    ];
  },
};

export default nextConfig;
