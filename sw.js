// ESIMA service worker: network-first, no version number to bump.
// Always fetches the latest files when online; falls back to the last saved copy when offline.
const CACHE = 'esima';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r, { cache: 'no-cache' })            // skip GitHub Pages' 10-minute browser cache
      .then(res => {
        if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); }
        return res;
      })
      .catch(() => caches.match(r).then(m => m || caches.match('index.html') || caches.match('./')))
  );
});
