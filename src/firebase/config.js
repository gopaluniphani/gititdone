import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDvQdIh_VvxU1Nsy9Mlxwy-7-WKrkbaAYc",
  authDomain: "getitdone-f88cb.firebaseapp.com",
  databaseURL: "https://getitdone-f88cb.firebaseio.com",
  projectId: "getitdone-f88cb",
  storageBucket: "getitdone-f88cb.appspot.com",
  messagingSenderId: "335606118031",
  appId: "1:335606118031:web:b5d852ac2a5b642fd2a2fa",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
