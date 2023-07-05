// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8qdrSSMyNonrwXM3YnPUdg_bdJ5_4AtU",
  authDomain: "my-project-6c4bd.firebaseapp.com",
  projectId: "my-project-6c4bd",
  storageBucket: "my-project-6c4bd.appspot.com",
  messagingSenderId: "163863853273",
  appId: "1:163863853273:web:0a78f683b8c4a2093826c8",
  measurementId: "G-T3JBC7QN5Q"
};

// Initialize Firebase
const FbApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FbApp);

const auth = getAuth(FbApp);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default auth;