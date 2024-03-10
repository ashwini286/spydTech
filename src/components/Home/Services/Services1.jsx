import React, { useEffect } from "react";
import img from '../../assets/home/img1.svg'
import Slider from '../slider/Slider'
import AOS from "aos";
import "aos/dist/aos.css";
import SpdApproch from "../Home/SpdApproch";



const Services1 = () => {
  useEffect(() => {
    AOS.init();
  });
  
  return (
    <>
      <div className=' max-w-screen-2xl mx-auto'>

        <div className='mt-20 md:w-2/2 mx-auto text-center w-full' data-aos="fade-up">
          <h2 className='text-2xl md:text-4xl text-black font-semibold mb-3 '>Welcome to SpY D Technology</h2>
          <p className='text-black px-4'>SpY D Technology private limited is India’s leading, one stop, full scale, full service software and information technology that thrives on cutting edge, state of the art, emerging technologies offering wide range, wide spectrum services and solutions in areas such as Web Technologies, Mobility Applications, Web & Mobile Products, Custom Applications, End-to-End Digital Transformation, Augmented and Virtual reality, and Design Thinking Innovation and Digital Marketing Services.</p>
        </div>
      </div >

      <SpdApproch />
  

      <div className='md:px-14 px-4  max-w-screen-2xl mx-auto'>
        <div className='mt-16 md:w-2/2 mx-auto text-center w-full' data-aos="fade-down">
          <p className='text-black'>We are one stop, full service, and turnkey solutions provider for</p>
          <h2 className='text-2xl md:text-3xl text-black font-normal mb-3'>Web, Mobility and Digital Marketing Services.</h2>
          <div className='flex justify-center items-center ' data-aos="fade-right">
            <img src={img} className="w-[350px] h-[350px] drop-shadow-xl" />
          </div>
        </div>
      </div>
      <Slider />

    </>
  )
}

export default Services1