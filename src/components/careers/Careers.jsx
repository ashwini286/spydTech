import React from 'react';
import Navbarupp from '../Home/Navbar/Navbarupp';
import Card from './card/Card';
import JobPost from './JobPost/JobPost';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Approch from '../Home/APProchUs/Approch';
import Footer from '../Home/Footer/Footer';
function careers() {


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
          <button className="btn btn-primary w-[250px] hover:bg-[#1A56DB] bg-[#3F83F8] p-2">Apply Now</button>
        </div>
      </Link>
      <Approch />

      <Footer />

    </>
  );
}



export default careers