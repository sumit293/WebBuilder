// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-6c833.firebaseapp.com",
  projectId: "genwebai-6c833",
  storageBucket: "genwebai-6c833.firebasestorage.app",
  messagingSenderId: "233603282041",
  appId: "1:233603282041:web:19f6901d3fae24288cd0a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);