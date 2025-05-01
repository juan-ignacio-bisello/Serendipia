// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV-RydqhCDjr7OEJZb-cUKxCYvBUALVCQ",
  authDomain: "serendipia-backend.firebaseapp.com",
  databaseURL: "https://serendipia-backend-default-rtdb.firebaseio.com",
  projectId: "serendipia-backend",
  storageBucket: "serendipia-backend.firebasestorage.app",
  messagingSenderId: "1081021373580",
  appId: "1:1081021373580:web:1d353e2c4f6c41de3cafa9",
  measurementId: "G-T3KRG7GJPX"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseBD   = getFirestore( FirebaseApp );
