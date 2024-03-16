import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const Benefits = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className='mt-4 md:px-20 py-8 bg-gray-300 mb-8'  data-aos="fade-up">
        <div className='md:text-5xl md:font-extrabold text-2xl font-bold pl-12 pb-4'>
          The immense benefits of ReactJS
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-black'>
  <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Powerful: ReactJS offers a robust library for precise web application development.</p>
  </div>
  <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Efficiency: With minimal coding requirements, ReactJS enhances productivity for both developers and clients.</p>
  </div>
  <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Versatility: ReactJS can be used to build various types of applications, ranging from simple single-page apps to complex enterprise-level solutions.</p>
  </div>
 
  <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Continuous Improvement: Supported by Facebook and a vibrant community, React receives regular updates and introduces new features seamlessly.</p>
  </div>
  <div className='flex items-center w-[89%] gap-4 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Enhanced User Experience: React delivers a smooth and responsive user interface, elevating user satisfaction.</p>
  </div>
  <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
    <p><TaskAltOutlinedIcon color="primary" /></p>
    <p>Adaptability: React's component-based architecture makes it easy to adapt to evolving web applications.</p>
  </div>
</div>

      </div>
    </>
  )
}

export default Benefits