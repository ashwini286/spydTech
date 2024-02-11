import React from 'react'
import Navbarupp from '../Home/Navbar/Navbarupp'
import ReadyToTest from './ReadyToTestDrive/ReadyToTest'
const TryADemo = () => {
  return (
    <>
     <div>
      <Navbarupp />
      </div>   
      
       <div className=" mx-auto min-h-screen h-[160vh] ">
        
         
          <div className=" flex h-full items-center justify-center bg-black flex-col">
          
            <div className='px-4 '>
                <p className='text-white lg:text-[100px] text-[45px]  font-bold tracking-tighter  leading-none text-center'>10-minute Close demo: <br /> <span className='text-[#D4164B]'>close more deals, faster</span></p>
                <br />
                <p className='text-[#656565] text-center text-2xl'>In this free, on-demand demo, you'll see how Close's sales automation <br /> tools help thousands of reps double their revenue.</p>
            </div>  
            <div className='mt-4'>
            <iframe
            width="1000"
            height="400"
            // src="https://www.youtube.com/embed/X_9VoqR5ojM"
            src="https://www.youtube.com/embed/IT94xC35u6k"
            title="YouTube video player"
            allowFullScreen={true}
          ></iframe>
            </div>
          </div>


       
        </div>

        <ReadyToTest />
    </>
  )
}

export default TryADemo