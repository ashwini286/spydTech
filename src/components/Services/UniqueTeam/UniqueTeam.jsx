import React from 'react';
import IMG from '../../assets/decore.png';

const UniqueTeam = () => {
  return (
    <>
      <div className=' p-8'>
        <div className='flex justify-center items-center flex-col lg:flex-row mb-10 '>
          <h1 className='text-3xl font-bold text-center w-full  pb-8'>Conceptualize, Design, and Deliver Exceptional Execution with <p className='text-blue-900'>Our ERPNext Consultancy</p><img
            className='w-[100%]' src={IMG} /></h1>

          <p className='lg:w-2/2 ml-[10%] text-justify'>Our ERPNext team provides state-of-the-art, standards & best practices,
            for Consultation, Implementation, and development, and, those are aimed at addressing all our client’s business challenges and business goals.</p>

        </div>

      </div>
    </>
  )
}

export default UniqueTeam