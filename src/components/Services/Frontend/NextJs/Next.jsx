import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
const Next = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row  items-center justify-center'>
                <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ' data-aos="fade-down">
                    <div>
                        <img src="https://miro.medium.com/v2/resize:fit:650/1*DofdLH9enWUHwvs3Qmpg2w.jpeg" alt="" />
                    </div>

                </div>





                <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ' data-aos="fade-up">
                    <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
                        <h1 className='text-[#656565]'> Next Js Development </h1>
                    </div>
                    <div className='py-4  text-[#656565] md:leading-8'>
                        <p>
                            Next.js is a popular and powerful React framework designed to simplify the development of web applications. Developed by Vercel, Next.js builds upon React's capabilities by adding essential features for server-side rendering, automatic code splitting, and simplified routing. One of its standout features is the ability to enable server-side rendering (SSR) and static site generation (SSG) effortlessly, providing faster page loads and improved SEO performance.
                        </p>
                        <Link to='/Next JS'>
                            <button className='bg-blue-400 p-3  text-[#656565] rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Next