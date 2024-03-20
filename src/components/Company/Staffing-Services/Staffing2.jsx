import React, { useState } from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Testimonial from './Testmonial';
import OurFeature from './OurFeature';
import { TbArrowsShuffle2 } from "react-icons/tb";
import { TbJumpRope } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import Overview from './Overview';

function Staffing2() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <>
      <Navbarupp />
      
          

      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <div className="text-3xl text-center font-bold tracking-normal text-gray-900 md:text-6xl md:leading-none">
          Drive Your Candidate Experience.
        </div>
        <div className="font-normal text-gray-500 text-md md:text-xl px-8 text-center">
          Drive & convert top talent with technology-enabled staffing websites, job boards, and career portals.
        </div>
        <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
          <div className="rounded-full shadow">
               <button type="button" className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-2 md:text-xl md:px-5">SEE ALL FEATURES</button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>

      <style jsx>{`
        /* Add this CSS to your stylesheet */
        .rotate-icon {
          transform: rotateY(360deg); /* Adjust the degree of rotation as needed */
          transition: transform 0.3s ease; /* Add a smooth transition effect */
        }
      `}</style>

      <OurFeature />
      <Overview />
      <Testimonial />
    </>
  );
}

export default Staffing2;
