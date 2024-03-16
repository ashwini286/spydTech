import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from '../Home/Navbar/Navbarupp';
import Card from './CarrerCard/Card';
import JobPost from './JobPost/JobPost';
import { Link } from 'react-router-dom';
import Approch from '../Home/APProchUs/Approch';

function careers() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbarupp />

      <div className='md:h-[550px]'>
        <img
          src="https://bluegraydaily.com/wp-content/uploads/2023/06/GettyImages-1161949895-1.jpg"
          className=" w-full object-cover md:h-[550px] absolute"
          alt="Background 2"
        />
        <div className="relative pt-[20%] md:pt-[200px] md:text-6xl text-4xl font-bold text-white pl-8"><p>Careers</p></div>
        <div className="relative text-white pl-8 md:text-2xl"><p>Expand your bubble and search for <br />opportunities</p></div>
      </div>



      <Card />
      <JobPost />
      <Link to="/applyForm">
        <div className='flex justify-center pb-8'> 



          <button className='bg-[#008080] text-white py-2 px-8 rounded-md  shadow-lg shadow-cyan-700 mt-4 hover:bg-[#008080] hover:scale-105 transition-all duration-500'>Apply Now</button>
        </div>
      </Link>
      <Approch />



    </>
  );
}



export default careers