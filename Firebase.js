// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACoR7O0a61BES6ZbbinTgX2sgXQF6t270",
  authDomain: "mayawebtech-18a42.firebaseapp.com",
  projectId: "mayawebtech-18a42",
  storageBucket: "mayawebtech-18a42.appspot.com",
  messagingSenderId: "857672273321",
  appId: "1:857672273321:web:a3cf99849686ea39d0c8b8",
  measurementId: "G-WKQHTGF09Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);