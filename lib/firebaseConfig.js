// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhCIlnBcAoyQ1VO5VBxPWCeCHBjVnrSA8",
  authDomain: "early-mart-bd2b2.firebaseapp.com",
  projectId: "early-mart-bd2b2",
  storageBucket: "early-mart-bd2b2.firebasestorage.app",
  messagingSenderId: "568259081848",
  appId: "1:568259081848:web:72ce77dc043b5bf3531f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}