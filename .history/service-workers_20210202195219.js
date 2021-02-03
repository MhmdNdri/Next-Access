
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