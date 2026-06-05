import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAcBLZgOWwFB2Rto9oTdSln3TNZRaIUmE",
  authDomain: "airesume-a5f49.firebaseapp.com",
  projectId: "airesume-a5f49",
  storageBucket: "airesume-a5f49.firebasestorage.app",
  messagingSenderId: "373011724392",
  appId: "1:373011724392:web:a5d219b096cd84270e23dd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();