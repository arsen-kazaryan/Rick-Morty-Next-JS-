import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
// Список для разрешенных картинок(Защита от ddos атак)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
};

export default nextConfig;
