import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import "./Digital.css"
import IMG from "../../assets/Digital marketing/digital market.jpg"
import IMG2 from "../../assets/Digital marketing/Digital marketing main.png"



function Digitalmarketing() {
  return (
    <>
    <Navbarupp />
    <div className='relative flex h-screen items-center justify-center'>
        <img 
        src={IMG}
        className="absolute inset-0  w-full h-full" alt="Background 1" style={{ filter: "brightness(50%)" }}
        />
    </div>
    {/* <div className=' p-20 justify-center ml-[10%] h-[55rem] '>
        <div className='grid '>
        <div data-aos="fade-right"
    class='animate-fade-right ml-[40%] mt-[-5%] w-[15%] rounded-full h-[8rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl fade-left'> 
    hello1
</div>

        <div  data-aos="fade-right"
        className='animate-fade-right ml-[13%] mb-5 w-[15%] rounded rounded-[50%] h-[8rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl fade-left'>
            hello2
        </div>
        </div>
        <div className='flex'> 
        <div
        data-aos="fade-right"
         className='animate-fade-right ml-[-2%] p-16 w-[15%] rounded rounded-[50%] h-[8rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl transform fade-left'>
            hello3
        </div>
        <div 
        data-aos="fade-left"
        className='animate-fade-left p-40 ml-[15%] mt-[-7%] w-[10%] rounded rounded-[50%] h-[13rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl  fade-right'
        
        >
            hello4
        </div>
        </div>
        <div className='grid mt-[-10%]'>       
         <div
         data-aos="fade-right"
         className='animate-fade-right ml-[13%] mt-12 mb-[-2%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl fade-left'>
            hello5
        </div>
        
        <div 
        data-aos="fade-right"
        className='animate-fade-right ml-[40%] w-[20%] rounded rounded-[50%] h-[10rem] text-center border-1.5 border-gray-400 bg-white shadow-2xl fade-left'>
            hello6
        </div>
        </div>


        </div>    */}
        <div>
            <img 
            src={IMG2}
            className='p-5 ml-[20%]'
            />
        </div>
    <Approch />
    </>
  )
}

export default Digitalmarketing