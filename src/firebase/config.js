// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhiCO4Dh6ssf0a8yTAF0kG8LNgxcZj89s",
  authDomain: "catalogojuegos-2e0cf.firebaseapp.com",
  projectId: "catalogojuegos-2e0cf",
  storageBucket: "catalogojuegos-2e0cf.appspot.com",
  messagingSenderId: "619923642159",
  appId: "1:619923642159:web:80026b763f83a20a8573da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
