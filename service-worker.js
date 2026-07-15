// Self-destructing service worker.
//
// The previous Upptime status site registered a service worker that cached the
// page shell. Browsers that visited status.onearly.com before the site was
// replaced still have it installed and would keep serving the old, frozen
// status page from cache.
//
// A registered service worker re-fetches this file periodically. Serving this
// in its place makes it unregister itself, drop every cache it owns, and
// reload any open tabs onto the live page.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister();

      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});
