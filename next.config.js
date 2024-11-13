/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr:"incremental"
  }
}

module.exports = nextConfig
