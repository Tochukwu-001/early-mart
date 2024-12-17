// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYCGH4dZp8JK6x4uREKxPoYGhE0DmVTRk",
  authDomain: "early-mart-bd2b2.firebaseapp.com",
  projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
  storageBucket: "early-mart-bd2b2.firebasestorage.app",
  messagingSenderId: "568259081848",
  appId: "1:568259081848:web:5d46a780e98d5ad0531f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}