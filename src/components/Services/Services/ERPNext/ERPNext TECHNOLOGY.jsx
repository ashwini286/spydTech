import React from 'react';
import Navbarupp from '../../../Home/Navbar/Navbarupp';

import IMG from '../../../assets/Blue.webp';

import IMG12 from '../../../assets/ERPNXT1.jpg';
import IMG1 from '../../../assets/ERPNXT2.jpg';
import IMG2 from '../../../assets/ERPNXT3.jpg';
import IMG3 from '../../../assets/ERPNXT4.jpg';
import IMG4 from '../../../assets/ERPNXT5.jpg';
import IMG5 from '../../../assets/ERPNXT6.jpg';
import IMG6 from '../../../assets/ERPNXT7.jpg';
import UniqueTeam12 from '../../UniqueTeam/UniqueTeam12';
import LatestPost from '../../UniqueTeam/LatestPost';
import Footer1 from '../../UniqueTeam/Footer1';






function ERPNext () {
  return (
    <>
      <div>
      <Navbarupp />
      </div>   
      <div class="relative h-screen w-full rounded-2xl">
    <img src={IMG} alt="Background Image" class="absolute inset-0 w-full h-[80vh] rounded-2xl object-cover filter blur-sm" />
    <div class="absolute inset-0 h-[80vh] bg-black bg-opacity-50 rounded-2xl"></div>
    <div class="absolute inset-0  flex flex-col md:flex-row items-center justify-center ml-10">
        <h1 class="text-4xl text-white font-bold w-full p-10">Our Services</h1>
        <p class="text-xl text-white mt-4 -ml-10 p-10">Building Cost-Effective Digital Business Capabilities around the ERPNext, 
        focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
    </div>
</div>
      
     <UniqueTeam12 /> 
    
       
   {/* Add the card section */}
   <div className="mt-8 p-4 bg-white rounded-xl">
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
          <img
          src={IMG12}
          className="w-[85%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 p-5">ERPNext Consulting</h2>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>Our Consultants gather all the necessary details about your company,
               its business processes, business challenges, expected end goals, and more. 
               It is a very crucial stage as it lays a strong foundation. At Akhilam, 
               you are assured that you are working with an experienced, dedicated team of Consultants.</p>
               <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>


          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
          <img
          src={IMG1}
          className="w-[90%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold  p-4">ERPNext Implementation</h2>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>We focus on organizing the overall structure and behavior of all the doctypes, 
              required reports, and required dashboards. 
              From a customization and custom development aspect our technology team ensures technical functionalities are defined, 
              and all pieces fit together perfectly; creating a larger picture of how items relate with each other within the system.</p>
              <button className="mt-4 bg-blue-900 ml-5 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500">
          <img
          src={IMG2}
          className="w-[85%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 p-5">ERPNext Development</h3>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>For the out of box requirement, Our technical team prepares prototypes for clients, 
              and clients have approved them, we now go ahead and do the coding. 
              We use the best coding tactics to ensure quality results. And, 
              our standard process allows clients to scale ERPNext solutions with the latest and future versions.</p>
              <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
          <img
          src={IMG3}
          className="w-[85%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 p-5">Website with ERPNext</h2>
            <p className='w-[100%] ml-5 tracking-wider'>We help small businesses and NGOs to start their digital transformation journey and a presence in the digital world with a dynamic, 
              easy-to-update, interacting website at a minimal cost. 
              Also, it allows customizing the website's appearance and layout for any screen size with Bootstrap’s
               cutting-edge technology.</p>
               <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
          <img
          src={IMG4}
          className="w-[85%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 p-5">Ecommerce with ERPNext</h2>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>We help in the seamless integration of the eCommerce store with a modern, 
              cloud-based ERPNext solution. Together, they extend the company’s breadth and depth, 
              connecting processes and procedures for a cohesive, future-proofed operation. 
              And, it helps to centralize data on a single, unified data hub rather than silos.</p>
              <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500">
          <img
          src={IMG5}
          className="w-[85%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 p-5">Third-Party Integrations with ERPNext</h2>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>We are experts in any kind of third-party integration with ERPNext, 
              and third-party integrations allow you to quickly add features and tools to business processes 
              that might take many months to develop own. By utilizing third-party integrations, 
              We incorporate superior features to your ERPNext.</p>
              <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500">
          <img
          src={IMG6}
          className="w-[85%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 p-5">Data Analysis with BI Tools & ERPNext</h2>
            <p className='w-[100%] ml-5 text-justify tracking-wider'>DATA is NEW OIL. And, Having real-time insights from each decision point, 
              improves productivity and empowers informed decision-making. 
              We have been helping MSMEs to connect their ERPNext systems with powerful 
              tools like PowerBI, Tableau, and Metabase.</p>
              <button className="mt-4 ml-5 bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      
    <LatestPost />
      <Footer1 />
    </>
  )
}

export default ERPNext