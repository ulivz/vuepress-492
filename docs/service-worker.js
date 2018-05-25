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
    "revision": "a49717c3a226c9b3507024e088c3b240"
  },
  {
    "url": "assets/css/styles.styles.fd1c4d6b.css",
    "revision": "ae273289b52a9cf14e8420eb9fa65055"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ac1deb82.js",
    "revision": "943bb96d08fab9f4412f39816220e76a"
  },
  {
    "url": "assets/js/app.19a05f55.js",
    "revision": "e84f4bae358846d62d43e9eeabc0325a"
  },
  {
    "url": "index.html",
    "revision": "9bddbd7b04d6150b667579f9fe0a0a90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
