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
    "revision": "9a5ff394307ab6ecfb38491ec0e17999"
  },
  {
    "url": "assets/css/1.styles.8dba130f.css",
    "revision": "fc487993b3a746fae00f22d85a8be55c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f8deb380.js",
    "revision": "ad669b8eab1b7e67b67c75dd97a4a170"
  },
  {
    "url": "assets/js/app.f641ec1c.js",
    "revision": "7671f4cca880ffe474dcb90fcac4d651"
  },
  {
    "url": "index.html",
    "revision": "8aa46de82b02c7d25a6c0f5d523a2719"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
