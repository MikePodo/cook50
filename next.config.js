/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_ID: process.env.APP_ID,
    APP_KEY: process.env.APP_KEY,
  },
};

module.exports = nextConfig;
