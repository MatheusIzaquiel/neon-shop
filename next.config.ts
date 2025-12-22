/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**', // Permite qualquer caminho sob o hostname
      },
      // Opcional: adicione também para o domínio base, caso use placeholders ou outros assets
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; // Use 'export default' se for .mjs