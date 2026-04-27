import React from 'react';
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';
import { Tickets, Search } from 'lucide-react'
import BuyTicket from "../Components/BuyTicket.jsx";


const ScrollMachenjiWord = () => {
  return (
   <ScrollVelocityContainer className='bg-[#161819]'>
              
    
    <ScrollVelocityRow baseVelocity={-8} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[32px]'><span className='text-[#6d6e67]'>Seamless <span className='text-[#c3b5b5]'>Event </span>Hosting</span></h4>
    
        </div>
            <BuyTicket color='#f8b401' size={38} className="text-(--primary-color)"/>
    </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} className=''>
           <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#fffced]  text-[30px]'><span className='text-[#6d6e67]'>Visit <span className='text-[#c3b5b5]'>www. </span>Machenji.com</span></h4>
    
        </div>
            <Search className="text-[#d3a80b]"/>
    </ScrollVelocityRow>
             
 </ScrollVelocityContainer> 
  );
};

export default ScrollMachenjiWord;