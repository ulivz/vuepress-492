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
    "revision": "b86b26a8e92a7c5036a6017d42a289bb"
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
    "url": "assets/js/0.544d0fc7.js",
    "revision": "b3e395440e61db4cb3fb79eabff829ea"
  },
  {
    "url": "assets/js/app.5ea68a25.js",
    "revision": "fdeddb8dd0ca6b9f3a6d8acec2ebea2d"
  },
  {
    "url": "index.html",
    "revision": "255758d039771fc064bed03c10d8b5e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
