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
        className=" w-full"
        alt="Background Image"
      />
        <div className='flex items-center justify-center'>
        <div className='text-center text-2xl pt-16 w-[850px] mt-8 font-bold border-b-4 border-gray-500 drop-shadow-2xl'>Crafting Seamless User Experiences: Unleashing the Power of Backend Development</div>
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