import React from 'react'
import Reactjsimg from '../../../assets/Reactjs.png'
import { Link } from 'react-router-dom'
const Reactjs = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row  items-center justify-center'>
                <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
                    <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold'>
                        <h1> Reactjs Development </h1>
                    </div>
                    <div className='py-4 text-gray-400 md:leading-8'>
                        <p>
                            ReactJS is a powerful JavaScript library developed by Facebook for building user interfaces with a focus on creating reusable and modular components. Launched in 2013, React has gained widespread adoption in the web development community due to its efficiency and declarative approach. One of its key features is the Virtual DOM, a lightweight in-memory representation of the actual DOM, which enables React to efficiently update only the necessary parts of a page when the data changes, resulting in improved performance.
                        </p>
                        <Link to='/React JS'>
                        <button className='bg-blue-400 p-3 text-black rounded-md mt-4 hover:bg-blue-800 hover:text-white'>Read More</button>
                        </Link>
                    
                    </div>
                </div>
                <div>
                </div>
                <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col '>
                    <div>
                        <img src={Reactjsimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reactjs