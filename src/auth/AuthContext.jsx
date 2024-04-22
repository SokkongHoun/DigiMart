import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import LoadingAnimation from "../components/LoadingAnimation";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userUI, setUserUI] = useState(null);
  const [adminStatus, setAdminStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUserUI(true);
      } else {
        setUserUI(false);
      }

      if (currentUser) {
        currentUser.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            setAdminStatus(true);
          } else {
            setAdminStatus(null);
          }
        });
      }
      setIsLoading(false); // Set loading to false after the callback is executed
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, userUI, adminStatus }}
    >
      {isLoading ? <LoadingAnimation /> : children}{" "}
      {/* Conditionally render LoadingAnimation or children */}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
