import React, { useEffect  } from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import { RiBarChartBoxLine } from "react-icons/ri";
import IMG from "../../assets/PowerBi/Power-BI.jpg";
import IMG2 from "../../assets/PowerBi/powerbi1.png";
import IMG3 from "../../assets/PowerBi/powerbi2.png";
import IMG4 from "../../assets/PowerBi/powerbi3.png";
import IMG5 from "../../assets/PowerBi/Power BI Architecture.png";
import IMG6 from "../../assets/PowerBi/Powerbi bg.avif";
import PowerBIcontent from './PowerBIcontent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PowerBI() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbarupp />
      <div className="relative">
        <img
          src={IMG}
          className='w-full md:h-[35rem] object-cover rounded-b-lg shadow-lg'
          alt="Power BI"
        />
        <div className="absolute inset-0 h-[80vh] w-full lg:w-full lg:max-w-none sm:w-full bg-[#b91c1c] bg-opacity-30 rounded-b-lg"></div>
       
      </div>
      

      



<PowerBIcontent />






      <div className='relative flex flex-wrap bg-black justify-center gap-6 md:gap-10 p-10' >
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up-down">
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
        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up-down">
          <a href="#">
            <img class="rounded-t-lg h-64 w-full object-cover" src={IMG3} alt="Power BI Image 2" />
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
       

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up-down">
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
