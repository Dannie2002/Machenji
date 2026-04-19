import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Machenji_logo from '../assets/Images/Machenji_logo.png'


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed bg-transparent hidden  top-0 left-0 z-50 w-full ">
      <div className='flex items-center justify-between px-6 py-4 lg:px-22'>
        <a href="#home" className="flex items-center">
          <img src={Machenji_logo} className='size-30' alt="" />
         
        </a>

        {/* Desktop Nav */}
       

        {/* Animated Hamburger Menu Button */}
        <button
          className='relative group z-50 flex flex-col items-center justify-center w-8 h-8 ml-auto lg:hidden group'
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>

        <motion.div className='flex items-center gap-4 group relative px-4 py-2.5 text-[#fffced] zalando uppercase font-bold transition-all duration-300 bg-(--primary-color) border border-none  text-[12px]'
          whileHover={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        
        >
          <span>
            Host An Event
          </span>
          <div className='flex relative items-center overflow-hidden  justify-center bg-[#fffced] p-4'>
            <ArrowRight className='absolute  size-5 transform  transition-all duration-490  group-hover:translate-x-10 text-(--primary-color)' />
            <ArrowRight className='absolute  size-5 transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-(--primary-color)' />
          </div>
         
        </motion.div>
      </div>


    </div>
  )
}

export default Header