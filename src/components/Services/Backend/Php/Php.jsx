import React from 'react'
import { Link } from 'react-router-dom'
const Php = () => {
  return (
    <>
      <div className='flex  flex-col-reverse md:flex-row  items-center justify-center bg-gray-200 w-full mt-16'>
      <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify'>
        <div>
            <img src="https://pngimg.com/d/php_PNG26.png" alt="" className='mt-32' />
        </div>
    </div>

    <div>
    </div>

    <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
        <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
            <h1 className='text-[#656565]'> PHP Development </h1>
        </div>
        <div className='py-4  text-[#656565] md:leading-8 ' >
            <p>
            PHP has emerged as a valuable asset for developers globally. PHP, being an open-source scripting language, provides pre-built code, relieving developers from the need to write everything from scratch. This eliminates the laborious process of manual coding, saving time, and facilitating swift development.
            </p>
            <Link to = '/PHP'>
            <button className='bg-blue-400 p-3  text-[#656565] rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
            </Link>
        
        </div>
    </div>
</div>
    </>
  )
}

export default Php