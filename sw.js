const CACHE_NAME = 'fish-finder-v40-simple-start';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './app-data.js',
  './recommendations-data.js',
  './lakesData.json',
  './seasonsData.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(name => name.startsWith('fish-finder-') && name !== CACHE_NAME)
        .map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const dataRequest = /\/(lakesData|seasonsData)\.json$/.test(url.pathname);
  const navigation = event.request.mode === 'navigate';

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (dataRequest || navigation) {
      try {
        const response = await fetch(event.request);
        if (!response.ok) throw new Error('Request failed: ' + response.status);
        await cache.put(event.request, response.clone()).catch(() => {});
        return response;
      } catch (error) {
        const cached = await cache.match(event.request)
          || (navigation ? await cache.match('./index.html') : null);
        if (cached) return cached;
        return Response.error();
      }
    }
    const cached = await cache.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok && url.pathname.includes('/images/')) {
      await cache.put(event.request, response.clone()).catch(() => {});
    }
    return response;
  })());
});
