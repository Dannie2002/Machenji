import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, MapPin } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";




const EventDetailed = () => {



  const bg = {
    backgroundImage: `url(${D_j })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[85vh]  relative' style={bg} >
        <div className='bg-(--primary-color) px-34 h-34'>
<h1>LIKOMA ISLAND MUSIC FESTIVAL 2026</h1>
        </div>
              
               
               <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-[#0b0b0d]/80 via-[#0b0b0d]  to-[#0b0b0d] opacity-100"></div>

             
            
           
    <div className="Section_wrapper relative z-50">

    <div className='w-full flex flex-row gap-12'>
        <div className='lg:w-[25%]'>
              <h4 className="text-[#fffced] line-clamp-1 font-semibold uppercase zalando text-[18px]">
            Get your Ticket, Show Up
          </h4>  

        </div>

        <div className='lg:w-[25%]'>
             
                <div className='h-100 w-full'>
                <img src={Gwamba_concert} className='size-full grayscale object-cover ' />

                </div>
        </div>

        <div className='lg:w-1/2 flex flex-col items-start justify-end'>
        <div className='bg-gradient-to-r px-6 py-3 from-[#4f0006] via-[#a4010f] to-[#4f0006]'>
            <MapPin  className='text-(--primary-color)' />
         <h4 className="text-[#fffced] line-clamp-1 font-semibold uppercase zalando text-[18px]">
            LIKOMA ISLAND
          </h4>  
            </div>
            
        </div>

    </div>
    
      
    </div>


    
    </section>
    
    
  )
}

export default EventDetailed;