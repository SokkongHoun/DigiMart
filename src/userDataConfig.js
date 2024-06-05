import { initializeApp } from "firebase/app";
const firebaseConfigUserData = {
  apiKey: import.meta.env.REACT_APP_USERDATACONFIG_API_KEY,
  authDomain: import.meta.env.REACT_APP_USERDATACONFIG_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_USERDATACONFIG_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_USERDATACONFIG_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_USERDATACONFIG_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .REACT_APP_USERDATACONFIG_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_USERDATACONFIG_APP_ID,
  measurementId: import.meta.env.REACT_APP_USERDATACONFIG_MEASUREMENT_ID,
};

// Initialize Firebase
export const UserDataApp = initializeApp(
  firebaseConfigUserData,
  "secondDatabase"
);
