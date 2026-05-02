import React from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import Yo_fans from '../assets/Images/Yo_fans.jpg' 
import noise from '../assets/Images/Noise.png'
import { Search } from 'lucide-react'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import Dali_wonga from '../assets/Images/Daliwonga.jpg'
import Tay_concert from '../assets/Images/TayGrin_concert.jpg'
import Month_end_shutdown from '../assets/Images/MonthEndSD.jpg'
import lines from '../assets/Images/Lines.png'
import Lulu_legacy from '../assets/Images/Lulu_legacy.jpg'
import Take_over from '../assets/Images/Take_over.jpg'
import {  Ticket, ShoppingCart,ArrowRight,CalendarDays, MapPin, Download, Heart  } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from '../Components/Scribble'




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

const Events_data = [
  {
    id:1,
    title: 'Landlord pakwao concert',
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



  return (
    <section className='lg:min-h-[95vh] min-h-[85vh] flex items-start justify-center flex-col relative z-0' style={bg} >
              
               
               <img src={noise} alt="Noise" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
               <img src={Machenji_ticket} alt="Tickets" className="absolute hidden bottom-30 right-[30%] size-34 lg:size-64 object-cover opacity-40 z-50" />
                   <Scribble color="#a4010f" className='absolute bottom-30 right-[30%] size-24 lg:size-64 object-cover opacity-70 z-50'/>
                    <Scribble color="#e6ff00" className='absolute top-45  left-[6%] size-14 lg:size-6 object-cover opacity-70 z-50'/>
                <div className="absolute   z-40 inset-0 bg-gradient-to-t from-[#161819] via-[#0b0b0d] to-[#4f0006]/70 opacity-98"></div>
        
    <div className="lg:px-22 px-6 z-50">

       <motion.div
        variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
       
       className="flex  flex-col  items-start  justify-center space-y-6 ">        
                    <motion.h1 variants={itemVariants} className="text-[48px] z-50 leading-[48px] text-left text-[#fffced]  zalando Capitalize font-semibold  mt-2  lg:text-[48px] lg:leading-[48px]  lg:max-w-full"> <span className='text-[#e20003]'>Seamless</span><br />Event Hosting</motion.h1>
                    <p className=' text-left text-[14px] zalando lg:w-[530px] z-50 text-[#a49f8c]'>Discover and Book Events Across Malawi </p>


      <div className="relative mt-6" >
       <input
        type="text"
        placeholder="Search for an Event"  className="border flex items-center hover:bg-[#6d6e67] archivo white text-[14px] bg-[#fffced]/15 backdrop-blur-sm pl-16 pr-6 py-3 border-[#fffced]/20 outline-offset-0 outline-none  focus:border-none rounded-full placeholder:text-[14px] placeholder:text-[#fffced] w-full lg:w-[500px] zalando  transition-width duration-350 ease-in-out shadow_red"/>
        <Search className="text-[#fffced] absolute left-6 top-[12px] size-5" />
       </div>
             
    </motion.div>
       
    <motion.div
     initial={{ x: 200, opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     exit={{ x: -200, opacity: 0 }}
     transition={{ duration: 0.15, ease: "easeOut"}}
     className="Grid_4 absolute bottom-6 lg:grid-cols-3 gap-6" >
    {Events_data.slice(0, 3).map((event) => (
      <div key={event.id} className="group rounded-sm border h-[140px] hover:bg-[#272626] border-(--text-color)/40 flex flex-col lg:flex-row gap-2 lg:gap-0 overflow-x-hidden relative">
        <div className="lg:h-full h-[220px] p-4 lg:w-[40%]   relative">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover rounded-sm grayscale  group-hover:grayscale-0 size-full"
          />
       
        </div>

        <motion.div 
           variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            className="flex relative items-start flex-col p-4 lg:p-2 gap-2 lg:w-[60%] justify-start z-50">
          <div className="absolute bottom-0 rounded-sm size-34 bg-gradient-to-t from-[#9aae02]/50 blur-xl opacity-20 via-[#a4010f]/20 to-transparent transition-all duration-500 bg-blend-multiply z-10 "></div>
          <motion.h4 variants={itemVariants} className="text-grey text-[16px] zalando uppercase font-bold capitalize lg:text-[12px] z-50">
            {event.title}
          </motion.h4>
            <div className='flex flex-col items-start z-50'>
                    <div className='flex items-start gap-2 flex-col'>
                     <h4 className='text-grey zalando flex items-center gap-2 text-[12px]'><CalendarDays className='size-3 text-grey' />Sat, 1st August 2026</h4>
               
                    <h4 className='text-grey zalando flex items-center gap-2 text-[12px]'><MapPin className='size-3 text-grey' />Lilongwe Malawi</h4>
                    </div>
                    
                 
            </div>
                <div className=' gap-2 flex  items-center z-50 rounded-sm'>
                          <Ticket className='size-3 text-grey' />
                           <h4 className="text-(--secondary-color) font-light capitalize zalando text-[12px]">from <span className='font-semibold'>40K</span> </h4> 
               
                        </div>

            
         
        </motion.div>

          <div className='flex absolute right-2 bottom-2 group items-center overflow-hidden rounded-sm  justify-center bg-(--secondary-color) size-6 p-2'>
                    <ArrowRight className='absolute  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#272626]' />
                    <ArrowRight className='absolute  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                  </div>

      </div>
    ))}
  </motion.div>
    </div>
    
    </section>
    
    
  )
}

export default LandingPage;