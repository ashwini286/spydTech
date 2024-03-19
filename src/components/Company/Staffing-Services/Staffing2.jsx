import React, { useState } from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Testimonial from './Testmonial'
import { TbArrowsShuffle2 } from "react-icons/tb";
import { TbJumpRope } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";

function Staffing2() {
    const [isHovered, setIsHovered] = useState(false);
  return (
   <>
   <Navbarupp />
   <div class="text-center md:w-1/2 w-full md:ml-[20%]">
    <h1 class="text-3xl text-center font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl md:leading-none">
        <span class="block  text-center">Drive Your Candidate Experience.</span>
    </h1>
    <p
        class="max-w-sm mx-auto mt-1 font-normal text-gray-500  sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-2xl md:max-w-2xl">
       Drive & convert top talent with technology-enabled staffing websites, job boards, and career portals.</p>
    <div class="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6">
        <div class="rounded-full shadow">
            <button type="button" class="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#BF1A83] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-2 md:text-xl md:px-5">SEE ALL FEATURES</button>
        </div>
    </div>
</div>


<div className='bg-gray-100 p-10'>
<div class="text-center md:w-1/2 w-full md:ml-[20%] pt-20">
    <p className='text-lg text-gray-500 py-5'>Our Features --</p>
    <h1 class="text-3xl text-center font-bold tracking-normal text-gray-900 sm:text-5xl md:text-4xl md:leading-none w-full">
        <span class="block  text-center">Your Candidate Experience Platform</span>
    </h1>
   
</div>
<div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            
            
            <div class="relative  ">
               
                <div class=" overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300  shadow-md rounded-xl h-56"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <div class="p-4 flex  ">
                    <TbJumpRope className={`text-8xl mt-10 ${isHovered ? 'rotate-icon' : '180deg'}`} />
                      <div className='items-center ml-10 p-2 '>
                        <h3 class="mt-6 text-2xl font-bold  sm:mt-10 ">Integrations</h3>
                        <p class="mt-6 text-base  ">Explore our industry Integrations marketplace and partners</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300  shadow-md rounded-xl h-56">
                <div class="p-4 flex">
                    <MdGroup className='text-8xl mt-10 ' />
                  <div  className='items-center ml-10 p-2'>
                    <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Job Manager</h3>
                    <p class="mt-6 text-base">Manage your job listings through our Management system</p>
                    </div>
                </div>
            </div>
            <div class="relative">
               
                <div class="relative overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 rounded-xl h-56">
                    <div class="p-4 flex">
                        <TbArrowsShuffle2  className='text-8xl mt-10 '/>
                        <div className='items-center ml-10 p-2'>
                        <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Apply workflow</h3>
                        <p class="mt-6 text-base ">Customize your Candidate application workflow to suite your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56">
                <div class="p-4 flex">
                    <BsMegaphone   className='text-8xl mt-10 '/>
                    <div  className='items-center ml-10 p-2'>
                    <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Job Alerts</h3>
                    <p class="mt-6 text-base ">Inteligent Job alerts that bring active job seekers back to your jobs</p>
                    </div>
                </div>
            </div>
            <div class="relative">
               
                <div class="relative overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56">
                    <div class="p-4 flex">
                        <AiOutlineSearch   className='text-8xl mt-10 '/>
                        <div className='items-center ml-10 p-2'>
                        <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Job Search
                        </h3>
                        <p class="mt-6 text-base ">Powerfull job search solutions embedded on your website</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56">
                <div class="p-4 flex">
                    <FaRegChartBar  className='text-8xl mt-10' />
                    <div className='items-center ml-10 p-2'>
                    <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Reports & Anaytics</h3>
                    <p class="mt-6 text-base ">Traffic, Conversations, Source Tracking and more to ensure and measured ROI</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
        <div class="rounded-full shadow">
            <button type="button" class="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#BF1A83] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10">Start for free</button>
        </div>
    </div>
    
</div>

<style jsx>{`

/* Add this CSS to your stylesheet */
.rotate-icon {
  transform: rotateY(180deg); /* Adjust the degree of rotation as needed */
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

`}</style>

    <Testimonial />
   </>
  )
}

export default Staffing2