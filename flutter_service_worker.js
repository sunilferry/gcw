'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c4198abf2ae782e95b8a9c6db2fde463",
".git/config": "c70bf19ed1025845bfe6d8560334ff4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "caadfe7ad05a109e5d10934585b7a18e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afe22796e759cd793c9b288107c447ac",
".git/logs/refs/heads/main": "aaaac9374f79ce8fe5067c3014fc81fc",
".git/logs/refs/remotes/origin/main": "3109c75ff8a5c06dee2eb45574ed04c0",
".git/objects/09/3d9e7d2787c5fd0e451a647bbc53b1f8d3953f": "449eb96e9b3294749308cf531f1ef6f4",
".git/objects/09/f0903414fe833b57a9a580490879e14e72b0a7": "75e53aa9170462e9758484f0a70e990e",
".git/objects/13/dd429b7c0788082265009e3557cb8d17345341": "22dc1f08c716e2d0b0ad6c407b4c1ea4",
".git/objects/26/a10f6eb1af04a63b24b2879528c0f83017e9ba": "a0bfbe029c8c0ae9088ab9c8a3a6e45c",
".git/objects/2e/b8438568c96b20b0b7d28ac111439fe106f5ae": "d223b5efda37a0e598a53cacae8a136b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/56c76cce456484dd4130a9e9545b99a2763c02": "8729267e396fe4178bfbe087b695be23",
".git/objects/3a/d7dda26b11691a38c69cf8e7080bccc72d386a": "cdb778affb4fa7254f423b2cabe6d853",
".git/objects/40/e359708ec686c5b292fd784c998d9eb7232c9c": "53f9a50ac59fddbf6b7c0dfe1f076826",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/e31d0fa984c99465971626338c2a36d189db8a": "f50e9263bb9fffaf5d9a5d6bda052a9e",
".git/objects/5f/0c50a94ea3da94a7b0a32e7658ac01d984fd7e": "bdffe7dbee2ec1fb568d2c05c2f2d1df",
".git/objects/5f/6a3114c63e2ea16d1a0d2c45f315bd6bbd3e26": "46a45d179e63474c275cff0a8c1e4015",
".git/objects/61/988d16a5156431cc49a1c161eaa619107b00ad": "c42f622592b63effa03ebf7b451b24d6",
".git/objects/6b/718f6c3bd6e954695958a1940ff9a7666c301e": "ee7bc7ef3f0fec9147475b31da432ea2",
".git/objects/6f/1d5a047bd8f8665abfaafc05b214c8aef1cb47": "f735a32c0ba4eb4655dc1456fe016c71",
".git/objects/72/5c265ec2d0d9af12e0f859b62b6b776c209c0c": "1eb15a0d2173eb7fe5c0ea9e8cb592ad",
".git/objects/77/5481f61142e36ac0a27e8220ef86e2b7f00eae": "21817c6211c4be6d155861ab0e53ac55",
".git/objects/77/a85853e9029178e8afba4909ca2465843b8816": "0d5375f1820918e5506949f436565327",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/666259f445390440d942e3fde9be37e43b21c3": "97b4fbd8b01c35d4506f8da74826194b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/047c2f0d630e18fac4726fe9ec2818220bdcb0": "da465eb944d1fa055ec303e773b4553d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/aa3be24179ec9c1148d223137d9e0645931a1d": "128dc0cc38a6ac379dd66436c256424e",
".git/objects/cf/2790c00bd84c6fa959e0c7bc7ff25258c5bc73": "f83731a8e9ef6a1456d015d79b9cb7c4",
".git/objects/d2/ce91f9d26fad0f8db48e470ac5685f387d83c1": "db3617f9e89b68683f8752fc2bfd7f0f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/61b5791518ac98335dddac644f1e9c61506a07": "9d6296f815b3a2cda6d9c7bef8e693f8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/2426594c69f460a4832e9a79d9926f8f4e7aba": "63a9c6c24129417bffd93ea263c6caa8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/efe0782e16d2748fe76e4f371a5937f5520e6d": "fcf5924a3fa4fbb27f0ded1b218883c1",
".git/objects/ef/8b1ec95c8e614b7b7eb9717d797cb01fb20489": "1ada356731effaa004cef186e8352568",
".git/objects/f3/f16bcf967f9d2ae4c24ffd1b72713cd91bbf82": "9e93e2c01f53677c4db5d20b60e23112",
".git/objects/f5/c1cd8440f6001587e7d7d22ae9b52e87ddc5f5": "ed52969d7287c1eeca016fb6c6f5ed85",
".git/objects/f6/b9440979ccaeb9eed678019c6fc56518483f7c": "682e68c8ed7aabe637fa88e9ac4cc88b",
".git/objects/f8/946d447086d12376265bc4f2c4bdd9e7577ed5": "f8f2ac750e6f3a5f2d766ebfd10d20b4",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/f9/aa39dfe44726372d8e843e667bc1486f484eda": "cfe42cd4f8120621ac52c1c5cd90adb6",
".git/refs/heads/main": "7cc42cc8e3f3f6ded09078c5c7d9e4a0",
".git/refs/remotes/origin/main": "7cc42cc8e3f3f6ded09078c5c7d9e4a0",
"assets/AssetManifest.json": "bd9374fe7683161c897b8016926c1fb7",
"assets/assets/ban1.jpg": "f5742e4d7bd685b90af0709fed57dad0",
"assets/assets/ban2.jpg": "54c5725332180cc89c85cd9bfc402e24",
"assets/assets/food1.png": "d79859c931bfd320a27216d53af8f87b",
"assets/assets/food2.png": "f3db52c06b89cad0caf81626101bd96d",
"assets/assets/food3.png": "21cbce6dca75d1c8995ec33269cadc9d",
"assets/assets/french_fries.jpg": "ae7b35c021864b46f47babbd62850cda",
"assets/assets/grey_shape1.svg": "b2f0935995dc56a44dce59e3dc5ce1b1",
"assets/assets/icon_red_1.svg": "cf11d8f2a8502db933a1777eca7685ce",
"assets/assets/logo.jpg": "503c1a1bbc22b79e9fc84a7ec4a46b49",
"assets/assets/noodles_food.jpg": "3030a5f209022878541d1403a9107a97",
"assets/assets/paneer_fried_rice.jpg": "ab60a7d5e73979da4959b2ce19679922",
"assets/assets/plan1.jpg": "1e038031be2d0bfc7b820425f81d5de3",
"assets/assets/red_heart.svg": "43a89db45356d7653ef0730b85818a32",
"assets/assets/red_leaf.svg": "a3291fcfe1ddd80eebe8d07d4c566e10",
"assets/assets/tea1.png": "62d1feb1489c5bfec66420f433f48478",
"assets/assets/tea_product.jpg": "ba594db6a134cb48534d3bb40aee3b5d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "63ac25f8b1e697ca236125764b5c4124",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d4592d01eb114972ec362d13b5d6530e",
"/": "d4592d01eb114972ec362d13b5d6530e",
"main.dart.js": "406c676a5e8a78c2bc7220d6dd364094",
"manifest.json": "8b28c7b886bb3a88e853023ff923da54",
"version.json": "ebaa3c3eac7d0452bfe9e442872b0ad1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
