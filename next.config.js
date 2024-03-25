/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // serverActions: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self';" +
  //             "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com;" +
  //             "style-src 'self' 'unsafe-inline';" +
  //             "img-src 'self' data: http://localhost:3000 https://compsecurityprojecttest.vercel.app;" +
  //             "connect-src 'self' http://localhost:3000 https://compsecurityprojecttest.vercel.app;" +
  //             "font-src 'self';" +
  //             "base-uri 'self';" +
  //             "form-action 'self';" +
  //             "object-src 'none';" +
  //             "frame-ancestors 'none';" +
  //             "upgrade-insecure-requests;" +
  //             "block-all-mixed-content;",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
