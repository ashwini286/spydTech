import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Reactjs from './ReactJs/Reactjs';
import Help from './HowSpydTechHelp/Help'
import AngularJs from './AngularJs/AngularJs';
import NextJs from './NextJs/Next';
import Approch from '../../Home/APProchUs/Approch';

const Frontend = () => {
  return (
    <>
      <div>
        <Navbarupp />
      </div>


      <img
        src="https://plopdo.com/wp-content/uploads/2021/10/Web-Development-San-Francisco-1.jpeg"
        className="w-full md:h-[550px]"
        alt="Background Image"
        
      />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
        <div className='flex items-center justify-center'>
        <div className='text-center text-2xl md:pt-16 w-[850px] md:mt-8 font-bold'>Crafting Seamless User Experiences: Unleashing the Power of <br /> <span className="text-blue-600 text-4xl mx-auto border-b-2 border-cyan-800 w-1/2">  Frontend Development </span> </div>
      </div>
      <Reactjs />
      <NextJs />
      <AngularJs />
      <Help />

      <Approch />

 
    </>
  )
}

export default Frontend