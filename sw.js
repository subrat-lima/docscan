const cacheName = "cache-v1.0";

const precacheResources = ["/", "/index.html", "/css/main.css", "/img/favicon.svg", "/img/upload.svg", "/js/app.js", "/js/ui.js", "/js/files.js", "/js/upload.js", "/js/modify.js", "/js/save.js", "/js/pwa.js"];

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
