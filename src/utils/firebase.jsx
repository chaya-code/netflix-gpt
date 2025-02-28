// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_DIN7FA9GrK-39nDDM7oPfsO3-Vs5Gag",
  authDomain: "netflix-gpt-694a1.firebaseapp.com",
  projectId: "netflix-gpt-694a1",
  storageBucket: "netflix-gpt-694a1.firebasestorage.app",
  messagingSenderId: "743196657376",
  appId: "1:743196657376:web:1fd60bc0e598c6b6633285",
  measurementId: "G-YW9B5DWMV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();