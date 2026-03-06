/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverExternalPackages: ['pg', '@prisma/adapter-pg', '@prisma/client'],
  },
};

module.exports = nextConfig; 