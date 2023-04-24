// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXzM3QOsLk45iwkDV6sgqMlaB_B-BH8-s",
  authDomain: "reminder-app-5b353.firebaseapp.com",
  projectId: "reminder-app-5b353",
  storageBucket: "reminder-app-5b353.appspot.com",
  messagingSenderId: "869495147037",
  appId: "1:869495147037:web:9395a73b132f23faca54f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);