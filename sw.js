const cacheName = "cache-v1.0";

const precacheResources = ["/", "./index.html", "./assets/css/main.css", "./assets/img/favicon.svg", "./assets/img/upload.svg", "./assets/js/app.js", "./assets/js/ui.js", "./assets/js/files.js", "./assets/js/upload.js", "./assets/js/modify.js", "./assets/js/save.js", "./assets/js/pwa.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(precacheResources)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      if(cachedResponse)
        return cachedResponse;

      const requestToCache = e.request.clone();

      return fetch(requestToCache).then((response) => {
        if(!response || response.status !== 200)
          return response;

        const responseToCache = response.clone();

        caches.open(cacheName)
          .then(cache => {
            cache.put(requestToCache, responseToCache);
          });

        return response;
      });
    })
  );
});
