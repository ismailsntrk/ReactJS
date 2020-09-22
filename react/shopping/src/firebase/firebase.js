import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA1mcgC9M5QI_es204otnOPgoeEbKUgdcc",
    authDomain: "shopping-5eccd.firebaseapp.com",
    databaseURL: "https://shopping-5eccd.firebaseio.com",
    projectId: "shopping-5eccd",
    storageBucket: "shopping-5eccd.appspot.com",
    messagingSenderId: "473017732513",
    appId: "1:473017732513:web:f8972f64193e70ab180fe0",
    measurementId: "G-CFNX57961W"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;