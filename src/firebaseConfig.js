// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD2zLKwHQAaGO9gj8rwYQHISYT_UivXcyw",
//   authDomain: "pesan-anonim.firebaseapp.com",
//   projectId: "pesan-anonim",
//   storageBucket: "pesan-anonim.appspot.com",
//   messagingSenderId: "75019901282",
//   appId: "1:75019901282:web:0cf147bf7af7e3c099343b",
//   measurementId: "G-84N9915GX2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2zLKwHQAaGO9gj8rwYQHISYT_UivXcyw",
  authDomain: "pesan-anonim.firebaseapp.com",
  projectId: "pesan-anonim",
  storageBucket: "pesan-anonim.appspot.com",
  messagingSenderId: "75019901282",
  appId: "1:75019901282:web:0cf147bf7af7e3c099343b",
  measurementId: "G-84N9915GX2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
