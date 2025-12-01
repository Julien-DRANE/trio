'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da2885f6eccdcbc6ceed355fb5bf18ec",
"assets/AssetManifest.bin.json": "534f07bf2dd4294f03a42b672db834a2",
"assets/assets/images/background/accueil-2.png": "2ce7e9075bc7b8b129c945cd49988d27",
"assets/assets/images/background/accueil-3.png": "03a00af6df8496db673c1f814a83dde8",
"assets/assets/images/background/accueil-4.png": "ad0eabf7eb566652d62e253dd068a6db",
"assets/assets/images/background/accueil.png": "ee9d406b9ada425de0df6906a699f953",
"assets/assets/images/background/accueil2.png": "6338513c4f6a3f5a705676664b50036b",
"assets/assets/images/background/calculafond_background.jpeg": "52026c38952ff2df46ce424cd0857a1e",
"assets/assets/images/background/calculafond_background2.jpeg": "f1af65dc5f9b8980c177de358a365984",
"assets/assets/images/background/figures_background.png": "3c90d0a96ce98f82337ade670c4d7500",
"assets/assets/images/background/fractio_background.png": "90583b8ac114f3a263fd185c01b34cd3",
"assets/assets/images/background/mathemagie_background.png": "8e24f60e91b87493593988104b0dd96f",
"assets/assets/images/background/trio_background.png": "02f8d1d961da8b722ac7b8fc259a6e91",
"assets/assets/images/game_icons/aproximat.png": "482ec7ab10569bc3ce343c7fb9eee1fc",
"assets/assets/images/game_icons/calculafond.png": "4bc0d773ac681ee24dc2420f84a7e791",
"assets/assets/images/game_icons/figures.png": "931ed77375e401eb1d62175a395d1312",
"assets/assets/images/game_icons/fractio.png": "86ed60841d72643a76a42c585294918e",
"assets/assets/images/game_icons/mathemagie.png": "61ebc81c37209ad74c91599bddbd80d4",
"assets/assets/images/game_icons/trio.png": "fcc51a38dcd93b2370d1045f6f40cc43",
"assets/assets/images/specific_assets/aproximat/astronaut.png": "a7cbc91c943771dc3267786867ff9ff9",
"assets/assets/images/specific_assets/aproximat/background.png": "586809f58859d196369e60bba82bb30a",
"assets/assets/images/specific_assets/aproximat/game_over.png": "24bc0d451d277aced4f98e6cdd08eec4",
"assets/assets/images/specific_assets/aproximat/planet.png": "40a2cd0b749589667cdf1e3c2ea0780a",
"assets/assets/images/specific_assets/aproximat/portal1.png": "44fa8e41b4c04327605877cd53909bc6",
"assets/assets/images/specific_assets/aproximat/portal2.png": "44fa8e41b4c04327605877cd53909bc6",
"assets/assets/images/specific_assets/aproximat/portal3.png": "44fa8e41b4c04327605877cd53909bc6",
"assets/assets/images/specific_assets/aproximat/space_station.png": "13950fdca3b258a2b33b0cab715f9f84",
"assets/assets/images/specific_assets/calculafond/tile.png": "67b127de1d39041873d437e40d98d649",
"assets/assets/images/specific_assets/figures/ananas.png": "8d464d49b33e0b4df8c92bc1f3b267f6",
"assets/assets/images/specific_assets/figures/bonbon_carre.png": "abd0e9df35cc8b43360c8cd19e7b088c",
"assets/assets/images/specific_assets/figures/bonbon_carre2.png": "b75910b014835d68f5b7c6c8ea940d09",
"assets/assets/images/specific_assets/figures/bonbon_ellipse.png": "48ce962cc660b79d09cc9fd6d6279658",
"assets/assets/images/specific_assets/figures/bonbon_ellipse2.png": "61479f8222b6ddb1877b277305411017",
"assets/assets/images/specific_assets/figures/bonbon_exagone.png": "3e90222c811f752c4f8e27dae2f795d6",
"assets/assets/images/specific_assets/figures/bonbon_exagone2.png": "1ebd3eab12cc8077c16859e4aed13510",
"assets/assets/images/specific_assets/figures/bonbon_isocele.png": "03eda1a97360e9aeb6f9810e28c1de97",
"assets/assets/images/specific_assets/figures/bonbon_isocele2.png": "2d7a96704092e2886d9ef7ab959534df",
"assets/assets/images/specific_assets/figures/bonbon_losange.png": "db8ae8dbba4810f1dfc4d4fd5f9f7cae",
"assets/assets/images/specific_assets/figures/bonbon_losange2.png": "2971a0185cf24c6c8f72c93429c22284",
"assets/assets/images/specific_assets/figures/bonbon_pentagone.png": "f80a5d65072c0647a00944be8c7ec4a2",
"assets/assets/images/specific_assets/figures/bonbon_pentagone2.png": "81b17b4851697167f90fa7fc7f574085",
"assets/assets/images/specific_assets/figures/bonbon_rectangle.png": "012f408205926c5d440502f8826af883",
"assets/assets/images/specific_assets/figures/bonbon_rectangle2.png": "c489739ee5e57416718ee1d76fe4d3b5",
"assets/assets/images/specific_assets/figures/bonbon_rond.png": "ed5f075bf954f330bf032c5e47330914",
"assets/assets/images/specific_assets/figures/bonbon_rond2.png": "1da25005c8979192bc8924258677e1c1",
"assets/assets/images/specific_assets/figures/bonbon_triangle_equilateral.png": "dce1ac751912a7aa4253bbe3f017fe21",
"assets/assets/images/specific_assets/figures/bonbon_triangle_equilateral2.png": "822a5a016579c61f50903c77b0286e8b",
"assets/assets/images/specific_assets/figures/bonbon_triangle_rectangle.png": "6e70fafa9945fb984a9c6a5a9d5b11b3",
"assets/assets/images/specific_assets/figures/bonbon_triangle_rectangle2.png": "946ec8f97e0881b3c3b6a1c3c000092b",
"assets/assets/images/specific_assets/figures/panier.png": "3b9a2acdc49653094025855d55ad5eff",
"assets/assets/images/specific_assets/figures/tile.png": "9ae3366587dda790ea3ffc1626a5f16d",
"assets/assets/images/specific_assets/fractio/tile.png": "e6dc8a4b8a6b1047581e9827fe598f6a",
"assets/assets/images/specific_assets/fractio/tile2.png": "952b815afe5d65cf7a1290eee1c9f69e",
"assets/assets/images/specific_assets/mathemagie/rune.png": "ae5f2e6a00c38cce137fc3f8f9c633e5",
"assets/assets/images/specific_assets/mathemagie/tile.png": "30b6fc9f102bbe7712a58a06b891149f",
"assets/assets/images/specific_assets/trio/tile.png": "61e2656cdf6a9edeba944f36452e5bef",
"assets/assets/sounds/aproximat/beep.mp3": "348b9c86a30e376c9c5ce2d8d7e7334a",
"assets/assets/sounds/aproximat/com.mp3": "9f41df972cfe5ef6621eb87e8039a42f",
"assets/assets/sounds/aproximat/correct.mp3": "e7cbf32e1f2ed08c8821c1db6a79a625",
"assets/assets/sounds/aproximat/game_over.mp3": "e34a6783b831ba748e60d3d3e586cb95",
"assets/assets/sounds/aproximat/jetpack.mp3": "52a830ce33079e33e03d2778f4fc972f",
"assets/assets/sounds/aproximat/low_oxygen.mp3": "464e79bdb375cffe71511399116b254c",
"assets/assets/sounds/aproximat/spaceship.mp3": "2b9d0b721607a6cce16c376bbc714049",
"assets/assets/sounds/aproximat/victory.mp3": "6740e392000954867ea1c0346e897080",
"assets/assets/sounds/aproximat/wrong.mp3": "a1cdc5348506cc9cabcdff3697eb1d68",
"assets/assets/sounds/calculafond/1.mp3": "b6ba1573ff5dae0e37af2406840cd4a2",
"assets/assets/sounds/figures/good.mp3": "0876cd948afdf166cc008ddab31395aa",
"assets/assets/sounds/figures/pop-01.mp3": "1d34f0ad8d31ef92e132a0c785f03701",
"assets/assets/sounds/figures/pop-02.mp3": "36e7e01de6e42775812cb73fc56d7f1e",
"assets/assets/sounds/figures/pop-03.mp3": "9dd490f87cf356d05c9c5d95cf9f417e",
"assets/assets/sounds/mathemagie/mathemagie.mp3": "32942b5116250ffbc0c3a19f399f5adc",
"assets/assets/sounds/trio/tune-01.mp3": "044744e2240b457a76232db7ae798c98",
"assets/assets/sounds/trio/tune-02.mp3": "d5b98d9bc77089e446ddafc87caea02d",
"assets/assets/sounds/trio/tune-03.mp3": "b41be545851349aeabed198f01fb102c",
"assets/assets/sounds/trio/win.mp3": "08a4ec37daad71a9a025a4ffc2f4c0cd",
"assets/assets/videos/aproximat/aproximat.mp4": "ace01be5456396808a0c8cd9a462e45b",
"assets/assets/videos/mathemagie/mathemagie.mp4": "69b18528a4b5d8a8921b8f257616bdaf",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "588221e975894d0fc026a0de10b0ea89",
"assets/NOTICES": "a12959d0d955a5cf7928c930007f0aa5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "cded23332ee05e7704cb8a8a2176eda5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "face2b3b13f312546df2625d93e32819",
"/": "face2b3b13f312546df2625d93e32819",
"main.dart.js": "c12f2e91c190407f8ae208468731c5ee",
"manifest.json": "25ddb0fba23ff570551e566a52c1317f",
"version.json": "9bfa9e617dc945806c405361065370dc"};
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
