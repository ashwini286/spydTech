import React, { useEffect  } from 'react';
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import ApprochUs from '../../../../Home/APProchUs/Approch'
import Aiproducts from './Aiproducts'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ai2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navbarupp />

<div className='relative'>
    <img
    className=' w-full md:h-[550px]'
    src='https://www.bhmpics.com/downloads/abstract-background-Wallpapers/19.v1016-c-08_1-ksh6mza3.jpg'
    />
     <div className="absolute inset-0 md:h-[550px] w-full bg-black bg-opacity-50 rounded-lg"></div>
     <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:w-[50%] lg:w-[50%] text-start text-white font-bold px-5'>
  <h1 className='text-2xl md:text-4xl lg:text-4xl' >
    Unlock the Power of Artificial Intelligence with <br/>
    <a href="#" class="relative inline-block  btn-shine">"SpY D Technology"</a>
  </h1>
</div>
<style>
  {`
  .btn-shine {
      position: absolute;
      top: 85%;
      left: 40%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
      background-position: 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 3s infinite linear;
      animation-fill-mode: forwards;
      -webkit-text-size-adjust: none;
      text-decoration: none;
      white-space: nowrap;
      font-family: "Poppins", sans-serif;
  }

  @media (max-width: 767px) {
    /* Styles for mobile view */
    .text-2xl {
      font-size: 1.5rem; /* Adjusted font size for mobile view */
    }
    .md\:text-4xl {
      font-size: 2rem; /* Adjusted font size for mobile view */
    }
    .lg\:text-4xl {
      font-size: 2.25rem; /* Adjusted font size for mobile view */
    }
    .btn-shine {
      padding: 10px 16px; /* Adjusted padding for mobile view */
      top: 85%;
      left: 70%;
    }
  }

  @-moz-keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 180px;
      }
      100% {
        background-position: 180px;
      }
  }
  @-webkit-keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 180px;
      }
      100% {
        background-position: 180px;
      }
  }
  @-o-keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 180px;
      }
      100% {
        background-position: 180px;
      }
  }
  @keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 180px;
      }
      100% {
        background-position: 180px;
      }
  }
  `}
</style>

       
</div>

<Aiproducts />
    <div className='prabha pb-10'>
        <div className='text-white text-center space-y-4 py-10'>
        <h1 className='text-4xl font-bold' data-aos="fade-up-right">Our AI Solutions</h1>
        <p className='text-xl' data-aos="fade-up-right">At Spyd Technology, we understand that every business is unique, with its own set of challenges and opportunities. 
            That's why we offer a wide range of customizable AI solutions tailored to your specific needs:</p>
        </div>
    {/* //selection1 */}
<div className='flex flex-col md:flex-row justify-center gap-20 py-10 ' data-aos="fade-up-right">

<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
>
  <img data-aos="fade-up-right"
  src='https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2021-12/machine-learning-examples-applications.png'
    alt="image here" 
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
 />

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-100">Machine Learning:</h2>
    <p class="text-gray-200 line-clamp-3">
    Our machine learning algorithms analyze vast amounts of data to uncover valuable insights and patterns, enabling you to make data-driven decisions with confidence.
    </p>
  </div>
  <button data-aos="fade-up-right"
    class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6" 
  >
    Explore
  </button>
</div>

<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
>
  <img data-aos="fade-up-right"
  src='https://online.york.ac.uk/wp-content/uploads/2021/10/Image-of-a-human-made-up-of-lit-up-lines-touching-a-graphic-which-reads-NLP.jpg'
    alt="image here"
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
  ></img>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-100">Natural Language Processing (NLP):</h2>
    <p class="text-gray-200 line-clamp-3">
    With our NLP solutions, you can unlock the full potential of unstructured data, from sentiment analysis and text summarization to language translation and chatbot development.
    </p>
  </div>
  <button data-aos="fade-up-right"
    class="hover:bg-gray-700 bg-gray-800 text-gray-100 -mt-1 rounded p-2 px-6"
  >
    Explore
  </button>
</div>

</div>

{/* //selection2 */}
<div className='flex flex-col md:flex-row justify-center gap-20 py-10' data-aos="fade-up-right">
<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
>
  <img data-aos="fade-up-right"
  src='https://cloudinary.hbs.edu/hbsit/image/upload/s--YocdHEbD--/f_auto,c_fill,h_375,w_750,/v20200101/A17A58369E0D9FBC28574F424FBDB551.jpg'
    alt="image here"
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
  ></img>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-100">Predictive Analytics:</h2>
    <p class="text-gray-200 line-clamp-3">
    Anticipate trends, forecast outcomes, and stay ahead of the competition with our predictive analytics solutions. Whether you're optimizing inventory management or personalizing customer experiences, we'll help you harness the power of predictive modeling.
    </p>
  </div>
  <button data-aos="fade-up-right"
    class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
  >
    Explore
  </button>
</div>

