import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { Typography, Button } from "@material-tailwind/react";
import Navbarupp from "../Navbar/Navbarupp";
import Services1 from "../Services/Services1";
import OurWorks from "../OurWorks/OurWork";
import WhatClientSay from "../WhatClientSay/Client";
import Industry from "../Industry/Industry";
import ApprochUs from "../APProchUs/Approch";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import IMG1 from "../../assets/Digital-Marketing-Explained_Blog-scaled.jpeg";
import IMG2 from "../../assets/Main2.avif";
import IMG3 from "../../assets/Main3.webp";
import Welcome from "./Welcom";
import ChatBot from "./ChatBot";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Navbarupp />

      <div className=" max-w-screen mx-auto min-h-screen relative">
        <Carousel className=" w-[100%] mx-auto top-0 ">
          <div className="flex relative  h-screen items-center justify-center">
            <img
              src={IMG1}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background 1"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-8">
                <Typography
                  color="white"
                  className="text-2xl md:text-5xl font-bold  mb-4 font-sans animate-left-to-right"
                >
                  ENTERPRISE & CUSTOM APPLICATION DEVELOPMENT
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-sm md:text-xl mb-8 opacity-70 font-sans animate-left-to-right"
                >
                  ERPNext: SPY D TECHNOLOGY deep experience,expertise and
                  exposure in design and developing enterprise and custom web
                  applications catering to myriad industry
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    size="lg"
                    className="font-sans bg-blue-500 hover:bg-blue-600 rounded-none w-[56] animate-buttons"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-blue-500 hover:border-blue-600 font-sans rounded-none animate-buttons"
                  >
                    Contact Us
                  </Button>
                  
                </div>
              
              </div>
            </div>
          </div>

          <div className="relative flex h-screen items-center justify-center">
            <img
              src={IMG2}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background 2"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-8">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl md:text-5xl font-bold mb-4 font-sans "
                >
                  MOBILITY SOLUTIONS WITH CUTTING EDGE TECHNOLOGY
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-sm md:text-xl mb-8 opacity-80 font-sans "
                >
                  Our Core Expertise is in ideating, conceptualizing, designing,
                  developing and deploying state-of-the-art mobile applications
                  for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    size="lg"
                    className="font-sans bg-blue-500 hover:bg-blue-600 rounded-none "
                  >
                    Explore
                  </Button>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="border border-blue-500 hover:border-blue-600 font-sans rounded-none animate-buttons"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-screen items-center justify-center">
            <img
              src={IMG3}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background 3"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-8">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl md:text-5xl font-bold mb-4 font-sans"
                >
                  FULL SERVICES DIGITAL MARKETING
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-sm md:text-xl mb-8 opacity-80 font-sans"
                >
                  We ideate, conceptualize, and leverage diversified tools and
                  technologies to build flexible, scalable, and optimized CMS
                  based E-Commerce Platforms, Web Portals, Web Applications and
                  Websites that drives business growth for our clients.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    size="lg"
                    className="font-sans bg-blue-500 hover:bg-blue-600 rounded-none"
                  >
                    Explore
                  </Button>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="border border-blue-500 hover:border-blue-600 font-sans rounded-none"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-screen items-center justify-center">
            <img
              // src={IMG2}
              src="https://media.glassdoor.com/companyupdate/w900/157056/maq-software-companyupdate-1685575535571.png?signature=a7f549b012a98efc98d08463942c4a482c5802325af5ef57c2f95e68560e3db4"
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background 2"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-8">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl md:text-5xl font-bold mb-4 font-sans"
                >
                  Empower Your Business with Cutting-Edge Microsoft Solutions
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-sm md:text-xl mb-8 opacity-80 font-sans"
                >
                  Where innovation meets expertise in Microsoft technology solutions.
                   With our comprehensive suite of services,
                    we empower businesses to unlock their full potential and thrive in today's digital landscape.
                     Explore how SpY D Technology can transform your business with Microsoft technology
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    size="lg"
                    className=" bg-blue-500 hover:bg-blue-600 rounded-none font-sans"
                  >
                    Explore
                  </Button>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="border border-blue-500 hover:border-blue-600 font-sans rounded-none"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-screen items-center justify-center">
            <img
              src={IMG2}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background 2"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-8">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl md:text-5xl font-bold mb-4"
                >
                 Empower Your Business with Artificial Inteligency,cloud technologies and testing solutions
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="text-sm md:text-xl mb-8 opacity-80 font-sans"
                >
                 Our SpY D technology expert in Artificial Inteligency and cloud technologies.
We give the soloutions for the software testing.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4 ">
                  <Button
                    size="lg"
                    className=" bg-blue-500 hover:bg-blue-600 rounded-none font-sans"
                  >
                    Explore
                  </Button>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="border border-blue-500 hover:border-blue-600 font-sans rounded-none"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <Welcome />
      <Services1 />

      <OurWorks />
      <WhatClientSay />
      <Industry />
      <div>
        <ChatBot />
      </div>

      <ApprochUs />
      <style>
        {`
         .animate-left-to-right {
          animation: slideInLeft 0.5s ease forwards;
        }
        .animate-left-to-right2 {
          animation: slideInLeft 3.5s ease  forwards;
        }
 @keyframes slideInLeft {
   from {
     transform: translateX(-100%);
     opacity: 0;
   }
   to {
     transform: translateX(0);
     opacity: 1;
   }
 }
 
.animate-buttons {
  animation: slideInFromBottomLeft 3.5s ease forwards;
}
@keyframes slideInFromBottomLeft {
  from {
    transform: translate(-100%, 100%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}
    `}
      </style>
    </>
  );
};

export default Home;
