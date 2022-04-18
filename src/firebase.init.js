// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZKwibTIsBgwoF0JKQTXg9MerLivvRf4Y",
  authDomain: "bappis-chamber.firebaseapp.com",
  projectId: "bappis-chamber",
  storageBucket: "bappis-chamber.appspot.com",
  messagingSenderId: "841085744810",
  appId: "1:841085744810:web:8474796028a35d0acd42d3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;