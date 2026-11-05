const CACHE_NAME = 'tpz-v3'; // ⚠️ Version incrémentée = force le remplacement
const STATIC_ASSETS = [
  './links.js',
  './sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
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
  // STRATÉGIE : Réseau d'abord, JAMAIS de cache pour HTML/JS de données
  // (évite de servir une vieille version de streams.js ou index.html)
  const url = new URL(e.request.url);
  
  // Ne rien intercepter pour les iframes, flux vidéo et domaines externes
  if (e.request.method !== 'GET') return;
  if (url.hostname !== location.hostname) return;
  if (url.pathname.includes('/vip/') || url.pathname.includes('channel')) return;
  
  // HTML et JS de config : toujours réseau (fallback cache si offline)
  if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname === '/') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          // Met en cache au passage
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  
  // Autres assets (images, fonts) : cache d'abord
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});