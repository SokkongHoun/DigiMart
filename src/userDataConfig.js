import { initializeApp } from "firebase/app";
const firebaseConfigUserData = {
  apiKey: "AIzaSyD9dCr2TGmAur5ArFxj1BL7_PA8gZaJfyM",
  authDomain: "digimart-firebase.firebaseapp.com",
  databaseURL:
    "https://digimart-firebase.asia-southeast1.firebasedatabase.app/",
  projectId: "digimart-firebase",
  storageBucket: "digimart-firebase.appspot.com",
  messagingSenderId: "901765366823",
  appId: "1:901765366823:web:ba741bb0eacabcefc7ba02",
  measurementId: "G-DYMKRZGYC1",
};

// Initialize Firebase
export const UserDataApp = initializeApp(
  firebaseConfigUserData,
  "secondDatabase"
);
