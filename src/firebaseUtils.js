
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCPKgUh8TnwkFzCsADf3jO6nnasoTth3v0",
  authDomain: "o-slot-d09f0.firebaseapp.com",
  projectId: "o-slot-d09f0",
  storageBucket: "o-slot-d09f0.appspot.com",
  messagingSenderId: "979247154209",
  appId: "1:979247154209:web:eb1732f7591749cb448f60",
  measurementId: "G-NQPV80LDHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
