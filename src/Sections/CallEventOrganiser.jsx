import React, { useState } from 'react'
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';
import {motion, AnimatePresence} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Yo_fans from '../assets/Images/Yo_fans.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, ChevronDown, ChevronLeft, CalendarDays } from 'lucide-react'
import D_j from '../assets/Images/Fans_show.jpg'
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
         point:"Top Marketing Tools." ,  
         description:"Attendees trust  Malawi's best ticket platform.",
        },
        {
         id:3,
         point:"We Reach Your Audience." ,  
        description:"Tap into the Malawi’s largest events marketplace of 90 thousand people, where you’ll find the right fans for your music events.",
        }
    ]



  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='min-h-[95vh] relative overflow-hidden' style={bg} >
             <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
                    
                        <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#0b0b0d]/97  to-[#161819] opacity-100"></div>
    
       

                
    <div className="Section_wrapper relative z-50">

    
        <div className='flex lg:flex-row flex-col w-full lg:gap-12'>
            <div className='lg:w-[30%] relative'>
            <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>   
            <div className='w-full'>
            <motion.h4  className="text-[#ece9dd] wrap-break-word font-bold  capitalize zalando lg:leading-[32px] lg:text-[28px] z-50">
            <span className='text-(--secondary-color)'>The Easiest </span> Way To Host & Sell Event Tickets In Malawi
            </motion.h4>
                <div className=' mt-6  flex flex-col gap-4 items-start w-full  justify-between'>
           <p className='zalando text-left text-[14px] font-light z-50 text-[#d9d6cc] overflow-hidden'>Take the guesswork out of accepting payments and receiving payouts with tools available for all organizers.</p>
               <div className='flex border border-[#fffced]/90 mt-6 px-4 py-2 items-center gap-4'>
           
            <h4 className="text-[#fffced] font-bold uppercase chivo text-[14px]">
            Create your Event
          </h4> 
             </div>
            
    </div> 
            </div>
            </div>

        <motion.div  variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}} className='lg:w-[30%] flex w-full flex-col lg:mt-0 mt-6 justify-start gap-6 items-start'>
        {WhyUs.map((item,index) => (
        
              <motion.div variants={itemVariants} key={item.id} id={item.id} className='px-4 py-2 w-full hover:bg-(--text-color)/20 hover:border-(--text-color)/40 border border-[#fffced]/40'>

    <div 
      onClick={() => toggleAccordion(index)}
      className='flex items-center justify-between cursor-pointer'
    >

      <motion.h4 className="white wrap-break-word font-bold uppercase zalando lg:leading-[38px] lg:text-[14px] z-50">
        {item.point}
      </motion.h4>

      <motion.div
        animate={{ rotate: activeIndex === index ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={26} color="#f8b401" />
      </motion.div>

    </div>

    <AnimatePresence>
      {activeIndex === index && (
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='zalando text-left text-[14px] font-light z-50 mt-2 text-[#d9d6cc] overflow-hidden'
        >
          {item.description}
        </motion.p>
      )}
    </AnimatePresence>

              </motion.div>

                ))}
                </motion.div>

        <div className='lg:w-[40%] mt-6 lg:mt-0  border-[#fffced]/80 border-4'>
        <div className=' lg:h-[480px]  shadow-[6px_16px_18px_rgba(255,255,255,0.2)] w-full'>
        <img src={ D_j}  className='w-full group-hover:scale-110 transition-all duration-2200 ease-in-out h-full rounded-[4px] object-cover grayscale'/>
        </div>
            </div>

       
        
                
        

        </div>

               <ScrollVelocityContainer className='z-50 mt-6 relative'>
              
    
    <ScrollVelocityRow baseVelocity={-8} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[600px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[24px]'><span className='text-(--secondary-color)'>112+ <span className='text-[#c3b5b5]'> Event </span> Hosted</span></h4>
    
        </div>
            <BuyTicket color='#f8b401' size={38} className="text-(--primary-color)"/>
    </ScrollVelocityRow>
     <ScrollVelocityRow baseVelocity={2} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[24px]'><span className='text-(--secondary-color)'>6012+ <span className='text-[#c3b5b5]'> Tickets </span> Sold</span></h4>
    
        </div>
            <BuyTicket color='#f8b401' size={38} className="text-(--primary-color)"/>
    </ScrollVelocityRow>
     
             
              </ScrollVelocityContainer> 

    <div>
       

            <div className='Grid_4'>
             
         
                       
           
    

                    
            </div>

    </div>

 
    
      
    </div>




    
    </section>
    
    
  )
}

export default CallEventOrganiser;