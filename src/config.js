import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDEgsz_z67W6IiPFMRbAflwm9bKqbjg4VA",
    authDomain: "gaolzproject.firebaseapp.com",
    databaseURL: "https://gaolzproject.firebaseio.com",
    projectId: "gaolzproject",
    storageBucket: "gaolzproject.appspot.com",
    messagingSenderId: "471571022210",
    appId: "1:471571022210:web:cc0f32370e7130f4518f9b"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase