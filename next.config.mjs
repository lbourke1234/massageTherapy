/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/buccalMassage",
        destination: "/services/buccal-massage",
        permanent: true, // 301 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
