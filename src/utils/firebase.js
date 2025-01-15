// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEt6iTmeGTcyp1NpaTPPfoBpoHdY1ouqU",
  authDomain: "netflixgpt-559dd.firebaseapp.com",
  projectId: "netflixgpt-559dd",
  storageBucket: "netflixgpt-559dd.firebasestorage.app",
  messagingSenderId: "952729652327",
  appId: "1:952729652327:web:e6363f07361d39220818c2",
  measurementId: "G-PKNJ06CPLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();