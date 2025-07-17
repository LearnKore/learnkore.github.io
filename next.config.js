/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/learnkore',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
