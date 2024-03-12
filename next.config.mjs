/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://3.39.134.138:8080/:path*`,
      },
    ];
  },
};

export default nextConfig;
