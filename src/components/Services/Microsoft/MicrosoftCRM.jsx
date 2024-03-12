import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IMG from "../../assets/Microsoft/CRM1.png"
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'

import IMG2 from "../../assets/Microsoft/CMR sevices1.png"
import IMG3 from "../../assets/Microsoft/CMR sevices2.png"
import IMG4 from "../../assets/Microsoft/CMR sevices3.png"
import IMG5 from "../../assets/Microsoft/CMR sevices4.png"
import IMG6 from "../../assets/Microsoft/CMR sevices5.png"
import IMG7 from "../../assets/Microsoft/CMR sevices6.png"
import IMG8 from "../../assets/Microsoft/dynamic-crm.png"
import Crm from './Crm';

function MicrosoftCRM() {
  useEffect(() => {
    AOS.init();
});
  return (
    <>
    
  <Navbarupp />

  <div className="relative">
        <img
          className="w-full object-cover md:h-[490px] h-[415px] w-[415px"
          src="https://www.smartdatacollective.com/wp-content/uploads/2017/08/Dynamics-365.png"
          alt="Microsoft Dynamics 365"
        />
        <div className="absolute inset-0 md:h-[490px] h-[415px] bg-black bg-opacity-50 rounded-b-2xl"></div>
        <div className="absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 md:left-[10%] md:w-[50%] lg:w-[50%] text-start text-white font-bold px-5" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl lg:text-4xl">Revolutionize Customer Relationships with Microsoft Dynamics CRM by "SpY D Technology"</h1>
        </div>
      </div>

      <Crm />



      
     <div className='bg-[#7b87f1] w-full md:max-w-full'>
      <h1 className='text-4xl text-center pt-10 ' data-aos="fade-up">Our CRM Services include</h1>
      <div className='' data-aos="fade-left">
        <div className='flex flex-col md:flex-row p-10 '>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG2} className='mx-auto w-48 md:ml-20 p-4' alt="Image 2" />
              <p className='text-center'>Enhancing the existing functionality</p>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG3} className='mx-auto w-48 md:ml-20 p-4' alt="Image 3" />
              <p className='text-center'>Increase in-house capability to deploy single tenant and multi-tenant solutions</p>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG4} className='mx-auto w-48 md:ml-20 p-4' alt="Image 4" />
              <p className='text-center'>Offer user-friendly design with special settings installation</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap p-10 '>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG5} className='mx-auto w-48 md:ml-20 p-4' alt="Image 5" />
              <p className='text-center'>Provide workflow customizations specific to your company’s business processes</p>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG6} className='mx-auto w-48 md:ml-20 p-4' alt="Image 6" />
              <p className='text-center'>Extending the solutions to WCF web services</p>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
            <div className="flex flex-col items-center">
              <img src={IMG7} className='mx-auto w-48 md:ml-20 p-4' alt="Image 7" />
              <p className='text-center '>Offer advanced customization that requires integration with third-party solutions</p>
            </div>
          </div>
        </div>
      </div>
      </div>




      
<div class="w-full max-w-2xl md:max-w-full my-4 mx-center">

<div class="border-2 border-indigo-500 p-4 md:p-6 rounded-lg text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">Microsoft CRM</h2>

    <p class="text-lg mb-4 text-gray-700" data-aos="fade-left">
        <strong>SpY D Technology</strong>.
        <br />
        provides Customer Relationship Management (CRM) solutions specially designed by our experts to meet our clients' ever-demanding needs. 
        We utilize our domain expertise to implement SMBs and LMEs level solutions that meet all the business needs of our clients.
         With our deep knowledge of CRM processes, 
         we are experts in building multichannel customer interactive systems and Microsoft CRM architecture that reduces the total cost involved in the actual development and enhances the overall services.
    </p>

    <a href="#" data-aos="fade-up"
        class="font-bold inline-block bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out">
        Take Survey
    </a>

    
</div>

</div>

       

      
        <h1 className='text-4xl lg:text-5xl text-center  text-black pt-5' data-aos="fade-up">The key benefits of CRM solutions include</h1>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start md:ml-10'>
          <img src={IMG8} className='p-5 lg:pl-0' alt="Key Benefits Image" data-aos="fade-right" />
          <div className='ml-0 lg:ml-10 mt-2 space-y-5 lg:space-y-0  text-black' data-aos="fade-left">
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Pay-as-you-go pricing model</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Dedicated API for each service offered</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Increase profitability and efficiency</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Seamless Database Management</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Security through compliance program and highly secure data centers</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
              <p className="text-sm lg:text-base">Scalability regardless of application size</p>
            </div>
          </div>
        </div>
        <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
  
  <div data-theme="teal" class="mx-auto max-w-6xl">
    <h2 class="sr-only" data-aos="fade-left">Featured case study</h2>
    <section class="font-sans text-black">
      <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div class="h-full">
            <article class="h-full">
              <div class="h-full">
                <img class="h-full object-cover" data-aos="fade-right" src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW" width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </div>
        <div class="p-6 bg-grey" data-aos="fade-left">
          <div class="leading-relaxed">
            <h2 class="leading-tight text-4xl font-bold">SpY D Technology: Experience Transformation</h2>
            <p class="mt-4">With more than a decade of experience, our CRM Development India team has achieved a new height of unprecedented success through our CRM solutions and services and helped us to explore a new dimension to customer service. We also focus on leveraging the platform to support any relationship scenario you want to develop with our CRM services.</p>
            <p class="mt-4"></p>
            <p><a class="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

        


      <div class="mx-auto max-w-6xl sm:px-6 lg:px-5">
  <div class="relative isolate overflow-hidden bg-blue-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32" data-aos="fade-up">
    <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock the full potential of your customer relationships with Microsoft Dynamics CRM by Spyd Technology. 
    Get Started Today!</h2>
    <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200">Contact us today to learn more about our tailored solutions and start driving meaningful business outcomes.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a class="rounded-md bg-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        href="/signup">Get Started Now</a>
    </div>
    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
      aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)">
          <stop stop-color="#7775D6"></stop>
          <stop offset="1" stop-color="#E935C1" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>

      <Approch />
      
    </>
  )
}

export default MicrosoftCRM