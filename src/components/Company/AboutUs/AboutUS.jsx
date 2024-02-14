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
        src="https://www.lincad.co.uk/wp-content/uploads/2022/08/contact-us-scaled-1.jpg"
        className=" object-cover  w-full h-[550px]"
        alt="Background Image"
      />
      <Card />
  
<Approch />
<Footer />
     

    </>
  )
}

export default AboutUS