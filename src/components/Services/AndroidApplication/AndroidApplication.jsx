import React, { useEffect } from 'react'

import Navbarupp from "../../Home/Navbar/Navbarupp";
import OurCapabilities from './OurCapabilities/OurCapabilities';

import OurProvenMethodology from '../IphoneApplication/OurProvenMethodology/OurProvenMethodology';
import Approch from '../../Home/APProchUs/Approch';
import ChatBot from '../../Home/Home/ChatBot';
import AOS from "aos";
import "aos/dist/aos.css";
const AndroidApplication = () => {
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
        src="https://www.androiddeveloper.co.in/blog/wp-content/uploads/2016/03/Android-App-Development-2.jpg"
        className=" w-[100%]"
        alt="Background Image"
      />

      <div className='md:px-16 px-4 py-4'>
      <div className='flex items-center justify-center pt-8'>
        <div className='text-center md:text-2xl text-xl w-[850px]  font-bold'>Crafting Exceptional Android Experiences: <br /> <span className="text-[#14213d] md:text-4xl text-2xl mx-auto border-b-2 border-[#14213d] w-1/2"> Building Powerful Mobile Solutions for Today's Users </span> </div>
      </div>
        <br />
        <p className='text-black pt-4' data-aos="fade-down">
          Android is Google owned, open source mobile operating system extensively used by all mobile manufacturers all around the world. Predominantly, overwhelming majority of over 80% smart phones in the world run on Android operating system.
        </p>

        <p className='text-black pt-4' data-aos="fade-up">SPY D Privite Limited excels in building rich Android Mobile App Development and Software Development Company services to its clients in Hyderabad, India and clients spread around the world. Our core team of Android Mobile App development professionals have earned recognized and accolades from clients for their skills and expertise.`</p>
        <p className='text-black pt-4' data-aos="fade-down">The entire life cycle of Android Mobile App Development starting from understanding the business requirements, identifying and analyzing the niche/sector, formulating the technical specifications requirements, building the team, creating milestone delivery systems, putting in place the required tools, technologies and going about with design, development, testing, and deployment is followed in consonance with the globally accepted best practices to ensure timely delivery.</p>
        <p className='text-black pt-4' data-aos="fade-up">At the end of the day, the critical aspect for us at Aspirant is our clients should reach out to their intended audience, offer them quality services, stay ahead in the market competition and grow their business rapidly.</p>

        <p className='text-black pt-4' data-aos="fade-down">SPY D Privite Limited believes in building lasting business relationships with its clients, for we believe, the growth of our client’s business is our growth.</p>
      </div>
      <OurCapabilities />
      <OurProvenMethodology />
      <Approch />
      <ChatBot />
    </>
  )
}

export default AndroidApplication