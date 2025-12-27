import { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  async headers() {
    return [
      {
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=3600, max-age=60",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=3600",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=3600",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Document-Policy",
            value: "js-profiling",
          },
        ],
        source: "/(.*)",
      },
    ]
  },
  reactStrictMode: true,
}

export default nextConfig
