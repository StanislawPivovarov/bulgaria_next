/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  basePath: '/bulgaria_next',
  assetPrefix: '/bulgaria_next/',
  output: 'export',
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['i.postimg.cc'],
  },


  env: {
    STRAPI_API: process.env.STRAPI_API,
    
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  fallback: {
    "fs": false,
    "os": false,
    "path": false,
  },
  future: {
    webpack5: true,   
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,  

      fs: false,
    };
    
    return config;
  },


}

module.exports = nextConfig
