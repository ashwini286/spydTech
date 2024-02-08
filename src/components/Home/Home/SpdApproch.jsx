import React from 'react';
import './Spdapproch.css'; // Import CSS file for styling
import { FaHandshake } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdGroups } from "react-icons/md";

function SpdApproch() {
  return (
    <>
    <div className='flex ml-14 space-x-2 p-10 justify-center items-center'>
    <div className="w-64 h-44 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-[#0891b2]">
              <a href="#" className="card-link">
                <FaHandshake className='text-6xl ml-14 text-white '/>
                <p className="font-bold text-white text-center">High added Value Services</p>
              </a>
            </div>
            <div className="flip-card-back bg-[#0891b2]">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Back Content</h5>
                <p className="font-normal text-white">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 2nd card */}
    <div className="w-64 h-44 relative ">
      <div className="group w-full h-full perspective ">
        <div className="flip-card ">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-[#0e7490] ">
              <a href="#" className="card-link">
                <FaGlobe className='text-6xl ml-14 text-white mb-4'/>
                <p className="text-white text-center font-bold">Globel approch</p>
              </a>
            </div>
            <div className="flip-card-back bg-[#0e7490]">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Back Content</h5>
                <p className="font-normal text-white">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 3rd card */}
    <div className="w-64 h-44 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-[#14b8a6]">
              <a href="#" className="card-link">
              <MdGroups className='text-6xl ml-14 text-white'/>
                <p className="text-white text-center font-bold">Human and talents at the heart of our development</p>
              </a>
            </div>
            <div className="flip-card-back bg-[#14b8a6]">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Back Content</h5>
                <p className="font-normal text-white">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 4th card */}
    <div className="w-64 h-44 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-[#0ea5e9]">
              <a href="#" className="card-link">
                <IoIosLeaf className='text-6xl ml-14 text-white'/>
                <p className="text-white text-center font-bold">Commitment to a virtuous digital transition</p>
              </a>
            </div>
            <div className="flip-card-back bg-[#0ea5e9]">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Back Content</h5>
                <p className="font-normal text-white">This is the back side of the card.</p>
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
