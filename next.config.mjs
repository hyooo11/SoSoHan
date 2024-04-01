/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://3.39.134.138:8080/:path*`,
      },
    ];
  },
  compiler: { styledComponents: true },
};

export default nextConfig;
