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
        src="https://miro.medium.com/v2/resize:fit:1200/1*w2hBLGIBMaLIVABE_BtBhg.png"
        className="w-full md:h-[550px]"
        alt="Background Image"
      />
        <div className='flex items-center justify-center'>
        <div className='text-center text-2xl pt-16 w-[850px] mt-8 font-bold border-b-4 border-gray-500 drop-shadow-2xl'>Crafting Seamless User Experiences: Unleashing the Power of Frontend Development</div>
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