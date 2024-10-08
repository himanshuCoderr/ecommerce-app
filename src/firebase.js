// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZJY0jQ3aaKNhPfueT3qBVjHXW9FfHh4",
  authDomain: "ecommerce-pawan.firebaseapp.com",
  projectId: "ecommerce-pawan",
  storageBucket: "ecommerce-pawan.appspot.com",
  messagingSenderId: "355070376971",
  appId: "1:355070376971:web:8c46e87e5d49819d4a1b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const storage = getStorage(app, "gs://ecommerce-pawan.appspot.com");

export {auth , db, storage}

