import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import AM_logo from '../assets/Images/AirtelMoney_Logo.png'
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import SUCUREICON from '../components/SUCUREICON.jsx';
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, ChevronDown, ChevronLeft,CircleStop, Smartphone  ,Circle, CalendarDays, Plus, Minus} from 'lucide-react'
import D_j from '../assets/Images/DJ.jpg'
import FilterTabs from "../Components/FilterTabs";
import Scribble from "../Components/Scribble.jsx";
import BuyTicket from "../Components/BuyTicket.jsx";
import InfoIcon from "../Components/InfoIcon.jsx";
import Location from "../Components/Location.jsx";
import CountDown from '../Components/CountDown.jsx'
import FireEmoji from '../Components/FireEmoji.jsx'
import CardIcon from '../Components/CardIcon.jsx'
import Visa_logo from '../assets/Images/Visa.png'



const EventDetailed = () => {

   const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.75, ease: "easeInOut" }
    },
  };

  const bg = {
    backgroundImage: `url(${Machenji_hero })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const ticketTypes = [
  {
    id: "early",
    name: "Early Bird",
    price: 30000,
  },
  {
    id: "regular",
    name: "Regular",
    price: 50000,
  },
  {
    id: "vip",
    name: "VIP",
    price: 100000,
  },
];

const [isOpen, setIsOpen] = useState(false);
const [selectedTicket, setSelectedTicket] = useState(ticketTypes[0]);

const [paymentMethod, setPaymentMethod] = useState("airtel");
const [ticketCount, setTicketCount] = useState(1);
const MAX_TICKETS = 10;

const increase = () =>
  setTicketCount((prev) => (prev < MAX_TICKETS ? prev + 1 : prev));

const decrease = () =>
  setTicketCount((prev) => (prev > 1 ? prev - 1 : 1));

const total = ticketCount * selectedTicket.price;

  return (
    <section className='min-h-[85vh]  relative' style={bg} >
        <div className=' flex-col  z-50 relative flex items-center justify-center px-6 h-22 lg:h-34'>
          <div className='flex flex-col gap-2'>
<h1 className='white text-[32px] w-full text-center lg:text-[52px] z-90 uppercase agdasima font-bold'>LANDLORD PAKWAO CONCERT</h1>

</div>
  <img src={noise} alt="Noise" className="absolute hidden top-0 left-0 w-full h-full object-cover opacity-15 z-10" />
        </div>
              
               
               <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute   z-40 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#0b0b0d]/97  to-[#161619] opacity-100"></div>

                
    <div className="Section_wrapper relative z-50">

    <div className='w-full flex flex-col lg:flex-row gap-12'>
        <div className='lg:w-[35%] gap-4 relative flex flex-col items-start justify-start'>
    
        
          <div className='flex gap-4 lg:mt-6 items-center'>
                               <div className='bg-(--primary-color) border shadow-[6px_2px_18px_rgba(255,255,255,0.2)]  border-[#fffced]/20 rounded-sm p-2'>
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
                   <div className='flex gap-4 items-center'>
      
          
             <h4 className="text-[#f8b401]  font-bold uppercase chivo text-[24px] lg:text-[26px]">Event Starts in.</h4> 
         </div>
         <CountDown className="w-full"/>
          
        
             <Scribble color="#d2691e" className='absolute size-8 bottom-0 right-0'/>
            
        </div>

        <div className='lg:w-[35%] group shadow-[6px_6px_18px_rgba(255,255,255,0.2)] border-[#fffced] border-4 outline-4 outline-[#f8b401] ' >
             
                <div className='h-[430px] shadow-[6px_6px_18px_rgba(255,255,255,0.2)] w-full'>
                <img src={Gwamba_concert} className='size-full  grayscale  object-cover ' />

                </div>
        </div>

        <div className='relative lg:w-[40%] flex flex-col w-full   lg:gap-6 lg:items-start lg:justify-between'>
          <motion.div 
           variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}} className='flex w-full flex-col gap-3'>
         
            <motion.p variants={itemVariants} className='white capitalize font-bold text-[24px] zalando'>122+ People waiting</motion.p>
               <motion.p variants={itemVariants} className='white capitalize items-center font-bold text-[12px] flex gap-2 zalando'><span><FireEmoji color="#d2691e"  /></span>few tickets left</motion.p>
               <motion.div variants={itemVariants} className='w-full mt-6'>

              
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
                     
                     
                                     
            </motion.div>
               
              
          </motion.div>
          
          
         <Scribble color="#f8b401" className='absolute size-8 top-0 lg:top-60 right-0 lg:left-0'/>
            <div className='flex mt-6 lg:flex-row flex-col items-center w-full justify-start lg:justify-between gap-4 py-2 '>
              
             <div className='flex border  border-[#fffced]/90 w-full px-4 py-2 items-center gap-4'>
              <InfoIcon size={28} color="#fffced" />
              <h4 className="text_button"> About Event </h4> 
             </div>
            
            <div className='flex cursor-point bg-(--primary-color)  w-full hover:bg-(--primary-color)/80 px-4 py-2 items-center gap-4'>
              <BuyTicket size={28} color='#fffced' className='text-[]' />
              <h4 className="text_button"> Buy Tickets</h4> 
            </div>
       
            </div>
            
          
            
        </div>

       

    </div>
    
    <div className='mt-12'>
      <p className='white text-[28px] w-full text-center lg:text-[32px] z-90 uppercase agdasima font-bold'>BUY TICKETS FASTER.</p>
      
      <div className='flex mt-6 flex-col gap-6 lg:flex-row lg:gap-8 w-full'>
    
              <div className='px-4  rounded-sm lg:w-[45%] py-6 w-full hover:bg-[#272626]  hover:border-(--text-color)/40 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-between'>
                  <motion.h4
                    onClick={() => setIsOpen(!isOpen)}
                    className="white flex items-center gap-2 cursor-pointer wrap-break-word font-bold uppercase chivo lg:leading-[18px] lg:text-[18px] z-50"
                  >
                    {selectedTicket.name}

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </motion.h4>

              <div className='rounded-full border bg-[#549d42] border-(--text-color)/40 px-2 py-1'><h4 className='white text-[10px]'>Available</h4></div>
              
          </div>
           <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
      className="mt-2 bg-(--primary-color) border border-white/10 rounded-md overflow-hidden"
    >
      {ticketTypes.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => {
            setSelectedTicket(ticket);
            setIsOpen(false);
          }}
          className="px-4 py-2 cursor-pointer hover:bg-white/10 transition"
        >
          <h4 className="white text-[14px] font-semibold">
            {ticket.name}
          </h4>
          <h4 className="text-[12px] text-grey">
           
            MK {ticket.price.toLocaleString()}
          </h4>
        </div>
      ))}
    </motion.div>
  )}
           </AnimatePresence>

           <AnimatePresence mode="wait">
  <motion.div
    key={selectedTicket.id}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }} className='mt-6 flex flex-row items-center gap-4'
  >
     <Ticket className='white size-6'/>
   <h4 className='text-(--secondary-color) text-[18px] zalando font-bold'>MK{selectedTicket.price}.00</h4>
  </motion.div>
</AnimatePresence>
          
          <div className='flex  flex-row items-center justify-between gap-2'>
            <p className='white text-[14px] zalando font-semibold mt-6'>Number of Tickets </p>
         <div className='flex px-6 items-center border-[#b3a9a7] border shadow_red py-1 mt-4 rounded-full bg-(--primary-color) gap-4'>

          {/* MINUS */}
      <div
  onClick={decrease}
  className={`size-6 rounded-full flex items-center justify-center transition
    ${ticketCount === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer "}
  `}
>
  <Minus className='white font-bold size-4' />
</div>

          {/* COUNT */}
      <motion.h4
  key={ticketCount}
  initial={{ y: 6, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
  className='font-semibold white text-[12px]'
>
  {ticketCount}
</motion.h4>

          {/* PLUS */}
<div
  onClick={increase}
  className={`size-6 rounded-full flex items-center justify-center transition
    ${ticketCount === MAX_TICKETS
      ? "opacity-40 cursor-not-allowed"
      : "cursor-pointer hover:scale-110"}
  `}
>
  <Plus className='white font-bold size-4' />
</div>

</div>
          </div>
          
           

           <div className='flex flex-row border-b border-(--text-color)/40 pb-4 items-center justify-between mt-6'>
            <h4 className='white zalando text-[14px] font-normal'>Service Fees</h4>
            <h4 className='text-(--secondary-color) text-[12px] zalando font-bold'> MK00.00</h4>

           </div>
            <div className='flex flex-row border-b border-(--text-color)/40 pb-4 items-center justify-between mt-6'>
            <h4 className='white zalando text-[14px] font-bold'>Total Due</h4>
            <h4 className='text-(--secondary-color) text-[12px] zalando font-bold'> MK{total.toLocaleString()}.00</h4>

           </div>
           
            
              <div className='mt-8'>
                <h1 className='white zalando text-[14px] font-bold uppercase tracking-[3px]'>Select Payment Method</h1>

         <div
  onClick={() => setPaymentMethod("airtel")}
  className="flex mt-4 px-4 py-2 items-center bg-(--primary-color) rounded-sm gap-4 cursor-pointer"
>
  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
    ${paymentMethod === "airtel" ? "border-white" : "border-white"}
  `}>
    {paymentMethod === "airtel" && (
      <div className="w-2.5 h-2.5 bg-(--text-color) rounded-full"></div>
    )}
  </div>

  <h4 className="text-[#fffced] items-center gap-4 flex font-bold uppercase chivo text-[14px]">
    Pay with Airtel Money
   <Smartphone  className='text-grey size-6'/>
   
  </h4>
</div>
              <div
  onClick={() => setPaymentMethod("card")}
  className={`flex mt-6 px-4 hover:bg-(--text-color)/60 py-2 border group bg-[#57a27b] hover:bg-(--primary-color) border-[#fffced]/40 rounded-sm items-center justify-between items-center gap-4 cursor-pointer transition
    ${paymentMethod === "card" ? "bg-(--primary-color)" : "bg-[#272626]"}
  `}
>
  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center border-white`}>
    {paymentMethod === "card" && (
      <div className="w-2.5 h-2.5 bg-(--text-color) rounded-full"></div>
    )}
  </div>

  <h4 className="text-[#fffced] font-bold uppercase chivo text-[14px]">Pay with  Credit Card</h4>

  <CardIcon color="#fffced" size={24} className='group-hover:scale-110 transition-all duration-500 ease-in-out '/>
</div>


<div className='flex p-4 mt-6 rounded-sm border border-[#fffced]/40 gap-4'>
 <div className='bg-[#fffced]  shadow-[6px_6px_18px_rgba(164,1,15,0.2s)]  w-[100px] h-[40px]  p-2 rounded-sm flex items-center justify-center'>
       <img src={AM_logo} className='size-full  z-90 object-contain ' />
    </div>
     <div className='bg-[#fffced]  w-[100px] h-[40px] rounded-sm p-2 flex items-center justify-center'>
       <img src={Visa_logo} className='size-full  z-90 object-contain ' />
    </div>
</div>
              </div>

          


        </div>

          <div className='p-6  rounded-sm w-full hover:bg-[#272626] hover:border-(--text-color)/40 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-between'>
               <motion.h4 className="white wrap-break-word font-bold uppercase chivo lg:leading-[18px] lg:text-[18px] z-50">
                Checkout Details
              </motion.h4>
             
          </div>
             
           <div className='mt-6'>
             <div className='flex flex-row items-center gap-6'>
              <div className='lg:size-20 size-14 relative rounded-full'>
                <img src={Gwamba_concert} alt="" className='object-cover rounded-full size-full'/>
                <div className='absolute size-6 rounded-full flex items-center justify-center top-0 right-0 bg-(--primary-color)'>
                  <h4 className='white font-bold text-[12px]'>{ticketCount}</h4>
                </div>
              </div>

              <motion.div  variants={containerVariants}
                 initial="hidden"
                whileInView="show"
             viewport={{once:true}} className='flex flex-col '>
                <motion.h4 variants={itemVariants}  className='zalando font-bold uppercase tracking-[6px] white text-[10px]'>Order Summary</motion.h4>
                <motion.h4 variants={itemVariants} className='text-grey mt-2 zalando text-[12px]'>LANDLORD PAKWAO CONCERT</motion.h4>
                <div variants={itemVariants} className='flex flex-col lg:flex-row lg:gap-2'>
                    <h4 className='text-grey zalando text-[12px]'>Sat, 1st August 2026</h4>
                     <h4 className='text-grey zalando text-[12px]'>Lilongwe, Malawi</h4>
                </div>
                <h4 className='zalando text-(--secondary-color) text-[12px]'>{ticketCount} {selectedTicket.name} x MK {selectedTicket.price.toLocaleString()}</h4>
                <h4 className='text-[12px] zalando text-grey'>
                   Payment: <span className='font-semibold text-(--secondary-color)'>
                {paymentMethod === "airtel" ? "Airtel Money" : "Credit Card"}
              </span>
               </h4>
              </motion.div>

             </div>



                 <form action="#" method="POST" className="mt-6">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">First name</label>
        <div className="">
          <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 text-base text-grey outline-none focus:border-green transition-all font-light placeholder:text-grey" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">Last name</label>
        <div className="">
          <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>
     
      <div className="sm:col-span-2">
        <label htmlFor="email" className="text-grey text-[16px] lg:text-[16px] mb-2 zalando font-normal">Email</label>
        <div className="">
          <input id="email" type="email" name="email" autoComplete="email" className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>

 <div className="sm:col-span-2">
  <AnimatePresence mode="wait">
    
    {/* Airtel Money Fields */}
    {paymentMethod === "airtel" && (
      <motion.div
        key="airtel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <label className="text-grey text-[16px] mb-2 zalando font-normal">
          Airtel Money Number
        </label>

        <div className="flex bg-transparent border-b border-b-green/20 focus-within:border-green transition-all">
          <select className="bg-transparent border-b border-b-(--text-color)/80 text-grey outline-none px-2">
            <option>MW</option>
          </select>

          <input
            type="text"
            placeholder="+265-123-456-890"
            className="block w-full bg-transparent border-b border-b-(--text-color)/80 mt-2 py-1.5 px-2 text-grey outline-none"
          />
        </div>
      </motion.div>
    )}

    {/* Card Fields */}
    {paymentMethod === "card" && (
      <motion.div
        key="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4">

          <div>
            <label className="text-grey text-[16px] mb-2 zalando font-normal">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 py-1.5 text-grey outline-none focus:border-green transition-all"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-grey text-[16px] mb-2 zalando font-normal">
                Expiry
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 py-1.5 text-grey outline-none focus:border-green transition-all"
              />
            </div>

            <div className="w-1/2">
              <label className="text-grey text-[16px] mb-2 zalando font-normal">
               Card Code (CVV)
              </label>
              <input
                type="text"
                placeholder="123"
                className="block w-full bg-transparent border-b border-b-(--text-color)/80 px-3.5 py-1.5 text-grey outline-none focus:border-green transition-all"
              />
            </div>
          </div>

        </div>
      </motion.div>
    )}

  </AnimatePresence>
</div>
      
    </div>
    <div className="mt-12 bg-(--primary-color)">
      <button type="submit" className="block cursor-pointer text-[18px] w-full rounded-[4px] bg-green px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-green/90 transition-all uppercase chivo tracking-wide">PAY MK{total.toLocaleString()}.00</button>
    </div>
    <div className='flex flex-row mt-6 gap-4 items-center justify-start'>
      <div className=' ' >
        <SUCUREICON size="6"  color="#ff0000"/>
      </div>
    <h4 className='text-grey uppercase  font-normal  text-[12px]'>All transactions are secure and encrypted.</h4>
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