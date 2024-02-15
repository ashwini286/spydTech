import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
import { Link } from 'react-router-dom';
const VisionMission = () => {
  return (
    <>
      <div>
      <Navbarupp />
      </div> 
      <img
        src="https://www.fastway.in/m.fastway/img/mission-vision.jpg"
        className=" object-cover  w-full h-[550px]"
        alt="Background Image"
      />  
    <div>
  <div className='bg-blue-gray-50 pl-4 lg:px-16 text-black  mt-16 pb-16'>
    <div className='text-center py-8 text-xl font-bold'> MISSION & VISION </div>
   <div className='flex justify-center items-center flex-col md:flex-row gap-8'>
    <div className='lg:px-16'>
      <div  className='pb-8 pl-16 text-center text-xl'>
      MISSION
      </div>
      <div className='lg:text-lg pb-16'>
    <div className='flex flex-row items-center gap-8'>
    <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
    <p className='lg:text-lg'>SPY D Tech's mission is singular and unequivocal — to establish ourselves as a company dedicated to cost optimization while maximizing profits for our clients. We firmly believe that the success of our clients is intrinsic to our own success, and this philosophy underlines every aspect of our mission.</p>
    </div>
    <div  className='flex flex-row items-center gap-8'>
    <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
    <p className='lg:text-lg  pt-4'>Our primary mission is to provide solutions that not only meet the technological needs of our clients but also contribute to their financial success. We understand the importance of cost-effectiveness in today's competitive landscape, and our mission is centered around delivering value that extends beyond the initial investment.</p>
    </div>

      </div>
    </div>
    <div className='lg:px-16'>
      <div className='pb-8 pl-16 text-center text-xl'>VISION</div>
      <div className='flex flex-row items-center gap-8'>
        <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
        <p className='lg:text-lg'>At SPY D Tech, our vision extends beyond conventional success metrics. We aspire not just to be an internationally reputed company, but to be a trailblazer in the realm of emerging technologies. We envision a future where SPY D Tech stands synonymous with innovation, consistently delivering quality solutions that go beyond meeting expectations to truly delight our clients.</p>
      </div>
     
     <div className='flex flex-row items-center gap-8'>
     <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
     <p className='lg:text-lg  pt-4'>Our vision is rooted in a commitment to staying at the forefront of technological advancements. We understand that the landscape of technology is dynamic, and our vision is to not only adapt but to proactively shape the future. By embracing emerging technologies, we aim to set new standards, redefine user experiences, and contribute to the overall progress of the IT industry.</p>
     </div>
      
    </div>
   </div>
  </div> 
  </div>
  <Approch />
  <Footer />


    </>
  )
}

export default VisionMission