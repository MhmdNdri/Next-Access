const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: false,
        register: true,
        scope: '/',
        sw: 'sw.js',
        subdomainPrefix: '/pwa-sample',
        runtimeCaching,
    },
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    images: {
        loader: 'imgix',
        path: process.env.ASSETS_PREFIX,
    },

})
