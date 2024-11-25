// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBGBxMR-AjCrk5JpqppC9gJzcnw1A0SCE",
  authDomain: "catweb-64027.firebaseapp.com",
  projectId: "catweb-64027",
  storageBucket: "catweb-64027.appspot.com",
  messagingSenderId: "1094774710113",
  appId: "1:1094774710113:web:12c7f6a6ac70be37f9af20",
  measurementId: "G-T0ZQXLVCZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

export { db };
