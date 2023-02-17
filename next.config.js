/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[dirname]-[filename]-[local]",
    },
  },
};

module.exports = nextConfig;
