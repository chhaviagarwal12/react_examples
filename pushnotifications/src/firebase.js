import firebase from 'firebase'


const firebaseConfig = {

    apiKey: "AIzaSyBhVQKxV48m3_B3O4SZ0w8qu93KhKFVdi4",
  
    authDomain: "pushnotifications-1156d.firebaseapp.com",
  
    projectId: "pushnotifications-1156d",
  
    storageBucket: "pushnotifications-1156d.appspot.com",
  
    messagingSenderId: "1076081027848",
  
    appId: "1:1076081027848:web:c32aa35cc94686a9dfdabd"
  
  };
  firebase.initializeApp(firebaseConfig)
  
  export default firebase