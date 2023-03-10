/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[dirname]-[filename]-[local]",
    },
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: ".",
};

module.exports = nextConfig;
