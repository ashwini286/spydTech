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
      <div class="relative h-screen w-full rounded-2xl">
    <img src={IMG} alt="Background Image" class="absolute inset-0 w-full h-[80vh] rounded-2xl object-cover filter blur-sm" />
    <div class="absolute inset-0 h-[80vh] bg-black bg-opacity-50 rounded-2xl"></div>
    <div class="absolute inset-0  flex flex-col md:flex-row items-center justify-center ml-10">
        <h1 class="text-4xl text-white font-bold w-full p-10">Third-Party Integrations</h1>
        <p class="text-xl text-white mt-4 -ml-10 p-10">Building Cost-Effective Digital Business Capabilities around the ERPNext, 
        focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
    </div>
</div>
      <UniqueTeam13 />
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl tracking-wider pb-5 font-bold'>What is Third-Party Integration?</h1>
      <div>
    <ul class="pb-5 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            The world is moving rapidly towards digitalization and to match the pace with the transformation 
            company develops powerful software to run business operations smoothly. However, 
            the implementation of other powerful tools makes the software more capable and fills the need of the business.
             And, it’s cost-effective too.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Application Programming Interface (API) connects different software seamlessly.
             Digital Transformation heavily relies on third-party APIs.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Name articulate everything about the Third-party API, a third-party API means a special program that connects 
            functionalities from different apps and software. It is provided by a third-party, usually (but not necessarily) 
            large enterprises, to enable you to access their data or software functionalities on your enterprise-level software,
             application, or website.
            </p>
        </li>
        
    </ul>
</div>

      <h1 className='text-center text-4xl tracking-wider font-bold pb-5'>Benefits of Third-Party Integration With ERP System</h1>
      <div>
    <ul class="pb-5 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Enterprise Resource Planning (ERP) software becomes an essential part of a business now a day. Post pandemic Enterprises across the globe invested in ERP to make it more efficient, data-driven, and seamless.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Considering the present scenario of the E-commerce sector or other business,
             where an item is being sold via multiple channels and platforms. 
             And, it becomes a tedious task for the company to manage data in a centralized system. Also,
              it’s wholly useless without a central database and centralized system. Because the central database helps you to generate a different kind of analysis like predictive analytics.
            </p>
        </li>

        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Enterprise Resource Planning (ERP) software becomes an essential part of a business now a day. 
            Post pandemic Enterprises across the globe invested in ERP to make it more efficient, data-driven, and seamless.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Considering the present scenario of the E-commerce sector or other business,
             where an item is being sold via multiple channels and platforms. 
             And, it becomes a tedious task for the company to manage data in a centralized system.
              Also, it’s wholly useless without a central database and centralized system. 
              Because the central database helps you to generate a different kind of analysis like predictive analytics.
            </p>
        </li>
        </ul>
        </div>
      
      
      <h1 className='text-center text-4xl tracking-wider font-bold pb-5'>Cutting the Edge benefits with ERPNext</h1>
      <div>
    <ul class="pb-5 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Most AGILE ERP is ERPNext because if you have ERPnext as your core system, you are free to integrate the platform with any of the third-party services and for analysis, 
            it’s really easy to connect it with any analytics tools like Metabase or Power BI.
            </p>
        </li>
        </ul>
        </div>
      
      
      <h1 className='text-center text-2xl tracking-wider font-bold pb-5'>ERPNext & Cutting the edge advantage:</h1>
      <div>
    <ul class="pb-5 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            The first and foremost advantage of ERPNext is, It’s a Web-based ERP system based on the dynamic and scalable Frappe framework.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Frappe operates on HTTP request protocol. So It’s easy to create API from Frappe and ingest APIs.
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Additionally, Frappe creates API without any extra effort.
            </p>
        </li>
        </ul>
        </div>
      
      
      <h1 className='text-center text-4xl tracking-wide font-bold pb-5'>Our Excellencies APIs (Third-Party & Custom) Integration Projects:</h1>
      <p className='tracking-wider pb-5'>Akhilam Inc. is a diverse team of ERP, ERPNext Consultants, Developers, and Professionals with an infinite mindset and a collaborative culture. And, over the years, we have done many API integrations and a few of them are mentioned below.</p>
      
      <div>
    <ul class="pb-5 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            DHL Shipment Integration With ERPNext —Autofetch DHL Shipment Into ERPNext
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Lazada E-Commerce Integration With ERPNext – API to Sync Data from Lazada Seller to ERPNext
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Auto syncing Order system – Amazon Seller API Integration
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Senang Pay Integration with ERPNext
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            Sendinblue Integration with ERPNext
            </p>
        </li>
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
            What’s App Cloud API Integration with ERPNext
            </p>
        </li>
    </ul>
</div>
      
      
      <Footer1 />
    </>
  )
}

export default Thirdparty;
