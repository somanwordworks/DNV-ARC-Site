/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.dnvarc.com' }],
  },
};

export default nextConfig;
