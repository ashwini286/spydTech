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
        src="https://t3.ftcdn.net/jpg/06/22/86/40/360_F_622864037_VIEXFjiKPNkubPEqSD1BHXuLbIycdyIM.jpg"
        className="  w-full h-[550px]"
        alt="Background Image" style={{ filter: "brightness(70%)" }}
      />
       
      <Card />
      <Approch />
      <Footer />
    </>
  )
}

export default OurCore