import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
const AngularJs = () => {
    useEffect(() => {
        AOS.init();
    });
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>  <>
            <div className='flex flex-col md:flex-row  items-center justify-center'>
                <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ' data-aos="fade-up">
                    <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
                        <h1 className='text-black'> AngularJS Development </h1>
                    </div>
                    <div className='py-4  text-[#4d4545] md:leading-8'>
                        <p>
                            Angular is a comprehensive and open-source front-end web application framework developed and maintained by Google. Initially released in 2010 as AngularJS, it underwent a complete rewrite, resulting in the release of Angular 2+ in 2016. Angular is designed to simplify and streamline the process of building dynamic, single-page web applications with a focus on modularity, testability, and maintainability.</p>
                        <Link to='/services/Angular JS'>
                            <button className='bg-[#4361ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-blue-600 mt-4 hover:bg-[#3a0ca3]'>Read More</button>
                        </Link>

                    </div>
                </div>
                <div>
                </div>
                <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ' data-aos="fade-down">
                    <div>
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg" alt=""  />
                    </div>
                </div>
            </div>
        </></>
    )
}

export default AngularJs