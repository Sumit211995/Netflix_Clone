import React from 'react';
import Search from "../images/search.svg";
import { BG_IMG } from '../utils/constants';
import lang from '../utils/languageConst';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang);

  return (
    <div className='pt-[10%] w-full h-screen'
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
    <form className='flex items-center w-full justify-center'>
<div className='flex p-4 bg-black w-[50%] gap-8 items-center rounded-md'>
<input type='text' className='h-10 p-4 w-[80%]' placeholder={lang[langKey].searchPlaceholder}/>
      <button className='text-white px-4 w-[20%] py-2 bg-red-700 rounded-lg flex items-center gap-4 font-bold'><img src={Search} 
            className="w-6 h-6 fill-white text-white"
          alt="Search"
          />{lang[langKey].search}</button>
</div>
    
      
          </form>
    </div>
  )
}

export default GptSearchBar;
