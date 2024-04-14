// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUIbfnKyjuljxyWxnXDXMC90EopLXICGU",
  authDomain: "fir-authapp-c7957.firebaseapp.com",
  projectId: "fir-authapp-c7957",
  storageBucket: "fir-authapp-c7957.appspot.com",
  messagingSenderId: "800142267502",
  appId: "1:800142267502:web:0e211f28cc4f9cf3c7427f",
  measurementId: "G-E61H7BMXDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);