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
        src="https://cdn.pixabay.com/photo/2017/08/27/09/21/imprint-2685464_640.jpg"
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