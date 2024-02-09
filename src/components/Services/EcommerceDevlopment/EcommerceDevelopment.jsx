import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp';
import IMG from "../../assets/Ecommerce development.png"
import Footer from '../../Home/Footer/Footer';
import Approch from "../../Home/APProchUs/Approch"
import { BsCheck2Square } from "react-icons/bs";
import IMG1 from "../../assets/ecommerce-big-icon.png"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { IoBookOutline } from "react-icons/io5";

function EcommerceDevelopment() {
  return (
    <>
    <Navbarupp />
    <div className="max-w-screen mx-auto min-h-screen h-screen relative">
        <img
          src={IMG}
          className="md:w-[100%] h-full object-cover rounded-bl-[5%] rounded-br-[5%] rounded"
          alt="Background Image"
        />
        </div>
        <div className='p-10 text-1xl w-[95%] text-center tracking-widest  text-[#656565]'>
            <h1>Magento is the most popular open source E-Commerce CMS based platform that offers a wide ranging features enabling companies build robust,
               end-to-end E-Commerce website. SpyD Technology PVT LTD Magento experts leverages the amazing features, tools and plugins to help our clients cost effective E-Commerce Solutions</h1>
        </div>
        <div className=' text-[#656565]'>
        <div className='w-[100%] h-[100%] bg-[white] p-10 '
        >
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>Indian retail market is expected to grow to US$ 850 Billion by 2020</p>
            
            </div>
           
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>The E-Commerce business is set to grow to US$120 Billion by 2020</p>
            
            </div>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>Businesses are increasing looking at options to cut costs, 
            build e-commerce platform to reach out to targeted customers</p>
            
            </div>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>In such a scenario Magento has come as a boon as it is
             free open source platform that offers end to end E-Commerce website development with powerful features.</p>
            
            </div>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>Magento is an ideal 
            platform for startups and small businesses to reach out to intended 
            customers online and sell product.</p>
            
            </div>
            <div className='ml-[65%]  mt-[-40%] mb-[10%]  hover:scale-105 transition-all duration-500'>
                <img 
                src={IMG1}
                className='w-[70%] h-full'
                />
            </div>
            <h1 className='text-3xl pb-4 text-bold  text-[#656565]'>The value we add to our clients:</h1>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>Over the
             years SpyD Technology has built exceptional resources Magento capabilities</p>
            
            </div>
           
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>We have hired, 
            trained and nurtured talent to offer complete and comprehensive E-Commerce Solutions using Magento</p>
            
            </div>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>Besides 
            from building and deploying E-Commerce websites, we provide training to our client’s employees 
            on backend products upload and manage the entire content management system</p>
            
            </div>
            <div className='flex pb-10'>
            <BsCheck2Square  className='text-4xl'/> <p className='pl-4 mt-2 tracking-widest w-1/2'>We also offer
             SLA (Service Level Agreement) with 24/7 maintenance support to our clients to scale and grow.</p>
            
            </div>
            

            </div>
           <div>
      <h1 className='text-center  text-[#656565] text-2xl tracking-wider pb-5'>Our Magento eCommerce Development Expertise</h1>
     <div className=' grid md:grid md:grid-cols-3 md:px-4'>
           <div className='flex  justify-center items-center '>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento eCommerce Solutions</p>
               </div>
           </div> 
           <div className='flex justify-center items-center '>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento Customization Services</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento Module Development</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Online Shopping Development</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento ERP Integration</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >osCommerce to Magento Migration</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Magento Enterprise Development</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >VirtueMart to Magento Migration</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'> 
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento Development Services</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Magento Website Design</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Magento Extension Development</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Magento Theme Customization</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' > Magento SAP Integration</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento Extension Integration</p>
               </div>
           </div> 
           <div className='flex justify-center items-center'>
              <div className='py-8 mt-8 h-[70%] w-[80%] text-white border-4 border-white bg-[#0284c7] shadow-2xl hover:scale-105 transition-all duration-500'>
                 <p className='text-center' >Magento Ingram Micro Integration</p>
               </div>
           </div> 
     </div>
    </div>
        </div>
        
     <Approch />
     <Footer />
        </>
  )
}

export default EcommerceDevelopment