import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = ()=>{
    const nameValue = name?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if(isSignUp){
        const msg = checkValidateData(nameValue, emailValue, passwordValue, isSignUp);
        setError(msg);
    }else{
        const msg = checkValidateData(undefined, emailValue, passwordValue);
        setError(msg);
    }
    if(error) return;

    if(isSignUp){
      //signup logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: nameValue, photoURL: "https://avatars.githubusercontent.com/u/82757240?v=4"
    }).then(() => {
      // Profile updated!
const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL }));
      navigate("/browse");
      // ...
    }).catch((error) => {
      setError(error.message);
    });
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
  });
    }else{
      //signin logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
  });
    }

  }

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
          <form 
          onSubmit={(e)=>{e.preventDefault()}}
          className="w-full h-full">
            <div className="flex flex-col py-16 px-16 bg-black bg-opacity-80 rounded-md h-full w-full">
              <label className="text-white my-4 text-3xl font-bold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </label>
              {isSignUp && (
                <input
                ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
                />
              )}
              <input
              ref={email}
                type="text"
                placeholder="Email Address"
                className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
              />
              <input
              ref={password}
                type="password"
                placeholder="Enter Password"
                className="mt-4 p-4 bg-slate-700 bg-opacity-60 rounded-md border border-gray-500 text-white"
              />
              {error && <p className="text-red-700 text-md font-bold mt-2">{error}</p>}
              <button className="w-full text-white bg-[#E50914] hover:bg-[#C11119] p-2 text-lg mt-4 rounded-md"
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
