
import { getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB85mS7-DmSLk-y6h-UVL4cE6f-0hS6QXI",
  authDomain: "portfolio-digitalchief.firebaseapp.com",
  databaseURL: "https://portfolio-digitalchief-default-rtdb.firebaseio.com",
  projectId: "portfolio-digitalchief",
  storageBucket: "portfolio-digitalchief.appspot.com",
  messagingSenderId: "177395748079",
  appId: "1:177395748079:web:f26ca6ab64a58481b35f1a",
  measurementId: "G-JQSL4P2CEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const database = getDatabase(app);