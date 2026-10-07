import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "parkeustam.com",
          },
        ],
        destination: "https://www.parkeustam.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

