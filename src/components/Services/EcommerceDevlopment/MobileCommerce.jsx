import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import IMG from "../../assets/e-commerce-Mobile.webp"
import Footer from '../../Home/Footer/Footer'
import Approch from '../../Home/APProchUs/Approch'
import IMG1 from '../../assets/mobileIcon.avif'
import { PiNumberOne } from "react-icons/pi";
import { PiNumberTwo } from "react-icons/pi";
import { PiNumberThree } from "react-icons/pi";
import { PiNumberFour } from "react-icons/pi";
import { PiNumberFive } from "react-icons/pi";
import { PiNumberSix } from "react-icons/pi";
import IMG23 from "../../assets/MOBILEanimation.gif"


function MobileCommerce() {
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
        <div className='p-20 flex'>
            
            <img 
            src={IMG23}
            className='w-[50%] h-[30rem] ml-[-10%]'
            />
           
            <div className='w-2/3 text-left  space-y-3 tracking-wider  text-[#656565]'>
                <p>India is the fastest growing country in E-Commerce niche with revenue 
                    expected to surpass US$ 120 Billion by 2020.</p>
                    <p>
                    About 65 Crore Indians use mobile phone and about 30 Crores of them use smart phone,
                     which is expected to grow to 53 Crore smart phones users by the end 2019. 
                    </p>
                    <p>
                    And increasing number of start-ups coming up in India in E-Commerce sector offering 
                    virtually everything online from apparels, electronic, home appliance, medicines and food, 
                    mobile commerce is posed to play a significant role in driving overall e-commerce growth in India.
                    </p>
                    <p>
                    We at SpyD technology have hired, trained and nurtured exceptional talented manpower 
                    to meet the growing demands of M-Commerce. We offer turnkey solutions by bundling E-Commerce 
                    and M-Commerce to ensure the products are accessible to users on multiple platforms.
                    </p>
                    <p>
                    We offer Mobile Commerce solutions for native operating systems such as Android,
                     IOS and also build hybrid apps accessible on multiple devices irrespective of 
                     the operating system. Our time tested, global accepted best practices in designing,
                      developing and deploying M-Commerce mobile applications have won accolades from our 
                      clients world over.
                    </p>
            </div>
            
        </div>
        <div className='bg-[#2dd4bf] w-[100%] p-5'>
            <h1 className='text-white text-4xl ml-[15%] tracking-widest pb-2'>Mobile eCommerce</h1>
            <p className='text-white text-1xl ml-[20%] tracking-widest pb-10'>as per with latest technology</p>
            <div className='w-2/3 text-left space-y-2 text-white pt-5 tracking-wide'>
                <p className='sm:line-clamp-3'>
                Expertise mobile commerce solutions fully integrates with your existing e Commerce website
                 that includes product catalogue, inventory, shipping methods, payments and checkout as well
                  as all other functionalities.
                </p>
                <p className='sm:pl-7.5'>
                Designing a new store & integrating your existing online store with a mobile app with e Commerce features,
                 helps you with the perfect solution for your business. If you are looking at expanding your 
                 current boundaries and venturing out into the mobile space, we can assist you with 
                 the affordable up gradation. Mobile commerce apps are not just business online, 
                 but opportunities for business expansion that includes tapping the huge mobile user 
                 base and getting an edge over the competition         
                </p>
                
            </div>

        </div>
        <div className='flex'>
        
            <img
            src={IMG1}
            className='w-[30%] '
            />
             <div className='grid sm:grid-flow-row md:grid-flow-col lg:grid-flow-col '>
            <h1 className='text-2xl  pt-10 tracking-wider ml-2'>Our Mobile Commerce Development Services Include</h1>
            
              
                
                <div className='mt-[10%] ml-15 space-y-2  text-[#656565]'>

                <h1 className='flex'>  <PiNumberOne className='text-2xl tracking-wider' />Mobile- friendly technology  </h1> 
                    
               <h1 className='flex w-2/3 pt-2 sm:mt-2.5'> <PiNumberTwo className='text-4xl mt-[-2%] tracking-wider'/>Zero-interruption data integration
                with your existing online websites</h1>
                <h1 className='flex sm:mt-3.5'> <PiNumberThree className='text-2xl tracking-wider'/>Support for multiple stores</h1>
                </div>

                <div className='mt-[10%]  ml-15 space-y-4  text-[#656565] sm:-mt-[-2%] '>

               
               <h1 className='flex sm:mt-2.5'> <PiNumberFour  className='text-2xl tracking-wider'/>Powerful features to incorporate marketing</h1>
               <h1 className='flex sm-mt-30'><PiNumberFive  className='text-2xl tracking-wider '/>Features that are compelling and attract new customers</h1>
               <h1 className='flex pt-3 '><PiNumberSix className='text-2xl tracking-wider '/>Compatible with multiple devices</h1>

               
                </div>
               </div>
        
        </div>
        
        <Approch />
        <Footer />
    </>
  )
}

export default MobileCommerce