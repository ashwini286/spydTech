import React from 'react'
import Phone from '../Phone';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <>
    <div className='bg-gray-300 mt-16 md:mx-16 rounded-xl'>


    <div className='flex flex-col md:flex-row  items-center justify-center'>
    <div className='md:w-[620px] md:h-[500px] flex justify-center items-justify flex-col md:pl-24 pl-4'>
  <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
    <h1 className='text-[#656565]'>Mobile App Development</h1>
  </div>
  <div className='py-4 text-[#656565] md:leading-8 w-full'>
    <p>
    Mobile app development spans diverse technologies and platforms. From hybrid apps, blending web and native features for cross-platform compatibility, to Android and iPhone apps tailored for their respective operating systems, developers use varied approaches. Android apps are built using Java or Kotlin and distributed via the Google Play Store, while iPhone apps, crafted with Swift, are distributed through the Apple App Store, ensuring quality control.
    </p>
    
  </div>
</div>

        <div>
        </div>
        <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col '>
            <div>
            <Phone />
            </div>
        </div>
    </div>
       
    </div>
    </>
  )
}

export default Card