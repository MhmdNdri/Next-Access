const withPWA = require("next-pwa");
// const withOffline = require('next-offline')
const runtimeCaching = require("next-pwa/cache");

// const showNotification = () => {
//   self.registration.showNotification("Post Sent", {
//     body: "You are back online and your post was successfully sent!",
//     icon: "assets/icon/256.png",
//     badge: "assets/icon/32png.png",
//   });
// };

// const bgSync = new backgroundSync.Plugin("myQueueName", {
//   maxRetentionTime: 24 * 60, // Retry for max of 24 Hours

//   callbacks: {
//     queueDidReplay: showNotification,
//   },
// });

module.exports = withPWA(
  {
    basePath: process.env.ASSETS_PREFIX,
    assetPrefix: process.env.ASSETS_PREFIX,
    // images: {
    //     loader: 'imgix',
    //     path: process.env.ASSETS_PREFIX,
    // },

    pwa: {
      dest: "public",
      // disable: process.env.NODE_ENV === 'development',
      runtimeCaching,
      subdomainPrefix: "/pwa-sample",
    },

    // MUST be the same as "start_url" in manifest.json
    urlPattern: "/pwa-sample/",
    // use NetworkFirst or NetworkOnly if you redirect un-authenticated user to login page
    // use StaleWhileRevalidate if you want to prompt user to reload when new version available
    handler: "NetworkFirst",
    options: {
      // don't change cache name
      cacheName: "start-url",
      cacheableResponse: {
        statuses: [200, 302],
      },
      expiration: {
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheableResponse: {
        statuses: [200, 302],
      },
      cacheName: "google-fonts",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
      },
    },
  },
  {
    urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheableResponse: {
        statuses: [200, 302],
      },
      cacheName: "static-font-assets",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      },
    },
  },
  {
    urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheableResponse: {
        statuses: [200, 302],
      },
      cacheName: "static-image-assets",
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:js)$/i,
    handler: "network-only",

    options: {
      //   backgroundSync: {
      //     name: "bgSync",
      //     options: {
      //       callbacks: {
      //         queueDidReplay: showNotification,
      //       },
      //       maxRetentionTime: 24 * 60, // Retry for max of 24 Hours,
      //     },
      //     // plugins: [bgSync],
      //   },
      cacheableResponse: {
        statuses: [200, 302],
      },
      cacheName: "static-js-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:css|less)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-style-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:json|xml|csv)$/i,
    handler: "NetworkFirst",
    options: {
      cacheName: "static-data-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\/api\/.*$/i,
    handler: "NetworkFirst",
    method: "GET",
    options: {
      cacheName: "apis",
      expiration: {
        maxEntries: 16,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
      networkTimeoutSeconds: 10, // fall back to cache if api does not response within 10 seconds
    },
  },
  {
    urlPattern: /.*/i,
    handler: "NetworkFirst",
    options: {
      cacheName: "others",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
      networkTimeoutSeconds: 10,
      cacheableResponse: {
        statuses: [200, 302],
      },
    },
  }
);

// const nextConfig = {
//     ...
//   }

//   module.exports = withOffline(nextConfig)
