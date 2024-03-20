import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Backend1 from '../../assets/backend/backend.png'
import Java from './Java/Java';
import Pyhton from './Python/Python';
import Php from './Php/Php';
import Help from './HowSpydTechHelp/Help'
import Approch from '../../Home/APProchUs/Approch';
import ChatBot from '../../Home/Home/ChatBot';
const Backend = () => {
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
        src={Backend1}
        className=" w-full "
        alt="Background Image"
      />
        <div className='flex items-center justify-center '>
        <div className='text-center text-2xl md:pt-16 w-[850px]  font-bold '>Crafting Seamless User Experiences: Unleashing the Power of  <br /> <span className="className='text-blue-600 text-4xl mx-auto border-b-2 border-cyan-800 w-1/2">  Backend Development </span></div>
      </div>
      <Java />
      <Php />
      <Pyhton />
      <Help />
      <Approch />
      <ChatBot />
    </>
  )
}

export default Backend