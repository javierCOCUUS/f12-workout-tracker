const CACHE_NAME = 'f12-workout-v2'; // Updated cache version - INCREMENT THIS NUMBER FOR FUTURE UPDATES
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/icon-192x192.png', // Make sure you have these icon files
  '/icon-512x512.png', // Make sure you have these icon files
  '/timer-sound.mp3' // Make sure you have this sound file
];

// Instalar Service Worker: Cacha los archivos especificados
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando v2...'); // Log para depuración
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cacheando archivos:', urlsToCache); // Log para depuración
        return cache.addAll(urlsToCache.map(url => {
            // Asegúrate de que la URL es absoluta si tu service worker está en la raíz
            return new URL(url, self.location.origin).toString();
        }))
        .catch(err => {
            console.error('Service Worker: Fallo al cachear archivos:', err); // Manejo de errores
            // Puedes decidir qué hacer en caso de fallo (por ejemplo, no cachear nada o cachear parcialmente)
        });
      })
  );
});

// Activar Service Worker: Elimina cachés antiguas
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando nueva versión v2...'); // Log para depuración
  const cacheWhitelist = [CACHE_NAME]; // Lista de cachés que queremos mantener

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Si el nombre de la caché no está en la lista blanca, elimínala
            console.log('Service Worker: Eliminando caché antigua:', cacheName); // Log para depuración
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// Estrategia de caché: Network First, fallback to Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          // If response is invalid, just return it (might be an error page, or not something to cache)
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and can only be consumed once. We must clone it so that
        // both the browser and the cache can consume the response.
        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache); // Cache the valid response
          });

        return response; // Return the original response to the browser
      })
      .catch(err => {
        console.error('Service Worker: Fallo en la obtención de la red, buscando en caché:', err); // Manejo de errores
        // If network request fails, try to get the response from the cache
        return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                console.log('Service Worker: Encontrado en caché:', event.request.url);
                return cachedResponse;
            }
            // If not in cache, and it's a navigation request, maybe return a default offline page?
            // For now, we'll just let the browser handle it (might show default offline page if configured)
            return null; // Or return a specific offline page like caches.match('/offline.html');
        });
      })
  );
});