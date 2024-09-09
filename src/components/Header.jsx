import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

export const Header = () => {

    const textColor = '#d0d0d0';
    const bgColor = '#111112CC';

  return (
    <div className={`fixed z-50 w-full py-3 flex items-center justify-center text-sm backdrop-blur-lg`} style={{backgroundColor: bgColor, color: textColor}}>
        <nav className="flex items-center justify-center gap-6 text-xs">
            <FaApple className='text-2xl hover:text-white' />
            <a href="#" className="hover:text-white">Store</a>
            <a href="#" className="hover:text-white">Mac</a>
            <a href="#" className="hover:text-white">iPad</a>
            <a href="#" className="hover:text-white">iPhone</a>
            <a href="#" className="hover:text-white">Watch</a>
            <a href="#" className="hover:text-white">Vision</a>
            <a href="#" className="hover:text-white">AirPods</a>
            <a href="#" className="hover:text-white">TV & Home</a>
            <a href="#" className="hover:text-white">Entertainment</a>
            <a href="#" className="hover:text-white">Accessories</a>
            <a href="#" className="hover:text-white">Support</a>
            <IoIosSearch className='text-2xl hover:text-white' />
            <IoBagOutline className='text-2xl hover:text-white' />
        </nav>
    </div>
  )
}
