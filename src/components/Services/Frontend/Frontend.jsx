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
      <Reactjs />
      <NextJs />
      <AngularJs />
      <Help />

      <Approch />

 
    </>
  )
}

export default Frontend