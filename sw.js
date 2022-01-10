// @ts-nocheck
var CACHE_NAME = 'coming-soon';

self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(['css/style.css', 'js/app.js', 'manifest.json']);
		})
	);
});

self.addEventListener('fetch', function (event) {
	console.log(event.request.url);

	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
