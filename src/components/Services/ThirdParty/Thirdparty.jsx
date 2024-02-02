import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';

import IMG from '../../assets/Blue.webp';
import UniqueTeam13 from '../UniqueTeam/UniqueTeam13';
import Footer1 from '../UniqueTeam/Footer1';
import { FaCheckCircle } from "react-icons/fa";
function Thirdparty() {
  return (
    <>
    <Navbarupp />
    <div className="max-w-screen mx-auto min-h-screen h-screen relative">
        <img
          src={IMG}
          className="md:w-[100%] h-3/4 object-cover rounded-bl-[15%] rounded-br-[15%] rounded"
          alt="Background Image"
        />
        <div className="absolute inset-0 w-full ">
          <div className='flex  justify-center items-center flex-col md:flex-row lg:h-[95%] h-[80%] text-center text-white' >
          <div  className="text-4xl font-bold">  
            <h1 
            className=' w-[100%] flex-center'>Third-Party Integrations</h1>
        </div>
         <div className="mt-8 ml-[10%] lg:w-1/2 flex-start tracking-wider text-justify">
            <p>Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
          </div>
          </div> 
        </div>
      </div>
      <UniqueTeam13 />
      <h1 className='text-center text-4xl tracking-wider pb-5 text-bold'>What is Third-Party Integration?</h1>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-6xl text-blue-900'/>
      <p className='pl-4 mt-4 tracking-wider'>The world is moving rapidly towards digitalization and to match the pace with the transformation 
        company develops powerful software to run business operations smoothly. However, 
        the implementation of other powerful tools makes the software more capable and fills the need of the business.
         And, it’s cost-effective too.</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Application Programming Interface (API) connects different software seamlessly. 
      Digital Transformation heavily relies on third-party APIs.</p>
      </div >
      <div className='flex pb-5'>
      <FaCheckCircle className='text-7xl text-blue-900' />
      <p className='pl-4 mt-5 tracking-wider'>Name articulate everything about the Third-party API,
       a third-party API means a special program that connects functionalities from different apps and software. 
       It is provided by a third-party, usually (but not necessarily) large enterprises,
        to enable you to access their data or software functionalities on your enterprise-level software, 
        application, or website.</p>
      </div>
      
      <h1 className='text-center text-4xl tracking-wider'>Benefits of Third-Party Integration With ERP System</h1>
      <div className='flex mt-5 pb-5'>
      <FaCheckCircle className='text-[2.5rem] text-blue-900'/>
      <p className='pl-4 mt-1 tracking-wider'>Enterprise Resource Planning (ERP) software becomes an essential part of
       a business now a day. Post pandemic Enterprises across the globe invested in ERP to make it more
        efficient, data-driven, and seamless.</p>
      </div>
      <div className='flex'>
      <FaCheckCircle className='text-[4.5rem] text-blue-900'/>
      <p className='pl-4 mt-5 tracking-wider pb-5'>Considering the present scenario of the E-commerce sector or other business, 
      where an item is being sold via multiple channels and platforms. And, it becomes a tedious task for 
      the company to manage data in a centralized system. Also, it’s wholly useless without a central 
      database and centralized system. Because the central database helps you to generate a 
      different kind of analysis like predictive analytics.</p>
      </div>
      <h1 className='text-center text-4xl tracking-wider pb-5'>Cutting the Edge benefits with ERPNext</h1>
      <div className='flex'>
      <FaCheckCircle className='text-5xl text-blue-900'/>
      <p className='pl-4 mt-2 pb-5 tracking-wider'>Most AGILE ERP is ERPNext because if you have ERPnext as your core system,
       you are free to integrate the platform with any of the third-party services and for analysis, 
       it’s really easy to connect it with any analytics tools like Metabase or Power BI.</p>
      </div>
      <h1 className='text-center text-2xl tracking-wider pb-5'>ERPNext & Cutting the edge advantage:</h1>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>The first and foremost advantage of ERPNext is, 
      It’s a Web-based ERP system based on the dynamic and scalable Frappe framework.</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Frappe operates on HTTP request protocol. So It’s easy to create API from Frappe and ingest APIs.</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Additionally, Frappe creates API without any extra effort.</p>
      </div>
      <h1 className='text-center text-4xl tracking-wide pb-5'>Our Excellencies APIs (Third-Party & Custom) Integration Projects:</h1>
      <p className='tracking-wider pb-5'>Akhilam Inc. is a diverse team of ERP, ERPNext Consultants, Developers,
         and Professionals with an infinite mindset and a collaborative culture. 
         And, over the years, we have done many API integrations and a few of them are mentioned below.</p>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>DHL Shipment Integration With ERPNext —Autofetch DHL Shipment Into ERPNext</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Lazada E-Commerce Integration With ERPNext – API to Sync Data from Lazada Seller to ERPNext</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Auto syncing Order system – Amazon Seller API Integration</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Senang Pay Integration with ERPNext</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>Sendinblue Integration with ERPNext</p>
      </div>
      <div className='flex pb-5'>
      <FaCheckCircle className='text-3xl text-blue-900'/>
      <p className='pl-4 tracking-wider'>What’s App Cloud API Integration with ERPNext</p>
      </div>
      <Footer1 />
    </>
  )
}

export default Thirdparty