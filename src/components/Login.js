import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, photoURL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = async() => {
    const nameValue = name?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (isSignUp) {
      const msg = checkValidateData(
        nameValue,
        emailValue,
        passwordValue,
        isSignUp
      );
      setError(msg);
    } else {
      const msg = checkValidateData(undefined, emailValue, passwordValue);
      setError(msg);
    }
    if (error) return;
    setLoading(true);
    if (isSignUp) {
      //signup logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: photoURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
        setLoading(false);
    } else {
      //signin logic
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } catch (error) {
        setError(error.message);
        console.error("Error signing in:", error.message);
      } finally {
        setLoading(false); // Stop the loader
      }
  
    }
  };

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  if (loading) {
    return (
        <div className='flex items-center justify-center w-full h-screen overflow-hidden'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-[6px] border-red-500 border-solid'></div>
        </div>
    );
}

  return (
    <div
      className="flex items-center justify-center relative w-full h-full min-h-screen bg-cover bg-center font-inter"
      style={{
        background: `url(${BG_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        maxWidth: "100%", // Prevent overflow
        minWidth: "320px", // Ensure it doesn't shrink below this width
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 mdmx:opacity-20"></div>
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="relative z-10 h-full w-full">
        <div className="flex items-center justify-center justify-items-center sm:w-[30rem] sm:mx-auto w-full py-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full h-full mx-2"
          >
            <div className="flex flex-col py-16 md:px-16 px-4 bg-black bg-opacity-80 rounded-md h-full w-full">
              <label className="text-white my-4 text-3xl font-bold mdmx:text-xl">
                {isSignUp ? "Sign Up" : "Sign In"}
              </label>
              {isSignUp && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="md:mt-4 mt-2 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white w-full"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="md:mt-4 mt-2 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white w-full"
              />
              <input
                ref={password}
                type="password"
                placeholder="Enter Password"
                className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white w-full"
              />
              {error && (
                <p className="text-red-700 text-md font-bold mt-2">{error}</p>
              )}
              <button
                className="w-full text-white bg-[#E50914] hover:bg-[#C11119] p-2 text-lg mt-4 rounded-md"
                onClick={handleFormSubmit}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>

              {!isSignUp && (
                <p className="text-gray-400 mt-12 mb-4">
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
                <p className="text-gray-400 mt-12 mb-4">
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
