/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // important if using next/image
  },
};

module.exports = nextConfig;