// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArlN8hcA2PINa-jRnA9fBHSkxF_ygKxrA",
  authDomain: "playground-pl.firebaseapp.com",
  projectId: "playground-pl",
  storageBucket: "playground-pl.appspot.com",
  messagingSenderId: "570197893782",
  appId: "1:570197893782:web:6bac0c6ed556317ad098b7",
  measurementId: "G-Z00JY4R83E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export { app, db }