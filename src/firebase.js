import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARILX6iiUT0N1OKA5huFLi1esfFZo-Ghk",
    authDomain: "twitter-clone-e3dd5.firebaseapp.com",
    databaseURL: "https://twitter-clone-e3dd5.firebaseio.com",
    projectId: "twitter-clone-e3dd5",
    storageBucket: "twitter-clone-e3dd5.appspot.com",
    messagingSenderId: "914893608587",
    appId: "1:914893608587:web:339e30a69feec879d3e68e",
    measurementId: "G-S1SVD46L3G"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;