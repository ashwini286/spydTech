import React from 'react';
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import IMG from "../../assets/SpY_D__2_-removebg-preview.png";
import './Spdapproch.css';

function SpdApproch() {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-6 md:gap-5 p-10'>
        {/* 1st card */}
        <div className="w-full md:w-96 h-64 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0891b2] flex flex-col justify-center items-center">
                  <FaHandshake className='text-6xl text-white mb-4'/>
                  <p className="font-bold text-white text-center">High added Value Services</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="w-full md:w-96 h-64 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0e7490] flex flex-col justify-center items-center">
                  <FaGlobe className='text-6xl text-white mb-4'/>
                  <p className="font-bold text-white text-center">Global Approach</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="w-full md:w-96 h-64 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#14b8a6] flex flex-col justify-center items-center">
                  <MdGroups className='text-6xl text-white mb-4'/>
                  <p className="font-bold text-white text-center">Human and Talents at the Heart of our Development</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="w-full md:w-96 h-64 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0ea5e9] flex flex-col justify-center items-center">
                  <IoIosLeaf className='text-6xl text-white mb-4'/>
                  <p className="font-bold text-white text-center">Commitment to a Virtuous Digital Transition</p>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
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
    </>
  );
}

export default SpdApproch;
