import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';

const Consulting = () => {
  
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
          <div  className="text-4xl font-bold">  
            <h1 
            className='mr-40 w-full'>ERPNext Consultancy</h1>
        </div>
         <div className="mt-8 lg:w-1/2 flex-start">
            <p>Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
          </div>
          </div> 
        </div>
      </div>
      
     <UniqueTeam />
      <Footer />
    </>
  );
};

export default Consulting;
