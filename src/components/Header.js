import React from 'react';
import Netflix from '../utils/netflix.svg';

const Header = () => {
  return (
    <div className='px-[2rem] py-[2rem] m-auto bg-gradient-to-b from-black w-full'>
      <img src={Netflix} className='w-[9.25rem] h-[2.5rem]' alt='netflix_logo' />
    </div>
  )
}

export default Header
