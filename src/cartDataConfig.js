import { initializeApp } from "firebase/app";
const firebaseConfigCartData = {
  apiKey: import.meta.env.REACT_APP_CARTDATACONFIG_API_KEY,
  authDomain: import.meta.env.REACT_APP_CARTDATACONFIG_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_CARTDATACONFIG_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_CARTDATACONFIG_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_CARTDATACONFIG_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .REACT_APP_CARTDATACONFIG_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_CARTDATACONFIG_APP_ID,
  measurementId: import.meta.env.REACT_APP_CARTDATACONFIG_MEASUREMENT_ID,
};

// Initialize Firebase
export const cartData = initializeApp(firebaseConfigCartData, "fourthDatabase");
