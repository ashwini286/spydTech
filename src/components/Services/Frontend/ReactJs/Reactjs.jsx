import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Reactjsimg from '../../../assets/Reactjs.png'
import { Link } from 'react-router-dom'
const Reactjs = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <>
            <div className='flex flex-col md:flex-row  items-center justify-center gap-8 pt-16'>
                <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ' data-aos="fade-up">
                    <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
                        <h1 className='text-black'> Reactjs Development </h1>
                    </div>
                    <div className='py-4  text-[#656565] md:leading-8'>
                        <p>
                            ReactJS is a powerful JavaScript library developed by Facebook for building user interfaces with a focus on creating reusable and modular components. Launched in 2013, React has gained widespread adoption in the web development community due to its efficiency and declarative approach. One of its key features is the Virtual DOM, a lightweight in-memory representation of the actual DOM, which enables React to efficiently update only the necessary parts of a page when the data changes, resulting in improved performance.
                        </p>
                        <Link to='/React JS'>
                            <button className='bg-[#4361ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-blue-600 mt-4 hover:bg-[#3a0ca3]'>Read More</button>
                        </Link>

                    </div>
                </div>
                <div>
                </div>
                <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ' data-aos="fade-down">
                    <div>
                        <img src={Reactjsimg} alt="" className='drop-shadow-2xl shadow-black'/>
                        {/* <img src="https://e7.pngegg.com/pngimages/548/731/png-clipart-graphy-others-web-design-sticker.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reactjs