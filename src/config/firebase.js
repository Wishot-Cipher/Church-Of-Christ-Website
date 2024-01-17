// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzgMe1rmFW57xNgfLBnrRa577agpk6f58",
  authDomain: "church-of-christ-website.firebaseapp.com",
  projectId: "church-of-christ-website",
  storageBucket: "church-of-christ-website.appspot.com",
  messagingSenderId: "25314941672",
  appId: "1:25314941672:web:35da58c95fa6a2b3cb475d",
  measurementId: "G-83H5TSCL8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider();

export const database = getFirestore(app)
export const firestore = getStorage(app)