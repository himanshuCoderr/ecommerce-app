// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
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

export {auth}

