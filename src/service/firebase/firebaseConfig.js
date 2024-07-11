// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUJAZtW6MportVSMPbVMMkkzjgdThO1mA",
  authDomain: "serendipia-backend.firebaseapp.com",
  projectId: "serendipia-backend",
  storageBucket: "serendipia-backend.appspot.com",
  messagingSenderId: "1081021373580",
  appId: "1:1081021373580:web:356138cf5041d0223cafa9",
  measurementId: "G-4663SHBMX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const analytics = getAnalytics(app);
export const db = getFirestore(app);