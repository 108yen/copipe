/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    dynamicIO: true,
    useCache: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
