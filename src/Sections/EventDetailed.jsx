import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";
import Machenji_hero from '../assets/Images/MachenjiEvent.jpg'
import Machenji_ticket from '../assets/Images/MachenjiTicket.png' 
import AM_logo from '../assets/Images/AirtelMoney_Logo.png'
import noise from '../assets/Images/Noise.png'
import Gwamba_concert from '../assets/Images/GwambaConcert.jpg'
import SUCUREICON from '../Components/SUCUREICON.jsx';
import hero1 from '../assets/Images/GwambaConcert.jpg'
import Zeze_concert from '../assets/Images/ZezeConcert.jpg'
import { Search, Ticket, ShoppingCart, ChevronDown, ChevronLeft,CircleStop,CircleChevronLeft, Smartphone  ,Circle, CalendarDays, Plus, Minus} from 'lucide-react'
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
import ShareIcon from "../Components/ShareIcon.jsx"



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

 const [showInfo, setShowInfo] = useState(false);

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
    <section className='min-h-[85vh] py-12 relative' style={bg} >
          
                   <div className='flex border ml-16  z-90 w-fit transition-all duration-500 cursor-pointer rounded-full  hover:bg-(--primary-color)/80 border-(--text-color)/60  px-4 py-2 items-center gap-4'>
      <CircleChevronLeft className='white z-90' />
      <h1 className='text_button z-90'>Back to Home Page</h1>
     </div>
        <div className=' flex-col  z-50 relative flex items-center justify-center px-6 h-22 lg:h-24'>
     
          
          <div className='flex flex-col gap-2'>
            
