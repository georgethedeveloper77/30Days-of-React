/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
var cacheName = "coronavirus tracker";

var filesToCache = [
  "./content-width.js",
  "./script.js",
  "./robots.txt",
  "./icon.png",
];

self.addEventListener("install", (event) => {
  console.log("👷", "install", event);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("👷", "activate", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log('👷', 'fetch', event);
  event.respondWith(fetch(event.request));
});
// Install Service Worker
self.addEventListener("install", function (event) {
  console.log("Service Worker: Installing....");

  event.waitUntil(
    // Open the Cache
    caches.open(cacheName).then(function (cache) {
      console.log("Service Worker: Caching App Shell at the moment......");

      // Add Files to the Cache
      return cache.addAll(filesToCache);
    })
  );
});

// Fired when the Service Worker starts up
self.addEventListener("activate", function (event) {
  console.log("Service Worker: Activating....");

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (key) {
          if (key !== cacheName) {
            console.log("Service Worker: Removing Old Cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("Service Worker: Fetch", event.request.url);

  console.log("Url", event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

Notification.requestPermission((result) => {
  if (result === "granted") {
    showNotification("");
  }
});

function showNotification(title, message) {
  if ("Notification" in window) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        body: message,
        tag: "vibration-sample",
      });
    });
  }
}
