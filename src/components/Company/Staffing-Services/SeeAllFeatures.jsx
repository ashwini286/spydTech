import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { TbJumpRope } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";

function SeeAllFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <div className="bg-gray-50 p-10">
        <div class=" w-full pt-20">
          
          <h1 class="text-3xl font-bold tracking-normal text-gray-900  md:text-4xl w-full">
            <span class="block text-center">
            Rich Features That Attract & Convert Candidates
            </span>
          </h1>
        </div>
        </div>
     <div className="flex justify-center items-center md:flex-row flex-col pt-12">
          <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="relative cursor-pointer bg-gray-100  hover:bg-[#0284c7] hover:text-white  transition-all duration-300  shadow-md rounded-xl h-52"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div className="flex justify-center items-center md:flex-row flex-col md:gap-8 gap-4">
                <div>
                  <feature.Icon
                    className={`text-4xl md:text-6xl mt-10 md:ml-4 ${
                      hoveredIndex === index ? "rotate-icon" : "360" // Apply rotation class only if hoveredIndex matches index
                    }`}
                  />
                </div>
                <div>
                  <div className="flex justify-center items-center md:items-start flex-col md:mt-12 md:gap-4 gap-2">
                    <div className="text-2xl font-bold">{feature.title}</div>
                    <div className="md:text-base text-center md:text-left md:w-[250px] px-4 md:px-0">{feature.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      <div class="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
        <div class="rounded-full shadow">
  <a
    href="/TryADemo"
    class="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10"
  >
    Book a Demo
  </a>
</div>

        </div>
        

    
    </>

  );
}

export default SeeAllFeatures;
