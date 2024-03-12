import React, { useEffect } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className=' mt-10 md:px-8 pb-16' data-aos="fade-down">
        <div className='md:text-5xl md:font-extrabold text-2xl font-bold pl-12 pb-4'>
          The immense benefits of AngularJS
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-black'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-2'>
            <p><VerifiedIcon /></p>
            <p>AngularJS is a potentially a potent framework that makes a web application accurate to the point of precision</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
            <p><VerifiedIcon /></p>
            <p>Since little or no coding is required when AngularJS is implemented it helps in improving efficiency by leaps and bounds benefiting the developers and clients.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-2'>
            <p><VerifiedIcon /></p>
            <p>The very design is based on MVC architecture makes it easily adaptable to the web application being built.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-2' >
            <p><VerifiedIcon /></p>
            <p>AngularJS is backed by Google and a large community of coders, developers with regular updates and new features that can be incorporated with bare minimal effort</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-2' >
            <p><VerifiedIcon /></p>
            <p>It offers rich, varied experience in making the web application far more responsive thus increased user experience.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Benefits