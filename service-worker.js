var CACHE = 'cache-only';
const filesCache = [
  'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js',
  'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
  'https://code.jquery.com/jquery-3.4.1.min.js',
  'assets/js/base.js',
  'index.html',
  'assets/icons/play/atras.png',
  'assets/icons/play/avance.png',
  'assets/icons/play/pausa.png',
  'assets/icons/play/play.png',
  'assets/icons/play/silencio.png',
  'assets/icons/play/volumen.png',
  'assets/audios/audio1.mp3',
  'assets/audios/audio2.mp3',
  'assets/audios/audio3.mp3',
  'assets/css/style.css',
  'assets/icons/pwa/icon-48x48.png',
  'assets/icons/pwa/icon-72x72.png',
  'assets/icons/pwa/icon-96x96.png',
  'assets/icons/pwa/icon-128x128.png',
  'assets/icons/pwa/icon-144x144.png',
  'assets/icons/pwa/icon-152x152.png',
  'assets/icons/pwa/icon-192x192.png',
  'assets/icons/pwa/icon-384x384.png',
  'assets/icons/pwa/icon-512x512.png',
  'assets/icons/web/android-chrome-192x192.png',
  'assets/icons/web/android-chrome-512x512.png',
  'assets/icons/web/apple-touch-icon.png',
  'assets/icons/web/favicon-16x16.png',
  'assets/icons/web/browserconfig.xml',
  'assets/icons/web/favicon-32x32.png',
  'assets/icons/web/favicon.ico',
  'assets/icons/web/mstile-150x150.png',
  'assets/icons/web/safari-pinned-tab.svg',
  'assets/images/splash_screens/10.2__iPad_portrait.png',
  'assets/images/splash_screens/10.5__iPad_Air_landscape.png',
  'assets/images/splash_screens/10.5__iPad_Air_portrait.png',
  'assets/images/splash_screens/10.9__iPad_Air_landscape.png',
  'assets/images/splash_screens/10.9__iPad_Air_portrait.png',
  'assets/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
  'assets/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
  'assets/images/splash_screens/12.9__iPad_Pro_landscape.png',
  'assets/images/splash_screens/12.9__iPad_Pro_portrait.png',
  'assets/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
  'assets/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
  'assets/images/splash_screens/8.3__iPad_Mini_landscape.png',
  'assets/images/splash_screens/8.3__iPad_Mini_portrait.png',
  'assets/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
  'assets/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
  'assets/images/splash_screens/icon.png',
  'assets/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
  'assets/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
  'assets/images/splash_screens/iPhone_11__iPhone_XR_landscape.png',
  'assets/images/splash_screens/iPhone_11__iPhone_XR_portrait.png',
  'assets/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
  'assets/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
  'assets/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
  'assets/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
  'assets/images/splash_screens/iPhone_14_Pro_landscape.png',
  'assets/images/splash_screens/iPhone_14_Pro_Max_landscape.png',
  'assets/images/splash_screens/iPhone_14_Pro_Max_portrait.png',
  'assets/images/splash_screens/iPhone_14_Pro_portrait.png',
  'assets/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
  'assets/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
  'assets/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
  'assets/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
  'assets/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
  'assets/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
];

// On install, cache some resources.
self.addEventListener('install', function (evt) {
  console.log('The service worker is being installed.');

  // Ask the service worker to keep installing until the returning promise
  // resolves.
  evt.waitUntil(precache());
});

// On fetch, use cache only strategy.
self.addEventListener('fetch', function (evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
// Añadimos todos los elementos que van a estar en caché
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(filesCache);
  });
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
