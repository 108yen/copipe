/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: "incremental",
    dynamicIO: true,
  }
}

module.exports = nextConfig
