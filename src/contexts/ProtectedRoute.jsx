import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { adminStatus } = UserAuth();

  if (!adminStatus) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

export const UserCartRoute = ({ children }) => {
  const { userUI } = UserAuth();

  if (!userUI) {
    return <Navigate to="/" />;
  }
  return children;
};
