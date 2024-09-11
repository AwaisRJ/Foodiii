import React from 'react'
import { assets } from '../assets/assets';
const AppDownload = () => {
  return (
    <div id='app-download' className='flex flex-col justify-center items-center 
    min-[690px]:text-3xl max-[689px]:text-xl 
    mt-20 mb-10 font-bold'>
      <h1>For Better Experience Please Download <br /> <span className='flex justify-center text-orange-500'> Tomato App</span></h1>
      <div className='flex justify-center gap-5 pt-10 cursor-pointer
      min-[536px]:flex-row max-[535px]:flex-col'>
        <img src={assets.play_store} alt="PlayStore" />
        <img src={assets.app_store} alt="PlayStore" />
      </div>
    </div>
  );
}

export default AppDownload
