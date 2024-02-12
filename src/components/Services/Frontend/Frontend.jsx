import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Reactjs from './ReactJs/Reactjs';
import Help from './HowSpydTechHelp/Help'
import AngularJs from './AngularJs/AngularJs';
import NextJs from './NextJs/Next';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Frontend = () => {
  return (
    <>
      <div>
        <Navbarupp />
      </div>


      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*w2hBLGIBMaLIVABE_BtBhg.png"
        className="w-full"
        alt="Background Image"
      />
     <Reactjs />
     <NextJs />
      <AngularJs />
      <Help />

<Approch />

<Footer />
    </>
  )
}

export default Frontend