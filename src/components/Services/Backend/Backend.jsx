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
        className=" w-[100%]"
        alt="Background Image"
      />
      <Java />
      <Php />
      <Pyhton />
      <Help />
      <Approch />

<Footer />
    </>
  )
}

export default Backend