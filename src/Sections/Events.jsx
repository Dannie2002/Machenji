import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import Tay_concert from '../assets/Images/TayGrin_concert.jpg'
import lines from '../assets/Images/Lines.png'
import Lulu_legacy from '../assets/Images/Lulu_legacy.jpg'
import Take_over from '../assets/Images/Take_over.jpg'
import { Search, Ticket, ShoppingCart,ArrowRight,CalendarDays, MapPin, Download, Heart  } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from '../Components/Scribble'

const Events_data = [
  {
    id:1,
    title: 'Gwamba & Ruger',
    description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
    Category:"Concert",
    link: '#',
    image: Gwamba_concert
  },
  {
      id:2,
    title: 'Zeze_concert',
    description: 'I transformed raw data into actionable insights that supported informed business decisions',
      Category:"Trending",
    link: '#',
    image: Zeze_concert
  },
  {
      id:3,
    title: 'Likoma Island Music Festival 2026',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
      Category:"Music",
    link: '#',
    image: Tay_concert
  },

    {
        id:4,
    title: 'Marste Memorial Show 2026',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
     Category:"Music",
    link: '#',
    image: Lulu_legacy
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
    title: 'Machenji_hero',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    Category:"Music",
    link: '#',
    image: Machenji_hero
  },

];



const Events = () => {

 const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.55, ease: "easeInOut" }
    },
  };



const [selectedCategory, setSelectedCategory] = useState("All");
const categories = [...new Set(Events_data.map(event => event.Category))];
const filteredEvents =
selectedCategory === "All"
? Events_data
: Events_data.filter(event => event.Category === selectedCategory);


  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[85vh]  relative z-0' style={bg} >
              
               
               <img src={noise} alt="Noise" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-[#0b0b0d]/90 via-[#121111]  to-[#121111] opacity-100"></div>

             
            
           
    <div className="Section_wrapper relative z-50">

       <div className="flex  flex-col mt-18  items-start  justify-center space-y-6 ">
        <div className='bg-[#a4010f] px-4 py-4'>
            <motion.h1 className="text-[16px] tracking-[10px] text-[#fffced]  font-bold text-center leading-[16px]  lg:text-left lg:text-[18px] lg:leading-[14px] chivo uppercase"
             initial={{ opacity: 0, x: -37 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, ease: "easeOut" }}
            >
               EXPLORE EVENTS
            </motion.h1>

         </div>
                    
      <motion.h1
      initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
       className="text-[24px] z-50 leading-[28px] text-left  text-[#c3b5b5]  zalando Capitalize font-light  mt-2  lg:text-[22px] lg:leading-[22px]  lg:max-w-full"> <span className='text-[#fffced]'>Find amazing</span> events</motion.h1>
                    
      <FilterTabs
label="Filter By Category:"
options={categories}
selectedOption={selectedCategory}
setSelectedOption={setSelectedCategory}
/>       
         
      
       </div>

        <motion.div
     initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -200, opacity: 0 }}
    transition={{ duration: 0.15, ease: "easeOut"}}
    className="Grid_4 lg:grid-cols-1"
  >
    {filteredEvents.map((event) => (
      <div key={event.id} className="group rounded-sm flex flex-col lg:flex-row gap-6 lg:gap-12 relative">
        <div className='absolute inset-0 size-24 bg-(--primary-color)'></div>

        <div className="h-[330px] lg:w-[40%]   relative">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover rounded-sm grayscale  group-hover:grayscale-0 size-full"
          />

          <img // This image is an overlay, not the problem div
            src={noise}
            alt="noise"
            className="absolute rounded-sm inset-0 size-full mix-blend-multiply opacity-40 object-cover"
          />
          <div className='hidden  gap-4 group-hover:flex absolute z-20 bottom-0 -0 p-4 bg-black/50 text-white rounded-tl-sm'>
            <Download />
            <Heart />

          </div>
          <div className="absolute rounded-sm inset-0 group-hover:bg-gradient-to-t from-[#4f0006] via-[#a4010f]/40 to-transparent transition-all duration-500 bg-blend-multiply z-10 size-full"></div>
        </div>

        <motion.div 
           variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
         className="flex relative items-start flex-col gap-4 lg:w-[40%] justify-start z-50">
             <div className="absolute bottom-0 rounded-sm size-34 bg-gradient-to-t from-[#9aae02]/50 blur-xl opacity-20 via-[#a4010f]/20 to-transparent transition-all duration-500 bg-blend-multiply z-10 "></div>
          <motion.h4
          variants={itemVariants}
          className="text-[#ece9dd] font-bold line-clamp-1 capitalize zalando lg:text-[32px] z-50">
            {event.title}
          </motion.h4>
            <div className='flex flex-col gap-2 items-start z-50'>
                          <motion.h4 variants={itemVariants} className="text-[#ece9dd] line-clamp-1 font-light capitalize zalando text-[14px]">Fri, 30 Aug <span className='text-[#ebe6e6]'>2026</span></motion.h4> 
                           <motion.h4 variants={itemVariants} className="text-[#ece9dd] line-clamp-1 font-light capitalize zalando text-[14px]">Auro Lounge, Lilongwe</motion.h4> 
                            <motion.h4 variants={itemVariants}  className="text-[#f8b401] line-clamp-1 font-light capitalize zalando text-[14px]">Tickets from <span className='font-semibold'>40K</span> </motion.h4> 
            </div>
            <div className='bg-[#fffced]/40 px-4 py-2 z-50 rounded-full'>
              <p className='text-[12px] white font-light'>Tickets Available</p>
            </div>
       
             <img src={lines} className='absolute  inset-0  size-full z-0 opacity-20' />
            <Scribble color="#d2691e" className='absolute size-8 bottom-16 left-50 lg:bottom-0 lg:left-0'/>
         
        </motion.div>

       <div className="relative flex lg:w-[20%]  flex-col items-start lg:items-end justify-between ">
             <motion.div className='flex items-center gap-4 group relative px-4 cursor-pointer  py-2.5 text-[#fffced] agdasima uppercase font-bold hover:bg-(--primary-color)/80 transition-all duration-300 bg-(--primary-color) border border-none  text-[20px]'>
                   <span>
                     Event Details
                   </span>
                   <div className='flex relative group items-center overflow-hidden  justify-center bg-[#fffced] p-4'>
                     <ArrowRight className='absolute  size-5 transform  transition-all duration-490  group-hover:translate-x-10 text-(--primary-color)' />
                     <ArrowRight className='absolute  size-5 transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-(--primary-color)' />
                   </div>
                  
                 </motion.div>
       
<div className='rounded-sm   flex items-center w-full p-4 justify-between'>
 <p className='zalando hidden text-left text-[16px] lg:w-[530px] z-50 text-[#a49f8c]'>View<span className='font-bold text-(--primary-color)'> Event Details</span> for more and buy your tickets.</p>
</div>


</div>

      </div>
    ))}
  </motion.div>
       
    
      
    </div>


    
    </section>
    
    
  )
}

export default Events;