'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3529336c30726ee554d775a0a1998f4d",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "8eea49885a45a36858a2ba79a7292ed2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e9f213a53bd599e818d7d81c816c575",
".git/logs/refs/heads/master": "7e9f213a53bd599e818d7d81c816c575",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/aca33a13156c2da0d47a12b4213a217beaa03c": "95ca325924d232709cdb7fd102b249d9",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/742e428e5f18167b4683dab62feb12442f7d86": "74d23a3e0a12d290a7f6f32aa32ca510",
".git/objects/15/97075b70aab2f2e557a5675d04ba82e4515d10": "76d453119188c6bf7c8653e97b2bc20c",
".git/objects/15/a309d4f36c7a9c7b4e95c1b2c801d552c7011c": "cc3d5b676b16af991a695b18d449397c",
".git/objects/1c/2334cbcaeb363dcb84bfe7d14585523ae10517": "c6fe7c7e19c540139db97f1f572b590e",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/5cc383ad83ad768cddec93539424c5340f82e6": "ebbcf36987cbf1ec8c8d14a0c3b1aa8c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/83726ec1524a9d435f384503f5640b6361d500": "1acaee16812a49b68f5f7b3935270f3f",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/3f530bf19d0f8ebaf1213062c6c2a4101cff94": "b43e1565e302dc3dd53f16154cf45ff9",
".git/objects/46/6e65dfb74fdd2ce4fae8417246df164c3f2120": "b561e18a8ac4f03f7f1c429ee15883ca",
".git/objects/4b/62a416721c8b16a84cbdccdf903ae91632f85b": "690f3c3fe84b5760c1f7ba39d469b230",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/58/af856086272cd76cc8468e7c9703aa7271568a": "fa358e06e84bdf0d01eba8ebd437d1f3",
".git/objects/59/045c2e01b23d6e1125f56ec20628e759c88a11": "aba120face98ba35e90236d10636c8ba",
".git/objects/59/acc2882b04ed02a06210e1d72d26d2dd8b8bae": "68463509cd7edc70a08149d8b4dcac99",
".git/objects/5b/66e50eb8967a11d2e131b7e1cee098179334ee": "b6c7ddfacdeced5736072d8922288816",
".git/objects/6e/cafeb561a62455ef99b83391790032b1c2d59c": "71e11f8084948e722828a7460be4a05d",
".git/objects/6e/d12ca1ac22b14bbef8d5ef7d2a6a8d9b2efd4c": "86cc8a690ed2f3544e08370765b85d13",
".git/objects/71/2ca8e8877ffe96ab8387e8e4189cedd8b1f57c": "d97ef24f609062a21f1c7fe539ffffcb",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/f5e176895115a5218ad07aef39648cf87300f0": "2452cece77ce346ea179d8579fe99d12",
".git/objects/87/b80697c759eca58cf74887c59ccc1078b2e409": "5815401961654dd60ec464729856d09c",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/93/2ae6e15e87d1cd0268bf6271f5a2b17facab69": "c4ab232044ace2b50b5e13ef603fc4bb",
".git/objects/95/36166fa1afc6c2b40dc5e35b3d9264e34f1b37": "455cbed63a90b62645e09b189e51fa66",
".git/objects/9b/0a0c312804eaf37aa17b095a6f966acad89f24": "06f908c7658a761e5858fd33f2336680",
".git/objects/9e/b7da7ccee1f4221c70d34c9e3793a1b01dc28c": "e2c222ed97e7d3f3bb0fceb92c5a7a75",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e8e95f8cc021e32676dd412d1816359a515cc3": "95bdbeb450c4efc1a80c3ad2ba1adeaf",
".git/objects/a8/ab32576ef7009f9c08657f72831b0010324b6b": "e5f3534531d666bb87b86b7d322589a9",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b2/42db621a69ed891ff8caeb6aa9257ed8f7b58c": "e9f129de6dbdb0af3b69955ac6769aa0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0b245349f87b612fa772d52492d323552ae6e4": "aa803b772f3b79dda05197645b225280",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5f42d54a8674279e19c09a05b9dd2d0c46a4db": "aff86acee8abc1b4515419755e652741",
".git/objects/c2/7910321bdf0f31c94e77db415048bf9509c274": "b3aaef1d79420f12704287278e6dd95f",
".git/objects/c7/13070f0d2b3ec5c96a60b1bdf9bf70ffd45a58": "4c7ef705c7ca5dc7d53e6671b49b8070",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d3/e1ff07b0ffae0d6c4aa24a7ebb3eec5026204c": "fa87a63282022e5982d1afa72cf7035e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/0180d6d05a35d61304019795d8d70c001ba23f": "cf2347cb904b78f9d3570744fb69ad03",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/6f412fee364cb9b82054839e80f360d52f7c1f": "a498d73b4bb7a5ee8fb5bc5ef1ec8667",
".git/objects/fb/f8e0380e6342d6df2b32928de9994ae7debd93": "38c275197c56a37b49d8685f054059cb",
".git/objects/fc/930e7d5678fd3e46080e56ac15c3880e5752aa": "4d06a22e2cc18155856dd65048af6fbc",
".git/objects/fd/409e571c8f7ff6373b3a0d5494661c05e42d99": "f13fa2faf07e739913f65752c1580a47",
".git/refs/heads/master": "9617286830945e879d1872da5f8ba522",
"assets/AssetManifest.json": "c12fcc8c5878486952281e306f776639",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b42d592cd59a58326de46f5c442c0b48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/resimler/asci.png": "78cfbc7c6c7f54b741e58c5f62625b9f",
"assets/resimler/cocostarpasta.jpg": "6dd58bb7b8238b52801c6a6c87dfe63f",
"assets/resimler/enginar.jpg": "f5d4db8e0c308004ef59ed094d664d76",
"assets/resimler/etimek.png": "5ca2796298aa1128947e8ded3b99f52b",
"assets/resimler/foodIcon.png": "d49ac4c332cdba5780effe9109328a84",
"assets/resimler/havuclucevizlikek.jpg": "70890a7f471b9ccba4e62346c8af8acd",
"assets/resimler/indir.jpg": "7c449bd4abb11f06397ca15850b98b4b",
"assets/resimler/izmirbomba.jpg": "3e869989564d7ca607adc3d6c919ea30",
"assets/resimler/k%25C3%25B6fte.jpg": "c06c90666170c9a74af6256fcd0a719a",
"assets/resimler/magnolia.jpg": "1fabb407844f4e465eb335cb82551551",
"assets/resimler/mant%25C4%25B1.jpg": "73001ef15b8b210b3b64937ba8052f12",
"assets/resimler/mantar%25C3%25A7orbas%25C4%25B1.jpg": "24151e5dba7a0387c7bd26016c5c14f7",
"assets/resimler/nepisirsem.png": "ef2daa30f9575eba8033ebc34eb1538f",
"assets/resimler/nohut.jpg": "39aba61f578a43a6fa11ccc7b423d211",
"assets/resimler/pilav.jpg": "be0da045f1a8edd9ed2c66d22d341fc6",
"assets/resimler/sutlac.jpg": "31203b4fe6724857aa4525e302a0600e",
"assets/resimler/sweetIcon.png": "11077c969a6b5425fce9a9e3f30cce9b",
"assets/resimler/tahinlicevizlikurabiye.jpg": "fe7d03f7cfe960a94debc7eb4e9b0224",
"assets/resimler/tavuksote.jpg": "73cc6db44fa0612beb0d49aa7b93d902",
"assets/resimler/tiramisu.jpg": "e74dac343a0f9e33269fd8eedb4ec821",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "18f5a6f1cc374fced8ce210cdeaf4514",
"/": "18f5a6f1cc374fced8ce210cdeaf4514",
"main.dart.js": "d7a807a6aa60a469c88d5f4ada379e1a",
"manifest.json": "6fdf3a16710c40834bbb59b1007e2358",
"version.json": "e0f5480a388bd0fb982c3d729e86d5c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
