const CACHE_NAME = 'qj-kitchen-v1';

// Add list of files to cache here.
const urlsToCache = [
  '/',
  '/manifest.json',
  '/QJKitchen.png',
  '/images/menu/jollof-rice.jpg',
  '/images/menu/fried-rice.jpg',
  '/images/menu/chicken-stew.jpg',
  '/images/menu/egusi-soup.jpg',
  '/images/menu/moi-moi.jpg',
  '/images/menu/suya.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
