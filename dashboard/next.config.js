/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['*'],
//   },
// }

// module.exports = nextConfig
module.exports = {
  images: {
    domains: [
      "localhost",
      "crypto-experts-backend.herokuapp.com",
      "www.gravatar.com",
    ],
  },
};
