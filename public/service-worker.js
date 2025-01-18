
const CACHE_NAME = "PAYSTRIDE";


async function cacheCoreAssets() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll([

    "/fallback.html",
  ]);
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheCoreAssets());
  self.skipWaiting();
});

async function clearOldCaches() {
  const cacheNames = await caches.keys();
  return Promise.all(
    cacheNames
      .filter((name) => name !== CACHE_NAME)
      .map((name) => caches.delete(name))
  );
}

self.addEventListener("activate", (event) => {
  event.waitUntil(clearOldCaches());
  self.clients.claim();
});




self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function fetchHandler() {
      try {
        return await fetch(event.request);
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match('/fallback.html');
      }
    })()
  );
});
