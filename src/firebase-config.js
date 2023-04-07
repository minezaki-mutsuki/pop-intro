// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiSpUYxnMPDgpFIQipzI7R0deB3oSjQRw",
  authDomain: "pop-intro.firebaseapp.com",
  projectId: "pop-intro",
  storageBucket: "pop-intro.appspot.com",
  messagingSenderId: "633197590732",
  appId: "1:633197590732:web:d29187c317b31f64392a69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
