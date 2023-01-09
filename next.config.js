
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'http://localhost:5000',
      'localhost:5000',
    ]
  }
}

module.exports = nextConfig
