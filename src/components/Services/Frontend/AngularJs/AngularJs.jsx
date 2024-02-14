import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
const AngularJs = () => {
    useEffect(() => {
        AOS.init();
      });
  return (
    <>  <>
    <div className='flex flex-col md:flex-row  items-center justify-center'>
        <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ' data-aos="fade-up">
            <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
                <h1 className='text-[#656565]'> AngularJS Development </h1>
            </div>
            <div className='py-4  text-[#656565] md:leading-8'>
                <p>
                Angular is a comprehensive and open-source front-end web application framework developed and maintained by Google. Initially released in 2010 as AngularJS, it underwent a complete rewrite, resulting in the release of Angular 2+ in 2016. Angular is designed to simplify and streamline the process of building dynamic, single-page web applications with a focus on modularity, testability, and maintainability.</p>
                <Link to ='/Angular JS'>
                <button className='bg-blue-400 p-3  text-[#656565] rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
                </Link>
               
            </div>
        </div>
        <div>
        </div>
        <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ' data-aos="fade-down">
            <div>
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg" alt="" />
            </div>
        </div>
    </div>
</></>
  )
}

export default AngularJs