// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiiuKD5Ca1USwnu1gCR8kRaChPIiwoTiA",
  authDomain: "oculos34-fc1be.firebaseapp.com",
  projectId: "oculos34-fc1be",
  storageBucket: "oculos34-fc1be.appspot.com",
  messagingSenderId: "1065926367039",
  appId: "1:1065926367039:web:be0a74ee7813c51e54658a",
  measurementId: "G-6D7891EXLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);