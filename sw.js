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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "edit.html",
    "revision": "ee4cd62a4e1274d40612b348e3525ad7"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "fcd272505c32bbc5ca6d937cfed535d6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f6e262a9f722d1543d131640a76c326d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7972efdc3a7aa3d5f5fa2d0cc671a68a"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d35f2e2a8753a3d790b9cd05fbb37614"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "fcbadc79021b4fa1a983c02837c42093"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6a198b0e2e14447b91dac714175814b2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "73f85b8cfcdf83bdd25e5878aac65aea"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "22b9994d75fbce534c4b2205a2081158"
  },
  {
    "url": "includesw.js",
    "revision": "cd2a6147acc3db4418f33cae188c40f8"
  },
  {
    "url": "index.html",
    "revision": "bf0195651c3312e1b6a321ca5a403355"
  },
  {
    "url": "index1.html",
    "revision": "bf0195651c3312e1b6a321ca5a403355"
  },
  {
    "url": "offline_bills.html",
    "revision": "74ea6190f52fec8e75116c94af203277"
  },
  {
    "url": "pdf1.html",
    "revision": "22c7b4e61892471ffe08fc7220701e09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
