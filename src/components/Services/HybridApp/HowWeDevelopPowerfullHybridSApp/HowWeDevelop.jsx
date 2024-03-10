import React from 'react'

import TaskAltIcon from '@mui/icons-material/TaskAlt';
const HowWeDevelop = () => {
  return (
    <>
      <div>
        <div className=' mt-10 md:px-8 mb-10'>
          <div className='p-4 pl-16 md:text-4xl  text-black md:mb-8'>
            How SPY D Privite Limited helps its clients
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-black'>
            <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
              <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
              <p>The ultimate aim and goal of the businesses is to make sure the intended and targeted audience download the apps, use it for their benefit.</p>
            </div>
            <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
              <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
              <p>We understand the requirements thoroughly and comprehensive, study, analyse the market trends in the niche, recommend and enhance features and help our clients with edge in the market.</p>
            </div>
            <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
              <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
              <p>Building high speed, easy to use, simple yet powerful navigation, intuitive UI, UX hybrid apps is our forte.</p>
            </div>
            <div className='flex items-center w-[89%] gap-4 pl-6 pb-8' >
              <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
              <p>The very fact that hybrid apps are accessible across multiple operating systems makes them much easier to build thus reducing the costs significantly without compromising on the quality.</p>
            </div>

          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6 md:px-14 text-black' >
            <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
            <p>Our development technologists exploit the internal programming systems to create far reaching synchronized layers to make the hybrid apps compatible across all operating systems.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default HowWeDevelop