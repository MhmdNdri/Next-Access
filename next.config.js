const withPWA = require('next-pwa')


module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        register: true,
        scope: '/pwa-sample/',
        sw: 'service-worker.js',
        //...
    },
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    images: {
        loader: 'imgix',
        path: process.env.ASSETS_PREFIX,
    },
})
