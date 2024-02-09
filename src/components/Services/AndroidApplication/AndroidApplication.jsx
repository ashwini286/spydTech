import React from 'react'
import androidHero from '../../assets/IPhoneApplication/androidHero.jpg';
import Navbarupp from "../../Home/Navbar/Navbarupp";
const AndroidApplication = () => {
  return (
    <>
    <div>
        <Navbarupp />
      </div>
      <img
        src={androidHero}
        className=" w-[100%]"
        alt="Background Image"
      />
    </>
  )
}

export default AndroidApplication