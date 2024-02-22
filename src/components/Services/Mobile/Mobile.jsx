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
        src="https://clevertap.com/wp-content/uploads/2019/05/types-of-mobile-apps-blog_header.png"
        className="w-full"
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