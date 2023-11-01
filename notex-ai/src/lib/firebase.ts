// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "notex-ai.firebaseapp.com",
  projectId: "notex-ai",
  storageBucket: "notex-ai.appspot.com",
  messagingSenderId: "836935173627",
  appId: "1:836935173627:web:34a1bd2f3cea46b188775e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);