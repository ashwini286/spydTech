import React, { useEffect } from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Testimonial from "./Testmonial";
import OurFeature from "./OurFeature";
import Workflows from "./Workflows";
import ApprochUs from "../../Home/APProchUs/Approch";
import Overview from "./Overview";
import Chatbot from "../../Home/Home/ChatBot";
import { Link } from "react-router-dom";
function Staffing2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbarupp />
      <img
        src="https://www.avloginfotech.com/images/paralx/staff.jpg"
        className=" object-cover w-full md:h-[400px]"
        alt="Background Image"
      />
      <div className="flex justify-center items-center flex-col gap-4 py-8">
        <div className="text-3xl text-center font-bold tracking-normal text-[#0284c7] md:text-6xl md:leading-none">
          Drive Your Candidate Experience.
        </div>
        <div className="font-normal text-gray-500 text-md md:text-xl px-8 text-center">
          Drive & convert top talent with technology-enabled staffing websites,
          job boards, and career portals.
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#38a3a5] opacity-40"></div> */}
        {/* <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
          <div className="rounded-full shadow">
            <Link to="/TryADemo">
              <button
                type="button"
                className="flex items-center justify-center w-full px-8 py-3 
               text-base font-normal text-white bg-[#0284c7] border border-transparent 
               rounded-full text-md hover:bg-[#172554] md:py-2 md:text-xl md:px-5"
              >
                Book a Demo
              </button>
            </Link>
          </div>
        </div> */}


<div class="max-w-md mx-auto mt-3 flex md:justify-center justify-start md:mt-6 md:items-center items-start">
          <div class="rounded-full shadow">
            <Link to="/TryADemo"> 
            <button
              type="button"
              class=" w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10"
            >
              Book A Demo
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    
      <OurFeature />

      <Testimonial />
      <Workflows />
      <Overview />
      <ApprochUs />
      <Chatbot />
    </>
  );
}

export default Staffing2;
