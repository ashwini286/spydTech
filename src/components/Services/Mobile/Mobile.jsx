import React,{useEffect} from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Help from './HowSpydTechHelp/Help'
import MobileCard from './MobileCard/Card'
import Approch from '../../Home/APProchUs/Approch';
import ChatBot from '../../Home/Home/ChatBot';
const Mobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        src="https://www.eglobeits.com/wp-content/uploads/2022/12/Which-mobile-app-development-shall-be-fruitful-for-your-business-e1616166384430.jpg"
        className="w-full  md:h-[550px]"
        alt="Background Image"
      />
      <MobileCard />
      <Help />
      <Approch />
     <ChatBot />
    </>
  )
}

export default Mobile