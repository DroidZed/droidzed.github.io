// @ts-nocheck
const CACHE_NAME = 'coming-soon';

const CACHE_FILES = [
	"/",
	'index.html',
	'manifest.json',
	'./assets/css/styles.min.css',
	'./assets/js/app.js',
];

self.addEventListener("install", e => {
  console.log("[ServiceWorker**] Install");
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker**] Caching app shell");
      return cache.addAll(CACHE_FILES);
    })
  );
});


self.addEventListener("activate", event => {
  caches.keys().then(keyList => {
    return Promise.all(
      keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log("[ServiceWorker] - Removing old cache", key);
          return caches.delete(key);
        }
      })
    );
  });
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});