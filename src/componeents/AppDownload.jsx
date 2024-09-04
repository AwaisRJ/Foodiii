import React from 'react'
import { assets } from '../assets/assets';
const AppDownload = () => {
  return (
    <div className='flex flex-col justify-center items-center text-3xl mt-20 mb-10 font-bold'>
      <h1>For Better Experience Please Download <br /> <span className='text-orange-500 pl-48'> Tomato App</span></h1>
      <div className='flex justify-center gap-5 pt-10 cursor-pointer'>
        <img src={assets.play_store} alt="PlayStore" />
        <img src={assets.app_store} alt="PlayStore" />
      </div>
    </div>
  );
}

export default AppDownload
