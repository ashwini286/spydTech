import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Development from './DevelopmentCompany/Development';
import Benefits from './ImmenseBenefits/Benefits';
import Approch from '../../Home/APProchUs/Approch';
import ChatBot from '../../Home/Home/ChatBot';
function AngularJS() {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbarupp />
      </div>


      <img
        src="https://d2o2utebsixu4k.cloudfront.net/media/images/c6d16906-8211-4374-ae09-c05566e6f0b8.jpg"
        className=" object-cover  w-full"
        alt="Background Image"
      />
      <Development />
      <Benefits />

      <Approch />
      <ChatBot />
    </>
  );
}

export default AngularJS;
