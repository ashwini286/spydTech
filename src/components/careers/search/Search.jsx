import React from 'react';
import { IoLocation } from "react-icons/io5";
function Search() {
  return (
    <>
<div className='flex items-center justify-center flex-col pt-12'>
<div className='py-4'>
  <p className='md:text-4xl text-2xl'>Openings</p>
</div>
<div className='md:w-[800px] pb-4 text-xl'>
  <p className='text-center'>From support to development, it's an ocean of opportunities in our business lifecycle. Walk-ins and referral programs are how we secure positions for talented SPY D in our team.</p>
</div>
</div>


<div className='flex justify-end items-center flex-row mr-16'>
<div className="relative ">
      <IoLocation className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
     
     <input
        type="text"
        placeholder="Location - Hyderabad"
        disabled
        className="pl-10 pr-4 py-2 rounded-md"
      />
     
    </div>
</div>
    </>
  );
}


export default Search