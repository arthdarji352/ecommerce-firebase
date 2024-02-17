// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXGwcUsxWULQ_BXk6kXExwLLA9Kp04RSw",
  authDomain: "myecom-d2fc5.firebaseapp.com",
  projectId: "myecom-d2fc5",
  storageBucket: "myecom-d2fc5.appspot.com",
  messagingSenderId: "456362748671",
  appId: "1:456362748671:web:7b67e83401af1ec5be7aca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
