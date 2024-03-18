import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbarupp from '../../../Home/Navbar/Navbarupp'
import IMG1 from "../../../assets/Google cloud/main1.avif"
import IMG2 from "../../../assets/Google cloud/main2.png"
import IMG3 from "../../../assets/Google cloud/gcp service 1.png"
import IMG4 from "../../../assets/Google cloud/gcp-data-storage.png"
import IMG5 from "../../../assets/Google cloud/gcp-gke-network.png"
import IMG6 from "../../../assets/Google cloud/big data.png"
import IMG7 from "../../../assets/Google cloud/machine learning.webp"
import "./google.css"
import Approch from '../../../Home/APProchUs/Approch'
import GCP1 from './GCP1';

function Google() {
    useEffect(() => {
        AOS.init();
      }, []);
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbarupp />
    <div className='relative'>
        <img 
        // src={IMG1}
        src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Mastering_The_Future_With_A_Master_Degree_In_Cloud_Computing.jpg'
        className='w-full md:h-[500px] h-[500px] object-cover'
        />
    </div>
    <div class="bg-gray-900 py-20">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6" data-aos="fade-up-right">
                    Welcome to our <br class="hidden md:block" />
                    <span class="text-indigo-500">SpY D Technology</span> Website Google Cloud
                </h1>
                <p class="text-lg md:text-xl lg:text-xl text-gray-400 mb-8" data-aos="fade-up-right">
                SpY D Technology revolutionizes website design by offering dynamic and immersive experiences that stand out in a crowded online landscape. With SpY D, designers can unleash their creativity and build websites that not only look visually stunning but also deliver exceptional user experiences.
                </p>
                <div class="flex gap-2">
                    <a href="#" data-aos="fade-up-right"  class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <a href="#" data-aos="fade-up-right" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/2 mt-8 md:mt-0" data-aos="fade-up-right">
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2021/07/Public-Sector-Momentum.max-1000x1000-800x444.png" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>


<div class="h-full bg-black">
<h1 className='text-white text-2xl text-center pt-10' data-aos="fade-up-right">Key features of SpY D Technology include</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-10 ">

        <div class="block rounded-xl border border-gray-800 p-10 sathish" data-aos="fade-up-right">
            
         
            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
            Dynamic content presentation
            </h2>
           
        </div>

        <div class="block rounded-xl border border-gray-800 p-10 sathish" data-aos="fade-up-right">
          
            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
            Interactive elements and animations
            </h2>
            
        </div>

        <div class="block rounded-xl border border-gray-800 p-10 sathish" data-aos="fade-up-right">
           

            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
            Seamless integration of multimedia content </h2>
           
        </div>

        <div class="block rounded-xl border border-gray-800 p-10 sathish" data-aos="fade-up-right">
            
            <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
            Adaptive layouts for various devices and screen sizes </h2>
           
        </div>
    </div>
</div>
<style>
  {`
  .sathish{
    border: 4px solid #9e8b8b;
    overflow: hidden;
}

@keyframes borderGlow  {
    0% {
      border-color: yellow; /* White */
    }
    50% {
      border-color: blue; /* Light blue */
    }
    75% {
      border-color: red; /* White */
    }
    100%{
        border-color: green;
    }
  }
  
  .sathish {
    animation: borderGlow 5s ease-in-out infinite; 
  }`}
</style>
<GCP1 />
    <Approch />
    </>
  )
}

export default Google