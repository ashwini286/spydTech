import React from 'react'
import BlurOnIcon from '@mui/icons-material/BlurOn';
const Help = () => {
  return (
    <>
      <div className=' mt-10 md:px-8 mb-10 bg-[#5382A1] rounded-lg md:mx-8 pt-8 '>
        <div className='p-4 pl-16 md:text-3xl text-center text-white font-bold'>
        How SPYD Tech helps its clients
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-white'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurOnIcon /></p>
            <p>In Java, our highly skilled development team, equipped with extensive experience, seamlessly integrates Java into the web applications we construct, elevating the value of our clients' businesses.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurOnIcon /></p>
            <p>Utilizing Java expedites our clients' time-to-market for their products and services, providing a competitive edge in the fast-paced business landscape.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurOnIcon /></p>
            <p>The modular and easily adaptable components in Java facilitate swift implementation across multiple applications, resulting in considerable time and effort savings during application development for our clients.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6 pb-16' >
            <p><BlurOnIcon /></p>
            <p>Our commitment to cost-effectiveness is evident in the creation of Java-based applications that significantly trim down development budgets, ensuring efficient and economical solutions for our clients.</p>
          </div>
       
        </div>

      </div>
    
    </>
  )
}

export default Help