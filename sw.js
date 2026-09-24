// Bump V whenever you change files, so phones fetch the new version.
const V='esima-v2',A=['./','index.html','manifest.webmanifest','images/logo.png','images/water-filter-install.jpg','images/drainage-pipes.jpg','images/twin-tank-filtration.jpg','images/treatment-vessels.jpg','images/biodigester-chamber.jpg','images/commercial-plumbing.jpg','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))});
