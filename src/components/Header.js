import React, { useEffect } from "react";
import Netflix from "../images/netflix.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Search from "../images/search.svg";
import { removeGPTMovieResult, searchGptView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component unmount
    return () => unSubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(searchGptView());
    dispatch(removeGPTMovieResult());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
    <div className="absolute px-[2rem] py-[2rem] m-auto bg-gradient-to-b from-black w-full flex justify-between z-10 mdmx:hidden">
      <div className="ml-8">
        <img
          src={Netflix}
          className="w-[9.25rem] h-[2.5rem]"
          alt="netflix_logo"
        />
      </div>
      <div>
        {user && (
          <div className="flex gap-6">
            {showGptSearch && (
              <select
                className="py-2 px-4 bg-neutral-800 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="flex items-center text-white "
              onClick={handleGPTSearch}
            >
            {
              showGptSearch ? 'Home' :  <img
                src={Search}
                className="w-6 h-6 fill-white text-white"
                alt="Search"
              />
            }
              
            </button>
            <button
              className="flex items-center gap-2 text-white font-bold"
              onClick={handleSignOut}
            >
              <img src={user?.photoURL} className="w-10 h-10 rounded-lg" />
            </button>
          </div>
        )}
      </div>
    </div>

    <div className="absolute  py-2 m-auto bg-gradient-to-b from-black w-full flex justify-between z-10 md:hidden">
      <div className="ml-4">
        <img
          src={Netflix}
          className="w-[4rem] h-[2.5rem]"
          alt="netflix_logo"
        />
      </div>
      <div>
        {user && (
          <div className="flex gap-6 px-4">
            {showGptSearch && (
              <select
                className="py-2 px-4 bg-neutral-800 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="flex items-center text-white "
              onClick={handleGPTSearch}
            >
            {
              showGptSearch ? 'Home' :  <img
                src={Search}
                className="w-6 h-6 fill-white text-white"
                alt="Search"
              />
            }
              
            </button>
            <button
              className="flex items-center gap-2 text-white font-bold"
              onClick={handleSignOut}
            >
              <img src={user?.photoURL} className="w-8 h-8 rounded-lg" />
          </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Header;
