import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import IMG from "../../assets/Ecommerce development.png"

import Approch from "../../Home/APProchUs/Approch"
import { BsCheck2Square } from "react-icons/bs";
import IMG1 from "../../assets/ecommerce-big-icon.png"

function EcommerceDevelopment() {
   useEffect(() => {
      AOS.init();
    }, []);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
   return (
      <>
         <Navbarupp />
         <div>
            <div>
               <img
                  src={IMG}
                 // className="md:w-[100%] h-full object-cover rounded-bl-[5%] rounded-br-[5%] rounded"
                 className=" object-cover w-full"
 
                 alt="Background Image"
               />
            </div>
            <div data-aos="fade-up-right" className='p-10 text-1xl w-[95%] text-center tracking-widest  text-black'>
               <h1>Magento is the most popular open source E-Commerce CMS based platform that offers a wide ranging features enabling companies build robust,
                  end-to-end E-Commerce website. SpyD Technology PVT LTD Magento experts leverages the amazing features, tools and plugins to help our clients cost effective E-Commerce Solutions</h1>
            </div>
         </div>
         <div className=' text-black'>

         <div className='grid sm:grid-flow-row md:grid-flow-row lg:grid-flow-col w-[100%] h-[100%] bg-[white] pl-4  ' >
               <div className='' data-aos="fade-up-right">
                  <div className=' flex sm:flex-col lg:flex-row hover:scale-105 transition-all duration-500'>
                     <img data-aos="fade-up-right"
                        src={IMG1}
                        className='w-[70%] h-full'
                     />
                  </div>
               </div>

               <div className='mt-8 object-size-fix'>
                  <div className='flex  pb-10' data-aos="fade-up-right">
                     <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>Indian retail market is expected to grow to US$ 850 Billion by 2020</p>

                  </div>
                  <div className='flex  pb-10' data-aos="fade-up-right">
                     <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>The E-Commerce business is set to grow to US$120 Billion by 2020</p>

                  </div>


                  <div className='flex  pb-10' data-aos="fade-up-right">
                     <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>Businesses are increasing looking at options to cut costs,
                        build e-commerce platform to reach out to targeted customers</p>

                  </div>
                  <div className='flex  pb-10' data-aos="fade-up-right">
                     <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>In such a scenario Magento has come as a boon as it is
                        free open source platform that offers end to end E-Commerce website development with powerful features.</p>

                  </div>

                  <div className='flex  pb-10' data-aos="fade-up-right">
                     <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>Magento is an ideal
                        platform for startups and small businesses to reach out to intended
                        customers online and sell product.</p>

                  </div>
                  

               </div>


            </div>
         </div>
         <h1 className='text-3xl pb-4 pl-4 text-bold  text-black' data-aos="fade-up-right">The value we add to our clients:</h1>
         <div className='flex pl-4 pb-10' data-aos="fade-up-right">
            <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>Over the
               years SpyD Technology has built exceptional resources Magento capabilities</p>

         </div>
         <div className='flex pl-4  pb-10' data-aos="fade-up-right">
            <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>We have hired,
               trained and nurtured talent to offer complete and comprehensive E-Commerce Solutions using Magento</p>

         </div>
         <div className='flex pl-4 pb-10' data-aos="fade-up-right">
            <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>Besides
               from building and deploying E-Commerce websites, we provide training to our client’s employees
               on backend products upload and manage the entire content management system</p>

         </div>
         <div className='flex pl-4 pb-10' data-aos="fade-up-right">
            <BsCheck2Square className='text-4xl' /> <p className='pl-4 mt-2 tracking-widest w-full'>We also offer
               SLA (Service Level Agreement) with 24/7 maintenance support to our clients to scale and grow.</p>

         </div>

         <div className='mb-8'>
            <h1 className='text-center  text-black text-2xl tracking-wider pb-5' data-aos="fade-up-right">Our Magento eCommerce Development Expertise</h1>
            <div className=' grid md:grid md:grid-cols-3 md:px-4'>
               <div className='flex  justify-center items-center 'data-aos="fade-up-right" >
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento eCommerce Solutions</p>
                  </div>
               </div>
               <div className='flex justify-center items-center ' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento Customization Services</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento Module Development</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Online Shopping Development</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento ERP Integration</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >osCommerce to Magento Migration</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Magento Enterprise Development</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >VirtueMart to Magento Migration</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento Development Services</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Magento Website Design</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Magento Extension Development</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Magento Theme Customization</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' > Magento SAP Integration</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento Extension Integration</p>
                  </div>
               </div>
               <div className='flex justify-center items-center' data-aos="fade-up-right">
                  <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                     <p className='text-center' >Magento Ingram Micro Integration</p>
                  </div>
               </div>
            </div>
         </div>
         


         <Approch />
       
      </>
   )
}

export default EcommerceDevelopment
