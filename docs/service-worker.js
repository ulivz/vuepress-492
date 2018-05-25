/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "23ab8390b51b1f2364bd01f28bcc456a"
  },
  {
    "url": "assets/css/styles.styles.a1695ee6.css",
    "revision": "fc487993b3a746fae00f22d85a8be55c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.fce9b6ae.js",
    "revision": "0947c5e81a02438b22b79fb54571ccef"
  },
  {
    "url": "assets/js/app.3fe36b0b.js",
    "revision": "1864d942d4ecb23bb6655a1e2d955335"
  },
  {
    "url": "index.html",
    "revision": "bb139beefe57503f710c9aeed4fd4732"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
