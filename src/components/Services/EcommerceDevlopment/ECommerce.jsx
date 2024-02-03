import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG from "../../assets/ecommerce.jpg"
import IMG2 from "../../assets/mobileanimation2.gif"
import { MdOutlinePersonSearch } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { TbSocial } from "react-icons/tb";

function ECommerce() {
  return (
    <>
    <Navbarupp />
    <div>
        <img 
        src={IMG}
        className='pb-10'
        />
        </div>
        <div className='flex p-5 ml-5'>
            <div className='w-2/4 p-5 space-y-2 text-left tracking-wider'>
                <p>
                Aspirant Soft Solutions are pioneering building E-Commerce Platforms for small, 
                medium and large enterprises globally. Our E-Commerce solutions are scalable, 
                interoperable and come with rich user experience as we implement design thinking 
                principles to enhance and improve the user interface and user experience.
                </p>
                <p>
                We possess deep experience, expertise and exposure in building E-Commerce portals 
                using the most advanced E-Commerce Platforms such as Magento, Shopify, Big Commerce, 
                Woo Commerce, Volusion and 3D Cart. We design, develop the E-Commerce websites in safe, 
                secure environment and implement best practices in payment gateway integrations    
                </p>
                <p>
                We offer enhanced features, robust in performance, speed & agility with rich UI, UX. 
                We deploy state of the art safety protocols to ensure a safe environment during development.
                 The architecture is built to make sure it is flexible for future enhancement.   
                </p>
                <p>
                Seamless integration of products listing, shopping cart and the payment gateway 
                makes rich user experience hassle free for increased conversions. 
                Value added features to increase user engagement culminating into revenue growth   
                </p>
            </div>
            <img 
            src={IMG2}
            className='w-[40%]'
            />

        
        </div>
    <div className='bg-[#e4e0e0] pt-20'>
            <h1 className='text-2xl text-bold text-center pb-10 tracking-wider'>Grow Sales with Online Marketing</h1>
        
        <div className='flex justify-center ml-[10%] pb-[10%]'>
            <div className='mr-[5%] space-y-10'>
                <div className='flex'>
               <MdOutlinePersonSearch className='text-6xl'/> <h1 className='p-5 text-2xl tracking-wider'>Search Engine Optimization</h1></div> 
               <p className='tracking-wider'>We ensure the website visibility increase organically in the search engines for relevant and targeted keywords, 
                drive traffic, and generate leads and conversions.</p>
                
               <div className='flex'>
                <BiSolidOffer className='text-6xl'/><h1 className='p-5 text-2xl tracking-wider'>Offers & Discounts</h1>
                </div>
                <p className='tracking-wider'>We offer innovative ideas and implement those techniques such as
                     offers and discounts to create a shopping experience for your customers</p>
                <div className='flex'>
                <GrGroup className='text-6xl'/><h1 className='p-5 text-2xl tracking-wider'>Referral Programs</h1>
                </div>
                <p className='tracking-wider'>We help our clients integrate affiliate marketing program to create 
                    multiple revenue streams, maximize sales and grow rapidly.</p>
            </div>
            <div className='mr-[10%] space-y-10 '>
                <div className='flex'>
                <TbTargetArrow className='text-6xl'/><h1 className='p-2 text-2xl mt-[-2%] tracking-wider'>Google Adwords & Pay Per Click Advertising</h1>
                </div>
                <p className='tracking-wider'>We excel in creating and launching paid campaigns in AdWords, 
                    Facebook and Instagram reduce CPC and increase conversions.</p>
                <div className='flex'>
                <SiAmazonsimpleemailservice className='text-6xl mt-2' /><h1 className='p-5 text-2xl  tracking-wider'>Email Campaigns</h1>
                </div>
                <p className='tracking-wider'>We create landing and squeeze pages generate 
                    email lists and execute email marketing campaigns leading to conversions</p>
                <div className='flex'>
                <TbSocial className='text-6xl '/><h1 className='p-5 text-2xl tracking-wider'>Create Social Media Presence</h1>
                </div>
                <p className='tracking-wider'>Social Media Optimization and Marketing is our forte. We create social media business pages, interact, 
                    communicate and engage with users to drive quality traffic.</p>
            </div>
        </div>
        </div>
    <Approch />
    </>
  )
}

export default ECommerce