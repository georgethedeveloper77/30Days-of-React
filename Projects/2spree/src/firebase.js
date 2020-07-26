import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANAR_Lexz3V_vvxRRBY8rkwNgQe5YoDP0",
  authDomain: "spree-2abda.firebaseapp.com",
  databaseURL: "https://spree-2abda.firebaseio.com",
  projectId: "spree-2abda",
  storageBucket: "spree-2abda.appspot.com",
  messagingSenderId: "701942913525",
  appId: "1:701942913525:web:50df894f58a9a0806f28bc",
  measurementId: "G-G9FSGH7FWW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();    //authetication
const storage = firebase.storage(); //images

export { db, auth, storage };
