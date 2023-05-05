/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
};

module.exports = nextConfig;

module.exports = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "assets.nflxext.com",
         },
         {
            protocol: "https",
            hostname: "asset.cloudinary.com",
         },
         {
            protocol: "https",
            hostname: "res.cloudinary.com",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co",
         },
      ],
   },
};
