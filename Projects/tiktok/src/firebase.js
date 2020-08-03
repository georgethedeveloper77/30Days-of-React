import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAb1WCpiRMd_I-Mx5kgayBkzcavrMeBeuI",
  authDomain: "splurge-9af52.firebaseapp.com",
  databaseURL: "https://splurge-9af52.firebaseio.com",
  projectId: "splurge-9af52",
  storageBucket: "splurge-9af52.appspot.com",
  messagingSenderId: "944411296779",
  appId: "1:944411296779:web:d3ef498cde94444f93330e",
  measurementId: "G-DZE1JJG8BZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
