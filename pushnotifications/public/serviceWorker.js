import firebase from "../src/firebase"

importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.5.4/workbox-sw.js')

firebase.initializeApp({
    messagingSenderId: "1076081027848"
})

const initMessaging=firebase.messaging()