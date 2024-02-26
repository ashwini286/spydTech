import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
const Help = () => {
  useEffect(() => {
    AOS.init();
});
  return (
    <>
      <div className=' mt-10 md:px-4 mb-10 bg-[#242B40] rounded-lg md:mx-8 pt-8 '  data-aos="fade-down">
        <div className='p-4 pl-16 md:text-3xl text-center text-white font-bold'>
          How SPY D Tech Enhances Frontend Security
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-white'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>In frontend development, our highly skilled team at SPYD Tech utilizes advanced security technologies to fortify web applications. With expertise in secure coding practices, we ensure robust protection for our clients' digital assets.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>Our implementation of cutting-edge security measures in frontend technologies safeguards our clients' data and user interactions. This approach not only meets industry standards but exceeds them, providing a secure foundation for online business activities.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>The modular and adaptable components in our frontend solutions enable seamless integration with various applications. This flexibility ensures swift implementation, enhancing the overall efficiency of our clients' digital ecosystems.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6 pb-16' >
            <p><BlurCircularIcon /></p>
            <p>SPYD Tech is dedicated to delivering cost-effective solutions without compromising security. Our frontend development approach not only strengthens security protocols but also optimizes development budgets, providing our clients with secure and economical solutions.</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Help