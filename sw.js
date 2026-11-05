const CACHE_NAME = 'tpz-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/streams.js',
  '/channels.js',
  '/favicon.svg',
  '/site.webmanifest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if(e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  
  // Ne pas cacher les iframes, flux, APIs
  if(url.pathname.includes('/vip/') || url.pathname.includes('channel')) return;
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        if(res && res.status === 200 && url.origin === self.location.origin) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});