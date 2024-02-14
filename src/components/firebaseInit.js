// firebaseInit.js
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebase";

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;

