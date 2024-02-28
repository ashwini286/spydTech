import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Card from './AboutUsCard/Card';

import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const AboutUS = () => {
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
<Footer />
     

    </>
  )
}

export default AboutUS