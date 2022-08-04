import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAeqxZbXqMFz9ECLFVy5eWYXHwaMuTTNlc",
  authDomain: "clone-1e0d7.firebaseapp.com",
  databaseURL: "https://clone-1e0d7.firebaseio.com",
  projectId: "clone-1e0d7",
  storageBucket: "clone-1e0d7.appspot.com",
  messagingSenderId: "723855167683",
  appId: "1:723855167683:web:69966b24851287a4ea1276",
  measurementId: "G-J2LV57QCFD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };