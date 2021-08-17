import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_QzR4-wqSYRdksOSEk2Wx2CrUd3aXJnw",
    authDomain: "todo-app-e3550.firebaseapp.com",
    projectId: "todo-app-e3550",
    storageBucket: "todo-app-e3550.appspot.com",
    messagingSenderId: "53937228587",
    appId: "1:53937228587:web:70d6bb1f060e7582add36e",
    measurementId: "G-VBHBSGR1E4"
});

const db = firebaseApp.firestore();

export default db;