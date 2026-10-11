/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Old links pointed at /home/<page>, which never existed and returned 404
  async redirects() {
    return [
      {
        source: "/home/:path*",
        destination: "/:path*",
        permanent: true
      }
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/",
  //       permanent: true
  //     }
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
