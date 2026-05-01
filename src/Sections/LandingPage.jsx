import React from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import Yo_fans from '../assets/Images/Yo_fans.jpg' 
import noise from '../assets/Images/Noise.png'
import { Search } from 'lucide-react'
import hero1 from '../assets/Images/Hero1.jpg'




const LandingPage = () => {

   const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.55, ease: "easeInOut" }
    },
  };


  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };



  return (
    <section className='lg:min-h-[95vh] min-h-[85vh] flex items-start justify-center flex-col relative z-0' style={bg} >
              
               
               <img src={noise} alt="Noise" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
               <img src={Machenji_ticket} alt="Tickets" className="absolute bottom-30 right-[30%] size-34 lg:size-64 object-cover opacity-40 z-50" />
                <div className="absolute   z-40 inset-0 bg-gradient-to-t from-[#161819] via-[#0b0b0d] to-[#4f0006]/70 opacity-95"></div>
        
    <div className="lg:px-22 px-6 z-50">

       <motion.div
        variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
       
       className="flex  flex-col  items-start  justify-center space-y-6 ">
            <motion.h1 variants={itemVariants} className="text-[14px] tracking-[10px] text-[#fffced] font-bold text-center leading-[16px]  lg:text-left lg:text-[12px] lg:leading-[14px]  uppercase"
            >
               Visit Machenji for
            </motion.h1>

         
                    
                    <motion.h1 variants={itemVariants} className="text-[48px] z-50 leading-[48px] text-left text-[#fffced]  zalando Capitalize font-semibold  mt-2  lg:text-[48px] lg:leading-[48px]  lg:max-w-full"> <span className='text-[#e20003]'>Seamless</span><br />Event Hosting</motion.h1>
                    <p className=' text-left text-[14px] zalando lg:w-[530px] z-50 text-[#a49f8c]'>Discover and Book Events Across Malawi </p>
             
                 <div className="relative mt-6" >
      <input
    
        type="text"
        placeholder="Search for an Event"
        className="border flex items-center hover:bg-[#6d6e67] archivo white text-[14px] bg-[#fffced]/15 backdrop-blur-sm pl-16 pr-6 py-3 border-[#fffced]/20 outline-offset-0 outline-none  focus:border-none rounded-full placeholder:text-[14px] placeholder:text-[#fffced] w-full lg:w-[500px] zalando  transition-width duration-350 ease-in-out"
      />
      
 <Search className="text-[#fffced] absolute left-6 top-[12px] size-5" />
   
    </div>
             
         
      
   
       </motion.div>
       
    
      
    </div>
    
    </section>
    
    
  )
}

export default LandingPage;