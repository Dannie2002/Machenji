import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
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






const EventDetailed = () => {

  



  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[85vh]  relative' style={bg} >
        <div className=' flex-col  z-50 relative flex items-center justify-center px-6 h-34'>
          <div className='flex flex-col gap-2'>
<h1 className='white text-[28px] w-full text-center lg:text-[52px] z-90 uppercase agdasima font-bold'>LANDLORD PAKWAO CONCERT</h1>

</div>
  <img src={noise} alt="Noise" className="absolute hidden top-0 left-0 w-full h-full object-cover opacity-15 z-10" />
        </div>
              
               
               <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#0b0b0d]/97  to-[#161819] opacity-100"></div>

                
    <div className="Section_wrapper relative z-50">

    <div className='w-full flex flex-col lg:flex-row gap-12'>
        <div className='lg:w-[35%] gap-4 relative flex flex-col items-start justify-start'>
             <div className='flex gap-4 items-center'>
      
          
             <h4 className="text-[#f8b401] line-clamp-1 font-bold uppercase chivo text-[32px] lg:text-[26px]">Event Starts in.</h4> 
         </div>
        <CountDown className="w-full"/>
          <div className='flex gap-4 lg:mt-6 items-center'>
                               <div className='bg-(--primary-color) rounded-sm p-2'>
                              <CalendarDays className='text-[#FFFCED] size-5' />
                              </div>
                                  <h4 className=" text-[#f8b401] line-clamp-1 font-semibold uppercase zalando text-[14px]">1st AUGUST 2026 . 9PM</h4> 
          </div>
          <div className='flex gap-4 items-center'>
                      <div className='bg-(--primary-color) backdrop-blur-2xl rounded-sm p-2'>
                           <Location color="#fffced" size={20} />
                      </div>
                    
                       <h4 className="text-[#ece9dd] line-clamp-1 font-semibold uppercase zalando text-[14px]">AURO LOUNGE, LILONGWE</h4> 
          </div>
          
        
             <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>
            
        </div>

        <div className='lg:w-[35%] group  border-[#fffced] border-4 outline-4 outline-[#f8b401] ' >
             
                <div className='h-[430px] w-full'>
                <img src={Gwamba_concert} className='size-full  grayscale  object-cover ' />

                </div>
        </div>

        <div className='relative lg:w-[40%] flex flex-col w-full   lg:gap-6 lg:items-start lg:justify-between'>
          <div className='flex w-full flex-col gap-3'>
         
            <p className='white capitalize font-bold text-[24px] zalando'>122+ People waiting</p>
               <p className='white capitalize items-center font-bold text-[12px] flex gap-2 zalando'><span><FireEmoji color="#d2691e"  /></span>few tickets left</p>
               <div className='w-full mt-6'>

              
                  <div className=''>
                         <p className='text-grey capitalize text-[14px]'>Standard Tickets</p>
                    <div className='w-full rounded-full h-[12px]  mt-2 bg-(--primary-color)'>
                       <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          transition={{ duration: 1.2 }} className='w-[75%] rounded-full h-[12px] mb-4 mt-2 bg-[#fffced]'>
                          </motion.div>    
                    </div>    
                  </div>

                     <div className='mt-6'>
                         <p className='text-grey capitalize text-[14px]'>VIP Tickets</p>
                    <div className='w-full rounded-full h-[12px]  mt-2 bg-(--primary-color)'>
                       <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1.2 }} className='w-[75%] rounded-full h-[12px] mb-4 mt-2 bg-[#fffced]'>
                          </motion.div>    
                    </div>    
                  </div>
                     
                     
                                     
               </div>
              
          </div>
          
          
         <Scribble color="#f8b401" className='absolute size-8 top-60 left-0'/>
            <div className='flex lg:flex-row flex-col items-center w-full justify-start lg:justify-between gap-4 py-2 '>
              
           <div className='flex border border-[#fffced]/90 w-full px-4 py-2 items-center gap-4'>
            <InfoIcon size={28} color="#fffced" />
            <h4 className="text-[#fffced] font-bold uppercase chivo text-[16px]">
            About Event
          </h4> 
             </div>
            
              <div className='flex cursor-point bg-(--primary-color)  w-full hover:bg-(--primary-color)/80 px-4 py-2 items-center gap-4'>
            <BuyTicket size={28} color='#fffced' className='text-[]' />
          
       <h4 className="text-[#fffced] font-bold uppercase chivo text-[16px]">
            Buy Tickets
          </h4> 
             </div>
       
            </div>
            
          
            
        </div>

       

    </div>
    
    <div className='mt-12'>
      <p className='white text-[28px] w-full text-center lg:text-[32px] z-90 uppercase agdasima font-bold'>BUY TICKETS FASTER.</p>
      
      <div className='flex mt-6 flex-col gap-6 lg:flex-row lg:gap-12 w-full'>
    
              <div className='px-4 rounded-sm lg:w-[40%] py-6 w-full hover:bg-(--text-color)/20 hover:border-(--text-color)/40 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-between'>
               <motion.h4 className="white wrap-break-word font-bold uppercase zalando lg:leading-[38px] lg:text-[14px] z-50">
                Early Bird
              </motion.h4>

              <div className='rounded-full border border-(--text-color)/40 p-1'><h4 className='white text-[12px]'>Available</h4></div>
              
          </div>
          <div className='mt-6 flex flex-col gap-2'>  
            <motion.h4 className="text-(--secondary-color) wrap-break-word font-bold uppercase zalando lg:leading-[14px] lg:text-[14px] z-50">MK30,000.00</motion.h4> 
           <p className='white text-[12px] zalando'>Phase 1 discounted tickets are only available for early birds in April. Prices will change afterward.</p>
           </div>
          
          <div className='flex flex-col gap-2'>
            <p className='white text-[12px] zalando font-bold mt-6'>Number of Tickets </p>
           <div className='flex gap-4'>
              <div className=' size-6 rounded-full flex items-center justify-center bg-(--primary-color)'>
                  <h4 className='white font-bold text-[12px]'>-</h4>
                </div>
           <h4 className='font-black white text-[18px]'>1</h4>
              <div className=' size-6 rounded-full flex items-center justify-center bg-(--primary-color)'>
                  <h4 className='white font-bold text-[12px]'>+</h4>
                </div>
           </div>
          </div>
          
           

           <div className='flex flex-row border-b border-(--text-color)/40 pb-2 items-center justify-between mt-6'>
            <h4 className='white'>Total Due</h4>
            <h4 className='text-(--secondary-color) text-[18px] zalando font-bold'>MK30,000.00</h4>

           </div>
           
            
              <div className='mt-6'>
                <h1 className='white'>Select Payment Method</h1>

                  <div className='flex border border-[#fffced]/90 mt-4 px-4 py-2 items-center gap-4'>
             <h4 className="text-[#fffced] font-bold uppercase chivo text-[14px]"> Pay with Airtel Money </h4> 
             </div>
               <div className='flex border border-[#fffced]/90 mt-6 px-4 py-2 items-center gap-4'>
             <h4 className="text-[#fffced] font-bold uppercase chivo text-[14px]"> Pay with Card </h4> 
             </div>
              </div>

          


        </div>

          <div className='p-6 w-full hover:bg-(--text-color)/20 hover:border-(--text-color)/40 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-between'>
               <motion.h4 className="white wrap-break-word font-bold uppercase zalando lg:leading-[38px] lg:text-[14px] z-50">
                Checkout Details
              </motion.h4>
             
          </div>
             
           <div className='mt-6'>
             <div className='flex flex-row gap-6'>
              <div className='size-18 relative rounded-full'>
                <img src={Gwamba_concert} alt="" className='object-cover rounded-full size-full'/>
                <div className='absolute size-6 rounded-full flex items-center justify-center top-0 right-0 bg-(--primary-color)'>
                  <h4 className='white font-bold text-[12px]'>1</h4>
                </div>
              </div>

              <div className='flex flex-col '>
                <h4 className='zalando font-semibold uppercase tracking-[6px] white text-[10px]'>Order Summary</h4>
                <h4 className='text-grey text-[12px]'>LANDLORD PAKWAO CONCERT</h4>
                <div className='flex gap-2'>
                    <h4 className='text-grey text-[12px]'>sat, 1st August 2026</h4>
                     <h4 className='text-grey text-[12px]'>Lilongwe, Malawi</h4>
                </div>
                <h4 className='zalando text-grey text-[12px]'>1x MK30,000.00</h4>
               
              </div>

             </div>



                 <form action="#" method="POST" className="mt-6">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">First name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all font-light placeholder:text-grey" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">Last name</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>
     
      <div className="sm:col-span-2">
        <label htmlFor="email" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">Email</label>
        <div className="mt-2.5">
          <input id="email" type="email" name="email" autoComplete="email" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">Phone number</label>
        <div className="mt-2.5">
          <div className="flex bg-transparent border-b border-b-green/20 has-[input:focus-within]:border-green transition-all">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select id="country" name="country" autoComplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-grey focus:outline-none sm:text-sm/6">
                <option>Mw</option>
              </select>
              <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-green sm:size-4">
                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </div>
            <input id="phone-number" type="text" name="phone-number" placeholder="+265-123-456-890" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-grey placeholder:text-gray-400 focus:outline-none" />
          </div>
        </div>
      </div>
      
    </div>
    <div className="mt-10 bg-(--primary-color)">
      <button type="submit" className="block  w-full rounded-[4px] bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green/90 transition-all uppercase barlow tracking-wide">PAY MK30,000.00</button>
    </div>
                </form>
             
           </div>
        </div>

      </div>
    </div>
    
      
    </div>


    
    </section>
    
    
  )
}

export default EventDetailed;