<h1 className='white text-[32px] w-full text-center lg:text-[42px] z-90 uppercase agdasima font-bold'>LANDLORD PAKWAO CONCERT</h1>

          </div>
         <img src={noise} alt="Noise" className="absolute hidden top-0 left-0 w-full h-full object-cover opacity-15 z-10" />
        </div>
              
               
               <img src={noise} alt="Noise" className="absolute  top-0 left-0 w-full h-full object-cover opacity-40 z-10" />
            
                <div className="absolute z-10 inset-0 bg-gradient-to-b from-(--primary-color)/75 via-[#161619]/97  to-[#161619] opacity-100"></div>

                
    <div className="Section_wrapper relative z-50">



    <div className='w-full flex flex-col lg:flex-row gap-12 items-start'>
      
    {/*Left side where the image of the event is. */}
        <div className='lg:w-[40%] lg:sticky lg:top-12 self-start group shadow-[6px_6px_18px_rgba(255,255,255,0.2)] border-[#fffced] border-4 outline-4 outline-[#f8b401] ' >
             
                <div className='h-[520px] shadow-[6px_6px_18px_rgba(255,255,255,0.2)] w-full overflow-hidden'>
                 <motion.img src={Gwamba_concert}
                   initial={{ scale: 1 }}
                   animate={{ scale: 1.08 }}
                   transition={{
                      duration: 12,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                        }}
                    className='size-full  grayscale  object-cover ' />

                </div>
        </div>

         {/*Left side where the information of the event is. */}
        <div className='relative lg:w-[60%] flex flex-col w-full gap-8 lg:items-start justify-between'>
            <div  className='flex w-full flex-col gap-3'>
          
            <div className='flex gap-4 items-center'>
              <h4 className="text-[#f8b401]  font-bold uppercase chivo text-[18px] lg:text-[22px]">Event Starts in.</h4> 
            </div>

            <div className='flex gap-6  justify-between items-center  w-full'>
              <div className='w-1/2'>
                 <CountDown className=""/>
              </div>
               
               <div className='lg:w-1/2 flex border border-(--text-color)/40 rounded-sm p-2 gap-4 items-center w-full' >
                  <div className=''>
                               
                                    <h4 className=" text-[#f8b401] font-bold uppercase chivo leading-[22px] text-[20px]">1st AUGUST <br /><span className='text-[10px] white'>Friday</span></h4> 
                   </div>
                  <div className=''>
                      <h4 className=" text-[#f8b401] font-bold uppercase chivo leading-[22px] text-[20px]">Aero Longe, Lilongwe <br /><span className='text-[10px] white'>17:00pm</span></h4> 
                  </div>
              </div>
            </div>
         

       

            <div className='flex gap-4 mt-6 items-center'>
                <p  className='white capitalize font-semibold text-[12px] zalando'>122+ People waiting</p>
                    <div className='rounded-full border bg-[#e6ff00] shadow_red border-(--text-color)/40 px-2 py-1'>
                    <h4 className='text-black zalando font-semibold text-[10px]'>Running up!</h4>
                  </div>
            </div>
         
              

              <motion.div variants={itemVariants} className='w-full flex flex-row gap-6 items-center mt-4'>
                  <div className='w-1/2'>
                  <div className='flex items-center justify-between'>
                     <p className='text_popular'>Standard Tickets</p>
                     <p className='text-(--secondary-color) font-bold zalando text-[14px]'>65% sold</p>
                  </div>
                         
                    <div className='w-full rounded-full h-[12px]   bg-(--primary-color)'>
                       <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          transition={{ duration: 1.2 }} className='w-[75%] rounded-full h-[12px] mb-4 mt-2 bg-[#fffced]'>
                          </motion.div>    
                    </div>    
                  </div>

                     <div className='w-1/2'>
                          <div className='flex items-center justify-between'>
                     <p className='text_popular'>  VIP Tickets</p>
                     <p className='text-(--secondary-color) font-bold zalando text-[14px]'>85% sold</p>
                  </div>
                    <div className='w-full rounded-full h-[12px]  mt-2 bg-(--primary-color)'>
                       <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1.2 }} className='w-[75%] rounded-full h-[12px] mb-4 mt-2 bg-[#fffced]'>
                          </motion.div>    
                    </div>    
                  </div>
                     
                     
                                     
            </motion.div>
                 
            <div className='mt-4 flex gap-3'>
              <h4 className='text_button'>Share Event</h4>
              <ShareIcon color='#fffced' />
            </div>
          </div>
           
                          {/* Animated Content */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden mt-4 border border-white/10 bg-white/5 p-6"
          >
            <p className="text-[#fffced] leading-8 text-[15px] zalando font-light">
              Landlord Pakwao Concert is one of the most anticipated live music
              experiences of the year, bringing together fans for a powerful
              night of entertainment, energy, and unforgettable performances.
              Hosted in Lilongwe, Malawi, this event is designed to celebrate
              music culture, nightlife, and the connection between artists and
              supporters. Guests should expect premium sound production,
              electrifying stage lighting, crowd engagement, and special guest
              appearances throughout the night. Early bird ticket holders gain
              access at the best price before standard tickets increase closer
              to the event date. 
              
            </p>
          </motion.div>
        )}
      </AnimatePresence>

          <div className='flex mt-6 lg:flex-row flex-col items-center w-full justify-start gap-4 py-2 '>
            <div onClick={() => setShowInfo(!showInfo)} className='flex border border-[#fffced]/90 w-full px-4 py-2 items-center gap-4'>
              <InfoIcon size={28} color="#fffced" />
              <h4 className="text_button"> About Event </h4>
            </div>
            <div className='flex cursor-point bg-(--primary-color) w-full hover:bg-(--primary-color)/80 px-4 py-2 items-center gap-4'>
              <BuyTicket size={28} color='#fffced' />
              <h4 className="text_button"> Buy Tickets</h4>
            </div>
          </div>
 


     
        </div>
    </div>

    
    
         {/* Moved the Checkout Section here to make it part of the scrollable column */}
          <div className='mt-16 w-full'>
            <p className='white text-[28px] w-full text-center lg:text-[32px] z-90 uppercase agdasima font-bold'>BUY TICKETS FASTER.</p>

            <div className='divs_container'>
    
       <div className='px-4  rounded-sm lg:w-[45%] py-6 w-full hover:bg-[#272626] bg-[#272626]/40  shadow_red hover:border-(--text-color)/60 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-between'>
              <motion.h4 onClick={() => setIsOpen(!isOpen)}
                className="white flex items-center gap-2 cursor-pointer wrap-break-word font-bold uppercase chivo lg:leading-[18px] lg:text-[18px] z-50">
                {selectedTicket.name}
               <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <ChevronDown />
               </motion.div>
              </motion.h4>

              <div className='rounded-full border bg-[#e6ff00] shadow_red border-(--text-color)/40 px-2 py-1'>
                <h4 className='text-[#272626] zalando font-semibold text-[10px]'>Available</h4>
              </div>
              
          </div>

         {/* DIV FOR TICKET TYPES TO BE SELECTED ON DROPDOWN MENU*/ }
          <AnimatePresence>
               {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 bg-[#272626] border border-(--text-color)/60 rounded-sm overflow-hidden"
                >
                   {ticketTypes.map((ticket,index) => (
                    <div
                      key={ticket.id}
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-(--text-color)/40 transition"
                    >
            <h4 className="white uppercase chivo text-[16px] font-semibold">
              {ticket.name}
            </h4>
            <h4 className="text-[12px] text-(--secondary-color) zalando">
            
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
                transition={{duration:0.4}}
                exit={{ opacity: 0, y: -8 }} className='mt-6 flex flex-row items-center gap-4'
            >
              <Ticket className='white size-6'/>
              <h4 className='text-[#e6ff00] text-[18px] zalando font-bold'>MK{selectedTicket.price}.00</h4>
            </motion.div>
          </AnimatePresence>
          
          <div className='flex  flex-row items-center justify-between gap-2'>
              <p className='white text-[14px] zalando font-semibold mt-6'>Quantity </p>
              {/* RED COUNTER CAPSULE*/}
              <div className='flex px-6 items-center shadow_red border-(--text-color)/60  border  py-1 mt-4 rounded-full bg-(--primary-color) gap-4'>

                {/* MINUS */}
                <div onClick={decrease}
                className={`size-6 rounded-full flex items-center justify-center transition ${ticketCount === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer "} `}>
                  <Minus className='white font-bold size-4' />
                </div>

                        {/* COUNT */}
                <motion.h4
                key={ticketCount}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='font-bold zalando white text-[12px]'
                >
                  {ticketCount}
                </motion.h4>

              {/* PLUS */}
                  <div onClick={increase}  className={`size-6 rounded-full flex items-center justify-center transition ${ticketCount === MAX_TICKETS ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:scale-110"}`}>
                    <Plus className='white font-bold size-4' />
                  </div>

              </div>
         </div>
          
           

           <div className='flex flex-row border-b border-(--text-color)/40 pb-4 items-center justify-between mt-6'>
              <h4 className='white zalando text-[14px] font-normal'>Service Fees</h4>
              <h4 className='text-(--secondary-color) text-[12px] zalando font-semibold'> MK00.00</h4>
           </div>

            <div className='flex flex-row border-b border-(--text-color)/40 pb-4 items-center justify-between mt-6'>
              <h4 className='white zalando text-[14px] font-bold'>Total Due</h4>
              <h4 className='text-(--secondary-color) text-[12px] zalando font-bold'> MK{total.toLocaleString()}.00</h4>
            </div>
           
            
             <div className='mt-8'>

                <h1 className='white zalando text-[14px] font-bold uppercase tracking-[3px]'>Select Payment Method</h1>
                {/*AIRTEL MONEY CARD METHOD SELECTION */}
              <div onClick={() => setPaymentMethod("airtel")}
                  className={`flex mt-6 px-4 hover:bg-(--primary-color)/90  py-2 border group border-[#fffced]/40 rounded-sm items-center justify-between gap-4 cursor-pointer transition
                  ${paymentMethod === "airtel" ? "bg-(--primary-color)" : "bg-[#272626]"} `}
                >

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${paymentMethod === "airtel" ? "border-(--text-color) border" : "border-white"}`}>
                      {paymentMethod === "airtel" && (
                      <div className="w-2.5 h-2.5 bg-(--text-color) rounded-full"></div>
                      )}
              </div>

        <h4 className="text-[#fffced] items-center gap-4 flex font-bold uppercase chivo text-[14px]">
          Pay with Airtel Money
        </h4>
        <Smartphone  className='group-hover:rotate-360 text-grey transition-all duration-600 ease-in-out '/>
              </div>

                {/*CREDIT CARD CARD */}
                <div onClick={() => setPaymentMethod("card")}  className={`flex mt-6 px-4 hover:bg-(--primary-color)/80 py-2 border group border-[#fffced]/40 rounded-sm items-center justify-between gap-4 cursor-pointer transition ${paymentMethod === "card" ? "bg-(--primary-color)" : "bg-[#272626]"}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center border-white`}>
                    {paymentMethod === "card" && ( 
                    <div className="w-2.5 h-2.5 bg-(--text-color) rounded-full"> 
                  </div> )}
                </div>
                  <h4 className="text-[#fffced] font-bold uppercase chivo text-[14px]">Pay with  Credit Card</h4>
                  <CardIcon color="#fffced" size={24} className='group-hover:rotate-360 transition-all duration-600 ease-in-out '/>
                </div>

            </div>
              <div className='flex p-4 mt-6 rounded-sm border border-[#fffced]/40 gap-4'>
                 <div className='bg-[#fffced]  shadow-[6px_6px_18px_rgba(164,1,15,0.2s)]  w-[100px] h-[35px]  p-2 rounded-sm flex items-center justify-center'>
                    <img src={AM_logo} className='size-full  z-90 object-contain ' />
                  </div>
                  <div className='bg-[#fffced]  w-[100px] h-[35px] rounded-sm p-2 flex items-center justify-center'>
                    <img src={Visa_logo} className='size-full  z-90 object-contain ' />
                  </div>
              </div>
          
        </div>

          <div className='p-6   rounded-sm w-full hover:bg-[#272626] hover:border-(--text-color)/40 border border-[#fffced]/40'>
          <div className='flex flex-row items-center justify-start'>
               <motion.h4 className="white wrap-break-word font-bold uppercase chivo lg:leading-[18px] lg:text-[18px] z-50">
                Checkout Details
              </motion.h4>
          </div>
             
           <div className='mt-6'>
             <div className='flex flex-row items-center gap-6'>
              <div className='lg:size-20  size-14 relative rounded-full '>
                <motion.img src={Gwamba_concert} alt=""
                   className='object-cover rounded-full size-full'/>
                <div className='absolute z-20 size-5 rounded-full flex items-center justify-center top-0 right-0 bg-(--primary-color)'>
                  <h4 className='text-(--secondary-color) zalando font-bold text-[10px]'>{ticketCount}</h4>
                </div>
              </div>

              <motion.div  variants={containerVariants}
                 initial="hidden"
                whileInView="show"
             viewport={{once:true}} className='flex flex-col '>
                <motion.h4 variants={itemVariants}  className='zalando font-bold uppercase tracking-[4px] white text-[12px]'>Order Summary</motion.h4>
                <motion.h4 variants={itemVariants} className='text-grey mt-2 zalando text-[12px]'>LANDLORD PAKWAO CONCERT</motion.h4>
                <motion.div variants={itemVariants} className='flex flex-col lg:flex-row lg:gap-2'>
                    <h4 className='text_popular'>Sat, 1st August 2026</h4>
                     <h4 className='text-grey zalando text-[14px]'>Lilongwe, Malawi</h4>
                </motion.div>
                <h4 className='zalando text-(--secondary-color) text-[14px]'>{ticketCount} {selectedTicket.name} {ticketCount > 1 ? "Tickets" : "Ticket" } x MK {selectedTicket.price.toLocaleString()}</h4>
                <h4 className='text_popular'>
                   Payment Method: <span className='font-semibold text-(--secondary-color)'>
                {paymentMethod === "airtel" ? "Airtel Money" : "Credit Card"}
              </span>
               </h4>
              </motion.div>

             </div>



                <form action="#" method="POST" className="mt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className=''>
                  <label htmlFor="first-name" className="white zalando text-[14px] font-normal">First name:</label>
                  <div className="mt-2 ">
                    <input id="first-name" type="text" name="first-name" autoComplete="given-name" placeholder="Eg: Dannie" className="text_field "  />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="white zalando text-[14px] placeholder font-normal">Last name:</label>
                   <div className="mt-2 ">
                    <input id="last-name" type="text" name="last-name" autoComplete="given-name" placeholder="Eg: Mankhwazi" className="text_field" />
                  </div>
                </div>
              
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="white zalando text-[14px] font-normal">Email:</label>
                    <div className="mt-2 ">
                    <input  id="email" type="email" name="email" autoComplete="given-name" placeholder="Eg: danniemankhwazi@gmail.com" className="text_field " />
                  </div>
                </div>
             
             
                  <div className='flex flex-row  gap-4 items-center justify-start'>
              <div className='' >
                <SUCUREICON size="6"  color="#fffced"/>
              </div>
            <h4 className='text-grey capitalize italic zalando  font-light  text-[10px]'>All transactions are secure and encrypted.</h4>
            </div>
            


          <div className="sm:col-span-2 border border-(--text-color)/40 p-4 rounded-sm ">
           
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
                  <label className="white zalando text-[14px] font-normal">
                    Airtel Money Number
                  </label>

                  <div className="flex bg-transparent mt-2 border-b border-b-green/20 focus-within:border-green transition-all">
                    <select className="text_field bg-(--text-color)/40 w-fit">
                      <option className='text-[12px] '>MW</option>
                      <option>US</option>
                      <option>MZ</option>
                    </select>

                    <input
                      type="text"
                      placeholder="+265-123-456-890"
                      className="text_field"
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
                      <label className="white zalando text-[14px] font-normal">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="text_field mt-2"
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="lg:w-1/2">
                        <label className="white zalando text-[14px] font-normal">
                          Expiry
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="text_field mt-2"
                        />
                      </div>

                      <div className="lg:w-1/2">
                        <label className="white zalando text-[14px] font-normal">
                        Card Code (CVV)
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="text_field mt-2"
                        />
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
                
              </div>
            <div className="mt-6 bg-(--primary-color) rounded-sm">
              <button type="submit" className="block cursor-pointer text-[16px] w-full rounded-[4px] bg-green px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-green/90 transition-all uppercase chivo tracking-wide">PAY MK{total.toLocaleString()}.00 Via  {paymentMethod === "airtel" ? "Airtel Money" : "Credit Card"}</button>
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