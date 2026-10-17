import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 3840px aşırı genişlik isteklerini önlemek için sınırlandırılmış cihaz genişlikleri
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
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
