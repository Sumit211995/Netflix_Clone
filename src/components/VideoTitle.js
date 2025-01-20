import React from 'react';
import Play from '../images/play.svg'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='max-w-screen mx-auto aspect-video absolute  flex flex-col pt-16 xl:pt-52 sm:pt-24 lg:pt-28 bg-gradient-to-r from-black opacity-90 w-full'>
    <div className='lg:px-16 sm:px-12 px-4'>

      <h1 className='md:text-[42px]  text-[24px] font-bold font-lexend-deca text-white'>{title}</h1>
      <p className='md:text-lg text-sm text-white font-sans leading-[28px] tracking-wide xl:w-1/2  sm:w-2/3 w-full mdmx:leading-[16px] mdmx:hidden'>{overview}</p>
    </div>
    <div className='flex gap-4 my-8 sm:px-12 lg:px-16 smmx:my-2 px-4'>
        <button className='flex items-center px-4 py-1 bg-white rounded-lg text-xl gap-2 hover:bg-slate-200 smmx:text-sm mdmx:px-2'><img src={Play} alt='' className='w-10 h-10 smmx:w-4 smmx:h-4'/>Play</button>
        <button className='px-7 py-1 bg-neutral-700 font-bold text-white rounded-lg opacity-80 hover:bg-neutral-500 mdmx:px-2'>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;
