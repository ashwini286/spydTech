import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import IMG0 from '../../../assets/SpY_D__2_-removebg-preview.png'
import IMG1 from "../../../assets/Azure/Azure2.png"
import IMG2 from "../../../assets/Azure/Azure4.avif"
import IMG3 from "../../../assets/Azure/Azure5.png"
// import "./Azure.css"
import Approch from '../../../Home/APProchUs/Approch'
import Aboutspyd from './Aboutspyd';
import azureFeatures from './azureFeatures';
function Azure() {
  useEffect(() => {
    AOS.init({ once: true });
}, []);
  
  return (
    <>
    <Navbarupp />
    <div className="relative">
     <img 
     src={IMG1}
     className=' w-full md:h-[550px] object-cover '
     alt="Azure"
     />
     <div className="absolute inset-0 md:h-[550px] w-full bg-black bg-opacity-50 rounded-lg"></div>
     
     <div className='absolute top-1/2 left-[50%] w-4/5 text-center  transform -translate-x-1/2 -translate-y-1/2 md:left-[45%] text-white font-bold '>
    
  <h1 className='text-2xl md:text-4xl lg:text-3xl flex-wrap ' >
   
  <a href="#" className=" text-xl md:text-4xl lg:text-4xl  ">Welcome to SpY D Technology:</a>
    Unlock the Power of Artificial Intelligence with 
    
  </h1>
</div>
    </div>

    <div className="relative transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 border-gray-500 shadow-3 scale shadow-2xl overflow-hidden shyam">
    <img 
        src={IMG2}
        className="w-full md:h-[550px] object-cover"
        alt="Your Alt Text"
    />
    <figcaption className="absolute px-4 text-4xl text-gray-900 bottom-12 md:bottom-52 pl-10">
        <div className=''>
            <img 
                src={IMG3}
                className='w-[25%] md:w-[25%] h-[35%] md:h-[25%] object-cover'
                alt="Your Alt Text"
                data-aos="fade-left"
            />
             </div>
             <p data-aos="fade-left" className='text-lg md:text-sm lg:text-4xl'>Develop your skills with the next app on Azure</p>
      
    </figcaption>
</div>


<div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-24">
    <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-10 prose" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
            <h1 className="text-7xl text-gray-600 leading-tight">Welcome to SpY D Technology's on Azure Cloud</h1>
            
               
                
            
            <p className="text-2xl text-gray-600 font-light mt-8 leading-relaxed">
            Catchy introduction explaining the essence of SPYD and its significance in today's digital landscape. </p>
            <p className="text-2xl text-gray-600 font-light mt-8 leading-relaxed">
            Highlight key features and benefits. </p>
            
        </div>
        <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
            <div className="h-64 col-span-4 sm:col-span-4 relative">
                <img  src="https://media.licdn.com/dms/image/sync/D5627AQHBlcOSO4eDwQ/articleshare-shrink_800/0/1706786128447?e=2147483647&v=beta&t=K7Fyl0y6gDdeJ0TQLr-q78bMHPhggs0P6rulau9X69c" alt="fresh beets" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-2 relative">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTtUuIsgpc6jaNcMaUG5cWBEIrmbp1cY9LQ&usqp=CAU" alt="red veggies" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-2 relative">
                <img  src="https://lh3.googleusercontent.com/p/AF1QipOQPxSlr7VjJUraBbe9DSR2zufWbo4eH-bkQDB_=w768-h768-n-o-v1" alt="asperagas" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-3 relative">
                <img  src="https://www.analyticsinsight.net/wp-content/uploads/2022/06/Cloud-Computing-Business-1024x576.jpg" alt="carrots" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-1 relative">
                <img  src="https://www.smbceo.com/wp-content/uploads/2019/02/small-business-cloud-sc.jpg" alt="tomato tomato" className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </div>
    </div>
</div>

    <Aboutspyd />    
  



<style>
  {`.shyam {
    border: 2px solid #fff;
    overflow: hidden; /* Add overflow hidden */
  }
  
  @keyframes borderGlow {
    0% {
      border-color: #fff; /* White */
    }
    50% {
      border-color: #0ff; /* Light blue */
    }
    100% {
      border-color: #fff; /* White */
    }
  }
  
  .shyam {
    animation: borderGlow 2s ease-in-out infinite; 
  }
  `}
</style>


{/* why choose spyd */}
<section class="bg-indigo-600 text-white py-20 px-4">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-4xl font-bold leading-tight mb-4">Why Choose SPYD on Azure Cloud ?</h2>
            <p class="text-xl mb-4">Unleash the Full Potential of SPYD with Azure Cloud</p>
            <p class="text-xs mb-4">How SPYD seamlessly integrates with Azure services for enhanced performance, scalability, and security.</p>
            <p class="text-xs mb-4">Testimonials or case studies showcasing successful implementations of SPYD on Azure Cloud.</p>
            
              
              
            <button class="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">Get Started</button>
        </div>
        <div class="md:w-1/2">
            <img src={IMG0} alt="Hero Image" class="w-full rounded-xl" />
        </div>
    </div>
</section>
<azureFeatures />
    <Approch />
    </>
  )
}

export default Azure