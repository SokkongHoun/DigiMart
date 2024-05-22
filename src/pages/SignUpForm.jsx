import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../auth/AuthContext";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState();

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setIsButtonDisabled(false);
        setErrorMsg("Password matched");
      } else {
        setErrorMsg("Password does not matched");
      }
    } else {
      setErrorMsg("");
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      setUserData((prevUser) => ({ ...prevUser, uid: user.uid }));
      navigate("/");
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unable to create account", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="../../logo.png"
          alt="DigiMart"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom">
          Sign up to continue
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-custom"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-custom shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-custom"
              >
                Create Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-custom shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-custom"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm password"
                name="confirm password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-custom shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>

          <p>{errorMsg}</p>

          <div>
            <button
              disabled={isButtonDisabled}
              onClick={handleSubmit}
              type="submit"
              className={`flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-third focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-first">
          already a member?
          <Link
            to="/signIn"
            className="font-semibold leading-6 text-custom hover:text-first"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
