import React from 'react';
import Netflix from '../utils/netflix.svg';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
const navigate = useNavigate();
const user = useSelector(store => store.user);

const handleSignOut = ()=>{
  signOut(auth).then(() => {
    navigate("/");
    // Sign-out successful.
  }).catch((error) => {
    navigate("/error");
    // An error happened.
  });
};

  return (
    <div className='px-[2rem] py-[2rem] m-auto bg-gradient-to-b from-black w-full flex justify-between'>
      <div>

      <img src={Netflix} className='w-[9.25rem] h-[2.5rem]' alt='netflix_logo' />
      </div>
      <div>
      {
        user && (

<button className='flex items-center gap-2 text-white font-bold'
onClick={handleSignOut}
>
      <img src={user?.photoURL} className='w-10 h-10 rounded-full'/>Sign-out

</button>
        )
      }
      </div>
    </div>
  )
}

export default Header
