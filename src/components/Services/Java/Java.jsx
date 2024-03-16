import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Benefits from './BenefitsOfJava/Benefits';
import Java1 from '../../assets/Java/javahero.png'

import Approch from '../../Home/APProchUs/Approch';

const Java = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        src={Java1}
        className="w-full object-cover"
        alt="Background Image"
      />
      <Benefits />

      <Approch />


    </>
  )
}

export default Java