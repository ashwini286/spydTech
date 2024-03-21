import React, { useEffect } from 'react';
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import IMG from "../../assets/SpY_D__2_-removebg-preview.png";
// import './Spdapproch.css';
import AOS from "aos";
import "aos/dist/aos.css";
function SpdApproch() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className=' flex justify-center items-center md:flex-row flex-col py-8'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
          {/* 1st card */}
          <div className=" max-w-sm lg:w-[269.6px]  md:w-[333.77px] w-[350.39px] relative " data-aos="fade-up">
          <div className="group w-full h-full perspective ">
            <div className="flip-card  flex items-center justify-center ">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0891b2] shadow-xl flex flex-col justify-center items-center">
                  <FaHandshake className='text-6xl text-white '/>
                  <p className=" text-white text-center">High added Value Services</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] shadow-xl relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div>
                      <img 
                        src={IMG}
                        className="w-full h-full object-cover filter brightness-120" 
                        alt="Image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className=" max-w-sm  lg:w-[269.6px]  md:w-[333.77px] w-[350.39px]   relative" data-aos="fade-up">
          <div className="group w-full h-full perspective">
            <div className="flip-card flex items-center justify-center">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0e7490] shadow-xl flex flex-col justify-center items-center">
                  <FaGlobe className='text-6xl text-white mb-4'/>
                  <p className=" text-white text-center">Global Approach</p>
                </div>
                <div className="flip-card-back bg-[#0e7490] shadow-xl relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div>
                      <img 
                        src={IMG}
                        className="w-full h-full object-cover filter brightness-120" 
                        alt="Image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3rd card */}
        <div className=" max-w-sm lg:w-[269.6px]  md:w-[333.77px] w-[350.39px]  relative " data-aos="fade-up">
          <div className="group w-full h-full perspective">
            <div className="flip-card flex items-center justify-center">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#14b8a6] shadow-xl flex flex-col justify-center items-center px-4">
                  <MdGroups className='text-6xl text-white '/>
                  <p className=" text-white text-center lg:px-6">Human and Talents at the Heart of our Development</p>
                </div>
                <div className="flip-card-back bg-[#14b8a6] shadow-xl relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div>
                      <img 
                        src={IMG}
                        className="w-full h-full object-cover filter brightness-120" 
                        alt="Image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4th card */}
        <div className=" max-w-sm  lg:w-[269.6px]  md:w-[333.77px] w-[350.39px]    relative " data-aos="fade-up">
          <div className="group w-full h-full perspective">
            <div className="flip-card  flex items-center justify-center">
              <div className="flip-card-inner">
              <div className="flip-card-front bg-[#7ae582] shadow-xl flex flex-col justify-center items-center">
                  <IoIosLeaf className='text-6xl text-white'/>
                  <p className=" text-white text-center lg:px-6">Commitment to a Virtuous Digital Transition</p>
                </div>
                <div className="flip-card-back bg-[#7ae582] shadow-xl relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div>
                      <img 
                        src={IMG}
                        className="w-full h-full object-cover filter brightness-120" 
                        alt="Image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
      <style>
        {`
        .group {
          perspective: 1000px;
         
        }
 
        .flip-card {
          width: 100%;
          height: 150px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
 
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
 
        .flip-card-inner {
          width: 80%;
          height: 90%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
 
        .flip-card-front,
        .flip-card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          border-radius: 25px;
        }
 
        .flip-card-back {
          transform: rotateY(180deg);
        }
 
        .card-link {
          width: 100%;
          height: 100%;
          padding: 1rem;
          border-radius: 0.25rem;
          text-decoration: none;
          color: inherit;
         
        }

 .slider-wave1 {
          margin: auto;
         overflow: hidden;
         background: linear-gradient(315deg, rgb(255, 0, 0) 3%, rgb(255, 255, 0) 38%, rgb(0, 255, 0) 68%, rgb(255, 0, 0) 98%);

         animation: gradient 15s ease infinite;
         background-size: 400% 400%;
         background-attachment: fixed;
}
 
.slider-wave2 {
  margin: auto;
 overflow: hidden;
 background: linear-gradient(315deg, rgb(218, 44, 230) 0%, rgb(32, 162, 194) 35%, rgb(249, 168, 37) 65%, rgb(53, 233, 54) 100%);
 animation: gradient 15s ease infinite;
 background-size: 400% 400%;
 background-attachment: fixed;
}

.slider-wave3 {
  margin: auto;
 overflow: hidden;
 background: linear-gradient(315deg, rgb(0, 0, 255) 3%, rgb(255, 0, 255) 38%, rgb(255, 255, 0) 68%, rgb(0, 0, 255) 98%);
 animation: gradient 15s ease infinite;
 background-size: 400% 400%;
 background-attachment: fixed;
}

.slider-wave4 {
  margin: auto;
 overflow: hidden;
 background: linear-gradient(315deg, rgb(0, 255, 255) 3%, rgb(255, 0, 255) 38%, rgb(255, 255, 0) 68%, rgb(0, 255, 255) 98%);
 animation: gradient 15s ease infinite;
 background-size: 400% 400%;
 background-attachment: fixed;
}

@keyframes gradient {
0% {
background-position: 0% 0%;
}
50% {
background-position: 100% 100%;
}
100% {
background-position: 0% 0%;
}
}
 

        `}
      </style>
    </>
  );
}

export default SpdApproch;
