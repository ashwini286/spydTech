import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IMG2 from "../../../assets/Aws/AWS1.png"
import IMG3 from "../../../assets/Azure/Microsoft Azure.webp"
import IMG4 from "../../../assets/Google cloud/google-cloud-logo-1.png"
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import { Link } from 'react-router-dom'
import Approch from '../../../Home/APProchUs/Approch'
import AnimatedFooter from '../../UniqueTeam/AnimatedFooter'

function CloudTech() {
   useEffect(() => {
      AOS.init();
    });
  return (
    <>
    <Navbarupp />
    <div >
        <img 
        src='https://bairesdev.mo.cloudinary.net/blog/2022/03/cloud-computing-1.jpg?tx=w_1080,q_auto'
        className=" w-full object-cover md:h-[550px]"
        />
    </div>
    <h1 className='text-3xl text-center p-10 font-bold' data-aos="fade-in">Cloud Technologies</h1>

    <div className='flex  md:flex-row md:items-center px-8 gap-4 flex-col'>
     <div className='md:w-[800px] w-[300px]'>
     <img 
       src={IMG2}
       className=' w-[800px]'
       data-aos="fade-up"
       />
     </div>
       <div className='md:p-10 pt-20 ' data-aos="fade-down">
    <a className='text-3xl  font-bold' data-aos="fade-down">Amazon Cloud</a>
    <p data-aos="fade-down">Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals,
         companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.</p>
        
         <Link to="/Amazon" data-aos="fade-down">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
    </div>


    <div className='flex md:flex-row-reverse md:items-center px-8 gap-4 flex-col'>
     <div className='md:w-[800px] w-[300px]'>
     <img 
        src={IMG3}
       className=' w-[800px]'
       data-aos="fade-up"
       />
     </div>
       <div className='md:p-10 pt-20 ' data-aos="fade-down">
    <a className='text-3xl  font-bold' data-aos="fade-down">Microsoft Azure Cloud</a>
    <p data-aos="fade-down">Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft. 
        It offers access, management, and the development of applications and services through global data centers.</p>
        
        <Link to="/Azure" data-aos="fade-up">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
    </div>


    <div className='flex flex-col md:flex-row md:items-center px-8 gap-4'>
     <div className='md:w-[800px] w-[300px]'>
     <img 
       src={IMG4}
       className=' w-[800px]'
       data-aos="fade-up"
       />
     </div>
       <div className='md:p-10 pt-20 ' data-aos="fade-down">
    <a className='text-3xl  font-bold' data-aos="fade-down">Google Cloud</a>
    <p data-aos="fade-down">Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular 
        cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.</p>
        
       <Link to="/Google" data-aos="fade-down">
       <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
       </Link>
    </div>
    </div>

    <Approch />
    {/* <AnimatedFooter /> */}

    </>
  )
}

export default CloudTech