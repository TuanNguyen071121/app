// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMj0NAXhW1izWC4qahLCbCQXnRXSL1RG0",
    authDomain: "blog-app-react-84ca9.firebaseapp.com",
    projectId: "blog-app-react-84ca9",
    storageBucket: "blog-app-react-84ca9.appspot.com",
    messagingSenderId: "357047064637",
    appId: "1:357047064637:web:052e358de8834aa508f254",
    measurementId: "G-3TTHTYWSQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);