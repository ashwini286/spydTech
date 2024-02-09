import React from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer1 from '../UniqueTeam/Footer1';
import IMG from '../../assets/Blue.webp';
import UniqueTeam14 from '../UniqueTeam/UniqueTeam14';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
 import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { Bs5Circle } from "react-icons/bs";
import { Bs6Circle } from "react-icons/bs";
import { Bs7Circle } from "react-icons/bs";
import { Bs8Circle } from "react-icons/bs";

const Implementation = () => {
  return (
    <>
      
        <Navbarupp />
        <div className="max-w-screen mx-auto min-h-screen h-screen relative">
          <img
            src={IMG}
            className="md:w-[100%] h-3/4 object-cover rounded-b-[15%] rounded-br-[15%] rounded"
            alt="Background Image"
          />
          <div className="absolute inset-0 w-full">
            <div className='flex justify-center items-center flex-col md:flex-row lg:h-[95%] h-[80%] text-center text-white'>
              <div className="text-4xl font-bold">
                <h1 className='mr-40 w-full ml-[-10%]'>ERPNext Implementation</h1>
              </div>
              <div className="mt-8 lg:w-1/2 flex-start tracking-wider text-justify">
                <p>Building Cost-Effective Digital Business Capabilities around the ERPNext, focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
              </div>
            </div>
          </div>
        </div>
        <UniqueTeam14 />
        {/* 1st line */}
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
            iconStyle={{ border: '1px solid gray', color:"white", backgroundColor: "#074f8b" }}
            icon={<Bs1Circle />}
          >
            <div className="flex flex-col-reverse">
              <p className=' text-[#656565]'>
              Our Implementation team starts business process mapping with ERPNext, 
              and during this stage, if required they consult involved stakeholders to reengineer
               the process to maximize the results with the ERPNext.
              </p>
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Process Mapping with ERPNext</h3>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs2Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Configuration of ERPNext</h3>
            <p className=' text-[#656565]'>
            We configure ERPNext, Company, and basic setting as per the company and its business goals.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs3Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">  Implementation of Process into ERPNext</h3>
            <p>
            Our Team start implementing the derived business processes into the ERPNext module by module.
             During this process, we actively check stakeholders’ expectations from that specific 
             business process.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs4Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">  Customization of ERPNext</h3>
            <p>
            Once basic implementation is done, We start the customization of ERPNext to achieve the expected results. 
            And, customization is key as it differs from business domain to domain. </p>
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
            icon={<Bs5Circle />}
          >
            <div className="flex flex-col-reverse">
              <p className=' text-[#656565]'>
              Once Implementation and Customization are done, 
              We start building the required reports and intuitive dashboard to allow them to make
               business decisions data-oriented. </p>
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Reports and Intuitive Dashboards</h3>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs6Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Live Setup and Data Migration</h3>
            <p className=' text-[#656565]'>
            Our Consultants will be there to support, help, guide, and assist stakeholders’ 
            intake decisions during the implementation stage and also consult them if process 
            change is required.  </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs7Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Testing</h3>
            <p>
            Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.  </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray',color:"white",backgroundColor: "#074f8b"}}
            icon={<Bs8Circle />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Go Live</h3>
            <p>
            Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.  </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
        </div>
      </div>
      
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-8">Implementation Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card>
            <CardHeader color="blue" contentPosition="top">
              <img
                src="https://placekitten.com/400/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">Cloud Implementation</h2>
              <p className=" text-[#656565]">
                Seamlessly migrate your business operations to the cloud for improved scalability, security, and accessibility.
              </p>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader color="green" contentPosition="top">
              <img
                src="https://placekitten.com/401/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">ERP Implementation</h2>
              <p className=" text-[#656565]">
                Implement state-of-the-art Enterprise Resource Planning systems tailored to your business needs for improved efficiency.
              </p>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader color="red" contentPosition="top">
              <img
                src="https://placekitten.com/402/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">Software Integration</h2>
              <p className=" text-[#656565]">
                Streamline your business processes by integrating various software solutions to work seamlessly together.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Implementation;