<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
>
  <img data-aos="fade-up-right"
  src='https://images.ctfassets.net/3viuren4us1n/1Ghw96A2tcYRfRezOwtmjx/04efa17f5d5beb042bbb7f8dc18764e2/Computer_vision.jpg'
    alt="image here"
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
  ></img>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-100">Computer Vision:</h2>
    <p class="text-gray-200 line-clamp-3">
    From image recognition and object detection to facial recognition and autonomous vehicles, our computer vision solutions open up a world of possibilities for your business.
    </p>
  </div>
  <button data-aos="fade-up-right"
    class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
  >
    Explore
  </button>
</div>

<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
>
  <img data-aos="fade-up-right"
  src='https://automationhero.ai/wp-content/uploads/2019/05/Illustration-Website-assets_why-intelligent-automation-is-a-better-alternative-to-rpa.jpg'
    alt="image here"
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
  ></img>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-gray-100">Automation and Optimization:</h2>
    <p class="text-gray-200 line-clamp-3">
    Streamline your operations, reduce costs, and boost productivity with our AI-powered automation and optimization solutions. Whether it's automating repetitive tasks or optimizing supply chain logistics, we'll help you work smarter, not harder.
     </p>
  </div>
  <button data-aos="fade-up-right"
    class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
  >
    Explore
  </button>
</div>

</div>
</div>

<style>
    {`
    button {
      position: relative;
      padding: 10px 20px;
      border-radius: 7px;
      border: 1px solid rgb(61, 106, 255);
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      background: transparent;
      color: #fff;
      overflow: hidden;
      box-shadow: 0 0 0 0 transparent;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
    
    button:hover {
      background: rgb(61, 106, 255);
      box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
    
    button:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }
    
    button::before {
      content: '';
      display: block;
      width: 0px;
      height: 86%;
      position: absolute;
      top: 7%;
      left: 0%;
      opacity: 0;
      background: #fff;
      box-shadow: 0 0 50px 30px #fff;
      -webkit-transform: skewX(-20deg);
      -moz-transform: skewX(-20deg);
      -ms-transform: skewX(-20deg);
      -o-transform: skewX(-20deg);
      transform: skewX(-20deg);
    }
    
    @keyframes sh02 {
      from {
        opacity: 0;
        left: 0%;
      }
    
      50% {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        left: 100%;
      }
    }
    
    button:active {
      box-shadow: 0 0 0 0 transparent;
      -webkit-transition: box-shadow 0.2s ease-in;
      -moz-transition: box-shadow 0.2s ease-in;
      transition: box-shadow 0.2s ease-in;
    }
    
    
    .prabha{
        background-image: radial-gradient(circle at center center, rgb(80, 32, 84),rgb(62, 35, 81),rgb(44, 38, 79),rgb(26, 40, 76),rgb(8, 43, 73));
    }`}
</style>

<div className='prabha '>
    <h1 className='text-white text-4xl px-10 py-10 text-center font-bold' data-aos="fade-up-right">Why Choose SpY D Technology?</h1>
    <ul className='flex flex-col md:flex-row justify-center items-center gap-20' data-aos="fade-up-right">
    <div class="group border-2  before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-76 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="w-28 h-28 bg-gray-900 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold text-gray-100">Expertise</span>
    <p className='text-gray-100'>Our team of AI experts brings years of experience and expertise to the table, ensuring that you receive best-in-class solutions tailored to your unique requirements.</p>
  </div>
  <a class="bg-gray-900 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-gray-100" href="#">Folow</a>
</div>
<div class="group border-2 before:hover:scale-95  before:hover:w-80 before:hover:h-72 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-76 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="w-28 h-28 bg-gray-900 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold text-gray-100">Innovation</span>
    <p className='text-gray-100'>We're not content with the status quo. We're constantly pushing the boundaries of what's possible, exploring new technologies and methodologies to deliver innovative AI solutions that drive real results.</p>
  </div>
  <a class="bg-gray-900 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-gray-100" href="#">Folow</a>
</div>
    </ul>

    <ul className='flex flex-col md:flex-row justify-center items-center pt-10 gap-20 pb-10' data-aos="fade-up-right">
    <div class="group border-2  before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-76 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="w-28 h-28 bg-gray-900 mt-14 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold text-gray-100">Scalability</span>
    <p className='text-gray-100'>Whether you're a small startup or a large enterprise, our AI solutions are designed to scale with your business, ensuring that you can continue to grow and succeed in the long term.</p>
  </div>
  <a class="bg-gray-900 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-gray-100" href="#">Folow</a>
</div>
<div class="group border-2  before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-76 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="w-28 h-28 bg-gray-900 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold text-gray-100">Customer-Centric Approach</span>
    <p className='text-gray-100'>our success is our success. That's why we take a customer-centric approach to everything we do, working closely with you to understand your goals, address your challenges, and deliver solutions that exceed your expectations.</p>
  </div>
  <a class="bg-gray-900 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 hover:shadow-lg  transition-all duration-500 hover:bg-gray-100" href="#">Folow</a>
</div>
    </ul>
</div>
    
    <ApprochUs />
    </>
  )
}

export default Ai2