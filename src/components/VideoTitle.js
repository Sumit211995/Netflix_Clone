import React from 'react';
import Play from '../images/play.svg'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='max-w-screen mx-auto aspect-video absolute  flex flex-col pt-64 bg-gradient-to-r from-black opacity-90'>
    <div className='px-16'>

      <h1 className='text-[42px] font-bold font-lexend-deca text-white'>{title}</h1>
      <p className='text-lg  text-white font-sans leading-[28px] tracking-wide w-1/2'>{overview}</p>
    </div>
    <div className='flex gap-4 my-8 px-16'>
        <button className='flex items-center px-4 py-1 bg-white rounded-lg text-xl gap-2 hover:bg-slate-200'><img src={Play} alt='' className='w-10 h-10'/>Play</button>
        <button className='px-7 py-1 bg-neutral-700 font-bold text-white rounded-lg opacity-80 hover:bg-neutral-500'>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;
