import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, MapPin, ChevronDown, Info,ChevronLeft, CalendarDays } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from "../Components/Scribble.jsx";
import BuyTicket from "../Components/BuyTicket.jsx";






const EventDetailed = () => {



  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[85vh]  relative' style={bg} >
        <div className=' flex-col bg-gradient-to-r from-[#4f0006] via-[#a4010f] to-[#4f0006] z-50 relative flex items-center justify-center px-6 h-34'>
          <div className='flex flex-col gap-2'>
<h1 className='white text-[18px] w-full text-center lg:text-[42px] z-90 uppercase chivo font-bold'>LIKOMA ISLAND MUSIC FESTIVAL 2026</h1>

</div>
  <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-15 z-10" />
        </div>
              
               
               <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#0b0b0d]/97  to-[#0b0b0d] opacity-100"></div>

                
    <div className="Section_wrapper relative z-50">

    <div className='w-full flex flex-col lg:flex-row gap-12'>
        <div className='lg:w-[25%] gap-4 relative flex flex-col items-start justify-start'>
          <div className='flex gap-4 items-center'>
             <div className='bg-(--primary-color) rounded-sm p-2'>
            <CalendarDays className='text-[#FFFCED] size-6' />
            </div>
                <h4 className="text-[#fffced] line-clamp-1 font-semibold uppercase zalando text-[18px]">30 AUGUST <span className='text-[#ebe6e6]'>2026</span></h4> 
          </div>
          
           <div className='flex gap-4 items-center'>
            <div className='bg-(--primary-color) backdrop-blur-2xl rounded-sm p-2'>
                 <MapPin className='text-[#fffced] size-6' />
            </div>
          
             <h4 className="text-[#f8b401] line-clamp-1 font-semibold uppercase zalando text-[16px]">AURO LOUNGE, LILONGWE</h4> 
         </div>
             <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>
             

        </div>

        <div className='lg:w-[35%]'>
             
                <div className='h-130 w-full'>
                <img src={Gwamba_concert} className='size-full grayscale object-cover ' />

                </div>
        </div>

        <div className='lg:w-[40%] flex flex-col  lg:flex-row lg:gap-12 lg:items-end justify-start'>
            <div className='flex lg:flex-row flex-col items-center justify-between gap-4 lg:gap-12 px-6 py-2 '>
              
           <div className='flex bg-(--primary-color) px-4 py-2 items-center gap-4'>
            <Info className='text-[#fffced] size-7' />
         <h4 className="text-[#fffced] line-clamp-1 font-bold uppercase zalando text-[14px]">
            About Event
          </h4> 
             </div>
            
              <div className='flex bg-(--primary-color) px-4 py-2 items-center gap-4'>
            <BuyTicket size={28} color='#fffced' className='text-[]' />
          
       <h4 className="text-[#fffced] line-clamp-1 font-bold uppercase zalando text-[14px]">
            Buy Tickets
          </h4> 
             </div>
       
            </div>
            
          
            
        </div>

       

    </div>
    
    
      
    </div>


    
    </section>
    
    
  )
}

export default EventDetailed;