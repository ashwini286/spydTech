import React, { useState } from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Testimonial from "./Testmonial";
import OurFeature from "./OurFeature";
import Workflows from "./Workflows"
import ApprochUs from "../../Home/APProchUs/Approch";
import Overview from "./Overview";

function Staffing2() {
  return (
    <>
      <Navbarupp />

      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <div className="text-3xl text-center font-bold tracking-normal text-[#0284c7] md:text-6xl md:leading-none">
          Drive Your Candidate Experience.
        </div>
        <div className="font-normal text-gray-500 text-md md:text-xl px-8 text-center">
          Drive & convert top talent with technology-enabled staffing websites, job boards, and career portals.
        </div>
        <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
          <div className="rounded-full shadow">
               <button type="button" 
               className="flex items-center justify-center w-full px-8 py-3 
               text-base font-normal text-white bg-[#0284c7] border border-transparent 
               rounded-full text-md hover:bg-[#172554] md:py-2 md:text-xl md:px-5">
                Book a Demo</button>
          </div>
        </div>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#38a3a5] opacity-40"></div>
<OurFeature />
      

      <Testimonial />
      <Workflows />
      <Overview />
      <ApprochUs />
    </>
  );
}

export default Staffing2;
