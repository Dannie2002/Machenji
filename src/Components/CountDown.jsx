import { useState, useEffect } from "react";

export default function CountDown() {

  const eventDate = new Date("August 1, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex gap-6 text-white text-center">
      
      <div>
        <p className="text-[24px] zalando font-bold">{days}</p>
        <p className="text-[24px] agdasima tracking-wider text-[#c1c3b7] uppercase">Days</p>
      </div>

      <div>
          <p className="text-[24px] zalando font-bold">{hours}</p>
        <p className="text-[24px] text-[#c1c3b7]  agdasima uppercase">Hours</p>
      </div>

      <div>
     <p className="text-[24px] zalando font-bold">{minutes}</p>
        <p className="text-[24px] text-[#c1c3b7]  agdasima uppercase">Minutes</p>
      </div>

      <div>
         <p className="text-[24px] zalando font-bold">{seconds}</p>
        <p className="text-[24px] text-[#c1c3b7]  agdasima uppercase">Seconds</p>
      </div>

    </div>
  );
}