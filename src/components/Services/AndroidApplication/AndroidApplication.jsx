import React from 'react'
import androidHero from '../../assets/IPhoneApplication/androidHero.jpg';
import Navbarupp from "../../Home/Navbar/Navbarupp";
import OurCapabilities from './OurCapabilities/OurCapabilities';
import OurAndroidDevelopmentExpertise from './OurAndroidDevelopmentExpertise/OurAndroidDevelopmentExpertise';
import HowWeDevelop from './HowWeDevelopPowerfulIAndroidAPplication/HowWeDevelop';
import OurProvenMethodology from '../IphoneApplication/OurProvenMethodology/OurProvenMethodology';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const AndroidApplication = () => {
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
        <div><h1 className='text-[#656565] md:text-4xl text-2xl'>Cost Effective, Convenient and Cool Apps to Appease Your Mobile Users</h1></div>
        <br />
        <p className='text-[#656565] pt-4'>
          Android is Google owned, open source mobile operating system extensively used by all mobile manufacturers all around the world. Predominantly, overwhelming majority of over 80% smart phones in the world run on Android operating system.
        </p>

        <p className='text-[#656565] pt-4'>SPY D Privite Limited excels in building rich Android Mobile App Development and Software Development Company services to its clients in Hyderabad, India and clients spread around the world. Our core team of Android Mobile App development professionals have earned recognized and accolades from clients for their skills and expertise.`</p>
        <p className='text-[#656565] pt-4'>The entire life cycle of Android Mobile App Development starting from understanding the business requirements, identifying and analyzing the niche/sector, formulating the technical specifications requirements, building the team, creating milestone delivery systems, putting in place the required tools, technologies and going about with design, development, testing, and deployment is followed in consonance with the globally accepted best practices to ensure timely delivery.</p>
        <p className='text-[#656565] pt-4'>At the end of the day, the critical aspect for us at Aspirant is our clients should reach out to their intended audience, offer them quality services, stay ahead in the market competition and grow their business rapidly.</p>

        <p className='text-[#656565] pt-4'>SPY D Privite Limited believes in building lasting business relationships with its clients, for we believe, the growth of our client’s business is our growth.</p>
      </div>
      <OurCapabilities />
      {/* <OurAndroidDevelopmentExpertise /> */}
      {/* <HowWeDevelop /> */}
      <OurProvenMethodology />
      <Approch />
      <Footer />
    </>
  )
}

export default AndroidApplication