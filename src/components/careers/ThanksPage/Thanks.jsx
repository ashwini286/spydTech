import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <>
     
      <div className="bg-[#008BC2] min-h-screen flex flex-col items-center justify-center text-white">
        <div className="mb-8 ">
          <img src={Logo} alt="Logo" className="w-40 h-40" />
        </div>
        <div className="text-center animate-[wiggle_1s_ease-in-out_infinite]">
          <p className="text-3xl font-bold mb-2">Thank You For Joining Us With SPY D Technology !</p>
          <p className="text-lg">We will get back to you shortly.</p>
        </div>
       <Link to = '/'>
      
          <a className='text-blue-900 underline'>Go to Home Page ---&#62;</a>
      
       </Link>
      </div>
    </>
  );
};

export default Thanks;
