import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Benefits from './BenefitsOfJava/Benefits';
import Java1 from '../../assets/Java/javahero.png'

import Approch from '../../Home/APProchUs/Approch';

const Java = () => {
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        src={Java1}
        className="w-full object-cover"
        alt="Background Image"
      />
      <Benefits />

      <Approch />


    </>
  )
}

export default Java