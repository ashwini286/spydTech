import React from 'react'
import { Link } from 'react-router-dom'
const Java = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-center'>
    <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
        <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
            <h1> Java Development </h1>
        </div>
        <div className='py-4 text-gray-400 md:leading-8'>
            <p>
            Java has emerged as a valuable asset for developers globally. Java, being an open-source programming language, provides pre-built code, relieving developers from the need to write everything from scratch. This eliminates the laborious process of manual coding, saving time, and facilitating swift development.    
            </p>
            <Link to = '/Java'>
            <button className='bg-blue-400 p-3 text-black rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
            </Link>
        
        </div>
    </div>
    <div>
    </div>
    <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col '>
        <div>
            <img src="https://w7.pngwing.com/pngs/718/323/png-transparent-java-computer-icons-java-miscellaneous-text-symbol-thumbnail.png" alt="" />
        </div>
    </div>
</div>
  )
}

export default Java