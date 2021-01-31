import React from 'react'
import Push from "push.js"
import styles from "../styles/Location.module.css"
const Notification = () => {

    const sendNotification = () => {
        Push.create("Hello Guys!", {
            body: "How you doin!?",
            icon: '/',
            timeout: 5000,
            onClick: function () {
                process.browser ? window.focus() : null;
                Push.close();
            }
        });
        Push.config({
            serviceWorker: '../public/sw.js', // Sets a custom service worker script
            fallback: function (payload) {
                // Code that executes on browsers with no notification support
                // "payload" is an object containing the 
                // title, body, tag, and icon of the notification 
            }
        });
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={sendNotification}>
                Send A notification
            </button>
        </div>
    )
}

export default Notification


















// const notificationSender = () => {
//     const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
//     const text = "Take a look at this brand new t-shirt!";
//     const title = "New Product Available";
//     const options = {
//         body: text,
//         icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
//         vibrate: [200, 100, 200],
//         tag: "new-product",
//         image: img,
//         badge: "https://spyna.it/icons/android-icon-192x192.png",
//         actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
//     };

//     navigator.serviceWorker.ready.then(function (serviceWorker) {
//         serviceWorker.showNotification(title, options);
//     });
// }