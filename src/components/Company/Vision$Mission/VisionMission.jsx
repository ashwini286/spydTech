import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Vision from '../../assets/visionMission.jpeg'
import { Link } from 'react-router-dom';
const VisionMission = () => {
  return (
    <>
    
    <Link to = '/Vision & Mission'>
  <div className='bg-blue-gray-300 px-16 text-[#656565]'>
    <div className='text-center py-8 text-xl font-bold'>VISION & MISSION</div>
   <div className='flex justify-center items-center flex-col md:flex-row gap-16'>
   <div className='px-16'>
      <div className='pb-8'>VISION</div>
      <p className='text-lg pb-16'>The vision of SPY D Tech is not merely to become an internationally reputed company, but one that thrives on emerging technologies, delivering quality solutions that delight our clients.</p>
    </div>
 
    <div className='px-16'>
      <div  className='pb-8'>
      MISSION
      </div>
      <div className='text-lg pb-16'>
      Our singular and sole mission is to establish SPY D Tech as a company dedicated to cost optimization while maximizing profits for our clients, as their success is our success.
      </div>
    </div>
   </div>
  </div> 
  </Link>


    </>
  )
}

export default VisionMission