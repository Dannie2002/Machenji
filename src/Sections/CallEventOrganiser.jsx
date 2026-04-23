import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Yo_fans from '../assets/Images/Yo_fans.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, ChevronDown, ChevronLeft, CalendarDays } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from "../Components/Scribble.jsx";
import BuyTicket from "../Components/BuyTicket.jsx";
import InfoIcon from "../Components/InfoIcon.jsx";
import Location from "../Components/Location.jsx";
import CountDown from '../Components/CountDown.jsx'
import FireEmoji from '../Components/FireEmoji.jsx'






const CallEventOrganiser = () => {



  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[100vh] relative overflow-hidden' style={bg} >
             <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
                    
                        <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#0b0b0d]/97  to-[#0b0b0d] opacity-100"></div>
    
       

                
    <div className="Section_wrapper relative z-50">

    
        <div className='flex lg:flex-row w-full lg:gap-12'>
            <div className='lg:w-[30%] relative'>
            <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>   
            <div className='w-full'>
            <motion.h4  className="text-[#ece9dd] wrap-break-word font-bold  uppercase zalando lg:leading-[38px] lg:text-[36px] z-50">
            <span className='text-[#f8b401]'>Sell More </span>Concert Tickets Easily.
            </motion.h4>
            </div>
            </div>

        <div className='lg:w-[40%]'>
        <div className=' lg:h-[420px] w-full'>
        <img src={ D_j}  className='size-full object-cover'/>
        </div>
            </div>

        <div className='lg:w-[30%] flex flex-col justify-end items-start'>
        <div className='   flex items-center w-full px-4 justify-between'>
    <p className='zalando text-left text-[18px] lg:w-[530px] z-50 white'>  Attendees<span className='font-bold text-(--primary-color)'> trust </span> Malawi's best ticket platform.</p>
    </div> 
        </div>
        
                
        

        </div>

        <div>
            <div>
                <p>cards here</p>
            </div>

            <div className='Grid_4'>
                <div>
       <motion.h4  className="text-[#ece9dd] wrap-break-word font-bold  uppercase zalando lg:leading-[38px] lg:text-[18px] z-50">
            <span className='text-[#f8b401]'>Sell </span>Seamlessly.
            </motion.h4>
                <p className='zalando text-left text-[16px] lg:w-[530px] z-50 white'>  Attendees trust  Malawi's best ticket platform.</p>
                </div>
                          <div>
       <motion.h4  className="text-[#ece9dd] wrap-break-word font-bold  uppercase zalando lg:leading-[38px] lg:text-[18px] z-50">
            <span className='text-[#f8b401]'>Sell </span>Seamlessly.
            </motion.h4>
                <p className='zalando text-left text-[16px] lg:w-[530px] z-50 white'>  Attendees trust  Malawi's best ticket platform.</p>
                </div>
                          <div>
       <motion.h4  className="text-[#ece9dd] wrap-break-word font-bold  uppercase zalando lg:leading-[38px] lg:text-[18px] z-50">
            <span className='text-[#f8b401]'>Sell </span>Seamlessly.
            </motion.h4>
                <p className='zalando text-left text-[16px] lg:w-[530px] z-50 white'>  Attendees trust  Malawi's best ticket platform.</p>
                </div>
           
    

                    
            </div>

    </div>

 
    
      
    </div>


    
    </section>
    
    
  )
}

export default CallEventOrganiser;