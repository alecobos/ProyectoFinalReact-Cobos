// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1p8N5FY8hEJ7LbJPNJnIQs12rX_f6do",
  authDomain: "tiendavirtualgyt.firebaseapp.com",
  projectId: "tiendavirtualgyt",
  storageBucket: "tiendavirtualgyt.appspot.com",
  messagingSenderId: "683931977290",
  appId: "1:683931977290:web:acdf29d1942ddc9e3188b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)