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

    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,   
  },

  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },


}

module.exports = nextConfig
