import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';

const Consulting = () => {
  // Assuming Title1 and description are defined somewhere in your code
  const Title1 = "Conceptualize, Design, and Deliver Exceptional Execution with";
  const description = "Our ERPNext team provides state-of-the-art, standards & best practices, for Consultation, Implementation, and development, and, those are aimed at addressing all our client’s business challenges and business goals.";

  return (
    <>
      <Navbarupp />
      <div className="max-w-screen mx-auto min-h-screen h-screen relative">
        <img
          src={IMG}
          className="w-full h-3/4 object-cover rounded-b-3xl rounded-b-16"
          alt="Background Image"
        />
        <div className="absolute inset-0 w-full ">
          <div className='flex justify-center items-center flex-col md:flex-row h-[70%] text-center  text-white' >
          <div  className="text-4xl font-bold">  
            <h1>ERPNext Consultancy</h1>
        </div>
         <div className="mt-4">
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
