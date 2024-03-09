import React from 'react'
import { Link } from 'react-router-dom'
const Php = () => {
  return (
    <>
      <div className='flex  flex-col-reverse md:flex-row  items-center justify-center  w-full '>
      <div className='md:w-[620px] md:h-[400px] text-white flex justify-center items-justify'>
        <div className=''>
            <img src="https://pngimg.com/d/php_PNG26.png" alt="" className='mt-32 ' />
        </div>
    </div>

    <div>
    </div>

    <div className=' md:w-[620px] md:h-[400px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
        <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
            <h1 className='text-[#656565]'> PHP Development </h1>
        </div>
        <div className='py-4  text-[#656565] md:leading-8 ' >
            <p>
            PHP has emerged as a valuable asset for developers globally. PHP, being an open-source scripting language, provides pre-built code, relieving developers from the need to write everything from scratch. This eliminates the laborious process of manual coding, saving time, and facilitating swift development.
            </p>
            <Link to = '/PHP'>
            <button className='bg-[#ff8a00] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500]'>Read More</button>
            </Link>
        
        </div>
    </div>
</div>
    </>
  )
}

export default Php