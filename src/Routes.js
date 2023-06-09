import React from 'react';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import FinalLandingPage from './LandingPageComponents/FinalLandingPage';
const WebRoutes = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<FinalLandingPage/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path='/Gallery' element={<Gallery/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>

          </Routes>
      </BrowserRouter>
    );
  };
  
  export default WebRoutes;
  