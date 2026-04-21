import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import Tay_concert from '../assets/Images/TayGrin_concert.jpg'
import Lulu_legacy from '../assets/Images/Lulu_legacy.jpg'
import Take_over from '../assets/Images/Take_over.jpg'
import { Search, Ticket, ShoppingCart,ArrowRight } from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";

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
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-[#0b0b0d]/90 via-[#0b0b0d]  to-[#0b0b0d] opacity-100"></div>

             
            
           
    <div className="Section_wrapper relative z-50">

       <div className="flex  flex-col mt-18  items-start  justify-center space-y-6 ">
        <div className='bg-[#a4010f] div_clip px-4 py-4'>
            <motion.h1 className="text-[14px] tracking-[10px] text-[#fffced]  font-bold text-center leading-[16px]  lg:text-left lg:text-[14px] lg:leading-[14px] zalando uppercase"
             initial={{ opacity: 0, x: -37 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, ease: "easeOut" }}
            >
               EXPLORE EVENTS
            </motion.h1>

         </div>
                    
      <h1 className="text-[24px] z-50 leading-[28px] text-left  text-[#c3b5b5]  zalando Capitalize font-light  mt-2  lg:text-[22px] lg:leading-[22px]  lg:max-w-full"> <span className='text-[#fffced]'>Find amazing</span> events</h1>
                    
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
    className="Grid_4"
  >
    {filteredEvents.map((event) => (
      <div key={event.id} className="group rounded-sm relative">

        <div className="h-[430px]  relative">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover rounded-sm grayscale  group-hover:grayscale-0 size-full"
          />

          <img
            src={noise}
            alt="noise"
            className="absolute rounded-sm inset-0 size-full mix-blend-multiply opacity-40 object-cover"
          />

          <div className="absolute rounded-sm inset-0 group-hover:bg-gradient-to-t from-[#4f0006] via-[#a4010f]/40 to-transparent transition-all duration-500 bg-blend-multiply z-10 size-full"></div>
        </div>

        <div className="flex items-center justify-between py-4">
          <h4 className="text-[#ece9dd] line-clamp-1 uppercase chivo text-[18px]">
            {event.title}
          </h4>
           <div className='bg-(--primary-color) rounded-sm p-2'>
            <ArrowRight className='text-[#FFFCED] size-6' />
            </div>

         
        </div>

       <div className="relative flex  items-start justify-between gap-3">
            <img
            src={noise}
            alt="noise"
            className="absolute  inset-0 size-full mix-blend-multiply opacity-20 object-cover"
          />

    <div className="flex flex-col">
      <h4 className="text-[#f8b401] tracking-normal font-bold zalando text-[24px]">
       50K
      </h4>

      <h4 className="text-[12px] text-[#fffced] chivo tracking-widest uppercase font-light">
        Standard Ticket
      </h4>
    </div>
      <div className="flex flex-col">
      <h4 className="text-[#f8b401] tracking-normal font-bold zalando text-[24px]">
        112K
      </h4>

      <h4 className="text-[12px] text-[#fffced] chivo tracking-widest uppercase font-light">
        VIP Ticket
      </h4>
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