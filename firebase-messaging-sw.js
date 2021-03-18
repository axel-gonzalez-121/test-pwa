importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../firebase-messaging-sw.js')
		.then(function (registration) {
			console.log('Registration successful, scope is:', registration.scope);
		}).catch(function (err) {
			console.log('Service worker registration failed, error:', err);
		});
}

firebase.initializeApp({
	apiKey: "AIzaSyBUAXUSbXSLoX7baq3RqNVRCCM_MwwlTKA",
	authDomain: "push-test-8543c.firebaseapp.com",
	projectId: "push-test-8543c",
	storageBucket: "push-test-8543c.appspot.com",
	messagingSenderId: "222177857579",
	appId: "1:222177857579:web:b71df4c74397f5d79c1a6e",
	measurementId: "G-7M0X3NYC1N"
});

const messaging = firebase.messaging();