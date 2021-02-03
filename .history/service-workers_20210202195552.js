
import { skipWaiting, clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { NetworkOnly, NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing'
import { matchPrecache, precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

skipWaiting()
clientsClaim()

const WB_MANIFEST = self.__WB_MANIFEST

WB_MANIFEST.push(
    {
      url: '/pages/index.js',
      revision: '1234567890'
    }
)
precacheAndRoute(WB_MANIFEST)
cleanupOutdatedCaches()

registerRoute(
    '/',
    new NetworkFirst({
      cacheName: 'start-url',
      plugins: [new ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
    }),
    'GET'
)
registerRoute(
    /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    new StaleWhileRevalidate({
      cacheName: 'static-font-assets',
      plugins: [new ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })]
    }),
    'GET'
)
registerRoute(
    /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    new NetworkOnly({
      cacheName: 'static-image-assets',
      plugins: [new ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
    }),
    'GET'
)