const withPWA = require('next-pwa')


module.exports = withPWA({
    pwa: {
        subdomainPrefix: '/pwa-sample'
    },
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    images: {
        loader: 'imgix',
        path: process.env.ASSETS_PREFIX,
    },
})
