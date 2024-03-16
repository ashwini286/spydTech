import React, { useEffect } from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import OurCapabilities from './OurCapabilities/OurCapabilities';
import OurProvenMethodology from '../IphoneApplication/OurProvenMethodology/OurProvenMethodology';
import Approch from '../../Home/APProchUs/Approch';
import AOS from "aos";
import "aos/dist/aos.css";
const HybridApp = () => {
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
        src="https://www.empover.com/sites/default/files/inline-images/Hybrid-banner.jpg"
        className=" w-[100%] md:h-[550px]"
        alt="Background Image"
      />
      <div className='md:px-16 px-4 py-4' data-aos="fade-up">
      <div className='flex items-center justify-center pt-8'>
        <div className='text-center md:text-2xl text-xl w-[850px]  font-bold'>Empowering Innovation: <br /> <span className="text-[#14213d] md:text-4xl text-2xl mx-auto border-b-2 border-[#14213d] w-1/2"> Unleashing the Potential of Hybrid Mobile App Development</span> </div>
      </div>
        <br />
        <p className='text-black pt-4' data-aos="fade-down">
          Hybrid mobile applications are those applications that run seamlessly across multiple operating systems including but not limited to Android, IOS making it the most popular app in the world.
        </p>

        <p className='text-black pt-4' data-aos="fade-up">The businesses will be able to reach out to their targeted customers irrespective of the phone there are using, easily and naturally offering their services.</p>
        <p className='text-black pt-4' data-aos="fade-down">The reduction in costs, and the speed with which the hybrid apps can be build enables time to market acceleration and easy accessibility for the users all culminate into making Hybrid apps all that more most sought after mobile apps in the world. </p>

      </div>
      <div className='md:px-16 px-4 py-4'>
        <div>
          <h1 className='text-black md:text-4xl text-2xl' data-aos="fade-up">The technologies we use to build Hybrid Mobile Apps</h1></div>
        <br />
        <p className='text-black pt-4' data-aos="fade-down">
          PhoneGap (Apache Cordova)
        </p>

        <p className='text-black pt-4' data-aos="fade-up">PhoneGap (distributed by Apache Cordova) is a hybrid app development framework that also allows you to compile and deploy apps across multiple platforms Ionic Framework, Sencha Touch 2, jQuery Mobile, Adobe AIR, Kendo UI.</p>


      </div>
      <OurCapabilities />
      <OurProvenMethodology />
      <Approch />
   
    </>
  )
}

export default HybridApp