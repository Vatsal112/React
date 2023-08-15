/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
