'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f7f04e067f41776c112d61ddbb39277",
"assets/AssetManifest.bin.json": "ecd048d3d605de0f5c151f79d00b7974",
"assets/AssetManifest.json": "791084bfaaf40ab619ec69f2da3a4559",
"assets/assets/aic/s1.png": "7513b0e9f91d08207331d93305a7127c",
"assets/assets/aic/s2.png": "6900d3fdeeaf0392a6122bdf027b1241",
"assets/assets/aic/s3.png": "0e7801707f2bcf4a5a020bce767203b1",
"assets/assets/aic/s4.png": "0ae7e2d9dc6d49e4081c29a5f41819a5",
"assets/assets/alj_c/s1.png": "f30176ea73574c6ba5fac287ab3dcc62",
"assets/assets/alj_c/s2.png": "7a9c65ad15b22578ccc2a70d2dea8e45",
"assets/assets/alj_c/s3.png": "3c94d738a8598efce7c5dd5235f244d2",
"assets/assets/alj_c/s4.png": "8a60e9d2e2bc77042f4fd17580d681eb",
"assets/assets/alj_s/s1.png": "b54cc45d6269c4c88d7f33cead6b6c7b",
"assets/assets/alj_s/s2.png": "fd421e6297563a64e32cf41674ebe53d",
"assets/assets/alj_s/s3.png": "1980ff7859a3da87e4fab4e80580e931",
"assets/assets/alj_s/s4.png": "7cc88adf63fd71cd7078e847e5647fca",
"assets/assets/background_pic.jpeg": "b2ce5c5d9a09099ce80de758e633f407",
"assets/assets/icons/facebook-icons.png": "3b3d19e69c445f637a99795116299cca",
"assets/assets/icons/github-icon.png": "c0f4af18c1ad16e6b50458637588aeaf",
"assets/assets/icons/gmail-icon.png": "c25182fadc8f30c5e68de161f3cec81b",
"assets/assets/icons/instagram-icon.png": "eb525ae7cbcf1a7af5d61a504631e9db",
"assets/assets/icons/linkedin-icon.png": "9e8a61705f4d6f7d8d34d8b06e4d6f3a",
"assets/assets/icons/whatsapp-icon.png": "f4106eb4ce434a19019882bb3a1e5297",
"assets/assets/login_top.webp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/my_pic.jpg": "b2812aee97990e5f0360cf559005ea87",
"assets/assets/playstore.webp": "8eb4d26f51fc9cd2e0238901a5cc837b",
"assets/assets/saic/s1.png": "f477d9c783cf185c2b359cd38673fc83",
"assets/assets/saic/s2.png": "24f3efbbb850b6dac9daca5931c5507e",
"assets/assets/saic/s3.png": "591dba2f50177f5a4656b870543c6360",
"assets/assets/saic/s4.png": "cc4414f8a82eb2de7e7c419be8155a76",
"assets/assets/tfm_c/1.0.login.jpg": "b04a9c5426e92e4ad193e6c106d933f8",
"assets/assets/tfm_c/2.0.home.jpg": "d8376a8f6bb5d6c2c6113738dc2015be",
"assets/assets/tfm_c/3.1.pending_pickups_list.jpg": "1363d81ae436d10bc4598f22b45cce6f",
"assets/assets/tfm_c/4.0.DRS.jpg": "711892a5bfb700a5b69b857dc31e46ca",
"assets/assets/tfm_s/s1.jpg": "98e738fa284603b7b5e3a750ecfeb6bd",
"assets/assets/tfm_s/s2.jpg": "7af9e55a0ab047f225a9d997fac40c02",
"assets/assets/tfm_s/s3.jpg": "68215283b108588a6c970d5ca4a8e2ef",
"assets/assets/tfm_s/s4.jpg": "a62fef5718f878b2ec294deb90c13856",
"assets/assets/tfm_sec/s1.png": "b6e681f774534e4c8f5fb0b45fb0124f",
"assets/assets/tfm_sec/s2.png": "a1323881d72f0456f4fb13c1396fa678",
"assets/assets/tfm_sec/s3.png": "5f312b98700f13fd9a0dbe82e57eb163",
"assets/assets/tfm_sec/s4.png": "47498caf68b508e1bfae3b421372f55c",
"assets/assets/usman.jpg": "c918d225fb4073582b4261b9d0b89d53",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "b447806604157f3d285df6cc72faa877",
"assets/NOTICES": "c0cd7407aa63ea5bcfa34e299168204a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "601ea4eb70905f49b23e24b423ea4563",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ef6cad91b553293e926a1ef5060c4dd",
"/": "0ef6cad91b553293e926a1ef5060c4dd",
"main.dart.js": "b058f97e37b55e1078ca848f48fe5ebd",
"manifest.json": "3d8f434410fd6d9915a7dbd987317e1e",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
