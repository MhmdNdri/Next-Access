const withPWA = require('next-pwa')


module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    images: {
        loader: 'imgix',
        path: process.env.ASSETS_PREFIX,
    },
})