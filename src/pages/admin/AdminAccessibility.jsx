import React, { useState } from "react";
import { UserAuth } from "../../auth/AuthContext";
import { functions } from "../../firebaseConfig";
import { httpsCallable } from "firebase/functions";
import { toast } from "react-toastify";

const AdminAccessibility = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const addAdminRole = httpsCallable(functions, "addAdminRole");

  const { adminStatus } = UserAuth();

  console.log(adminStatus);

  const handleEmailsubmitForAdmin = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdminRole({ email: adminEmail })
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((error) => {
        console.error("Error adding admin role:", error);
      });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">
        Granting User Admin Accessibility
      </h1>
      <div className="w-96 my-5">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            onChange={handleEmailsubmitForAdmin}
            type="text"
            placeholder="Username"
            className="grow"
          />
        </label>
      </div>
      {/* <button onClick={handleSubmit}>Commit</button> */}
    </>
  );
};

export default AdminAccessibility;
