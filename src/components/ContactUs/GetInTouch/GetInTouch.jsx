import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const GetInTouch = () => {
  return (
    <>
    <div className='h-[400px] w-full bg-[#2F4052] lg:h-[300px] md:h-[400px]'>
<div className='flex justify-center flex-col  lg:flex-row lg:py-[60px] '>
    <div className='text-white font-bold p-16 lg:text-[40px] lg:font-extrabold lg:mr-[260px]'>
    GET IN TOUCH
    </div>
<div className='text-white ml-12 '>
    <p className='text-lg'>Aspirant Soft Solutions</p>
    <p className='text-blue-gray-400 text-xl py-1'>Headquarters</p>
    <div className='flex items-center gap-2'>
        <p><FaLocationDot/></p>
        <p className='py-1'>  Phaniraj Towers, First floor</p>
    </div>

    <div className='flex items-center gap-2'>
    <p><FaLocationDot/></p>
    <p className='py-1'>Kamala Nagar, Anantapur - 515001</p>
    </div>
    
    <div className='flex items-center gap-2'>
    <p><FaPhoneAlt/></p>
    <p className='py-1'> +91 9515080818, 08554-237788</p>
    </div>
  
  <div className='flex items-center gap-2'>
    <p><IoMail /></p>
    <p className='py-1'> info@aspirantsoftsolutions.com</p>
  </div>
   
</div>

</div>

    </div>

    </>
  )
}

export default GetInTouch