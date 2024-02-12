import React from 'react';
// import './Spdapproch.css'; // Import CSS file for styling
import { FaHandshake } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import IMG from "../../assets/SpY_D__2_-removebg-preview.png"

function SpdApproch() {
  return (
    <>
      <div className='grid lg:grid-cols-4 pt-12 justify-items-center lg:px-32 gap-4'>

        <div className="h-36 w-60">
        
            <div className="group hover:rotate-y-180 transition-transform duration-300 relative ">
             
                <div className="flip-card-front bg-[#00B0BE] h-36 w-60 rounded-2xl flex justify-center items-center flex-col">
                  <div>
                    <FaHandshake className='text-6xl text-white' />
                  </div>
                  <div>
                    <p className="font-bold text-white text-center">High added Value Services</p>
                  </div>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative transform rotate-y-0 transition-transform duration-300 ease-in-out hover:rotate-y-180">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div> {/* Background fade */}
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


        <div className="h-36 w-60">
          <div className="w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#00B0BE] h-36 w-60 rounded-2xl flex justify-center items-center flex-col">
                  <div>
                    <FaGlobe className='text-6xl text-white mb-4' />
                  </div>
                  <div>
                    <p className="text-white text-center font-bold">Global approach</p>
                  </div>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div> {/* Background fade */}
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

        <div className="h-36 w-60  ">
          <div className=" w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#00B0BE] h-36 w-60 rounded-2xl flex justify-center items-center flex-col">

                  <div>
                    <IoIosLeaf className='text-6xl  text-white mb-4' />
                  </div>
                  <div>
                    <p className="text-white text-center font-bold px-2">Human and talents at the heart of our development</p>
                  </div>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div> {/* Background fade */}
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
        <div className="h-36 w-60 ">
          <div className=" w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#00B0BE] h-36 w-60 rounded-2xl flex justify-center items-center flex-col">

                  <div>
                    <MdGroups className='text-6xl text-white' />
                  </div>
                  <div>
                    <p className="text-white text-center font-bold">Commitment to a virtuous digital transition</p>

                  </div>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <a href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div> {/* Background fade */}
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
        {/* <div className="w-96 h-44 relative ">
          <div className="group w-full h-full perspective ">
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0e7490] ">
                  <div href="#" className="flex items-center flex-col mt-4">
                    <div>
                      <FaGlobe className='text-6xl  text-white mb-4' />
                    </div>
                    <div>
                      <p className="text-white text-center font-bold">Globel approch</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-[#0891b2] relative">
                  <div href="#" className="card-link text-white block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 absolute inset-0"></div> 
                      <img
                        src={IMG}
                        className="w-full h-full object-cover filter brightness-120"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>  */}
        {/* 3rd card */}
        {/* <div className="w-96 h-44 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#14b8a6]">
                  <a href="#" className="card-link">
                    <MdGroups className='text-6xl md:ml-[31%] text-white' />
                    <p className="text-white text-center font-bold">Human and talents at the heart of our development</p>
                  </a>
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
        </div> */}
        {/* 4th card */}
        {/* <div className="w-96 h-44 relative">
          <div className="group w-full h-full perspective">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-[#0ea5e9]">
                  <a href="#" className="card-link">
                    <IoIosLeaf className='text-6xl md:ml-[31%] text-white' />
                    <p className="text-white text-center font-bold">Commitment to a virtuous digital transition</p>
                  </a>
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
        </div> */}
      </div>
    </>
  );
}

export default SpdApproch;
