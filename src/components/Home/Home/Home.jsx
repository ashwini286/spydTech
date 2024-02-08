import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { Typography, Button } from "@material-tailwind/react";
import Navbarupp from "../Navbar/Navbarupp";
import Services1 from "../Services/Services1";
import OurApproch from "../OurApproch/OurApproch";
import OurWorks from "../OurWorks/OurWork";
import WhatClientSay from '../WhatClientSay/Client';
import Industry from "../Industry/Industry";
import ApprochUs from "../APProchUs/Approch";
import Footer from '../Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import images from '../../assets/HeroImg1.jpeg'
import IMG1 from "../../assets/Digital-Marketing-Explained_Blog-scaled.jpeg"
import IMG2 from "../../assets/Main2.avif"
import IMG3 from "../../assets/Main3.webp"
import SpdApproch from "./SpdApproch";




const Home = () => {


  return (
    <>
      
    <div>
      <Navbarupp />
      </div>
  


      <div className="max-w-screen-2xl mx-auto min-h-screen h-screen relative">
  <Carousel className="w-full mx-auto top-[-5px]">
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={IMG1}
          className="h-full w-full object-cover text-black"
          alt="Background 1"
          style={{ filter: "brightness(50%)" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div> 
      </div>
      <div className="absolute inset-0 grid h-full w-full items-end ">
        <div className="w-full pl-12 pb-12 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ">
          <Typography
            variant="h1"
            color="white"
            className="mb-2 text-7xl md:text-4xl font-5xl font-bold text-white animate-fade-left"
          >
            Mobility Solutions with Cutting Edge &amp; Technologies
          </Typography>
          <Typography
            variant="lead"
            color="White"
            className="mb-10 opacity-70 text-sm md:text-xl text-white"
          >
            ERPNext:Making Supply Chain Management efficient for Emerging Startup
            of Retail and Distribution Domain
          </Typography>
          <div className="flex gap-2">
            <Button
              size="lg"
              className="font-serif bg-[#5bc0de] rounded-none"
            >
              Explore
            </Button>
            <Button
              size="lg"
              color="white"
              variant="text"
              className="border border-[#46b8da] font-serif rounded-none"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="relative flex h-full items-center justify-center">
  <img
    src={IMG2}
    className="h-full w-full object-cover"
    alt="Background 2"
    style={{ filter: "brightness(50%)" }} 
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div> 
  <div className="absolute inset-0 grid h-full w-full items-end">
    <div className="w-full pl-12 pb-12 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
      <Typography
        variant="h1"
        color="white"
        className="mb-2 text-7xl md:text-4xl font-5xl font-bold text-white"
      >
        Mobility Solutions with Cutting Edge &amp; Technologies
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-10 opacity-80 text-sm md:text-xl"
      >
        Our Core Expertise is in ideating, conceptualizing, designing,
        developing and deploying state-of-the-art mobile applications
        for Android, IOS and Hybrid Platforms.
      </Typography>
      <div className="flex gap-2">
        <Button
          size="lg"
          className="font-serif bg-[#5bc0de] rounded-none"
        >
          Explore
        </Button>
        <Button
          size="lg"
          color="white"
          variant="text"
          className="border border-[#46b8da] font-serif rounded-none"
        >
          Contact Us
        </Button>
      </div>
    </div>
  </div>
</div>

          <div className="relative flex h-full items-center justify-center">
            <img
              // src="https://www.infogatewayits.com/images/banner33.jpg"
              src={IMG3}
              className="h-full w-full object-cover"
              alt="Background 3"
              style={{ filter: "brightness(50%)" }} 
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-25"></div> */}
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-full pl-12 pb-12 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-2 text-7xl md:text-4xl font-5xl font-bold text-white"
                >
                  Full Service Digital Marketing 
                 
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-10 opacity-80 font-serif w-full text-sm md:text-xl"
                >
                  We ideate, conceptualize, and leverage diversified tools and
                  technologies to build flexible, scalable, and optimized CMS
                  based E-Commerce Platforms, Web Portals, Web Applications and
                  Websites that drives business growth for our clients
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="font-serif bg-[#5bc0de] rounded-none"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-[#46b8da] font-serif rounded-none"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center">
            <img
              // src="https://www.aspirantsoftsolutions.com/img/slides/mobile-app.jpg"
              src={IMG2}
              className="h-full w-full object-cover"
              alt="Background 2"
              style={{ filter: "brightness(50%)" }} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-full pl-12 pb-12 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-2 text-7xl md:text-4xl font-5xl font-bold text-white"
                >
                  Mobility Solutions with Cutting Edge &amp; Technologies
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-10 opacity-80 text-sm md:text-xl"
                >
                  Our Core Expertise is in ideating, conceptualizing, designing,
                  developing and deploying state-of-the-art mobile applications
                  for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="font-serif bg-[#5bc0de] rounded-none"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-[#46b8da] font-serif rounded-none"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center">
            <img
              // src="https://www.aspirantsoftsolutions.com/img/slides/mobile-app.jpg"
              src={IMG2}
              className="h-full w-full object-cover"
              alt="Background 2"
              style={{ filter: "brightness(50%)" }} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-full pl-12 pb-12 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-2 text-7xl md:text-4xl font-5xl font-bold text-white"
                >
                  Mobility Solutions with Cutting Edge &amp; Technologies
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-10 opacity-80 text-sm md:text-xl"
                >
                  Our Core Expertise is in ideating, conceptualizing, designing,
                  developing and deploying state-of-the-art mobile applications
                  for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="font-serif bg-[#5bc0de] rounded-none"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-[#46b8da] font-serif rounded-none "
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <SpdApproch />
      <Services1 />
      
      <OurApproch />
      <OurWorks />
      <WhatClientSay />
      <Industry />
      <ApprochUs />
      <Footer />


    </>
  );
};

export default Home;
