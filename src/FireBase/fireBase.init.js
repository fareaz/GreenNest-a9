// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmh-iWzZbkKDOYBuYlIifODj5v3wDl__A",
  authDomain: "green-nest-fc2b6.firebaseapp.com",
  projectId: "green-nest-fc2b6",
  storageBucket: "green-nest-fc2b6.firebasestorage.app",
  messagingSenderId: "482922737001",
  appId: "1:482922737001:web:95dd63da566ee1a8d3a1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);