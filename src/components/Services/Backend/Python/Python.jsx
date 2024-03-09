import React from 'react'
import { Link } from 'react-router-dom'
const Python = () => {
  return (
    <>
     {/* <div className='flex flex-col md:flex-row  items-center justify-center  w-full mt-16'>
    <div className= ' border border-blue-800 md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
        <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
            <h1 className='text-[#656565]'> Python Development </h1>
        </div>
        <div className='py-4  text-[#656565] md:leading-8 ' >
            <p>
            Python has emerged as a valuable asset for developers globally. Python, being an open-source programming language, provides pre-built code, relieving developers from the need to write everything from scratch. This eliminates the laborious process of manual coding, saving time, and facilitating swift development.
            </p>
            <Link to = '/Python'>
            <button className='bg-blue-400 p-3  text-[#656565] rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
            </Link>
        
        </div>
    </div>
    <div>
    </div>
    <div className='border border-red-800 md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col '>
        <div>
            <img src="https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png" alt="" className='md:ml-[100px]' />
        </div>
    </div>
</div> */}

<div className='flex flex-col md:flex-row  items-center justify-center  w-full'>
    <div className='md:w-[620px] md:h-[400px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
        <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
            <h1 className='text-[#656565]'> Python Development </h1>
        </div>
        <div className='py-4  text-[#656565] md:leading-8 ' >
            <p>
            Python has emerged as a valuable asset for developers globally. Python, being an open-source programming language, provides pre-built code, relieving developers from the need to write everything from scratch. This eliminates the laborious process of manual coding, saving time, and facilitating swift development.
            </p>
            <Link to = '/Python'>
            <button className='bg-[#f18701] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500]'>Read More</button>
            </Link>
        
        </div>
    </div>
    <div>
    </div>
    <div className='md:w-[620px] md:h-[400px] text-white flex justify-center items-justify flex-col '>
        <div>
            <img src="https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png" alt="" className='' />
        </div>
    </div>
</div>
    </>
  )
}

export default Python