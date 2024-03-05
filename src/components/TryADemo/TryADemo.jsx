import React from 'react'
import Navbarupp from '../Home/Navbar/Navbarupp'
import ReadyToTest from './ReadyToTestDrive/ReadyToTest'
import PowerfulFeatures from './PowerfulFeatures/PowerfulFeatures';
import Approch from "../Home/APProchUs/Approch";


const TryADemo = () => {
  return (
    <>
     <div>
      <Navbarupp />
      </div>   
      
       <div className=" mx-auto min-h-screen  h-screen ">
        
         
          <div className=" flex h-full items-center justify-center bg-black flex-col">
          
            <div className='px-4 '>
            <p className='text-white lg:text-[80px] text-[45px]  font-bold tracking-tighter  leading-none text-center'>Experience a 10-minute Live Demo: <br /> <span className='text-[#0694A2]'>Accelerate Your Digital Transformation</span></p>
<br />
<p className='text-[#656565] text-center text-2xl'>Discover the power of our cutting-edge IT solutions in this free, on-demand demo. Explore how our innovative technologies empower businesses to streamline operations and achieve unparalleled efficiency.</p>
            </div>  
           
          </div>


       
        </div>

        <ReadyToTest />
        <PowerfulFeatures />
        <Approch />
     
    </>
  )
}

export default TryADemo