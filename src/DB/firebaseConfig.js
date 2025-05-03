// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { getEnvVariables } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
  MEASUREMENTID } = getEnvVariables();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL:DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseBD   = getFirestore( FirebaseApp );
export const FirebaseStorage = getStorage( FirebaseApp );
