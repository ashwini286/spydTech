import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Card from './AboutUsCard/Card';

import Approch from '../../Home/APProchUs/Approch';

const AboutUS = () => {
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
        src="https://ygfindia.com/wp-content/uploads/2023/07/Banner-1536x618.jpg"
        className=" object-cover w-full"
        alt="Background Image"
      />
      <Card />
  
<Approch />

     

    </>
  )
}

export default AboutUS