import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAgW76ySI1sD9b71AWi6rKbQrbC3IKwiYs",
    authDomain: "clone-b4a4a.firebaseapp.com",
    projectId: "clone-b4a4a",
    storageBucket: "clone-b4a4a.appspot.com",
    messagingSenderId: "1034662502174",
    appId: "1:1034662502174:web:a9949fdfb75ec1221f730f"
  });

  const db = firebase.firestore();

  export { db }
