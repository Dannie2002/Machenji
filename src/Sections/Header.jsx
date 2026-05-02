import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight ,ArrowLeft,House,RectangleEllipsis, X,CalendarDays, MapPin,Ticket,Compass,Download,Heart ,Calendar, Flame, Zap } from 'lucide-react';
import Machenji_logo from '../assets/Images/Machenji_logo.png'
import MenuIcon from '../Components/MenuIcon';
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Dali_wonga from '../assets/Images/Daliwonga.jpg'
import Tay_concert from '../assets/Images/TayGrin_concert.jpg'
import Month_end_shutdown from '../assets/Images/MonthEndSD.jpg'
import lines from '../assets/Images/Lines.png'
import Lulu_legacy from '../assets/Images/Lulu_legacy.jpg'
import Take_over from '../assets/Images/Take_over.jpg'
import noise from '../assets/Images/Noise.png'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const Events_data = [
    {
      id:1,
      title: 'Gwamba & Ruger',
      description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
      date:'sat, 1st August 2026',
      location:'Lilongwe, Malawi',
      Category:"Concert",
      link: '#',
      image: Gwamba_concert
    },
    {
        id:2,
      title: 'Zeze_concert',
      description: 'I transformed raw data into actionable insights that supported informed business decisions',
        Category:"Trending",
        date:'Sat, 27 April 2026',
      location:'The RoadTrip, After Nguludi Turn-off',
      link: '#',
      image: Zeze_concert
    },
    {
        id:3,
      title: 'Likoma Island Music Festival 2026',
      description: 'Analytics dashboard with cards, charts, and dark/light themes.',
        Category:"Music",
        date:'Sat, 27 April 2026',
      location:'The RoadTrip, After Nguludi Turn-off',
      link: '#',
      image: Tay_concert
    },
  
      {
          id:4,
      title: 'Daliwonga live in Malawi',
      description: 'Analytics dashboard with cards, charts, and dark/light themes.',
       Category:"Music",
       date:'Sat, 27 April 2026',
      location:'The RoadTrip, After Nguludi Turn-off',
      link: '#',
      image: Dali_wonga
    },
  
        {
            id:5,
      title: '  Take Over Mwanza',
      description: 'Analytics dashboard with cards, charts, and dark/light themes.',
        Category:"Sports",
      link: '#',
      image: Take_over
    },
    
       {
          id:6,
      title: 'Monthend Shutdown',
      description: 'Analytics dashboard with cards, charts, and dark/light themes.',
      date:'Sat, 27 April 2026',
      location:'The RoadTrip, After Nguludi Turn-off',
      Category:"Music",
      link: '#',
      image: Month_end_shutdown
    },
  
  ];

    const bg = {
      backgroundImage: `url(${Machenji_hero })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };

  const quickLinks = [
    { name: "Find Events", icon: <Compass className="size-4" />, href: "#events" },
    { name: "Create Events", icon: <Calendar className="size-4" />, href: "#schedule" },
    { name: "Our Solution", icon: <Flame className="size-4" />, href: "#trending" },
    { name: "FAQs", icon: <Zap className="size-4" />, href: "#host" },
    {name:"Support"}
  ];

  return (
    <div  className="fixed bg-trasparent top-0 left-0 z-100 w-full ">
   
      
      <div className='flex items-center justify-between px-6 py-4 lg:px-22'>
        <div onClick={() => setMenuOpen(true)} className="flex size-10 items-center border p-2 border-(--text-color) rounded-full cursor-pointer group">
         <MenuIcon color='#e6ff00' size={26} className='white group-hover:text-(--secondary-color) transition-colors' />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            style={bg}  className='fixed inset-0 bg-[#272626] backdrop-blur-2xl z-100 Section_wrapper overflow-y-auto'
            >
              {/* Overlay layers */}
              <img src={noise} alt="Noise" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
              <div className="absolute z-20 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#161619]/97 to-[#161619] opacity-100"></div>

              <div className='flex justify-between items-center w-full relative z-50'>
                 <motion.div onClick={() => setMenuOpen(false)} className='flex border group w-fit transition-all duration-500 cursor-pointer rounded-sm hover:bg-(--primary-color)/80 border-(--text-color)/60 px-6  py-2 items-center gap-4'>
                  <div className='flex relative group items-center overflow-hidden rounded-sm  justify-center bg-(--secondary-color) size-7 p-2'>
                    <ArrowLeft className='absolute  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#272626]' />
                    <House className='absolute  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                  </div>
            <h3 className='text_button'>
            Back To Home
          </h3>
         
                 </motion.div>
              </div>

              <div className='flex items-start justify-between flex-col mt-22 relative z-50'>
                <div className='flex flex-col gap-8'>
                  <h4 className='zalando text-grey tracking-[4px] uppercase text-xs font-bold border-b border-white/10 pb-4'>Quick Navigation</h4>   
                </div>

                <div className='divs_container'>
                  <ul className="px-4 chivo flex flex-col gap-2 uppercase rounded-sm lg:w-[30%] py-6 w-full ">


            {quickLinks.map((link, index) => (
               <li key={link.name} className=" hover:translate-x-2 transition-all duration-350 ease-in-out cursor-pointer">
                 <a href={link.href || "#"} className="flex items-center gap-3 py-2 text-2xl white">
                   {link.icon}
                   {link.name}
                 </a>
                </li>

              ))}


                  </ul>

                    <div className='p-6 lg:w-[70%] hidden rounded-sm w-full hover:bg-[#272626] hover:border-(--text-color)/40 border border-[#fffced]/40'>
                    </div>
                </div>
                
              
               
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
       

        {/* Animated Hamburger Menu Button */}
     

        <motion.div className='flex border group w-fit transition-all duration-500 cursor-pointer rounded-sm hover:bg-(--primary-color)/80 border-(--text-color)/60 px-6  py-2 items-center gap-4'>
          <h3 className='text_button'>
            Host An Event
          </h3>
          <div className='flex relative group items-center overflow-hidden rounded-sm  justify-center bg-(--secondary-color) size-7 p-2'>
            <ArrowRight className='absolute  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#272626]' />
            <ArrowRight className='absolute  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
          </div>
         
        </motion.div>
      </div>


    </div>
  )
}

export default Header