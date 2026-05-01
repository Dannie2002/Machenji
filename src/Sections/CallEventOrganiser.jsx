import React, { useState } from 'react'
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Yo_fans from '../assets/Images/Yo_fans.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, ChevronDown,CircleChevronLeft, ChevronLeft, CalendarDays,Plus } from 'lucide-react'
import D_j from '../assets/Images/Party_Photo.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from "../Components/Scribble.jsx";
import BuyTicket from "../Components/BuyTicket.jsx";
import InfoIcon from "../Components/InfoIcon.jsx";
import Location from "../Components/Location.jsx";
import CountDown from '../Components/CountDown.jsx'
import FireEmoji from '../Components/FireEmoji.jsx'






const CallEventOrganiser = () => {

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
    hidden: { opacity: 0, x: -120 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.55, ease: "easeInOut" }
    },
  };


    const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

    const WhyUs = [
        {
         id:1,
         point:"Faster & Secure Payments." ,  
         description:"Do what you love and earn more money with low-cost fees and quicker payouts.",
        },
        {
         id:2,
         point:"Smarter Ticket buying & selling." ,  
         description:"Fast, flexible, and converts 15% better than other platforms, on average.",
        },
        {
         id:3,
         point:"We Reach Your Audience." ,  
        description:"Tap into the Malawi’s largest events marketplace of 90 thousand people, where you’ll find the right fans for your music events.",
        }
    ]
  const bg2 = {
    backgroundImage: `url(${D_j })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };


  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[95vh] relative overflow-hidden' style={bg} >
             <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
             <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#161819]/97  to-[#161819] opacity-100"></div>
    
       

                
    <div className="Section_wrapper relative z-50">
     <div className='flex border w-fit transition-all duration-500 cursor-pointer rounded-full  hover:bg-(--primary-color)/80 border-(--text-color)/60  px-4 py-2 items-center gap-4'>
      <CircleChevronLeft className='white ' />
      <h1 className='text_button'>Back to Home Page</h1>
     </div>

        <div className='flex  mt-12 flex-col w-full lg:gap-8'>

            <div className='lg:w-full flex lg:flex-row flex-col relative'>
                <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>   
                <motion.div variants={containerVariants} 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true}} className='lg:w-[60%] w-full flex flex-col gap-2'>
                <motion.h4 variants={itemVariants}  className="text-[#ece9dd] wrap-break-word font-semibold text-[26px] leading-[30px]  capitalize zalando lg:leading-[42px] lg:text-[38px] z-50">
                    <span className='text-(--secondary-color) font-black'>The Easiest </span> Way To Host & Sell Event Tickets In Malawi
                </motion.h4>

                 <motion.p variants={itemVariants} className='zalando text-left text-[16px] font-normal z-50 text-[#d9d6cc] overflow-hidden'>Take the guesswork out of accepting payments and receiving payouts with tools available for all organizers.</motion.p>
                </motion.div>

              <div className='lg:w-[40%] flex mt-4 lg:mt-0 lg:justify-end items-start'>
                  <div className=' flex  gap-4 '>
                   
                <div className='flex border transition-all duration-500 cursor-pointer  hover:bg-(--primary-color)/80 border-(--text-color)/60  px-4 py-2 items-center gap-4'>
                  <Plus className='white font-bold size-4'/>
                  <h4 className="text_button">Create your Event</h4> 
              </div>
              
            </div> 
              </div>

            </div>
           
           <div  className='w-full h-[550px] lg:-x-22 relative p-6 flex items-end border border-(--text-color)/40 mt-6 lg:mt-0 relavite rounded-sm shadow_red'>
            <div className='absolute inset-0 z-0 overflow-hidden rounded-sm size-full'>
            <motion.img src={D_j}
                                 initial={{ scale: 1 }}
                                       animate={{ scale: 1.08 }}
                                       transition={{
                                         duration: 18,
                                         ease: "easeInOut",
                                         repeat: Infinity,
                                         repeatType: "reverse"
                                       }}
                               className='size-full  grayscale rounded-sm object-cover ' />
            </div>
           <div className="absolute rounded-sm  z-10 inset-0 bg-gradient-to-t from-(--primary-color)/75 via-[#161619]/10  to-transparent opacity-100"></div>
        <div className=' z-50  w-full'>
       
         <motion.div  variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}} className='lg:w-[60%] w-full z-50 flex w-full bottom-8 left-8 flex-col lg:mt-0 mt-6 justify-start gap-6 items-start'>
        {WhyUs.map((item,index) => (
        
        <motion.div variants={itemVariants} key={item.id} id={item.id} className='px-4 py-4 w-full border-b-4 border-b-(--secondary-color) bg-[#272626]/70 hover:border-(--text-color)/40 border border-(--text-color)/60'>

    <div 
      onClick={() => toggleAccordion(index)}
      className='flex items-center z-50 justify-between cursor-pointer'
    >

      <motion.h4 className="white wrap-break-word font-bold text-[14px] uppercase zalando lg:leading-[38px] lg:text-[14px] z-10">
        {item.point}
      </motion.h4>

      <motion.div
        animate={{ rotate: activeIndex === index ? 180 : 0 }}
        transition={{ duration: 0.3 }} className='z-50'
      >
        <ChevronDown size={26} color="#e6ff00" />
      </motion.div>

    </div>

  <AnimatePresence mode="wait">
  {activeIndex === index && (
    <motion.h3
      initial={{ opacity: 0, y: -10, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "auto" }}
      exit={{ opacity: 0, y: -10, height: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut"
      }}
      className='text-(--secondary-color) w-8xl z-60 wrap-break-word font-semibold text-[16px] capitalize zalando lg:leading-[20px] lg:text-[18px] '
    >
      {item.description}
    </motion.h3>
  )}
</AnimatePresence>

              </motion.div>

                ))}
        </motion.div>
      
        </div>
            </div>

        </div>

            <ScrollVelocityContainer className='z-50 mt-12 relative'>
              
    
    <ScrollVelocityRow baseVelocity={-8} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[24px]'><span className='text-(--text-color)'>112+ <span className='text-[#c3b5b5]'> Event </span> Hosted</span></h4>
    
        </div>
            <BuyTicket color='#e6ff00' size={38} className="text-(--primary-color)"/>
    </ScrollVelocityRow>
     <ScrollVelocityRow baseVelocity={2} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[24px]'><span className='text-(--text-color)'>6012+ <span className='text-[#c3b5b5]'> Tickets </span> Sold</span></h4>
    
        </div>
            <BuyTicket color='#e6ff00' size={38} className="text-(--primary-color)"/>
    </ScrollVelocityRow>
     
             
            </ScrollVelocityContainer> 

          
    </div>




    
    </section>
    
    
  )
}

export default CallEventOrganiser;