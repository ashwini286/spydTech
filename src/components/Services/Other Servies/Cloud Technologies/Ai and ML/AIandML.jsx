import React, { useEffect  } from 'react';
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import Approch from '../../../../Home/APProchUs/Approch'
import IMG1 from "../../../../assets/AI and ML/AI and ML.jpg"
import IMG2 from "../../../../assets/AI and ML/AI-1.png"
import IMG3 from "../../../../assets/AI and ML/ML-1.png"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AIandML() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navbarupp />
    <div className="min-h-screen bg-gray-900 flex flex-col items-center text-center justify-center">
    <h1 data-aos="fade-up-right" className="text-5xl font-bold mb-8 animate-pulse  bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        AI and Machine Learning 
    </h1>
    <p className="text-white text-lg md:text-xl mb-8 md:px-2 " data-aos="fade-up-right">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
</div>
   <div className='bg-gray-900 text-white'>
   <div className='p-10 space-x-5 animate-pulse flex flex-col md:flex-row'>
    <img 
    
     data-aos="fade-up-right"
    src={IMG2}
    className='shadow-2xl'
    />
    <div data-aos="fade-up-right">
        <h1 className='text-4xl' data-aos="fade-up-right" >About AI...?</h1>
        <p className='text-xl' data-aos="fade-up-right">Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of other living beings,
             primarily of humans. It is a field of study in computer science that develops and studies intelligent machines.
              Such machines may be called AIs.</p>
              <Link to="/Ai2" data-aos="fade-up-right">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
   </div>

   <div className='p-10 space-x-5 animate-pulse flex flex-col md:flex-row'>
    
    <div data-aos="fade-right">
        <h1 className='text-4xl'>About Machine Learning...?</h1>
        <p className='text-xl'>Machine Learning is a field of study in artificial intelligence concerned 
        with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit instructions. Recently, artificial neural networks have been able to surpass many previous approaches in performance.</p>
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
    className='shadow-2xl w-1/2'
    />
   </div>
   </div>
    <Approch />
    </>
  )
}

export default AIandML