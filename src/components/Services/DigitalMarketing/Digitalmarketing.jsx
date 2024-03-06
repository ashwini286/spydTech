import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import { Link } from 'react-router-dom';
import IMG from "../../assets/Digital marketing/digital market.jpg";
import IMG2 from "../../assets/Digital marketing/Digital marketing main.png";
import IMG3 from "../../assets/Digital marketing/SEO.png";
import IMG4 from "../../assets/Digital marketing/ppc.jpg";
import IMG5 from "../../assets/Digital marketing/SMM1.png";
import IMG6 from "../../assets/Digital marketing/contentwriting 2.jpg";
import AnimatedFooter from '../UniqueTeam/AnimatedFooter';

function Digitalmarketing() {
  useEffect(() => {
    AOS.init();
});
  return (
    <>
      <Navbarupp />
      <div className='relative flex  flex-col md:flex-row items-center justify-center bg-blue-gray-100'>
        <img
          // src={IMG}
          src='https://www.pngall.com/wp-content/uploads/5/Digital-Marketing-PNG-HD-Image.png'
          data-aos="fade-in"
          className=" inset-0 w-full h-full mx-auto max-w-screen-lg"
          alt="Background 1"
          style={{ filter: "brightness(100%)" }}
        />
        <div className='p-5'>
          <h1 className='text-4xl font-bold'>Welcome to the Future of Surveillance with "Spy D Technology"</h1>
          <p className='text-xl'>"Introducing SpyD, the cutting-edge solution revolutionizing surveillance in the digital age. 
            Say goodbye to outdated methods and hello to unprecedented security and intelligence with our state-of-the-art technology".</p>
        </div>
      </div>
      <div className='p-10 justify-center bg-blue-gray-600 rounded-lg box'>
      
        <img
          src={IMG2}
          style={{ filter: "brightness(75%)" }}
          className=' mx-auto max-w-screen-lg h-full w-full'
          alt="Digital Marketing Main"
        />
      </div>
      <style>{`
      .box {
        --border-size: 3px;
        --border-angle: 0turn;
       
        background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
        background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)), cover;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-animation: bg-spin 3s linear infinite;
        animation: bg-spin 3s linear infinite;
    }
    
    @-webkit-keyframes bg-spin {
        to {
            --border-angle: 1turn;
        }
    }
    
    @keyframes bg-spin {
        to {
            --border-angle: 1turn;
        }
    }
    
    .box:hover {
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
    }
    
    @property --border-angle {
        syntax: "<angle>";
        inherits: true;
        initial-value: 0turn;
    }`}
</style>

      <div className='flex flex-col md:flex-row md:ml-10 p-5'>
        <div className='w-full h-full md:w-1/3 p-5'>
          <img
            src={IMG3}
            className='bg-white w-full'
            data-aos="fade-up"
            style={{ filter: "brightness(100%)" }}
            alt="SEO"
          />
        </div>
        <div className='w-full md:w-1/2 p-5 md:ml-20' 
        data-aos="fade-right">
          <h1 className='text-3xl text-black-500 font-bold'>What Is SEO?</h1>
          <p className='text-xl pb-5 text-gray-500'>SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration,
            content relevance and link popularity so its pages can become easily findable, more relevant and popular
            towards user search queries, and as a consequence, search engines rank them better.</p>
          <Link to='/Seo Services'>
            <button className='bg-blue-500 rounded-md p-3 hover:bg-blue-800 hover:text-white'>Read More</button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row p-10'
      data-aos="fade-left">
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
            data-aos="fade-up"
            alt="PPC"
          />
        </div>
      </div>

      <div className='p-10'
      data-aos="fade-up">
        <img
          src={IMG5}
          className='mx-auto max-w-screen-lg w-full h-full'
          alt="Social Media Marketing"
        />
        <div className='text-center p-5' data-aos="fade-left">
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

      <div className='flex flex-col md:flex-row p-10 pb-32'>
        <div className='w-full md:w-1/2 p-5'
        data-aos="fade-up">
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
            data-aos="fade-left"
            alt="Content Writing"
          />
        </div>
      </div>

      <div
  class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
  <a href=""
    class="border border-white-700 dark:border-gray-900 rounded-lg py-2 px-4 text-white-400 dark:text-gray-900 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-900">
    Get Started Today
  </a>
  <h1
    class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
    "Spy D Technology" Leads the Way
    <span class="relative whitespace-nowrap text-white-600 dark:text-gray-300"></span>
    <span class="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
      <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
      </svg>
      <span class="relative">in Digital Marketing</span>
    </span>
  </h1>
  <h2 class="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
  Experience the future of surveillance with Spyd. Contact us to learn more about our products and services, and discover how Spyd can transform your security infrastructure for the better.
   Don't settle for outdated technology – embrace the future with Spyd.
  </h2>
  <a class="bg-orange-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 dark:hover:bg-gray-600 transition"
    href="">Get started</a>
</div>
      
      <Approch />
      {/* <AnimatedFooter /> */}
    </>
  )
}

export default Digitalmarketing;
