import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';
import { Typography } from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  
  TimelineBody,
} from "@material-tailwind/react";
import { Bs1CircleFill } from "react-icons/bs";

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
      <div className='ml-6 mb-6'>
        <Typography variant='h2' className='w-1/3'>
          {Title1}
        </Typography>
        <Typography className='ml-96 mb-8 w-1/2'>
          {description}
        </Typography>
      </div>
      <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <Bs1CircleFill
            
            />
            <Typography variant="h6"  color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="xl" alt='2' color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <Bs1CircleFill />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <Bs1CircleFill />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
    {/* 2nd timeline */}
    <div className="w-[32rem] ml-auto mb-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <Bs1CircleFill />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <Bs1CircleFill />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <Bs1CircleFill />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
      <Footer />
    </>
  );
};

export default Consulting;
