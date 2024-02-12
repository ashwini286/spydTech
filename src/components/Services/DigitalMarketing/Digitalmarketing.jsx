import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import { Link } from 'react-router-dom';
import IMG from "../../assets/Digital marketing/digital market.jpg";
import IMG2 from "../../assets/Digital marketing/Digital marketing main.png";
import IMG3 from "../../assets/Digital marketing/SEO.png";
import IMG4 from  "../../assets/Digital marketing/ppc.jpg";
import IMG5 from "../../assets/Digital marketing/SMM1.png";
import IMG6 from "../../assets/Digital marketing/contentwriting 2.jpg";

function Digitalmarketing() {
  return (
    <>
      <Navbarupp />
      <div className='relative flex items-center justify-center'>
        <img 
          src={IMG}
          className=" inset-0 w-full h-full mx-auto max-w-screen-lg" 
          alt="Background 1" 
          style={{ filter: "brightness(50%)" }}
        />
      </div>
      <div className='p-10 justify-center'>
        <img 
          src={IMG2}
          className=' mx-auto max-w-screen-lg h-full w-full'
          alt="Digital Marketing Main"
        />
      </div>

      <div className='flex flex-col md:flex-row md:ml-10 p-5'>
        <div className='w-full h-full md:w-1/3 p-5'>
          <img 
            src={IMG3}
            className='bg-white w-full'
            style={{ filter: "brightness(100%)" }}
            alt="SEO"
          />
        </div>
        <div className='w-full md:w-1/2 p-5 md:ml-20'>
          <h1 className='text-3xl text-black-500 font-bold'>What Is SEO?</h1>
          <p className='text-xl pb-5 text-gray-500'>SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration,
            content relevance and link popularity so its pages can become easily findable, more relevant and popular 
            towards user search queries, and as a consequence, search engines rank them better.</p>
          <Link to='/Seo Services'>
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white'>Read More</button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row p-10'>
        <div className='w-full md:w-1/2 p-5'>
          <h1 className='text-3xl font-bold pb-5'>Pay Per Click (PPC) Marketing</h1>
          <p className='text-xl pb-5 text-gray-500'>Pay per click marketing is a paid search model used to build brand awareness, 
            promote brand offerings and gain immediate traction from specific audience segments. 
            With PPC, advertisers only pay each time a user clicks on the PPC ads -- hence the name pay-per-click.</p>
          <p className='text-xl pb-5 text-gray-500'>People usually think of Google PPC when hearing or talking about what is pay per click. 
            But pay-per-click goes beyond the Google search engine results pages (SERPs) and the Google Display Network. 
            Social media sites, such as YouTube, Facebook, Pinterest and LinkedIn, also use the pay per click model.</p>
          <Link to='/PPC Management Services'>
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white'>Read More</button>
          </Link>
        </div>
        <div className='w-full md:w-1/2 p-5'>
          <img
            src={IMG4}
            className='bg-white w-full'
            alt="PPC"
          />
        </div>
      </div>

      <div className='p-10'>
        <img
          src={IMG5}
          className='mx-auto max-w-screen-lg w-full h-full'
          alt="Social Media Marketing"
        />
        <div className='text-center p-5'>
          <h1 className='text-3xl font-bold pb-5'>What Is Social Media Marketing (SMM)?</h1>
          <p className='text-xl pb-5 text-gray-500'>Social media marketing (also known as digital marketing and e-marketing)
            is the use of social media—the platforms on which users build social networks 
            and share information—to build a company's brand, increase sales,
            and drive website traffic. In addition to providing companies with 
            a way to engage with existing customers and reach new ones,
            SMM has purpose-built data analytics that allows marketers 
            to track the success of their efforts and identify even more ways to engage.</p>
          <Link to='/SMM & Content Writing'>
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white'>Read More</button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row p-10'>
        <div className='w-full md:w-1/2 p-5'>
          <h1 className='text-3xl font-bold pb-5'>Why Content Writing is Important in Digital Marketing?</h1>
          <p className='text-xl pb-5 text-gray-500'>As the world has witnessed a great shift of customer’s preference from a conventional advertising world to the digital sphere, 
            the growing use of internet, technology & digital media has raised the dependency of people on the online market.
            Due to this, the brands are rooting their base in various digital platforms, since marketing is
            one of the most essential aspect of a business plan.</p>
          <Link to='/SMM & Content Writing'>
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white'>Read More</button>
          </Link>
        </div>
        <div className='w-full md:w-1/2 p-5'>
          <img 
            src={IMG6}
            className='bg-white w-full'
            alt="Content Writing"
          />
        </div>
      </div>
      <Approch />
    </>
  )
}

export default Digitalmarketing;
