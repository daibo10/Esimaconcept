// ESIMA cleanup worker. The single-file site no longer uses a service worker.
// Keep this file in the repository so phones that installed the older version
// remove their old service worker and cached copies, then load fresh files.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    try { const k = await caches.keys(); await Promise.all(k.map(x => caches.delete(x))); } catch (err) {}
    try { await self.registration.unregister(); } catch (err) {}
    try { const l = await self.clients.matchAll({ type: 'window' }); l.forEach(c => c.navigate(c.url)); } catch (err) {}
  })());
});
