import React from 'react';
import bg from '../../../assets/IPhoneApplication/bg.png';
import img4 from '../../../assets/IPhoneApplication/img4.png';
import img5 from '../../../assets/IPhoneApplication/img5.png';
import img6 from '../../../assets/IPhoneApplication/img6.png';
import img7 from '../../../assets/IPhoneApplication/img7.png';
import img8 from '../../../assets/IPhoneApplication/img8.png';
import img9 from '../../../assets/IPhoneApplication/img9.png';

const OurAndroidDevelopmentExpertise = () => {
  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='flex justify-center items-center flex-col '>
          <div>
            <p className='md:pl-32 md:text-4xl text-white pt-8 text-xl pl-4 '>Our Android Development Expertise is Not Limited</p>
          </div>
          {/* <div className='absolute grid grid-cols-2 md:grid-cols-3 gap-2'> */}
          <div className='flex justify-around items-center flex-wrap gap-6 '>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8   pl-4'>
              <img src={img4} alt="Image 4" className='w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>Project Estimate</p></div>
            </div>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8   pl-4'>
              <img src={img5} alt="Image 5" className='w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>Assessment of User Requirements</p></div>
            </div>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8   pl-4'>
              <img src={img6} alt="Image 6" className='w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>Users’ Needs Engineering</p></div>
            </div>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8   pl-4'>
              <img src={img7} alt="Image 7" className='w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>Prototyping</p></div>
            </div>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8   pl-4'>
              <img src={img8} alt="Image 8" className='w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>Bug fixing</p></div>
            </div>
            <div className='flex flex-row text-white items-center md:pl-32 md:pt-8 pl-4'>
              <img src={img9} alt="Image 9" className='mb-8 w-[70px] lg:w-[90px]' />
              <div><p className='ml-8'>App promotion</p></div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-16' >
            <button className='bg-blue-600 p-4  rounded-lg'>CONTACT US NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAndroidDevelopmentExpertise;
