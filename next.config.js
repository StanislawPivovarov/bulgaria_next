/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  distDir: 'build',
  images: {
    domains: ['i.postimg.cc'],
  },

  // output: 'export',
  env: {
    STRAPI_API: process.env.STRAPI_API,
    
  }
}

module.exports = nextConfig
