(this["webpackJsonptest-push-firebase"]=this["webpackJsonptest-push-firebase"]||[]).push([[0],{19:function(e,n,t){},23:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var o=t(9),i=t.n(o),c=t(14),s=t.n(c),a=(t(19),t.p+"static/media/logo.103b5fa1.svg"),r=t(12);r.a.initializeApp({apiKey:"AIzaSyBUAXUSbXSLoX7baq3RqNVRCCM_MwwlTKA",authDomain:"push-test-8543c.firebaseapp.com",projectId:"push-test-8543c",storageBucket:"push-test-8543c.appspot.com",messagingSenderId:"222177857579",appId:"1:222177857579:web:b71df4c74397f5d79c1a6e",measurementId:"G-7M0X3NYC1N"});var l=r.a,u=(t(23),t(7)),d=function(){return Object(o.useEffect)((function(){}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Push notifications ",Object(u.jsx)("code",{children:"tests"})," permite las notificaciones para testear"]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(u.jsx)("button",{onClick:function(){var e=l.messaging();e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("Token : ",e)})).catch((function(e){console.log(e)}))},children:"Click here to receive notifications"})]})})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/test-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/test-pwa","/firebase-messaging-sw.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(n,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.f4131574.chunk.js.map