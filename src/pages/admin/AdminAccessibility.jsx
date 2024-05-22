import React from "react";

const AdminAccessibility = ({ setAdminEmail }) => {
  const handleEmailsubmitForAdmin = (e) => {
    setAdminEmail(e.target.value);
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
      <p className="text-xs text-first">
        Note : This function is currently inactivate
      </p>
    </>
  );
};

export default AdminAccessibility;
