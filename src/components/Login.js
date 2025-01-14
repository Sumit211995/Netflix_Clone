import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className="flex items-center justify-center relative w-full h-full min-h-screen bg-cover bg-center font-inter"
      style={{
        background: `url(${"/netflix_login_background_img.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        maxWidth: "100%", // Prevent overflow
        minWidth: "320px", // Ensure it doesn't shrink below this width
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="relative z-10 h-full">
        <div className="flex items-center justify-center justify-items-center sm:w-[30rem] sm:mx-auto w-full py-auto">
          <form className="w-full h-full">
            <div className="flex flex-col py-16 px-16 bg-black bg-opacity-80 rounded-md h-full w-full">
              <label className="text-white my-4 text-3xl font-bold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </label>
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
                />
              )}
              <input
                type="text"
                placeholder="Email Address"
                className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
              />
              <button className="w-full text-white bg-[#E50914] hover:bg-[#C11119] p-2 text-lg mt-4 rounded-md">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>

              {!isSignUp && (
                <p className="text-gray-400 mt-12 mb-8">
                  New to Netflix?{" "}
                  <span
                    className="text-white font-bold cursor-pointer"
                    onClick={handleSignUp}
                  >
                    Sign up now.
                  </span>
                </p>
              )}
              {isSignUp && (
                <p className="text-gray-400 mt-12 mb-8">
                  Already Registerd?{" "}
                  <span
                    className="text-white font-bold cursor-pointer"
                    onClick={handleSignUp}
                  >
                    Sign In Now...
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
