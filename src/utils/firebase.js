// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoCtPtjjGdScyDpOsjiwWm3fJpucIE8N8",
  authDomain: "netflixgpt-f3ad8.firebaseapp.com",
  projectId: "netflixgpt-f3ad8",
  storageBucket: "netflixgpt-f3ad8.firebasestorage.app",
  messagingSenderId: "720740697559",
  appId: "1:720740697559:web:c96a49da6be4e1ebc7f792",
  measurementId: "G-48WD62THY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
