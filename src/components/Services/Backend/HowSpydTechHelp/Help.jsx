import React from 'react'
import BlurOnIcon from '@mui/icons-material/BlurOn';
const Help = () => {
  return (
    <>
<div className=' mt-8 md:px-8 mb-10 bg-[#004AAD] rounded-lg md:mx-8 pt-8 '>
  <div className='p-4 pl-16 md:text-3xl text-center text-white font-bold'>
    How SPY D Tech Empowers Clients through Backend Development
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-white'>
    <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
      <p><BlurOnIcon /></p>
      <p>Within our backend development expertise, SPYD Tech's skilled team seamlessly integrates robust technologies to power web applications. Our extensive experience ensures the creation of high-performance backend systems that enhance the overall value of our clients' businesses.</p>
    </div>
    <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
      <p><BlurOnIcon /></p>
      <p>Utilizing advanced backend technologies accelerates the deployment of our clients' products and services, providing a strategic advantage in the dynamic and competitive business environment.</p>
    </div>
    <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
      <p><BlurOnIcon /></p>
      <p>The modular and adaptable components in our backend solutions facilitate swift integration across various applications, resulting in significant time and effort savings during the development process for our clients.</p>
    </div>
    <div className='flex items-center w-[89%] gap-4 pl-6 pb-16' >
      <p><BlurOnIcon /></p>
      <p>SPYD Tech is committed to delivering cost-effective backend solutions, optimizing development budgets and ensuring efficient and economical outcomes for our clients' applications.</p>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Help