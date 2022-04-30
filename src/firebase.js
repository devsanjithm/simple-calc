// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgeqinOts-7XcbRyOnhenhOnVbjw6-d80",
    authDomain: "remote-hire-bfb81.firebaseapp.com",
    projectId: "remote-hire-bfb81",
    storageBucket: "remote-hire-bfb81.appspot.com",
    messagingSenderId: "584067858362",
    appId: "1:584067858362:web:b9a07c95dd00b5454c6783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
};


export default app;