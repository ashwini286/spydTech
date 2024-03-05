import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG1 from "../../assets/Microsoft/MIcroSoft Main.jpeg"
import IMG2 from "../../assets/Microsoft/CRM-Main.jpg"
import IMG3 from "../../assets/Microsoft/DotNet.png"
import { Link } from 'react-router-dom'
import IMG4 from "../../assets/Microsoft/power-bi2.png"

function Microsoft() {
  useEffect(() => {
    AOS.init();
});
  return (
    <>
      <Navbarupp />
      <div>
        <img
          // src={IMG1}
          src='https://4kwallpapers.com/images/wallpapers/windows-logo-m1-chip-black-background-gradient-windows-10-5k-3440x1440-5918.jpg'
          className=''
        />
      </div>
      <div className='p-10 flex flex-col md:flex-row md:items-center'>
        <img
          src={IMG2}
          className='w-full md:w-1/2 h-64 md:h-auto'
          alt="Image"
          data-aos="fade-up"
        />
        <div className='md:ml-10 p-10 space-y-5' data-aos="fade-left">
          <h1 className='text-3xl font-bold' >What is CRM?</h1>
          <p >Customer relationship management (CRM) is a set of integrated, data-driven software solutions that help manage,
            track, and store information related to your company’s current and potential customers.
            By keeping this information in a centralized system, business teams have access to the insights they need,
            the moment they need them.</p>
          <Link to='/Dynamics CRM' >
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
          </Link>

        </div>
      </div>
      <div className='p-10 flex flex-col md:flex-row md:items-center' >
        <div className='space-y-5 ml-10' data-aos="fade-right">
          <h1 className='text-3xl font-bold' >What is .NET Framework?</h1>
          <p >.NET Framework is a software development framework for building and running applications on Windows.</p>
          <p >There are various implementations of .NET. Each implementation allows
            .NET code to execute in different places—Linux, macOS, Windows, iOS, Android, and many more.</p>
          <Link to='/ASP.NET Web Application' >
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
          </Link>
        </div>
        <img
          src={IMG3}
          data-aos="fade-up"
        />
      </div>
      <div className='p-10 flex flex-col md:flex-row md:items-center'>
        <img
          src={IMG4}
          data-aos="fade-up"
          className='w-full md:w-1/2 h-64 md:h-auto'
        />
        <div className=' p-10 space-y-5' data-aos="fade-left">
          <h1 className='text-3xl font-bold' data-aos="fade-left">What is PowerBI?</h1>
          <p >Microsoft Power BI is an interactive data visualization software product developed by
            Microsoft with a primary focus on business intelligence.[2] It is part of the Microsoft Power Platform.
            Power BI is a collection of software services, apps, and connectors
            that work together to turn various sources of data into static and interactive data visualizations.
            Data may be input by reading directly from a database, webpage, PDF,
            or structured files such as spreadsheets, CSV, XML, JSON,[3] XLSX, and SharePoint.[4]</p>
          <Link to='/PowerBI' data-aos="fade-left">
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white mt-2'>Read More</button>
          </Link>
        </div>
      </div>
      <Approch />
    </>
  )
}

export default Microsoft