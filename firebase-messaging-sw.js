importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDWkvzeO1pmwLUvUZaeRqHMJAkTZJu9HfA",
    authDomain: "notificationtest-6a621.firebaseapp.com",
    projectId: "notificationtest-6a621",
    storageBucket: "notificationtest-6a621.appspot.com",
    messagingSenderId: "405324358351",
    appId: "1:405324358351:web:8245f4f9ed7f9bf0c64dba"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});