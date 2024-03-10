import React, { useEffect } from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import OurCapabilities from './OurCapabilities/OurCapabilities';

import Iphone from '../../assets/IPhoneApplication/Iphone.png'
import HowWeDevelop from './HowWeDevelopPowerfulIOS/HowWeDevelop';
import OurProvenMethodology from './OurProvenMethodology/OurProvenMethodology';
import Approch from '../../Home/APProchUs/Approch';

import AOS from "aos";
import "aos/dist/aos.css";
const IPhone = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        src={Iphone}
        className=" w-[100%]"
        alt="Background Image"
      />

      <div className='md:px-16 px-4 py-4'>
        <h2 className='text-4xl font-bold mb-4 text-black text-center py-4' data-aos="fade-up">Empowering Your Ideas with iPhone App Development</h2>
        <p className='text-black ' data-aos="fade-down">
          iPhone, a flagship product of Apple, operates on the iOS operating system. Native iOS applications for iPhone and iPad are renowned for their performance and user experience, making them widely popular worldwide.
        </p>
        <br />
        <p className='text-black' data-aos="fade-up">
          At SPY D Tech, we have cultivated a team of skilled professionals dedicated to crafting exceptional iPhone native mobile applications. From Hyderabad, India, to clients across the globe, our commitment to excellence shines through in every iOS app we develop.
        </p>
        <p className='text-black' data-aos="fade-up">
          We meticulously implement globally accepted best practices and methodologies, ensuring that our native iPhone apps boast impressive user interfaces, user-friendliness, and alignment with user requirements. From design to development, testing, and deployment, we adhere to time-tested processes to meet delivery schedules.
        </p>
        <p className='text-black' data-aos="fade-up">
          Our core iPhone app development team at SPY D Tech stays abreast of the latest tools and technologies. We continuously upgrade our expertise with emerging trends, guaranteeing that we deliver world-class iPhone mobile apps. This commitment creates a win-win situation for all stakeholders involved.
        </p>
      </div>

      <OurCapabilities />
      <HowWeDevelop />
      <OurProvenMethodology />
      <Approch />
     

    </>
  )
}

export default IPhone