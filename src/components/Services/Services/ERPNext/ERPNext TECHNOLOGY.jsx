import React from 'react';
import Navbarupp from '../../../Home/Navbar/Navbarupp';
import Footer from '../../../Home/Footer/Footer';
import IMG from '../../../assets/Blue.webp';
import UniqueTeam from '../../UniqueTeam/UniqueTeam';
import IMG12 from '../../../assets/ERPNXT1.jpg';
import IMG1 from '../../../assets/ERPNXT2.jpg';
import IMG2 from '../../../assets/ERPNXT3.jpg';
import IMG3 from '../../../assets/ERPNXT4.jpg';
import IMG4 from '../../../assets/ERPNXT5.jpg';
import IMG5 from '../../../assets/ERPNXT6.jpg';
import IMG6 from '../../../assets/ERPNXT7.jpg';
import UniqueTeam12 from '../../UniqueTeam/UniqueTeam12';
import  {Button}  from "@material-tailwind/react";



function ERPNext () {
  return (
    <>
      <div>
      <Navbarupp />
      </div>    <div className="max-w-screen mx-auto min-h-screen h-screen relative">
        
        <img
          src={IMG}
          className="md:w-full h-3/4 object-cover rounded-bl-[15%] rounded-br-[15%] rounded"
          alt="Background Image"
        />
        <div className="absolute inset-0 w-full ">
          <div className='flex justify-center items-center flex-col md:flex-row lg:h-[95%] h-[80%] text-center text-white' >
          <div  className="text-4xl font-bold ">  
            <h1 
            className='mr-40 w-full'>Our Services</h1>
        </div>
         <div className="mt-8 lg:w-1/2 flex-start">
            <p>Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
          </div>
          </div> 
        </div>
      </div>
      
     <UniqueTeam12 /> 
    
       <h2 className="text-2xl font-bold text-center mt-8 lg:text-3xl">Our Services</h2>
   {/* Add the card section */}
   <div className="mt-8 p-4 bg-white rounded-xl shadow-md overflow-x-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG12}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5 pt-4">ERPNext Consulting</h3>
            <p className="text-gray-600">Our Consultants gather all the necessary details about your company,
               its business processes, business challenges, expected end goals, and more. 
               It is a very crucial stage as it lays a strong foundation. At Akhilam, 
               you are assured that you are working with an experienced, dedicated team of Consultants.</p>
               <Button className='mt-4'>Read More</Button>
          </div>


          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG1}
          className="w-[100%] lg:h-[67%]"
          alt="Background Image"
        />
            <h2 className="text-xl font-bold mb-2 pb-5 pt-4">ERPNext Implementation</h2>
            <p className="text-gray-600">We focus on organizing the overall structure and behavior of all the doctypes, 
              required reports, and required dashboards. 
              From a customization and custom development aspect our technology team ensures technical functionalities are defined, 
              and all pieces fit together perfectly; creating a larger picture of how items relate with each other within the system.</p>
              <Button className='mt-4'>Read More</Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG2}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5">ERPNext Development</h3>
            <p className="text-gray-600">For the out of box requirement, Our technical team prepares prototypes for clients, 
              and clients have approved them, we now go ahead and do the coding. 
              We use the best coding tactics to ensure quality results. And, 
              our standard process allows clients to scale ERPNext solutions with the latest and future versions.</p>
              <Button className='mt-4'>Read More</Button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG3}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5">Website with ERPNext</h3>
            <p className="text-gray-600">We help small businesses and NGOs to start their digital transformation journey and a presence in the digital world with a dynamic, 
              easy-to-update, interacting website at a minimal cost. 
              Also, it allows customizing the website's appearance and layout for any screen size with Bootstrap’s
               cutting-edge technology.</p>
               <Button className='mt-4'>Read More</Button>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG4}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5 pt-3">Ecommerce with ERPNext</h3>
            <p className="text-gray-600">We help in the seamless integration of the eCommerce store with a modern, 
              cloud-based ERPNext solution. Together, they extend the company’s breadth and depth, 
              connecting processes and procedures for a cohesive, future-proofed operation. 
              And, it helps to centralize data on a single, unified data hub rather than silos.</p>
              <Button className='mt-4'>Read More</Button>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG5}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5">Third-Party Integrations with ERPNext</h3>
            <p className="text-gray-600">We are experts in any kind of third-party integration with ERPNext, 
              and third-party integrations allow you to quickly add features and tools to business processes 
              that might take many months to develop own. By utilizing third-party integrations, 
              We incorporate superior features to your ERPNext.</p>
              <Button className='mt-4'>Read More</Button>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-4 rounded-lg">
          <img
          src={IMG6}
          className="w-[100%]"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2 pb-5">Data Analysis with BI Tools & ERPNext</h3>
            <p className="text-gray-600">DATA is NEW OIL. And, Having real-time insights from each decision point, 
              improves productivity and empowers informed decision-making. 
              We have been helping MSMEs to connect their ERPNext systems with powerful 
              tools like PowerBI, Tableau, and Metabase.</p>
              <Button className='mt-4'>Read More</Button>
          </div>
        </div>
      </div>

      
      
      <Footer />
    </>
  )
}

export default ERPNext