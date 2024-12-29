// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-67009.firebaseapp.com",
  projectId: "reactchatapp-67009",
  storageBucket: "reactchatapp-67009.firebasestorage.app",
  messagingSenderId: "526132423343",
  appId: "1:526132423343:web:ba1cfaab1a88b143a6825a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()  // <--- Export the Firestore instance