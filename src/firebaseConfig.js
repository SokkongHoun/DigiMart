import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_REALTIMEDATABASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_REALTIMEDATABASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_REALTIMEDATABASE_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_REALTIMEDATABASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_REALTIMEDATABASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .REACT_APP_REALTIMEDATABASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_REALTIMEDATABASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_REALTIMEDATABASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const functions = getFunctions(app);
export const auth = getAuth(app);
export default app;
