import React, { useState } from 'react'
import {assets} from '../assets/assets';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartAction } from '../store/cart-slice';
function Navbar() {
 const dispatch = useDispatch();
  const toggleHandler = () => {
        dispatch(cartAction.toggle());
  }
  const [menu, setMenu] = useState('home')
  return (
    <header className='flex flex-1 justify-between items-center py-5'>
      <div className='text-orange-500 text-2xl font-bold'>
       <h1>Tomato.</h1>
      </div>
      <div >
        <ul className='flex gap-7 cursor-pointer'>
          <li onClick={()=> {setMenu('home')}} className={menu==='home'?'active:pb-1 border-b-2' : ''}>Home</li>
          <li onClick={()=> {setMenu('menu')}} className={menu==='menu'?'active:pb-1 border-b-2' : ''}>Menu</li>
          <li onClick={()=> {setMenu('mobile-app')}} className={menu==='mobile-app'?'active:pb-1 border-b-2' : ''}>Mobile App</li>
          <li onClick={()=> {setMenu('contact-us')}} className={menu==='contact-us'?'active:pb-1 border-b-2' : ''}>Contact Us</li>
        </ul>
      </div>
      <div className='flex gap-10 justify-center items-center cursor-pointer'>
        <img className='size-8' src={assets.search_icon} alt="Search Icon" />
        <img onClick={toggleHandler} src={assets.basket_icon} alt="Cart" />
        <motion.button className='rounded-full border-2 py-2 px-4'
        whileHover={{
          scale: 1.1,
        }}
        >Sign In</motion.button>
      </div>
    </header>
  )
}

export default Navbar