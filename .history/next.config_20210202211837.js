const withPWA = require('next-pwa')
// const withOffline = require('next-offline')
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    images: {
        loader: 'imgix',
        path: process.env.ASSETS_PREFIX,
    },
    pwa: {
        dest: 'public',
        swSrc: 'service-worker.js'
        runtimeCaching,
        subdomainPrefix: '/pwa-sample',
    },

})

// const nextConfig = {
//     ...
//   }
  
//   module.exports = withOffline(nextConfig)
