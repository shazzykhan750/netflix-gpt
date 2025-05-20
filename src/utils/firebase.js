// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1gojUNuGzUWanxN5XmxMEcpmFfkGV4B8",
  authDomain: "movieapp-8feb8.firebaseapp.com",
  projectId: "movieapp-8feb8",
  storageBucket: "movieapp-8feb8.firebasestorage.app",
  messagingSenderId: "750389643974",
  appId: "1:750389643974:web:cdb50349099e98293165c7",
  measurementId: "G-0XZFP5NTMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
