import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

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

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);