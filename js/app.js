// later...

// or maybe not 🙄
async function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		try {
			let serviceWorker = await navigator.serviceWorker.register('/sw.js');
			console.log(`Service worker registered ${serviceWorker}`);
		} catch (err) {
			console.error(`Failed to register service worker: ${err}`);
		}
	}
}

window.addEventListener('load', () => {
	registerServiceWorker();
});
