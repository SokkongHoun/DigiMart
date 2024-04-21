import React from "react";
import { UserAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return handleLogOut;
};
