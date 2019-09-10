var staticCacheName = 'rest-rev-static-v1';
//jj
self.addEventListener('install', function(event) {
  
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
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

self.addEventListener('fetch', function(event) {
    
  event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});
