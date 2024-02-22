import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
const SPYD = () => {
  return (
    <>
      <div className=' mt-10 md:px-8 mb-10'>
        <div className='p-4 pl-16 md:text-4xl  text-[#656565] font-bold'>
          How SPYD Tech helps its clients
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-[#656565]'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
            <p><VerifiedIcon /></p>
            <p>Our high powered team of developers with rich experience in AngularJS rapidly adapt AngularJS for the web application we build enhancing our value clients’ businesses</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><VerifiedIcon /></p>
            <p>The deployment of AngularJS helps our clients accelerate time to market with their products and services</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><VerifiedIcon /></p>
            <p>The plug and play components are easily adaptable and implemented for multiple applications thus saving time and effort in building applications for our clients</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6' >
            <p><VerifiedIcon /></p>
            <p>We make it extremely cost effective and build AngularJS based applications that reduce development budget significantly.</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default SPYD