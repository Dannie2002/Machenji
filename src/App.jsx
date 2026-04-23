import React from 'react';
import LandingPage from './Sections/LandingPage';
import ScrollMachenjiWord from './Sections/ScrollMachenjiWord';
import Header from './Sections/Header';
import Events from './Sections/Events';
import EventDetailed from './Sections/EventDetailed';
import CallEventOrganiser from './Sections/CallEventOrganiser';



const App = () => {
  return (
   <>
   <Header />
    <LandingPage />
    <ScrollMachenjiWord />
    <Events />
    <EventDetailed />
    <CallEventOrganiser />
   
  </>
  )
};

export default App;