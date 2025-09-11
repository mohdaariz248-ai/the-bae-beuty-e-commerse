self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("bae-shop-cache").then((cache) => {
      return cache.addAll([
        "./GHODA.HTML",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
