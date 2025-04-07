import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="background-img"
        />

        {/* Centered form using flexbox */}
        <div className="absolute inset-0 flex justify-center items-center">
          <form className="bg-black/60 p-10 rounded text-white w-[400px]">
            <h1 className="text-3xl font-bold px-2 mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {/* Name field (only shown for Sign Up) */}
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Name"
                className={`py-3 px-2 m-2 w-full rounded text-white bg-black/60 border border-white transition-all duration-300 `}
              />
            )}

            {/* Common Fields */}
            <input
              type="email"
              placeholder="Email"
              className="py-3 px-2 m-2 w-full rounded text-white bg-black/60 border border-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-3 px-2 m-2 w-full rounded text-white bg-black/60 border border-white"
            />

            <button className="py-3 m-2 w-full bg-red-600 text-white rounded">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="py-3 m-2 text-center">
              {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
              <span
                onClick={handleSignUp}
                className={`font-bold cursor-pointer ${
                  isSignInForm ? "text-white" : "text-red-600"
                }`}
              >
                {isSignInForm ? "Sign Up Now" : "Sign In Now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
