import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Angular from '../../assets/angular.jpg'
import Development from './DevelopmentCompany/Development';
import Benefits from './ImmenseBenefits/Benefits';
import SPYD from './HowSpydHelpsitsClient/SPYD';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
function AngularJS() {
  useEffect(() => {
    AOS.init();
  });
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
      {/* <SPYD /> */}

      <Approch />

      <Footer />
    </>
  );
}

export default AngularJS;
