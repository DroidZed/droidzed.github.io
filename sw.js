// @ts-nocheck
var CACHE_NAME = 'coming-soon';

self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll([
        '/',
				'index.html',
				'manifest.json',
				'assets/css/styles.min.css',
				'assets/js/app.js',
			]);
		})
	);
});

self.addEventListener('fetch', (event) => {
	//We defind the promise (the async code block) that return either the cached response or the network one
	//It should return a response object
	const getCustomResponsePromise = async () => {
		console.log(`URL ${event.request.url}`, `location origin ${location}`);

		try {
			//Try to get the cached response
			const cachedResponse = await caches.match(event.request);
			if (cachedResponse) {
				//Return the cached response if present
				console.log(`Cached response ${cachedResponse}`);
				return cachedResponse;
			}

			//Get the network response if no cached response is present
			const netResponse = await fetch(event.request);
			console.log(`adding net response to cache`);

			//Here, we add the network response to the cache
			let cache = await caches.open(CACHE_NAME);

			//We must provide a clone of the response here
			cache.put(event.request, netResponse.clone());

			//return the network response
			return netResponse;
		} catch (err) {
			console.error(`Error ${err}`);
			throw err;
		}
	};

	//In order to override the default fetch behavior, we must provide the result of our custom behavoir to the
	//event.respondWith method
	event.respondWith(getCustomResponsePromise());
});
