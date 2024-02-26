import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Benefits from './BenefitsOfJava/Benefits';
import Java1 from '../../assets/Java/javahero.png'
// import Help from './HowSpydTechHelp/Help';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
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
      {/* <Help /> */}
      <Approch />

      <Footer />
    </>
  )
}

export default Java