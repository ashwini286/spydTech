import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Backend1 from '../../assets/backend/backend.png'
import Java from './Java/Java';
import Pyhton from './Python/Python';
import Php from './Php/Php';
import Help from './HowSpydTechHelp/Help'
import Approch from '../../Home/APProchUs/Approch';

const Backend = () => {
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
    </>
  )
}

export default Backend