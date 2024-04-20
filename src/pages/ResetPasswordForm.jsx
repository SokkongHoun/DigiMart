import React from "react";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="../../logo.png"
          alt="DigiMart"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom">
          Check your email for verification
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-third focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Send
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

export default ResetPasswordForm;
