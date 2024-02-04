import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'

function Digitalmarketing() {
  return (
    <>
    <Navbarupp />
    <div className=' p-20 justify-center ml-[10%] h-[55rem] '>
        <div className='grid '>
        <div className='ml-[30%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-2 border-white bg-[#71a9bc] shadow-3xl hover:scale-105 transition-all duration-500'> 
          hello1
        </div>
        <div className='ml-[10%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-2 border-white bg-white shadow-5xl hover:scale-105 transition-all duration-500'>
            hello2
        </div>
        </div>
        <div className='flex'> 
        <div className='p-16 w-[20%] rounded rounded-[50%] h-[10rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl transform hover:scroll-right hover:translate-x-full transition-all duration-500'>
            hello3
        </div>
        <div className='p-40 ml-[30%] mt-[-6%] w-[40%] rounded rounded-[50%] h-[20rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl transform fade-left translate-x-1 transition-all duration-300 '>
            hello4
        </div>
        </div>
        <div className='grid mt-[-10%]'>       
         <div className='ml-[10%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-2 border-white bg-[#71a9bc] shadow-3xl hover:scale-105 transition-all duration-500'>
            hello5
        </div>
        
        <div className='ml-[30%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-2 border-white bg-[#71a9bc] shadow-3xl hover:scale-105 transition-all duration-500'>
            hello6
        </div>
        </div>

        </div>   
    <Approch />
    </>
  )
}

export default Digitalmarketing