import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Help from './HowSpydTechHelp/Help'
import MobileCard from './MobileCard/Card'
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Mobile = () => {
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        src="https://www.mobileappoutsourcing.com/wp-content/uploads/2017/09/hybrid-mobile-app-development.jpg"
        className="w-full  h-[550px]"
        alt="Background Image"
      />
      <MobileCard />
      <Help />
      <Approch />
      <Footer />
    </>
  )
}

export default Mobile