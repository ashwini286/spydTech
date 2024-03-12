import React from 'react'
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import Approch from '../../../../Home/APProchUs/Approch'
import IMG1 from "../../../../assets/AI and ML/AI and ML.jpg"
import IMG2 from "../../../../assets/AI and ML/AI-1.png"
import IMG3 from "../../../../assets/AI and ML/ML-1.png"
import { Link } from 'react-router-dom'

function AIandML() {
  return (
    <>
    <Navbarupp />
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    <h1 class="text-5xl font-bold mb-8 animate-pulse  bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        AI and Machine Learning 
    </h1>
    <p class="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
</div>
   <div className='bg-gray-900 text-white'>
   <div className='p-10 space-x-5 animate-pulse flex flex-col md:flex-row'>
    <img 
     data-te-animation-init
     data-te-animation-start="onScroll"
     data-te-animation="[fade-in_3s_ease-in-out]"
     data-aos="fade-up"
    src={IMG2}
    className='shadow-2xl'
    />
    <div data-aos="fade-down">
        <h1 className='text-4xl'>About AI...?</h1>
        <p className='text-xl'>Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of other living beings,
             primarily of humans. It is a field of study in computer science that develops and studies intelligent machines.
              Such machines may be called AIs.</p>
              <Link to="/Ai2">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
   </div>

   <div className='p-10 space-x-5 animate-pulse flex flex-col md:flex-row'>
    
    <div data-aos="fade-right">
        <h1 className='text-4xl'>About AI...?</h1>
        <p className='text-xl'>Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of other living beings,
             primarily of humans. It is a field of study in computer science that develops and studies intelligent machines.
              Such machines may be called AIs.</p>
              <Link to="/machine">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
    <img 
     data-te-animation-init
     data-te-animation-start="onScroll"
     data-te-animation="[fade-in_3s_ease-in-out]"
     data-aos="fade-up"
    src={IMG3}
    className='shadow-2xl'
    />
   </div>
   </div>
    <Approch />
    </>
  )
}

export default AIandML