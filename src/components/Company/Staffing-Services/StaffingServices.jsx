import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
const StaffingServices = () => {
  return (
    <>
       <div>
        <Navbarupp />
      </div>
      <img
        src="https://uprighthc.com/wp-content/uploads/2021/09/1-1.jpg"
        className=" object-cover w-full h-[550px]"
        alt="Background Image"
      />
 <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
 <div className='flex items-center justify-center' data-aos="fade-up-right">
        <div className='text-center text-2xl md:pt-16  md:mt-8 font-bold'>Unlocking Excellence:<span className="text-[#005f73] text-4xl mx-auto border-b-2 border-[#005f73] ">  Our Comprehensive Staffing Solutions </span> </div>
      </div>
    </>
  )
}

export default StaffingServices