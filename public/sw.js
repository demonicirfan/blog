if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/252f366e-616e5376c215bc1d5f19.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/899-5e7e7409e3749496de45.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/main-b449f89ec2fd6b0ffe72.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/pages/_app-2fc7f41397d87c8931cf.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/pages/about-2576171f330b4b1e19dc.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/pages/index-4f944898a910e9a7c2c7.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-3acac87f849b8483663b.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/chunks/webpack-6aa24242c38afc8913a0.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/q1Cp34OpLDdjoNXpC6G0A/_buildManifest.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/_next/static/q1Cp34OpLDdjoNXpC6G0A/_ssgManifest.js",revision:"q1Cp34OpLDdjoNXpC6G0A"},{url:"/assets/UI/arrow-alt-circle-up-solid.svg",revision:"52844aacff8f183a90313130dddab726"},{url:"/assets/UI/moon.svg",revision:"25e91ac679bb999002e3d2b2f422d0b4"},{url:"/assets/UI/sun.svg",revision:"fe4053b9ad1356c378185ae6c36b2845"},{url:"/assets/authors/dastasoft.jpeg",revision:"c16bf1152a4300d661688b54e38ae270"},{url:"/assets/dev-brands.svg",revision:"3268c9479655067b8faf48cb83fa8555"},{url:"/assets/envelope-solid.svg",revision:"82189696539164bc0b0e271a3bcac397"},{url:"/assets/github-brands.svg",revision:"5bff33aa78b1ae1bf7b02ec3e643bb84"},{url:"/assets/linkedin-brands.svg",revision:"ff0036d1a00f465d93f54a38228b4fba"},{url:"/assets/posts/content/basic-circle.jpg",revision:"0aa0b3362672b4a25bfda3585251c9ae"},{url:"/assets/posts/content/circle-full.gif",revision:"15202485b3aea98e8ce35e615a7d42d6"},{url:"/assets/posts/content/circle-moved.jpg",revision:"07099e7265c1350f9eed2f17d2809a20"},{url:"/assets/posts/content/circle-progress-bar-number.gif",revision:"bcbc5b336192ce2114e028d8530ddedc"},{url:"/assets/posts/content/circle-text.jpg",revision:"208f143ff8d43ac19a60929a9f3ed035"},{url:"/assets/posts/content/fusuma/slide-default.png",revision:"13fc15d701d5bf0da21f25fcda28a772"},{url:"/assets/posts/content/fusuma/social-networks.png",revision:"4b16fdbee25e8d0d8b19839767736a2d"},{url:"/assets/posts/content/fusuma/speaker-notes.png",revision:"aca44505e835fd7d4d645618b98bef59"},{url:"/assets/posts/content/naruto-running.gif",revision:"cdd97372f67962d3c6b39e31b3aa05b0"},{url:"/assets/posts/content/node-express/middlewares.png",revision:"a3cb12237e2f06309225cc1d8d84c7bd"},{url:"/assets/posts/content/node-express/node-responses.png",revision:"96f605d507748113d88d8097a782648a"},{url:"/assets/posts/content/node-express/node.png",revision:"09c0f04cab64049994a053acd02d813c"},{url:"/assets/posts/content/node-express/state-of-js.png",revision:"11929665af85a5e808f1650174b8a83f"},{url:"/assets/posts/content/typescript/airbnb.jpg",revision:"9d38e6f62f9c1a565f2f0d0a757efb27"},{url:"/assets/posts/content/typescript/shopping-list.png",revision:"ff565a70bd341a09e2d31564c7d13ca6"},{url:"/assets/posts/content/typescript/side-by-side.png",revision:"448cbae66a8449c4c3a49b56c97fbc33"},{url:"/assets/posts/content/typescript/syntaxsugar.jpeg",revision:"25789c22e610d696e951ed4978940bfb"},{url:"/assets/posts/preview/animated-circlebar.jpg",revision:"8067bb99130c6cbbffe5edc1d5da0080"},{url:"/assets/posts/preview/chakraui-react.webp",revision:"1c465c3167d081b2d306a16367c86308"},{url:"/assets/posts/preview/fusuma.webp",revision:"1520f60ac41e47e32a920b2e63a33be8"},{url:"/assets/posts/preview/nextjs-blog.jpg",revision:"8431947753900e02b2d825e731c785a6"},{url:"/assets/posts/preview/node-express.webp",revision:"0b79f895c208d7d968816aba1a854b3d"},{url:"/assets/posts/preview/simple-react-boilerplate.png",revision:"01cdf256f12834c8223d3ab890fad6f2"},{url:"/assets/posts/preview/styling-in-react.png",revision:"7b9d935076b44cb551ddff20813d6841"},{url:"/assets/posts/preview/typescript-react.webp",revision:"7530b53c19b4ae49ed0d598cde3f863c"},{url:"/assets/reddit-brands.svg",revision:"b7a0ebcb592097716fbc5cee503ad793"},{url:"/assets/twitter-brands.svg",revision:"6620c8ae2cac90067a9aa78339bb808d"},{url:"/favicon.ico",revision:"f0536954522c15caa5792322cb0bbf44"},{url:"/icons/maskable_icon.png",revision:"8e4c0b928a59bc213c79e9234ff39d69"},{url:"/icons/maskable_icon_x128.png",revision:"b93c4c2da66b2b9ca4ad35961a6fe17c"},{url:"/icons/maskable_icon_x192.png",revision:"52e548af5a5e02e390274b5360bf28be"},{url:"/icons/maskable_icon_x384.png",revision:"714dec57401e11bdcb3bef48a118a719"},{url:"/icons/maskable_icon_x48.png",revision:"1d3fcd66086b558778fe608cdc910847"},{url:"/icons/maskable_icon_x512.png",revision:"27462e2071519f1555f8674470003dca"},{url:"/icons/maskable_icon_x72.png",revision:"0d2c79040f34fdc9f2869f009c15695c"},{url:"/icons/maskable_icon_x96.png",revision:"cdaca23b2a0b111a2dff35aa5606c2b6"},{url:"/manifest.json",revision:"4d1b74b5c031b437f53f0306564d32d9"},{url:"/robots.txt",revision:"b73fd95315d157fbadc142e47ac0473c"},{url:"/screenshots/blog1.png",revision:"6bbd76fd3a8780c7844628de449f4025"},{url:"/screenshots/blog2.png",revision:"329c8b3a8651ac52b56019498d270b14"},{url:"/sitemap.xml",revision:"fb4ff4603df143182495847a0d78988d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
