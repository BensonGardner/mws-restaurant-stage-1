const staticCacheName = 'restaurant-static-v4';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      console.log(cache);
      return cache.addAll([
        '/',
        'restaurant.html',
        'css/styles.css',
        'imgs/',
        'data/restaurants.json',
        'js/'
      ]);
    })
  );
});

self.addEventListener('activate').then(function() {
    self.addEventListener('fetch', function(event) {
      console.log(caches);
      event.respondWith(
          caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
          })
        );
    });
});