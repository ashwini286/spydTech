import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import { RiBarChartBoxLine } from "react-icons/ri";
import IMG from "../../assets/PowerBi/Power-BI.jpg";
import IMG2 from "../../assets/PowerBi/powerbi1.png";
import IMG3 from "../../assets/PowerBi/powerbi2.png";
import IMG4 from "../../assets/PowerBi/powerbi3.png";
import IMG5 from "../../assets/PowerBi/Power BI Architecture.png";
import IMG6 from "../../assets/PowerBi/Powerbi bg.avif";

function PowerBI() {
  return (
    <>
      <Navbarupp />
      <div className="relative">
        <img
          src={IMG}
          className='w-full h-[35rem] object-cover rounded-lg shadow-lg'
          alt="Power BI"
        />
      </div>
      <h1 className='text-4xl pt-10 font-bold text-center'>PowerBI Architecture</h1>
      <div className='max-w-screen-xl mx-auto'>
        <img
          src={IMG5}
          className='w-full mt-8 rounded-lg shadow-lg p-10'
          alt="Power BI Architecture"
        />
      </div>

      <div className="max-w-screen mx-auto min-h-screen relative ">
        <img
          src={IMG6}
          className="inset-0 w-full h-[65rem]   bg-cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-cover bg-center">
          <h1 className='text-4xl font-bold '>See what you can do with Power BI</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 p-5 '>
            <ul className='space-y-5'>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Establish a governed source of truth</h1>
                <p>Connect all your disparate data sources in the same environment to establish a single
                  source of truth for all your data.</p>
              </li>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Empower anyone to work with data</h1>
                <p>Ensure everyone can explore data with an easy-to-use interface,
                  free training resources, and an array of accessibility features.</p>
              </li>
            </ul>
            <ul className='space-y-5'>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Unify enterprise scale and self service</h1>
                <p>Combine enterprise-scale and self-service BI to drive insights and innovation at every level of your organization.</p>
              </li>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Get started immediately</h1>
                <p>Start quickly with an easy-to-use report-creation experience, AI-generated reports, and hundreds of report templates.</p>
              </li>
            </ul>
            <ul className='space-y-5'>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Infuse data experiences everywhere </h1>
                <p>Bridge the gap between insights and decisions through unmatched interoperation with the apps people use every day.</p>
              </li>
              <li><RiBarChartBoxLine className='text-6xl text-[#ea580c] bg-white' />
                <h1 className='text-2xl'>Embed BI reports for your customers</h1>
                <p>Improve usability and user engagement in your own apps by using Power BI Embedded to embed stunning reports.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap bg-black justify-center gap-6 md:gap-10 p-10'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg h-64 w-full object-cover" src={IMG2} alt="Power BI Image 2" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get started with Power BI</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Find insights within your data and share rich analytics reports.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img class="rounded-t-lg h-64 w-full object-cover" src={IMG3} alt="Power BI Image 3" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get Power BI Desktop</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Create rich, interactive reports with visual analytics at your fingertips.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg h-64 w-full object-cover" src={IMG4} alt="Power BI Image 4" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get the mobile app</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Securely access and view live Power BI dashboards and reports on any device, with native mobile apps for Windows, iOS, and Android.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Approch />
    </>
  )
}

export default PowerBI;
