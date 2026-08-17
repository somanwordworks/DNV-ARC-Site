/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dnvarc.com',
      },
    ],
  },
};

module.exports = nextConfig;
