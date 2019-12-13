import firebase from "firebase/app";
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqLsMBICkdFU9q1AyOLdQ0QbVbE89-18s",
  authDomain: "cours-en-ligne-e42da.firebaseapp.com",
  databaseURL: "https://cours-en-ligne-e42da.firebaseio.com",
  projectId: "cours-en-ligne-e42da",
  storageBucket: "cours-en-ligne-e42da.appspot.com",
  messagingSenderId: "1078088984845",
  appId: "1:1078088984845:web:5c9ec8f5cb4b2291d5e844",
  measurementId: "G-62TYVH2F42"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();

export {storage,firebase as default}
