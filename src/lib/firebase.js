// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "blog-site-414719.firebaseapp.com",
  projectId: "blog-site-414719",
  storageBucket: "blog-site-414719.appspot.com",
  messagingSenderId: "122987423224",
  appId: "1:122987423224:web:4309de417a69c95cd1220d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);