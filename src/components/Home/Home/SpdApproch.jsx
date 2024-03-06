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
                <div className="flip-card-front bg-[#0891b2] flex flex-col justify-center items-center">
                  <FaHandshake className='text-6xl text-white '/>
                  <p className=" text-white text-center">High added Value Services</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
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
                <div className="flip-card-front bg-[#0e7490] flex flex-col justify-center items-center">
                  <FaGlobe className='text-6xl text-white mb-4'/>
                  <p className=" text-white text-center">Global Approach</p>
                </div>
                <div className="flip-card-back bg-[#0e7490] relative">
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
                <div className="flip-card-front bg-[#14b8a6]  flex flex-col justify-center items-center px-4">
                  <MdGroups className='text-6xl text-white '/>
                  <p className=" text-white text-center lg:px-6">Human and Talents at the Heart of our Development</p>
                </div>
                <div className="flip-card-back bg-[#14b8a6] relative">
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
              <div className="flip-card-front bg-[#14b8a6] flex flex-col justify-center items-center">
                  <IoIosLeaf className='text-6xl text-white'/>
                  <p className=" text-white text-center lg:px-6">Commitment to a Virtuous Digital Transition</p>
                </div>
                <div className="flip-card-back bg-[#14b8a6] relative">
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
        {/* <div className=" max-w-sm  w-[269.6px]  md:h-[76.2px] relative  " data-aos="fade-up">
          <div className="group w-full h-full perspective flex flex-col justify-center items-center">
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#00C072] flex flex-col justify-center items-center">
                  <IoIosLeaf className='text-6xl text-white'/>
                  <p className=" text-white text-center">Commitment to a Virtuous Digital Transition</p>
                </div>
                <div className="flip-card-back bg-[#00C072] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div>
                      <img 
                        src={IMG}
                        className=" w-full h-full object-cover filter brightness-120" 
                        alt="Image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>  */}
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
          border: 1px solid white;
          border-radius: 0.25rem;
          text-decoration: none;
          color: inherit;
         
        }
        `}
      </style>
    </>
  );
}

export default SpdApproch;
