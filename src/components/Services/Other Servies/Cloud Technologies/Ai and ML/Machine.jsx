import React, { useEffect } from "react";
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import Approch from '../../../../Home/APProchUs/Approch'
import { TbBrandPython } from "react-icons/tb";
import { FaRProject } from "react-icons/fa6";
import { TbSquareRoundedLetterJ } from "react-icons/tb";
import IMG1 from "../../../../assets/AI and ML/ML-main-2.webp"
import IMG2 from "../../../../assets/AI and ML/ML-main-1.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import "./According.css";
import Features from "./Features";
import Hero from "./Hero";



function Machine() {
 
  return (
    <>
    <Navbarupp />
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-black">
      {/* <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"> */}
        <img className="min-w-full min-h-full absolute object-cover overflow-hidden " src={IMG1} type="video/mp4" autoPlay muted loop>
          
        </img>
        <img src={IMG2}
        className=''/>
      {/* </div> */}
      <div className="video-content space-y-2 z-10 mt-[-15%]">
        <h1 className="font-light text-6xl bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text transform rotate-360"
         data-aos="fly-in-left">Machine Learing</h1>
        <h3 className="font-light text-3xl">Explore</h3>
      </div>
      <style jsx>{`
        .video-docker video {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .video-docker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
      `}</style>
    </section> 

    <h1 className='bg-gray-800 text-4xl text-center text-gray-300 pt-5'
    data-aos="fade-right">Programming Langauges Use Machine Learning</h1>
    <div class="grid grid-cols-4 gap-8 p-8 md:p-16 bg-gray-800">

    <div
    data-aos="fade-up"
    class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300"
>
    <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
        <TbBrandPython className='text-3xl'/>
    </span>
    <h2 class="my-1 gradient-red text-base uppercase tracking-wide">Python Programming Language</h2>
    <p class="py-2 text-center text-sm">Python has a crucial role in machine learning because Python provides libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and Keras. These libraries offer tools and functions essential for data manipulation, analysis, and building machine learning models.</p>
</div>



<div
 data-aos="fade-up"
    class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
    <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        aria-hidden="true" class="w-7 h-7 text-yellow-640">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
    </svg>
</span>
    <h2 class="my-1 gradient-red text-base uppercase tracking-wide">Java and JavaScript</h2>
    <p class="py-2 text-center text-sm">Java and JavaScript is another general-purpose coding language that can be used for all types of software development.
     For Machine Learning, Java is mostly used to create algorithms, and neural networks.</p>
</div>


<div
 data-aos="fade-up"
    class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
    <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
    <FaRProject className='text-3xl'/>
</span>
    <h2 class="my-1 gradient-red text-base uppercase tracking-wide">R Programming Langauge</h2>
    <p class="py-2 text-center text-sm">R is one of the major languages for data science. It provides excellent visualisation features,
     which is essential to explore the data before submitting it to any automated learning, 
     as well as assessing the results of the learning algorithm.</p>
</div>


<div
 data-aos="fade-up"
    class="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
    <span class="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
    <TbSquareRoundedLetterJ className='text-3xl'/>
    
</span>
    <h2 class="my-1 gradient-red text-base uppercase tracking-wide">Juliat</h2>
    <p class="py-2 text-center text-sm">Julia is a general purpose programming language well suited for numerical 
    analysis and computational science. Some consider it the future of machine learning and the most natural replacement 
    for Python in this field. This article introduces the Julia language and its ecosystem.</p>
</div>

</div>
<div 
data-aos="fade-out"
class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl bg-gray-800 p-10">

    {/* <!-- Image Column --> */}
    <div class="w-full h-full lg:w-auto lg:h-auto">
        <img class="h-[35rem] w-full object-cover p-20 ml-[30%] transform motion-safe:hover:scale-150 " src="https://www.tensorflow.org/static/site-assets/images/marketing/resources/edu-hero.svg" alt="Winding mountain road" />
    </div>
    {/* <!-- Close Image Column --> */}

    {/* <!-- Text Column --> */}
    <div
    data-aos="fade-in"
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 ">
        {/* <!-- Text Wrapper --> */}
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Master in ML</h2>
            <p class="mt-4">
            To become an expert in machine learning, you first need a strong foundation in four learning areas:
             coding, math, ML theory, and how to build your own ML project from start to finish.
            </p>
            <p>Begin with TensorFlow's curated curriculums to improve these four skills, 
              or choose your own learning path by exploring our resource library below.</p>
            {/* <!-- Button Container --> */}
            <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-gray-800 hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
        {/* <!-- Close Text Wrapper --> */}
    </div>
    {/* <!-- Close Text Column --> */}

</div>


<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-8xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 class="text-4xl font-semibold leading-8 tracking-tight text-indigo-600">The four areas of machine learning education</h2>
        
          <p class="mt-6 text-base leading-7 text-gray-600">When beginning your educational path, it's important to first understand how to learn ML. 
          We've broken the learning process into four areas of knowledge, with each area providing a foundational piece of the ML puzzle. 
          To help you on your path, we've identified books, videos, and online courses that will uplevel your abilities,
           and prepare you to use ML for your projects. Start with our guided curriculums designed to increase your knowledge, 
           or choose your own path by exploring our resource library.</p>
        </div>
        <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          
           
          
         
          
            
          
           
          
            <div class="relative pl-9">
              <dt class="font-semibold text-gray-900">
                <svg class="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
Coding skills:
              </dt>
              <dd class="mt-2">Building ML models involves much more than just knowing ML concepts—it requires coding in order to do the data management,
               parameter tuning, and parsing results needed to test and optimize your model.</dd>
            </div>
          
            <div class="relative pl-9">
              <dt class="font-semibold text-gray-900">
                <svg class="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
Math and stats:
              </dt>
              <dd class="mt-2">ML is a math heavy discipline, so if you plan to modify ML models or build new ones from scratch,
               familiarity with the underlying math concepts is crucial to the process.</dd>
            </div>
          
            <div class="relative pl-9">
              <dt class="font-semibold text-gray-900">
                <svg class="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
ML theory:
              </dt>
              <dd class="mt-2">Knowing the basics of ML theory will give you a foundation to build on,
               and help you troubleshoot when something goes wrong.</dd>
            </div>
          
            <div class="relative pl-9">
              <dt class="font-semibold text-gray-900">
                <svg class="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
Build your own projects:
              </dt>
              <dd class="mt-2">Getting hands on experience with ML is the best way to put your knowledge to the test, 
              so don't be afraid to dive in early with a simple colab or tutorial to get some practice.</dd>
            </div>
          
        </dl>
      </div>
    </div>
  </div>
  <Hero /> 

  {/* <Features /> */}
<Approch />
    </>
  )
}

export default Machine