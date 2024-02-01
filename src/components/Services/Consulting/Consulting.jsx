import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer1 from '../UniqueTeam/Footer1'
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { Bs5Circle } from "react-icons/bs";
import { Bs6Circle } from "react-icons/bs";
import { Bs7Circle } from "react-icons/bs";
import { Bs8Circle } from "react-icons/bs";


const Consulting = () => {

  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <div className="max-w-screen mx-auto min-h-screen h-screen relative">
        <img
          src={IMG}
          className="md:w-full h-3/4 object-cover rounded-b-[15%] rounded-br-[30%] rounded"
          alt="Background Image"
        />
        <div className="absolute inset-0 w-full ">
          <div className='flex mr-10 justify-center items-center flex-col md:flex-row lg:h-[95%] h-[80%] text-center text-white' >
          <div  className="text-4xl font-bold">  
            <h1 
            className='mr-40 w-full flex-center ml-[-10%]'>ERPNext Consultancy</h1>
        </div>
         <div className="mt-8 lg:w-1/2 flex-start tracking-wider text-justify">
            <p>Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
          </div>
          </div> 
        </div>
      </div>

      <UniqueTeam />
      {/* // 1st line  Shyam code*/}
      {/* <div className='flex p-10 flex-col md:flex-row'>
     <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className='' />
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs1Circle className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" >
            Business Analysis
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-bold border border-red-800 sm:w-[50%]">
            Our Consultants gather the business information by talking to stakeholders, 
            visiting them, and analyzing the process they have been following. 
            Business Analysis is a key stage because it gives a better perspective for the improvements.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs2Circle  className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Define Problem
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600 text-justify">
            Our Consultants submit the Problem Statement from the gathered information from the Business Analysis.
             Consultants also add the processes in that improvement or changes are needed completely.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs3Circle  className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Eradicate Problems with ERPNext
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600 text-justify">
            Our Consultants demonstrate how can stakeholders eradicate problems with the help of ERPNext. 
            Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>

  
      <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs4Circle  className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Implementation Road Map with ERPNext
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600 text-justify">
            After the approval of stakeholders, 
            Our Consultants will prepare and submit the Implementation roadmap to stakeholders.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs5Circle  className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Support during implementation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600 text-justify">
            Our Consultants will be there to support, help, guide, and assist stakeholders’ 
            intake decisions during the implementation stage and also consult them if process change is required.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="bg-blue-900 line-dot">
              <Bs6Circle  className="size-8 blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            User training
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600 text-justify">
            Our consultant designs training materials and makes sure that stakeholders 
            get full knowledge of the ERPNext and the implementation that is being implemented.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
    </div> */}

{/* My code */}
      <div className='flex flex-col md:flex-row'>
        <div>
        <VerticalTimeline
          layout='1-column-left'
          lineColor='#074f8b'
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', backgroundColor: "#074f8b" }}
         
          >
            <div className="flex flex-col-reverse">
              <p className='text-gray-400'>
              Our Consultants gather the business information by talking to stakeholders, 
            visiting them, and analyzing the process they have been following. 
            Business Analysis is a key stage because it gives a better perspective for the improvements.
              </p>
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Business Analysis</h3>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<BellIcon />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Define Problem</h3>
            <p className='text-gray-400'>
              This culminates into brainstorming the conceptualized plan further to
              enhance the features. It's time to document the entire process, formulating the
              roadmap implementation plan.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<CurrencyDollarIcon />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">  Eradicate Problems with ERPNext</h3>
            <p>
            Our Consultants demonstrate how can stakeholders eradicate problems with the help of ERPNext. 
            Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.
            </p>
          </VerticalTimelineElement>

      
        </VerticalTimeline>
        </div>

        <div>
        <VerticalTimeline
          layout='1-column-left'
          lineColor='black'
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<HomeIcon />}
          >
            <div className="flex flex-col-reverse">
              <p className='text-gray-400'>
              After the approval of stakeholders, Our Consultants will prepare and submit the Implementation roadmap to stakeholders.
              </p>
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Implementation Road Map with ERPNext</h3>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<BellIcon />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Support during implementation</h3>
            <p className='text-gray-400'>
            Our Consultants will be there to support, help, guide, and assist stakeholders’ intake decisions during the implementation stage and also consult them if process change is required.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<CurrencyDollarIcon />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">User training</h3>
            <p>
            Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>






      <Footer1 />
    </>
  );
};

export default Consulting;
