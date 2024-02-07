import React from 'react';
import './Spdapproch.css'; // Import CSS file for styling
import { FaHandshake } from "react-icons/fa6";

function SpdApproch() {
  return (
    <>
    <div className='flex ml-10 space-x-10'>
    <div className="w-64 h-40 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <a href="#" className="card-link">
                <FaHandshake className='text-8xl ml-14'/>
                <p className="font-normal text-gray-700">This is the front side of the card.</p>
              </a>
            </div>
            <div className="flip-card-back">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Back Content</h5>
                <p className="font-normal text-gray-700">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 2nd card */}
    <div className="w-64 h-40 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Front Content</h5>
                <p className="font-normal text-gray-700">This is the front side of the card.</p>
              </a>
            </div>
            <div className="flip-card-back">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Back Content</h5>
                <p className="font-normal text-gray-700">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 3rd card */}
    <div className="w-64 h-40 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Front Content</h5>
                <p className="font-normal text-gray-700">This is the front side of the card.</p>
              </a>
            </div>
            <div className="flip-card-back">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Back Content</h5>
                <p className="font-normal text-gray-700">This is the back side of the card.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 4th card */}
    <div className="w-64 h-40 relative">
      <div className="group w-full h-full perspective">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Front Content</h5>
                <p className="font-normal text-gray-700">This is the front side of the card.</p>
              </a>
            </div>
            <div className="flip-card-back">
              <a href="#" className="card-link">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Back Content</h5>
                <p className="font-normal text-gray-700">This is the back side of the card.</p>
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
