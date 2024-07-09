// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjKlODhF7rNcc0Q8XJor8FuIxRr4yN1_M",
  authDomain: "mobile-contatos.firebaseapp.com",
  projectId: "mobile-contatos",
  storageBucket: "mobile-contatos.appspot.com",
  messagingSenderId: "579517212845",
  appId: "1:579517212845:web:2584f4fed9a87bc6debe24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}