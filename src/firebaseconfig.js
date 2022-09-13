// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg_uO5SowVMsNerqqJoTiYfdGAoFHg3PY",
  authDomain: "dictionary-app-28099.firebaseapp.com",
  projectId: "dictionary-app-28099",
  storageBucket: "dictionary-app-28099.appspot.com",
  messagingSenderId: "315813939946",
  appId: "1:315813939946:web:95760cbd1927b8257fe593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);