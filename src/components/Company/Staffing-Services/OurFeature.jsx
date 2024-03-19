import React, { useState } from "react";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { TbJumpRope } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
const OurFeature = () => {
    const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return (
    <>
    <div className="bg-gray-50 p-10">
        <div class=" w-full pt-20">
          <p className="text-lg text-gray-500 py-5 text-center">
            Our Features --
          </p>
          <h1 class="text-3xl font-bold tracking-normal text-gray-900  md:text-4xl w-full">
            <span class="block text-center">
              Your Candidate Experience Platform
            </span>
          </h1>
        </div>
       <div className="flex justify-center items-center md:flex-row flex-col pt-12">
       <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative md:px-8">
            <div
              className=" overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300  shadow-md rounded-xl h-56"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div className=" flex justify-center items-center md:flex-row flex-col gap-8">
                <div>
                  <TbJumpRope 
                    className={`text-4xl md:text-6xl mt-10 ${
                      isHovered1 ? "rotate-icon" : "360deg"
                    }`}
                  />
                </div>
                <div >
                 <div className="flex justify-center items-center md:items-start md:justify-start flex-col md:mt-12 gap-8">
                 <div class=" text-2xl font-bold">Integrations</div>
                  <div class=" md:text-base text-center md:text-left">
                    Explore our industry Integrations marketplace and partners
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300  shadow-md rounded-xl h-56"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className=" flex justify-center items-center md:flex-row flex-col gap-8">
            <div>
            <MdGroup
                className={`text-4xl md:text-6xl mt-10 ${
                  isHovered2 ? "rotate-icon" : "360deg"
                }`}
              />
            </div>
              <div className="flex justify-center items-center md:items-start md:justify-start flex-col md:mt-12 gap-8">
                <div class=" text-2xl font-bold">Job Manager</div>
                <div cclass=" md:text-base text-center md:text-left">
                  Manage your job listings through our Management system
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="relative overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 rounded-xl h-56"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <div class="p-4 flex">
                <TbArrowsShuffle2
                  className={`text-8xl mt-10 ${
                    isHovered3 ? "rotate-icon" : "360deg"
                  }`}
                />
                <div className="items-center ml-10 p-2">
                  <h3 class="mt-6 text-2xl font-bold  sm:mt-10">
                    Apply workflow
                  </h3>
                  <p class="mt-6 text-base ">
                    Customize your Candidate application workflow to suite your
                    business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <div class="p-4 flex">
              <BsMegaphone
                className={`text-8xl mt-10 ${
                  isHovered4 ? "rotate-icon" : "360deg"
                }`}
              />
              <div className="items-center ml-10 p-2">
                <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Job Alerts</h3>
                <p class="mt-6 text-base ">
                  Inteligent Job alerts that bring active job seekers back to
                  your jobs
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="relative overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <div class="p-4 flex">
                <AiOutlineSearch
                  className={`text-8xl mt-10 ${
                    isHovered5 ? "rotate-icon" : "360deg"
                  }`}
                />
                <div className="items-center ml-10 p-2">
                  <h3 class="mt-6 text-2xl font-bold  sm:mt-10">Job Search</h3>
                  <p class="mt-6 text-base ">
                    Powerfull job search solutions embedded on your website
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="overflow-hidden cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300 shadow-md rounded-xl h-56"
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <div class="p-4 flex">
              <FaRegChartBar
                className={`text-8xl mt-10 ${
                  isHovered6 ? "rotate-icon" : "360deg"
                }`}
              />
              <div className="items-center ml-10 p-2">
                <h3 class="mt-6 text-2xl font-bold  sm:mt-10">
                  Reports & Anaytics
                </h3>
                <p class="mt-6 text-base ">
                  Traffic, Conversations, Source Tracking and more to ensure and
                  measured ROI
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
        <div class="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
          <div class="rounded-full shadow">
            <button
              type="button"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10"
            >
              Start for free
            </button>
          </div>
        </div>
      
      </div>

      <style jsx>{`
        /* Add this CSS to your stylesheet */
        .rotate-icon {
          transform: rotateY(
            360deg
          ); /* Adjust the degree of rotation as needed */
          transition: transform 0.3s ease; /* Add a smooth transition effect */
        }
      `}</style>
    </>
  )
}

export default OurFeature