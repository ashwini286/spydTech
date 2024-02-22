import React from 'react'
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
const Help = () => {
  return (
    <>
      <div className='mt-10 md:px-8 mb-10 bg-[#242B40] rounded-lg md:mx-16 pt-8'>
        <div className='p-4 pl-16 md:text-3xl text-center text-white font-bold'>
          Enhancing Mobile App Security at SPY D Tech
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-white pt-8'>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>In mobile app development, SPY D Tech's highly skilled team employs advanced security technologies to fortify applications. With expertise in secure coding practices, we ensure robust protection for our clients' digital assets in the ever-evolving mobile landscape.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>Our implementation of cutting-edge security measures in mobile app technologies safeguards our clients' data and user interactions. This approach not only meets industry standards but exceeds them, providing a secure foundation for mobile business activities.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><BlurCircularIcon /></p>
            <p>The modular and adaptable components in our mobile app solutions enable seamless integration with various platforms. This flexibility ensures swift implementation, enhancing the overall efficiency of our clients' digital ecosystems on mobile devices.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6 pb-16'>
            <p><BlurCircularIcon /></p>
            <p>SPY D Tech is dedicated to delivering cost-effective solutions without compromising security. Our mobile app development approach not only strengthens security protocols but also optimizes development budgets, providing our clients with secure and economical mobile solutions.</p>
          </div>
        </div>
      </div>



    </>
  )
}

export default Help