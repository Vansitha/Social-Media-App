// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD11jpaXNRn89zrTAU4ce4_Vm5teQpj8Ww",
  authDomain: "social-media-app-6528b.firebaseapp.com",
  projectId: "social-media-app-6528b",
  storageBucket: "social-media-app-6528b.appspot.com",
  messagingSenderId: "518734512826",
  appId: "1:518734512826:web:8b1f8b35107678efe47883",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
