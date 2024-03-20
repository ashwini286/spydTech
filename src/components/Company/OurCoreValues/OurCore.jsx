import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Card from './corecard/Card';
import Approch from "../../Home/APProchUs/Approch";
import ChatBot from '../../Home/Home/ChatBot';

const OurCore = () => {
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
        src="https://t3.ftcdn.net/jpg/06/22/86/40/360_F_622864037_VIEXFjiKPNkubPEqSD1BHXuLbIycdyIM.jpg"
        // className="w-full h-[550px]"
               className="object-cover w-full"

        alt="Background Image" style={{ filter: "brightness(70%)" }}
      />
       
      <Card />
      <Approch />
      <ChatBot />

    </>
  )
}

export default OurCore