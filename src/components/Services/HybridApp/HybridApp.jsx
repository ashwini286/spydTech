import React from 'react'
import HybridImg from '../../assets/IPhoneApplication/hybridApplication.jpg';
import Navbarupp from "../../Home/Navbar/Navbarupp";
const HybridApp = () => {
  return (
    <>
    <div>
        <Navbarupp />
      </div>
      <img
        src={HybridImg}
        className=" w-[100%]"
        alt="Background Image"
      />
    </>
  )
}

export default HybridApp