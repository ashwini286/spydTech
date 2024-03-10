import React from 'react'
import Link from '../../../assets/IPhoneApplication/Line.png';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const HowWeDevelop = () => {
  return (
    <>
      <div>

        <div>
          <div className=' mt-10 md:px-8 mb-10'>
            <div className='p-4 pl-16 md:text-4xl  text-black md:mb-8'>
              How SPY D Privite Limited helps its clients
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-black'>
              <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
                <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
                <p>In an increasingly competitive market environment, wherein the businesses are vying to seek attention of the users and capture the market in the android apps segment</p>
              </div>
              <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
                <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
                <p>The focal point for us at Aspirant is to minimize the cost, maximize the outreach and towards growth and prosperity.</p>
              </div>
              <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
                <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
                <p>Thus building a robust, scalable, intuitive android app that gels with the users, enriches their experience, to generate download leading to conversion.</p>
              </div>
              <div className='flex items-center w-[89%] gap-4 pl-6 pb-8' >
                <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
                <p>Our methodical approach, developmental strategies are time tested, and are in consonance with globally accepted principles and best practices</p>
              </div>

            </div>
            <div className='flex items-center w-[89%] gap-4 pl-6 md:px-14 text-black' >
              <p><TaskAltIcon color="primary" sx={{ fontSize: 40 }} /></p>
              <p>Aspirant has been at the front of building engaging android apps, building capabilities, deploying state of art technologies, infrastructure to match it and helping clients to reach out to targeted audience and grow business.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HowWeDevelop