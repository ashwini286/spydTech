import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const Benefits = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
    <div className='mt-4 md:px-20 pb-16'>
      <div className='p-4 pl-16 md:text-4xl  text-[#656565] font-bold' data-aos="fade-left">
        The immense benefits of ReactJS
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-[#656565]' data-aos="fade-right">
        <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
          <p><TaskAltOutlinedIcon color="primary" /></p>
          <p>ReactJS provides a powerful library for building web applications with precision and accuracy.</p>
        </div>
        <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
          <p><TaskAltOutlinedIcon color="primary" /></p>
          <p>Efficiency is significantly improved with ReactJS as it requires minimal coding, benefiting both developers and clients.</p>
        </div>
        <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
          <p><TaskAltOutlinedIcon color="primary" /></p>
          <p>The component-based architecture of React makes it easily adaptable to the web applications being developed.</p>
        </div>
        <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
          <p><TaskAltOutlinedIcon color="primary" /></p>
          <p>Backed by Facebook and a large community, React receives regular updates and introduces new features with minimal effort for integration.</p>
        </div>
        <div className='flex items-center w-[89%] gap-4 pl-6'>
          <p><TaskAltOutlinedIcon color="primary" /></p>
          <p>React provides a rich and seamless user experience, making web applications more responsive and enhancing user satisfaction.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Benefits