// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChzjrGT9SQtQZxuucw7fF79P41Z7RKlPQ",
  authDomain: "cineflix-6874e.firebaseapp.com",
  projectId: "cineflix-6874e",
  storageBucket: "cineflix-6874e.firebasestorage.app",
  messagingSenderId: "964390555714",
  appId: "1:964390555714:web:632df4a1f38ae680301ddb",
  measurementId: "G-RTNGW9KQSQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

