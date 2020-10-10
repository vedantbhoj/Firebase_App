import * as firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDNIxx5dAi1RCXtvK4rGV-9mKJquYLVeJk",
  authDomain: "fir-app-5ec3f.firebaseapp.com",
  databaseURL: "https://fir-app-5ec3f.firebaseio.com",
  projectId: "fir-app-5ec3f",
  storageBucket: "fir-app-5ec3f.appspot.com",
  messagingSenderId: "968594621465",
  appId: "1:968594621465:web:7abf465a54cf4e7bbb1688",
  measurementId: "G-TEPK89JR1H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;