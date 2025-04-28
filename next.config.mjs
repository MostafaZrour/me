/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/me' : '',
  assetPrefix: isProd ? '/me/' : '',
};

export default nextConfig;
