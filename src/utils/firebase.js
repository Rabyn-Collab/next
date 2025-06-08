// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-HZSVAZm6t51lQYdg4QM3okGBJp5X57Q",
  authDomain: "news-portal-d3606.firebaseapp.com",
  projectId: "news-portal-d3606",
  storageBucket: "news-portal-d3606.firebasestorage.app",
  messagingSenderId: "996869909485",
  appId: "1:996869909485:web:31e809483a85fe580a15e4",
  measurementId: "G-CFX85N784N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);