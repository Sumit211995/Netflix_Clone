import React, { useEffect } from "react";
import Netflix from "../images/netflix.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    //Unsubscribe when component unmount 
    return ()=> unSubscribe();
  }, []);

  return (
    <div className="absolute px-[2rem] py-[2rem] m-auto bg-gradient-to-b from-black w-full flex justify-between z-10">
      <div className="ml-8">
        <img
          src={Netflix}
          className="w-[9.25rem] h-[2.5rem]"
          alt="netflix_logo"
        />
      </div>
      <div>
        {user && (
          <button
            className="flex items-center gap-2 text-white font-bold"
            onClick={handleSignOut}
          >
            <img src={user?.photoURL} className="w-10 h-10 rounded-full" />
            Sign-out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
