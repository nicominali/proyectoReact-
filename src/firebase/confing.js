// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4rdAnhTxLR5NjaNSojv5H_lhKlSw9Bxw",
  authDomain: "react-proyect-143a0.firebaseapp.com",
  projectId: "react-proyect-143a0",
  storageBucket: "react-proyect-143a0.appspot.com",
  messagingSenderId: "399823089086",
  appId: "1:399823089086:web:7e72c56784a67325371def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)