import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rise-atseven.transforms.svdcdn.com',
      },
    ],
  },
}

export default nextConfig
