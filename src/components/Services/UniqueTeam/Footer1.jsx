import React from 'react';
import LogoFull from '../../assets/spylogo1.png';


function Footer1() {
  return (
    <>
      <footer className="bg-blue-900 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-start">

            {/* Logo Section */}
            <div className="grid w-full justify-items-center">
            <div class="grid justify-items-center p-4" >
            <img src={LogoFull} alt="Your Logo" className="h-16  " />
            </div>
             <div>
             <p className="text-justify mb-24">
                We make an impact, we live by it in everything we do.
                Every work we do, project, and interaction we create must function smoothly, too. Obsessed with perfection.
              </p>
             </div>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-5'>
            {/* Main Section */}
            <div className="w-full  mb-4">
              <h2 className="text-xl font-bold mb-4">Main</h2>
              <ul>
                <li className="mb-2">Home</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Our Services</li>
                <li className="mb-2">Our Philosophy</li>
                <li className="mb-2">Resources</li>
                <li className="mb-2">Contact Us</li>
              </ul>
            </div>

            {/* Service Section */}
            <div className="w-full mb-4">
              <h2 className="text-2xl font-bold mb-4">Service</h2>
              <ul>
                <li className="mb-2">ERPNext</li>
                <li className="mb-2">Design</li>
                <li className="mb-2">Technology</li>
                <li className="mb-2">Data Analytics</li>
              </ul>
            </div>

            {/* Focus Section */}
            <div className="w-full mb-4 ml-auto text-left">
              <h2 className="text-2xl font-bold mb-4">Focus</h2>
              <ul className='w-full'>
                <li className="mb-2">ERPNext Consultation</li>
                <li className="mb-2">ERPNext Implementation</li>
                <li className="mb-2">ERPNext Development</li>
                <li className="mb-2">Headless Ecommerce with ERPNext</li>
                <li className="mb-2">Websites with ERPNext</li>
                <li className="mb-2">Third-Party Integrations</li>
              </ul>
            </div>

            {/* Industry Section */}
            <div className="w-full mb-4 ml-5">
              <h2 className="text-2xl font-bold mb-4">Industry</h2>
              <ul>
                <li className="mb-2">Manufacturing</li>
                <li className="mb-2">Logistic</li>
                <li className="mb-2">Tele-Communication</li>
                <li className="mb-2">Retail</li>
                <li className="mb-2">Distribution</li>
                <li className="mb-2">Automotive</li>
                <li className="mb-2">Startup</li>
              </ul>
            </div>

            <div className="w-full mb-4">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <ul>
                <li className="mb-2">Manufacturing</li>
                <li className="mb-2">Logistic</li>
                <li className="mb-2">Tele-Communication</li>
                <li className="mb-2">Retail</li>
                <li className="mb-2">Distribution</li>
                <li className="mb-2">Automotive</li>
                <li className="mb-2">Startup</li>
              </ul>
            </div>
            </div>
          </div>
<hr />
          {/* Copyright Section */}
          <div className="mt-10 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
