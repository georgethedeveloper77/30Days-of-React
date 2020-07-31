import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAc7HljNQXe4xmEQGgSDE_fRHow4PkLHs8",
  authDomain: "arcade-180a6.firebaseapp.com",
  databaseURL: "https://arcade-180a6.firebaseio.com",
  projectId: "arcade-180a6",
  storageBucket: "arcade-180a6.appspot.com",
  messagingSenderId: "967305974423",
  appId: "1:967305974423:web:ef91b12871cb34eedd0fd2",
  measurementId: "G-QY1PS935K0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
