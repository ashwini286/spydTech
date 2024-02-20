import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Card from './corecard/Card';
import Approch from "../../Home/APProchUs/Approch";
import Footer from "../../Home/Footer/Footer";

const OurCore = () => {
  return (
    <>
    
    <div>
      <Navbarupp />
      </div>   
      <img
        src="https://elitesquadglobal.com/wp-content/uploads/2016/04/core-values.jpg"
        className="   w-full"
        alt="Background Image"
      />
      <Card />
      <Approch />
      <Footer />
    </>
  )
}

export default OurCore