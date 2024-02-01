import React from 'react';
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Benefits from './ImmenseBenefits/Benefits';
import SPYD from './HowSpydHelpsitsClient/SPYD';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
function AngularJS() {
  return (
    <>
     <div>
      <Navbarupp />
      </div>    
    
        
        <img
          src="https://www.aspirantsoftsolutions.com/img/angular-js.jpg"
          className=" object-cover  "
          alt="Background Image"
        />

        <Benefits />
        <SPYD />
     
      <Approch />
     
      <Footer />
    </>
  );
}

export default AngularJS;
