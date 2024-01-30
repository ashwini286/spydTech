import React from 'react';
import { Typography } from "@material-tailwind/react";
import Navbarupp from '../Navbar/Navbarupp';
import Footer from '../Footer/Footer';
import IMG from './IMG/Blue.webp';

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

        <div className="absolute inset-0 grid h-40 w-full items-end pt-10">
          <div className="mt-32 ml-10 pt-20 ">
            <Typography className="font-calibri text-white text-4xl">
              ERPNext Consultancy
            </Typography>
          </div>
          <div className="absolute inset-0 grid h-40 w-full items-end pt-10 ml-10">
            <div className="mt-20 ml-40 pt-20 ">
              <Typography
                color="white"
                className="ml-96 font-sans text-start flex grid w-1/2 mb-20 font-Constantia"
              >
                Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Consulting;
