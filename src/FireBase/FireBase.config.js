// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqfVdDCon9QQrHgx1o_91fNjhDp9bVsDw",
  authDomain: "fashion-clint.firebaseapp.com",
  projectId: "fashion-clint",
  storageBucket: "fashion-clint.appspot.com",
  messagingSenderId: "813068536837",
  appId: "1:813068536837:web:55ce225f89acba0f61a06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;
