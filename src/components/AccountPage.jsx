import React from "react";
import app from "../firebaseConfig";
import { UserAuth } from "../auth/AuthContext";

const AccountPage = () => {
  const { user } = UserAuth();

  const email = user.email;

  return <div>AccountPage</div>;
};

export default AccountPage;
