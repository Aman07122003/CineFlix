
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
export const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);