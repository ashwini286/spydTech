import React from 'react'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const Benefits = () => {
  return (
    <>
    <div className='mt-8 md:px-20'>
      <div className='p-4 pl-16 md:text-4xl text-gray-600 font-bold'>
        The immense benefits of ReactJS
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-gray-500'>
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