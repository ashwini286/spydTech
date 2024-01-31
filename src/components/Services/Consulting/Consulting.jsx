import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Bs1Circle } from "react-icons/bs";

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
     {/* // 1st line */}
     <div className='flex p-10'>
     <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className='' />
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs1Circle className="size-8 text-blue-900" />
            </TimelineIcon>
            <Typography variant="h5" >
            Business Analysis
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-bold">
            Our Consultants gather the business information by talking to stakeholders, 
            visiting them, and analyzing the process they have been following. 
            Business Analysis is a key stage because it gives a better perspective for the improvements.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Define Problem
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            Our Consultants submit the Problem Statement from the gathered information from the Business Analysis.
             Consultants also add the processes in that improvement or changes are needed completely.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Eradicate Problems with ERPNext
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
            Our Consultants demonstrate how can stakeholders eradicate problems with the help of ERPNext. 
            Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>

    {/* // 2ndline   */}
      <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Implementation Road Map with ERPNext
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            After the approval of stakeholders, 
            Our Consultants will prepare and submit the Implementation roadmap to stakeholders.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Support during implementation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            Our Consultants will be there to support, help, guide, and assist stakeholders’ 
            intake decisions during the implementation stage and also consult them if process change is required.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            User training
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
            Our consultant designs training materials and makes sure that stakeholders 
            get full knowledge of the ERPNext and the implementation that is being implemented.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
    </div>
      <Footer />
    </>
  );
};

export default Consulting;
