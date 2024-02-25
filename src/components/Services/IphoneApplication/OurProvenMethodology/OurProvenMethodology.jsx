import React,{useEffect} from 'react';
import bg1 from '../../../assets/IPhoneApplication/bg1.png';
import bg2 from '../../../assets/IPhoneApplication/bg2.png';
import bg3 from '../../../assets/IPhoneApplication/bg3.png';
import bg4 from '../../../assets/IPhoneApplication/bg4.png';
import bg5 from '../../../assets/IPhoneApplication/bg5.png';
import bg6 from '../../../assets/IPhoneApplication/bg6.png';
import AOS from "aos";
import "aos/dist/aos.css";
const OurProvenMethodology = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <div data-aos="fade-up">
          <p className='text-center text-3xl text-[#656565] py-8'>Our Proven Methodology</p>
        </div>
        <div className='grid lg:grid-cols-6 md:px-20 px-4 pb-8 gap-2' data-aos="fade-down">

          <di v className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg1} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full hover:bg-blue-gray-500' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Plan</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Creating a strategic plan after in-depth analysis of the current and future state.</p>
            </div>
          </di>

          <div className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg2} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full hover:bg-blue-gray-500' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Craft</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Combining Strategic product solutions, and user’s goal through wireframes and prototypes.</p>
            </div>
          </div>

          <div className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg3} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full hover:bg-blue-gray-500' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Design</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Designing visual identity to strengthen brand through iconography color, type, imagery, and animation.</p>
            </div>
          </div>

          <div className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg4} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full hover:bg-blue-gray-500' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Develop</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Using agile methodologies, our professionals build final product with creativity and deliver product that perform well.</p>
            </div>
          </div>

          <div className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg5} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full hover:bg-blue-gray-500' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Test</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Testing final product with all its features to check its performance and finally, handover to candidate for submission.</p>
            </div>
          </div>

          <div className='relative inset-0 flex items-center justify-center hover:-translate-y-4 transition-all duration-300'>
            <img src={bg6} alt='Background 1' className='w-[189px] h-[189px] shadow-2xl rounded-full ' />
            <div className='absolute'>
              <p className='text-[#656565] text-center font-bold pb-4'>Measure</p>
              <p className='text-[#656565] text-center w-[189px] text-xs'>Evaluating the product’s performance and target the success metrics that was established in planning</p>
            </div>
          </div>


        </div>
      </div>
    </>

  );
}

export default OurProvenMethodology;
