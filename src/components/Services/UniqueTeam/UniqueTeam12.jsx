import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IMG56 from '../../assets/decore.png'

function UniqueTeam12() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>


      <div className=' p-8'>
        <div className='flex justify-center items-center flex-col lg:flex-row mb-10 '>
          <h1 data-aos="fade-up-right" className='text-3xl font-bold text-center w-full  pb-8'  >A Unique Team of  <p className='text-blue-900'>ERPNext</p><img
            className='w-[100%]' src={IMG56} /></h1>

          <p className='lg:w-2/2 ml-[10%] text-justify' data-aos="fade-up-right">Our ERPNext team provides state-of-the-art, standards & best practices, for Consultation, Implementation, and development, and, those are aimed at addressing all our client’s business challenges and business goals.</p>

        </div>

      </div>
    </>
  );
}

export default UniqueTeam12;
