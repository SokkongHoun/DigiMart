import React from "react";
import { UserAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOutPage = () => {
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
  return (
    <div>
      <button onClick={handleLogOut} className="px-5 py-2">
        log out
      </button>
    </div>
  );
};

export default SignOutPage;
