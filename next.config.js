/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      // issuer: /\.[jt]sx?$/,
    })

    return config
  },
}

module.exports = nextConfig
